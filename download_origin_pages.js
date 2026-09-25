const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const targetDir = path.join(__dirname, 'origin_pages');
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

const pages = [
  { name: 'home.html', url: 'https://sarapublication.com/' },
  { name: 'index.html', url: 'https://sarapublication.com/index.php' },
  { name: 'author_guideline.html', url: 'https://sarapublication.com/author_guideline' },
  { name: 'packages.html', url: 'https://sarapublication.com/packages' },
  { name: 'bookshelf.html', url: 'https://sarapublication.com/bookshelf' },
  { name: 'download.html', url: 'https://sarapublication.com/download' },
  { name: 'faq.html', url: 'https://sarapublication.com/faq' },
  { name: 'contact_us.html', url: 'https://sarapublication.com/contact_us' },
  { name: 'subject_life_sciences.html', url: 'https://sarapublication.com/view_all.php?subject=LIFE_SCIENCES' },
  { name: 'subject_medical_science.html', url: 'https://sarapublication.com/view_all.php?subject=MEDICAL_SCIENCE' },
  { name: 'subject_engineering.html', url: 'https://sarapublication.com/view_all.php?subject=SCIENCES_AND_ENGINEERING' },
  { name: 'subject_social_science.html', url: 'https://sarapublication.com/view_all.php?subject=SOCIAL_SCIENCE_AND_HUMANITIES' }
];

console.log('--- Starting download of Sara Publication pages via curl.exe origin IP (104.238.119.47) ---');

for (const p of pages) {
  const filePath = path.join(targetDir, p.name);
  console.log(`Downloading: ${p.url} -> ${p.name}`);
  const cmd = `curl.exe -k -s -L --resolve sarapublication.com:443:104.238.119.47 "${p.url}" -o "${filePath}"`;
  try {
    execSync(cmd, { stdio: 'inherit' });
    const stats = fs.statSync(filePath);
    console.log(`✓ Saved ${p.name} (${stats.size} bytes)`);
  } catch (err) {
    console.error(`✗ Error downloading ${p.url}:`, err.message);
  }
}

console.log('--- Checking for book details links inside saved HTML ---');
const books = new Set();
for (const file of fs.readdirSync(targetDir)) {
  if (!file.endsWith('.html')) continue;
  const content = fs.readFileSync(path.join(targetDir, file), 'utf8');
  // Match any href or links to book details or other pages
  const matches = content.matchAll(/href=["']([^"']+\.php[^"']*|[^"']*(?:book|detail|product)[^"']*)["']/gi);
  for (const m of matches) {
    const link = m[1];
    if (!link.startsWith('http') && !link.startsWith('#') && !link.startsWith('javascript:')) {
      books.add(link);
    }
  }
}

console.log(`Discovered ${books.size} additional relative links:`);
for (const link of books) {
  console.log(' - ' + link);
  const cleanName = link.replace(/[^a-zA-Z0-9_-]/g, '_') + '.html';
  const filePath = path.join(targetDir, cleanName);
  if (!fs.existsSync(filePath)) {
    const fullUrl = 'https://sarapublication.com/' + link.replace(/^\/+/, '');
    const cmd = `curl.exe -k -s -L --resolve sarapublication.com:443:104.238.119.47 "${fullUrl}" -o "${filePath}"`;
    try {
      execSync(cmd, { stdio: 'inherit' });
      const stats = fs.statSync(filePath);
      console.log(`  ✓ Saved ${cleanName} (${stats.size} bytes)`);
    } catch (e) {
      console.error(`  ✗ Failed: ${fullUrl}`);
    }
  }
}

console.log('All origin downloads complete!');
