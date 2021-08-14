const getInstancesFromReservations = (Reservations = []) => {
  return Reservations.map(({ Instances }) => Instances);
};

module.exports = { getInstancesFromReservations };
