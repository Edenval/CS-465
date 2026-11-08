const showPage = (view, label) => (req, res) => {
  res.render(view, { title: `${label} | Travlr Getaways`, currentPage: view });
};

const rooms = showPage('rooms', 'Rooms');
const meals = showPage('meals', 'Meals');
const news = showPage('news', 'News');
const about = showPage('about', 'About');
const contact = showPage('contact', 'Contact');

// The original contact form is kept for the page design. This coursework
// version does not have an email service or persistent message storage.
const contactSubmitted = (req, res) => {
  res.render('contact', {
    title: 'Contact | Travlr Getaways',
    currentPage: 'contact',
    contactNotice: 'This demo form is not connected to an email service. No message was sent.'
  });
};

module.exports = { rooms, meals, news, about, contact, contactSubmitted };
