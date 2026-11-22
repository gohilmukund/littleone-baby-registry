const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');

const ids = [
  'soft-baby-bath-towel','muslin-cloths-swaddles','baby-board-books',
  'soft-cotton-bibs','baby-storage-basket','cotton-rompers-3-6-months',
  'age-appropriate-baby-toy','portable-changing-mat','baby-feeding-accessories',
  'baby-keepsake-box','convertible-maternity-baby-bag','soft-baby-blanket'
];

function parseConfig(markdown) {
  const sections = markdown.split('\\n## ').filter(s => s.trim());
  return sections.slice(1).map((section, index) => {
    const lines = section.split('\\n');
    const name = lines[0].trim();
    const fields = {};
    lines.slice(1).forEach(line => {
      const parts = line.split(':');
      if (parts.length > 1) fields[parts[0].trim()] = parts.slice(1).join(':').trim();
    });
    return { id: ids[index], name, quantity: Number(fields.quantity || 1), photo: Number(fields.photo || 0) };
  });
}

const config = fs.readFileSync('config/gifts.md', 'utf8');
const page = fs.readFileSync('index.html', 'utf8');
const gifts = parseConfig(config);

test('wishlist contains 12 gifts and each receives a unique stable ID', () => {
  assert.equal(gifts.length, 12);
  assert.equal(new Set(gifts.map(g => g.id)).size, gifts.length);
  assert.deepEqual(gifts.map(g => g.id), ids);
});

test('rompers map to the sixth gift, not bath towels', () => {
  const romper = gifts.find(g => g.name.includes('rompers'));
  assert.equal(romper.id, 'cotton-rompers-3-6-months');
  assert.equal(gifts[0].id, 'soft-baby-bath-towel');
  assert.notEqual(romper.id, gifts[0].id);
});

test('quantities and photo tiles are valid', () => {
  for (const gift of gifts) {
    assert.ok(gift.quantity >= 1, gift.name);
    assert.ok(Number.isInteger(gift.photo) && gift.photo >= 0 && gift.photo <= 11, gift.name);
  }
});

test('frontend maps gift IDs by config index', () => {
  assert.match(page, /sections\.slice\(1\)\.map\(\(section,index\)\s*=>\s*\{/);
  assert.match(page, /giftIds\[index\]/);
});
