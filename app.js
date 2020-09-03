import * as apiService from "./src/services/apiService.js";
import { ENDPOINT } from "./constants.js";

(async function createAnswerObject() {
  let {
    datasetId,
    vehicleIds,
    vehicles,
  } = await apiService.getAllVehiclesWithInfo();

  let dealerIndex = undefined;

  vehicleIds.forEach((id) => {
    console.log(`*********** vehicleId: ${id} ***********`);
  });
})();
