const index = (req, res) => {
  res.render('index', {
    title: 'Home | Travlr Getaways',
    currentPage: 'home'
  });
};

module.exports = { index };
