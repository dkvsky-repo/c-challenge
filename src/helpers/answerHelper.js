/**
 * Add Dealer to Answer Object
 *
 * @param {Array} dealersArray Target array.
 * @param {Object} vehicle Object item being added.
 */
export function addDealer(dealersArray, vehicle) {
  dealersArray.push({
    dealerId: vehicle.dealerId,
    name: vehicle.dealerName,
    vehicles: [],
  });
}

/**
 * Add Vehicle to Answer Object
 *
 * @param {Array} dealersArray Target array.
 * @param {Object} vehicle Object item being added to dealer.
 */
export function addVehicle(dealersArray, vehicle) {
  dealersArray.vehicles.push({
    vehicleId: vehicle.vehicleId,
    year: vehicle.year,
    make: vehicle.make,
    model: vehicle.model,
  });
}
