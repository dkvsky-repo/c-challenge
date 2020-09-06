/**
 * Create Answer Objects.
 *
 * Helper to build the answer object that will be posted
 * to the Answer endpoint.
 *
 * @param {Array} vehicleIds List of vehicles Ids.
 * @param {Array} vehicles Array of objects containing all vehicles
 *   requested for a given dataset id.
 */
export function createAnswerObject(vehicleIds, vehicles) {
  let dealers = [];
  let dealerIndex = undefined;

  for (const id of vehicleIds) {
    let vehicle = vehicles.find((vehicle) => vehicle.vehicleId === id);

    // If dealers array is empty add first item.
    if (dealers.length === 0) {
      addDealer(dealers, vehicle);
      addVehicle(dealers[0], vehicle);
    } else {
      // If dealers array IS NOT empty check if dealer is in the array.
      dealerIndex = dealers.findIndex(
        (dealer) => dealer.dealerId === vehicle.dealerId
      );

      // If dealer exists -> addVehicle
      if (dealerIndex !== -1) {
        addVehicle(dealers[dealerIndex], vehicle);
      } else {
        addDealer(dealers, vehicle);
        addVehicle(dealers[dealers.length - 1], vehicle);
      }
    }
  }

  return { dealers };
}

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
