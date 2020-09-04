/**
 * Add Dealer to Answer Object
 *
 * @param {array} dealersArray Target array.
 * @param {object} vehicle Object item being added.
 */
function addDealer(dealersArray, vehicle) {
  dealersArray.push({
    dealerId: vehicle.dealerId,
    name: vehicle.dealerName,
    vehicles: [],
  });
}

/**
 * Add Vehicle to Answer Object
 *
 * @param {array} dealersArray Target array.
 * @param {object} vehicle Object item being added to dealer.
 */
function addVehicle(dealersArray, vehicle) {
  dealersArray.vehicles.push({
    vehicleId: vehicle.vehicleId,
    year: vehicle.year,
    make: vehicle.make,
    model: vehicle.model,
  });
}

export { addDealer, addVehicle };
