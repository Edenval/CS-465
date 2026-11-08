const { test, before, after } = require('node:test');
const assert = require('node:assert/strict');
const app = require('../app');

let server;
let baseUrl;
before(async () => {
  server = await new Promise((resolve) => {
    const listening = app.listen(0, () => resolve(listening));
  });
  baseUrl = `http://127.0.0.1:${server.address().port}`;
});
after(() => new Promise((resolve) => server.close(resolve)));

for (const [route, heading] of [
  ['/', 'Enjoy the Summer with Us!'],
  ['/travel', 'Travel'],
  ['/rooms', 'Rooms'],
  ['/meals', 'Meals'],
  ['/news', 'News'],
  ['/about', 'About'],
  ['/contact', 'Contact']
]) {
  test(`${route} renders an HBS page with shared navigation`, async () => {
    const response = await fetch(baseUrl + route);
    assert.equal(response.status, 200);
    const html = await response.text();
    assert.match(html, /<html lang="en">/);
    assert.match(html, /id="header"/);
    assert.match(html, /id="footer"/);
    assert.match(html, /href="\/travel"/);
    assert.ok(html.includes(heading));
    assert.match(html, /\/images\/logo\.png/);
  });
}

test('/travel loops through three trip entries from local data', async () => {
  const response = await fetch(baseUrl + '/travel');
  const html = await response.text();
  for (const name of ['Gale Reef', 'Dawson’s Reef', 'Claire’s REEF']) {
    assert.ok(html.includes(name), `missing trip ${name}`);
  }
  assert.equal((html.match(/<li>\s*<a href="\/travel"><img src="\/images\/reef/g) || []).length, 3);
});

test('the supplied image and stylesheet files are accessible', async () => {
  for (const file of ['/css/style.css', '/images/bg-pattern.jpg', '/images/reef1.jpg', '/images/logo.png']) {
    const response = await fetch(baseUrl + file);
    assert.equal(response.status, 200, file);
  }
});

test('legacy .html URLs redirect to the controller route', async () => {
  const response = await fetch(baseUrl + '/travel.html', { redirect: 'manual' });
  assert.equal(response.status, 302);
  assert.equal(response.headers.get('location'), '/travel');
});

test('missing pages return 404', async () => {
  const response = await fetch(baseUrl + '/does-not-exist');
  assert.equal(response.status, 404);
  assert.match(await response.text(), /Page Not Found/);
});
