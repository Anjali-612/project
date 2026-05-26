const fs = require('fs');
const path = require('path');

function stripHtml(html) {
  // Remove style blocks
  html = html.replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '');
  // Remove script blocks
  html = html.replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '');
  // Remove SVG elements (keep text content)
  html = html.replace(/<svg[^>]*>[\s\S]*?<\/svg>/gi, function(match) {
    // Keep only text elements from SVG
    const texts = match.match(/<text[^>]*>([^<]+)<\/text>/gi);
    return texts ? texts.join(' ') : '';
  });
  // Remove HTML comments
  html = html.replace(/<!--[\s\S]*?-->/g, '');
  // Replace br, hr with spaces
  html = html.replace(/<br\s*\/?>/gi, ' ');
  // Remove all remaining tags
  html = html.replace(/<[^>]+>/g, ' ');
  // Decode entities
  html = html.replace(/&amp;/g, '&');
  html = html.replace(/&nbsp;/g, ' ');
  html = html.replace(/&times;/g, 'x');
  // Normalize whitespace
  html = html.replace(/[\r\n]+/g, ' ');
  html = html.replace(/[ \t]+/g, ' ');
  html = html.replace(/>/g, '>');
  html = html.replace(/</g, '<');
  return html.trim();
}

// Also extract alt, aria-label, placeholder separately
function extractAttributes(html, attr) {
  const regex = new RegExp(attr + '="([^"]*?)"', 'gi');
  const results = [];
  let m;
  while ((m = regex.exec(html)) !== null) {
    if (m[1].trim()) results.push(m[1].trim());
  }
  return results;
}

// Read translations keys
const teContent = fs.readFileSync('js/script.js', 'utf8');
const teMatch = teContent.match(/te:\s*\{([\s\S]*?)\};/);
const rawKeys = teMatch[1];
// Extract keys manually with better handling
const keys = [];
const lines = rawKeys.split(',');
for (const line of lines) {
  const trimmed = line.trim();
  const qMatch = trimmed.match(/^\s*'((?:[^'\\]|\\.)*)'\s*:/);
  if (qMatch) {
    let key = qMatch[1];
    key = key.replace(/\\'/g, "'");
    key = key.replace(/\\\"/g, '"');
    keys.push(key);
  }
}
console.log('Found ' + keys.length + ' valid translation keys');
const keySet = new Set(keys);

const htmlFiles = [
  'index.html', 'donate.html', 'payment.html', 'teams.html',
  'gallery.html', 'oldage-home.html',
  'gallery/Swacch Bharat/index.html', 'gallery/Education/index.html',
  'gallery/Donations/index.html', 'gallery/COVID/index.html',
  'gallery/Achievements/index.html'
];

// Additional patterns to extract for specific types
function getTextContent(html) {
  const results = [];
  // Extract visible text from body-like structure
  const body = html.match(/<body[^>]*>([\s\S]*)<\/body>/i);
  if (body) {
    const text = stripHtml(body[1]);
    // Split by common separators and filter
    const parts = text.split(/\s{2,}/);
    for (const part of parts) {
      const t = part.trim();
      if (t && t.length > 2) results.push(t);
    }
  }
  return results;
}

// Process each file
for (const file of htmlFiles) {
  const fullPath = path.join('C:\\\\Users\\\\Super Sravan\\\\Downloads\\\\project', file);
  if (!fs.existsSync(fullPath)) {
    console.log('SKIP: ' + file);
    continue;
  }
  
  const html = fs.readFileSync(fullPath, 'utf8');
  
  // Extract alt texts
  const alts = extractAttributes(html, 'alt');
  const ariaLabels = extractAttributes(html, 'aria-label');
  const placeholders = extractAttributes(html, 'placeholder');
  
  // Get visible text
  const texts = getTextContent(html);
  
  // Combine all strings to check
  const allStrings = [
    ...texts.map(t => ({ text: t, type: 'text' })),
    ...alts.map(a => ({ text: a, type: 'alt' })),
    ...ariaLabels.map(a => ({ text: a, type: 'aria-label' })),
    ...placeholders.map(p => ({ text: p, type: 'placeholder' }))
  ];
  
  // Deduplicate
  const seen = new Set();
  const missing = [];
  
  for (const item of allStrings) {
    const clean = item.text.replace(/\s+/g, ' ').trim();
    if (!clean || clean.length < 2) continue;
    if (seen.has(clean)) continue;
    seen.add(clean);
    
    // Skip things that shouldn't be translated
    if (/^[\d,+\-.\/@#₹$%()\s]+$/.test(clean)) continue;
    if (/^\d{4}$/.test(clean)) continue;
    if (clean.includes('@') && !clean.includes(' ')) continue;
    if (/^[MF]\s*$/.test(clean)) continue;
    if (/^\d+[kK+]?\s*$/.test(clean)) continue;
    
    // Check if this exact string is a key
    if (keySet.has(clean)) continue;
    
    // Check if any key contains it (might be covered by longer key)
    let covered = false;
    for (const k of keys) {
      if (k.includes(clean) && k !== clean) { covered = true; break; }
    }
    if (covered) continue;
    
    missing.push(item);
  }
  
  if (missing.length > 0) {
    console.log('\\n=== ' + file + ' === MISSING: ' + missing.length);
    for (const m of missing) {
      console.log('  [' + m.type + '] \"' + m.text + '\"');
    }
  }
}
