const { listTrips } = require('../models/trips');

// The route calls this controller, which supplies data to the HBS view.
const travel = (req, res) => {
  res.render('travel', {
    title: 'Travel | Travlr Getaways',
    currentPage: 'travel',
    trips: listTrips()
  });
};

module.exports = { travel };
