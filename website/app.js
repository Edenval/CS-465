const path = require('path');
const express = require('express');
const hbs = require('hbs');

const indexRouter = require('./app_server/routes/index');
const travelRouter = require('./app_server/routes/travel');
const pagesRouter = require('./app_server/routes/pages');
const app = express();

const viewsPath = path.join(__dirname, 'app_server', 'views');
app.set('views', viewsPath);
app.set('view engine', 'hbs');
app.set('view options', { layout: 'layouts/layout' });
hbs.registerPartials(path.join(viewsPath, 'partials'));

app.disable('x-powered-by');
app.use(express.urlencoded({ extended: false }));

// Create the navigation state once for the shared header and footer.
app.use((req, res, next) => {
  res.locals.year = new Date().getFullYear();
  res.locals.navigation = [
    { name: 'Home', url: '/', key: 'home' },
    { name: 'Travel', url: '/travel', key: 'travel' },
    { name: 'Rooms', url: '/rooms', key: 'rooms' },
    { name: 'Meals', url: '/meals', key: 'meals' },
    { name: 'News', url: '/news', key: 'news' },
    { name: 'About', url: '/about', key: 'about' },
    { name: 'Contact', url: '/contact', key: 'contact' }
  ];
  next();
});

// The active page is set by its controller and used by both partials.
hbs.registerHelper('isActive', (currentPage, menuPage) => currentPage === menuPage);

// Controller routes take priority over files in public/.
app.use('/', indexRouter);
app.use('/travel', travelRouter);
app.use('/', pagesRouter);
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res) => {
  res.status(404).render('not-found', { title: 'Page Not Found | Travlr Getaways' });
});

app.use((error, req, res, next) => {
  console.error(error);
  res.status(500).send('There was a problem loading this page.');
});

module.exports = app;
