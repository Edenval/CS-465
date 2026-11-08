const express = require('express');
const router = express.Router();
const pages = require('../controllers/pages');

router.get('/rooms', pages.rooms);
router.get('/meals', pages.meals);
router.get('/news', pages.news);
router.get('/about', pages.about);
router.get('/contact', pages.contact);
router.post('/contact', pages.contactSubmitted);

// Old .html URLs remain usable, but redirect to the MVC versions.
const oldPagePaths = {
  '/index.html': '/', '/travel.html': '/travel',
  '/rooms.html': '/rooms', '/meals.html': '/meals',
  '/news.html': '/news', '/about.html': '/about',
  '/contact.html': '/contact',
  '/dives.html': '/travel', '/foods.html': '/meals'
};
for (const [oldPath, newPath] of Object.entries(oldPagePaths)) {
  router.get(oldPath, (req, res) => res.redirect(302, newPath));
}

module.exports = router;
