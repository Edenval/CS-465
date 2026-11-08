const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const project = path.resolve(__dirname, '..');

const required = [
  'app.js', 'bin/www', 'package.json',
  'app_server/controllers/main.js', 'app_server/controllers/travel.js',
  'app_server/routes/index.js', 'app_server/routes/travel.js',
  'app_server/views/layouts/layout.hbs',
  'app_server/views/partials/header.hbs',
  'app_server/views/partials/footer.hbs',
  'app_server/views/travel.hbs',
  'public/css/style.css', 'public/images/logo.png',
  'public/images/reef1.jpg', 'public/images/reef2.jpg', 'public/images/reef3.jpg'
];
for (const file of required) {
  assert.ok(fs.existsSync(path.join(project, file)), `Missing ${file}`);
}
assert.match(fs.readFileSync(path.join(project, 'app_server/views/travel.hbs'), 'utf8'), /{{#each trips}}/);
assert.match(fs.readFileSync(path.join(project, 'app_server/views/layouts/layout.hbs'), 'utf8'), /{{{body}}}/);
assert.equal(require('../data/trips.json').length, 3);
console.log('Source checks passed: MVC files, HBS directives, assets and trips.');
