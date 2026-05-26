// ─── API CONFIG ───
const API_BASE = window.location.origin.includes('localhost') || window.location.origin.includes('127.0.0.1')
  ? 'http://localhost:3001/api'
  : '/api';

let _adminPassword = '';
let _cachedOahData = null;

function getAdminHeaders() {
  return _adminPassword ? { 'X-Admin-Password': _adminPassword } : {};
}

// ─── AUTH ───
async function apiAdminLogin(password) {
  const res = await fetch(API_BASE + '/admin/verify', {
    method: 'POST', headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ password })
  });
  if (res.ok) { _adminPassword = password; return true; }
  return false;
}

// ─── RESIDENTS ───
async function apiGetResidents() {
  const res = await fetch(API_BASE + '/residents');
  return res.json();
}

async function apiAddResident(data) {
  const res = await fetch(API_BASE + '/residents', {
    method: 'POST', headers: { 'Content-Type': 'application/json', ...getAdminHeaders() },
    body: JSON.stringify(data)
  });
  return res.json();
}

async function apiUpdateResident(id, data) {
  const res = await fetch(API_BASE + '/residents/' + id, {
    method: 'PUT', headers: { 'Content-Type': 'application/json', ...getAdminHeaders() },
    body: JSON.stringify(data)
  });
  return res.json();
}

async function apiDeleteResident(id) {
  await fetch(API_BASE + '/residents/' + id, { method: 'DELETE', headers: getAdminHeaders() });
}

// ─── ATTENDANCE ───
async function apiGetAttendance(date) {
  const q = date ? '?date=' + date : '';
  const res = await fetch(API_BASE + '/attendance' + q);
  return res.json();
}

async function apiSetAttendance(residentId, date, status) {
  const res = await fetch(API_BASE + '/attendance', {
    method: 'POST', headers: { 'Content-Type': 'application/json', ...getAdminHeaders() },
    body: JSON.stringify({ resident_id: residentId, date, status })
  });
  return res.json();
}

async function apiBulkAttendance(date, residentIds, status) {
  await fetch(API_BASE + '/attendance/bulk', {
    method: 'POST', headers: { 'Content-Type': 'application/json', ...getAdminHeaders() },
    body: JSON.stringify({ date, resident_ids: residentIds, status })
  });
}

// ─── MEDICAL ───
async function apiGetMedical() {
  const res = await fetch(API_BASE + '/medical');
  return res.json();
}

async function apiAddMedical(data) {
  const res = await fetch(API_BASE + '/medical', {
    method: 'POST', headers: { 'Content-Type': 'application/json', ...getAdminHeaders() },
    body: JSON.stringify(data)
  });
  return res.json();
}

async function apiUpdateMedical(id, data) {
  const res = await fetch(API_BASE + '/medical/' + id, {
    method: 'PUT', headers: { 'Content-Type': 'application/json', ...getAdminHeaders() },
    body: JSON.stringify(data)
  });
  return res.json();
}

async function apiDeleteMedical(id) {
  await fetch(API_BASE + '/medical/' + id, { method: 'DELETE', headers: getAdminHeaders() });
}

// ─── DONORS ───
async function apiGetDonors() {
  const res = await fetch(API_BASE + '/donors');
  return res.json();
}

async function apiAddDonor(data) {
  const res = await fetch(API_BASE + '/donors', {
    method: 'POST', headers: { 'Content-Type': 'application/json', ...getAdminHeaders() },
    body: JSON.stringify(data)
  });
  return res.json();
}

async function apiUpdateDonor(id, data) {
  const res = await fetch(API_BASE + '/donors/' + id, {
    method: 'PUT', headers: { 'Content-Type': 'application/json', ...getAdminHeaders() },
    body: JSON.stringify(data)
  });
  return res.json();
}

async function apiDeleteDonor(id) {
  await fetch(API_BASE + '/donors/' + id, { method: 'DELETE', headers: getAdminHeaders() });
}

// ─── MENU ───
async function apiGetMenu() {
  const res = await fetch(API_BASE + '/menu');
  return res.json();
}

async function apiUpdateMenu(items) {
  await fetch(API_BASE + '/menu', {
    method: 'PUT', headers: { 'Content-Type': 'application/json', ...getAdminHeaders() },
    body: JSON.stringify({ items })
  });
}

// ─── VOLUNTEERS ───
async function apiSubmitVolunteer(data) {
  const res = await fetch(API_BASE + '/volunteers', {
    method: 'POST', headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
  return res.json();
}

async function apiGetVolunteers() {
  const res = await fetch(API_BASE + '/volunteers', { headers: getAdminHeaders() });
  return res.json();
}

// ─── GALLERY ───
async function apiGetGallery() {
  const res = await fetch(API_BASE + '/gallery');
  return res.json();
}

async function apiAddGalleryFolder(key, title, desc, images) {
  const res = await fetch(API_BASE + '/gallery', {
    method: 'POST', headers: { 'Content-Type': 'application/json', ...getAdminHeaders() },
    body: JSON.stringify({ key, title, desc, images: images || [] })
  });
  return res.json();
}

async function apiUpdateGalleryFolder(key, data) {
  const res = await fetch(API_BASE + '/gallery/' + encodeURIComponent(key), {
    method: 'PUT', headers: { 'Content-Type': 'application/json', ...getAdminHeaders() },
    body: JSON.stringify(data)
  });
  return res.json();
}

async function apiDeleteGalleryFolder(key) {
  await fetch(API_BASE + '/gallery/' + encodeURIComponent(key), { method: 'DELETE', headers: getAdminHeaders() });
}

// ─── STATS ───
async function apiGetStats() {
  const res = await fetch(API_BASE + '/stats');
  return res.json();
}

// ─── MIGRATE ───
async function apiMigrate(data) {
  const res = await fetch(API_BASE + '/migrate', {
    method: 'POST', headers: { 'Content-Type': 'application/json', ...getAdminHeaders() },
    body: JSON.stringify(data)
  });
  return res.json();
}

// ─── LOAD ALL OAH DATA ───
async function apiLoadAllOahData() {
  try {
    const [residentsData, medicalData, donorsData, menuData, statsData] = await Promise.all([
      apiGetResidents(),
      apiGetMedical(),
      apiGetDonors(),
      apiGetMenu(),
      apiGetStats()
    ]);
    _cachedOahData = {
      residents: residentsData.residents || [],
      attendance: residentsData.attendance || [],
      medical: medicalData || [],
      donors: donorsData || [],
      menu: menuData || [],
      stats: statsData.stats || { total: 0, present: 0, medical: 0, meals: 3 }
    };
    return _cachedOahData;
  } catch (e) {
    console.error('Failed to load OAH data:', e);
    return null;
  }
}
