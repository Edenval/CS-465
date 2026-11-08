// Module Two keeps the trip details in local data.
// Later modules can replace this with a database-backed model.
const trips = require('../../data/trips.json');

const listTrips = () => trips.map((trip) => ({ ...trip }));

module.exports = { listTrips };
