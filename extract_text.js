const fs = require('fs');
const path = require('path');

const teKeys = JSON.parse(fs.readFileSync('trans_keys.json', 'utf8'));
const keySet = new Set(teKeys);

const htmlFiles = [
  'index.html',
  'donate.html',
  'payment.html',
  'teams.html',
  'gallery.html',
  'oldage-home.html',
  'gallery/Swacch Bharat/index.html',
  'gallery/Education/index.html',
  'gallery/Donations/index.html',
  'gallery/COVID/index.html',
  'gallery/Achievements/index.html'
];

function extractVisibleText(html) {
  const results = [];
  html = html.replace(/<!--[\s\S]*?-->/g, '');
  const titleMatch = html.match(/<title>([^<]+)<\/title>/i);
  if (titleMatch) {
    titleMatch[1].split(/[-–—|]/).forEach(t => {
      const s = t.trim();
      if (s && s.length > 1) results.push({ text: s, context: 'title' });
    });
  }
  const altRegex = /alt="([^"]*?)"/gi;
  let m;
  while ((m = altRegex.exec(html)) !== null) {
    if (m[1].trim()) results.push({ text: m[1].trim(), context: 'alt' });
  }
  const ariaRegex = /aria-label="([^"]*?)"/gi;
  while ((m = ariaRegex.exec(html)) !== null) {
    if (m[1].trim()) results.push({ text: m[1].trim(), context: 'aria-label' });
  }
  const placeRegex = /placeholder="([^"]*?)"/gi;
  while ((m = placeRegex.exec(html)) !== null) {
    if (m[1].trim()) results.push({ text: m[1].trim(), context: 'placeholder' });
  }
  const optionRegex = /<option[^>]*>([^<]+)<\/option>/gi;
  while ((m = optionRegex.exec(html)) !== null) {
    const t = m[1].trim();
    if (t && t.length > 1) results.push({ text: t, context: 'option' });
  }
  const btnRegex = /<button[^>]*>([\s\S]*?)<\/button>/gi;
  while ((m = btnRegex.exec(html)) !== null) {
    let content = m[1].replace(/<[^>]+>/g, '').replace(/&amp;/g, '&').replace(/&times;/g, 'x').replace(/&nbsp;/g, ' ').trim();
    if (content && content.length > 1) results.push({ text: content, context: 'button' });
  }
  const anchorRegex = /<a[^>]*>([\s\S]*?)<\/a>/gi;
  while ((m = anchorRegex.exec(html)) !== null) {
    let content = m[1].replace(/<[^>]+>/g, '').replace(/&amp;/g, '&').trim();
    if (content && content.length > 1 && !content.startsWith('<') && !content.startsWith('http')) {
      results.push({ text: content, context: 'link' });
    }
  }
  for (let i = 1; i <= 6; i++) {
    const hRegex = new RegExp('<h' + i + '[^>]*>([\\s\\S]*?)<\\/h' + i + '>', 'gi');
    while ((m = hRegex.exec(html)) !== null) {
      let content = m[1].replace(/<[^>]+>/g, '').replace(/&amp;/g, '&').replace(/<br\s*\/?>/gi, ' ').trim();
      if (content) results.push({ text: content, context: 'heading' });
    }
  }
  const pRegex = /<p[^>]*>([\s\S]*?)<\/p>/gi;
  while ((m = pRegex.exec(html)) !== null) {
    let content = m[1].replace(/<[^>]+>/g, '').replace(/&amp;/g, '&').replace(/&nbsp;/g, ' ').trim();
    if (content && content.length > 1) results.push({ text: content, context: 'paragraph' });
  }
  const labelRegex = /<label[^>]*>([\s\S]*?)<\/label>/gi;
  while ((m = labelRegex.exec(html)) !== null) {
    let content = m[1].replace(/<[^>]+>/g, '').replace(/&amp;/g, '&').trim();
    if (content) results.push({ text: content, context: 'label' });
  }
  const liRegex = /<li[^>]*>([\s\S]*?)<\/li>/gi;
  while ((m = liRegex.exec(html)) !== null) {
    let content = m[1].replace(/<[^>]+>/g, '').replace(/&amp;/g, '&').trim();
    if (content && content.length > 1) results.push({ text: content, context: 'list-item' });
  }
  const strongRegex = /<strong[^>]*>([^<]+)<\/strong>/gi;
  while ((m = strongRegex.exec(html)) !== null) {
    let content = m[1].trim();
    if (content) results.push({ text: content, context: 'strong' });
  }
  const spanRegex = /<span[^>]*>([^<]+)<\/span>/gi;
  while ((m = spanRegex.exec(html)) !== null) {
    let content = m[1].replace(/&amp;/g, '&').trim();
    if (content && content.length > 1) results.push({ text: content, context: 'span' });
  }
  const h4Regex = /<h4[^>]*>([^<]+)<\/h4>/gi;
  while ((m = h4Regex.exec(html)) !== null) {
    let content = m[1].replace(/&amp;/g, '&').trim();
    if (content) results.push({ text: content, context: 'heading' });
  }
  const svgTextRegex = /<text[^>]*>([^<]+)<\/text>/gi;
  while ((m = svgTextRegex.exec(html)) !== null) {
    let content = m[1].trim();
    if (content && content.length > 1) results.push({ text: content, context: 'svg-text' });
  }
  const alertRegex = /(?:alert|confirm|prompt)\s*\(\s*['"]([^'"]+)['"]\s*\)/gi;
  while ((m = alertRegex.exec(html)) !== null) {
    results.push({ text: m[1], context: 'alert/confirm/prompt' });
  }
  const divClassRegex = /<div[^>]*class="[^"]*section-title[^"]*"[^>]*>([\s\S]*?)<\/div>/gi;
  while ((m = divClassRegex.exec(html)) !== null) {
    let content = m[1].replace(/<[^>]+>/g, '').replace(/&amp;/g, '&').replace(/&nbsp;/g, ' ').trim();
    if (content && content.length > 1) results.push({ text: content, context: 'div-text' });
  }
  const statLblRegex = /<span[^>]*class="oah-label"[^>]*>([^<]+)</gi;
  while ((m = statLblRegex.exec(html)) !== null) {
    let content = m[1].trim();
    if (content) results.push({ text: content, context: 'stat-label' });
  }
  const labelSpanRegex = /<span[^>]*class="label"[^>]*>([^<]+)</gi;
  while ((m = labelSpanRegex.exec(html)) !== null) {
    let content = m[1].trim();
    if (content) results.push({ text: content, context: 'stat-label' });
  }
  const divClassLblRegex = /<span[^>]*class="number"[^>]*>([^<]+)</gi;
  while ((m = divClassLblRegex.exec(html)) !== null) {
    let content = m[1].trim();
    if (content) results.push({ text: content, context: 'stat-number' });
  }
  const eventDateRegex = /<p[^>]*class="event-date"[^>]*>([\s\S]*?)<\/p>/gi;
  while ((m = eventDateRegex.exec(html)) !== null) {
    let content = m[1].replace(/<[^>]+>/g, '').replace(/&amp;/g, '&').trim();
    if (content && content.length > 1) results.push({ text: content, context: 'event-date' });
  }
  const assocLocRegex = /<span[^>]*class="assoc-loc"[^>]*>([^<]+)</gi;
  while ((m = assocLocRegex.exec(html)) !== null) {
    let content = m[1].trim();
    if (content) results.push({ text: content, context: 'assoc-location' });
  }
  // Extract leader text
  const leaderRegex = /<div[^>]*class="leader"[^>]*>([^<]+)<\/div>/gi;
  while ((m = leaderRegex.exec(html)) !== null) {
    let content = m[1].trim();
    if (content) results.push({ text: content, context: 'leader' });
  }
  // Extract stat numbers with labels
  const statNumRegex = /<span[^>]*class="num"[^>]*>([^<]+)<\/span>/gi;
  while ((m = statNumRegex.exec(html)) !== null) {
    // Skip numbers - these are data
  }
  const statLblRegex2 = /<span[^>]*class="lbl"[^>]*>([^<]+)<\/span>/gi;
  while ((m = statLblRegex2.exec(html)) !== null) {
    let content = m[1].trim();
    if (content) results.push({ text: content, context: 'stat-label' });
  }
  // Extract inline script that generates UI text (like in payment.html)
  const scriptTextRegex = /textContent\s*=\s*['"]([^'"]+)['"]/gi;
  while ((m = scriptTextRegex.exec(html)) !== null) {
    let content = m[1].trim();
    if (content && content.length > 1) results.push({ text: content, context: 'js-generated' });
  }
  
  return results;
}

function isTranslatable(text) {
  const clean = text.trim();
  if (!clean || clean.length < 2) return false;
  if (/^[\d,+\-.\/@()#\s]+$/.test(clean)) return false;
  if (/^\+91\s/.test(clean)) return false;
  if (/^[\d,.₹$\s]+$/.test(clean.replace(/[+]/g, ''))) return false;
  if (/^\d{4}$/.test(clean)) return false;
  if (clean.includes('@') && !clean.includes(' ')) return false;
  if (/^[\s\-–—|:;,.!?'']+$/.test(clean)) return false;
  if (/^\d+[kK+]?\s*$/.test(clean)) return false;
  if (/^[MF]\s*$/.test(clean)) return false;  // M or F for gender
  return true;
}

const allMissing = {};

for (const file of htmlFiles) {
  const fullPath = path.join(__dirname, file);
  if (!fs.existsSync(fullPath)) {
    console.log('SKIPPING: ' + file);
    continue;
  }
  const html = fs.readFileSync(fullPath, 'utf8');
  const extracted = extractVisibleText(html);
  
  const fileMissing = [];
  const seen = new Set();
  const seenMissing = new Set();

  for (const item of extracted) {
    const clean = item.text.replace(/&amp;/g, '&').replace(/&nbsp;/g, ' ').trim();
    if (!clean || clean.length < 2) continue;
    const dedupKey = clean.toLowerCase();
    if (seen.has(dedupKey)) continue;
    seen.add(dedupKey);
    if (!isTranslatable(clean)) continue;

    if (keySet.has(clean)) continue;

    let matchedByParent = false;
    for (const k of teKeys) {
      if (k.includes(clean) && k !== clean) {
        matchedByParent = true;
        break;
      }
    }
    if (matchedByParent) continue;

    if (!seenMissing.has(clean)) {
      seenMissing.add(clean);
      fileMissing.push(item);
    }
  }

  if (fileMissing.length > 0) {
    allMissing[file] = fileMissing;
  }
  console.log('\n=== ' + file + ' ===');
  console.log('Extracted: ' + seen.size + ' | Already in translations: ' + (seen.size - fileMissing.length) + ' | MISSING: ' + fileMissing.length);
  for (const item of fileMissing) {
    console.log('  [' + item.context + '] "' + item.text + '"');
  }
}

console.log('\n\n========== COMPLETE SUMMARY ==========');
let totalMissing = 0;
for (const [file, items] of Object.entries(allMissing)) {
  console.log('\n' + file + ': ' + items.length + ' missing string(s)');
  for (const item of items) {
    console.log('  [' + item.context + '] "' + item.text + '"');
  }
  totalMissing += items.length;
}
console.log('\n\nTOTAL missing strings across all files: ' + totalMissing);
