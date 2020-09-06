import fetch from "node-fetch";
import { ENDPOINT } from "../../constants.js";

/**
 * Get Dataset Id.
 *
 * @returns {String} Dataset id.
 */
export async function getDatasetId() {
  const response = await fetch(ENDPOINT.datasetId);
  const data = await response.json();
  return data;
}

/**
 * Get Vehicles.
 *
 * @returns {Promise} Object containing datasetId and array of
 * vehicles ids tied to the datasetId.
 */
export async function getVehicleIds() {
  const { datasetId } = await getDatasetId();
  const vehiclesIdsResponse = await fetch(ENDPOINT.vehicles(datasetId));
  let { vehicleIds } = await vehiclesIdsResponse.json();
  vehicleIds = [...new Set(vehicleIds)];
  return { datasetId, vehicleIds };
}

/**
 * Get Individual Vehicle Information.
 *
 * @param {String} datasetId The dataset id.
 * @param {Integer} id The vehicle id.
 *
 * @returns {Promise} A vehicle object.
 */
export async function getVehicleInfo(datasetId, id) {
  const response = await fetch(ENDPOINT.vehicleInfo(datasetId, id));
  const data = await response.json();
  return data;
}

/**
 * Get Dealer Name.
 *
 * @param {String} datasetId The dataset id.
 * @param {Integer} dealerId The dealer id.
 *
 * @returns {String} The dealer name.
 */
export async function getDealerName(datasetId, dealerId) {
  const response = await fetch(ENDPOINT.dealerInfo(datasetId, dealerId));
  const data = await response.json();
  const { name } = data;
  return name;
}

/**
 * Get Information for All Vehicles in Dataset.
 * Calls API to retrieve information about each vehicle id.
 *
 * @returns {Object} Object containing:
 *   - {String} datasetId.
 *   - {Array} vehicleIds.
 *   - {Array} All vehicles with detailed info.
 */
export async function getAllVehiclesWithInfo() {
  let vehicles = [];
  const { datasetId, vehicleIds } = await getVehicleIds();
  const vehicleDetailsCallback = async (id) => {
    const data = await getVehicleInfo(datasetId, id);
    data.dealerName = await getDealerName(datasetId, data.dealerId);
    vehicles.push(data);
  };
  await Promise.all(vehicleIds.map(vehicleDetailsCallback));
  return { datasetId, vehicleIds, vehicles };
}

/**
 * Post Answer.
 *
 * @param {String} datasetId The dataset id.
 * @param {Array} answer The dealers array.
 *
 * @returns {Void}
 */
export function postAnswer(datasetId, answer) {
  fetch(ENDPOINT.answer(datasetId, answer), {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(answer),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(`-------------------------`);
      for (const [key, value] of Object.entries(data)) {
        console.log(`${key}: ${value}`);
      }
      console.log(`-------------------------`);
      console.log(`Process finished!`, data.success === true ? `😎` : `😢`);
    })
    .catch((error) => {
      console.log(error);
    });
}
