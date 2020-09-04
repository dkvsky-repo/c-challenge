import * as apiService from "./src/services/apiService.js";
import { addDealer, addVehicle } from "./src/helpers/answerHelper.js";
import ora from "ora";

let dealers = [];
let dealerIndex = undefined;
(async function createAnswerObject() {
  const spinner = ora("Processing... This will take a few seconds ⏱").start();
  let {
    datasetId,
    vehicleIds,
    vehicles,
  } = await apiService.getAllVehiclesWithInfo();

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

  const answerData = { dealers };
  apiService.postAnswer(datasetId, answerData);
  spinner.stop();
})();
