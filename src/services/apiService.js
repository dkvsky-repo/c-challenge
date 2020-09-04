import fetch from "node-fetch";
import { ENDPOINT } from "../../constants.js";

/**
 * Get Dataset Id.
 *
 * @returns {promise} Dataset id.
 */
export async function getDatasetId() {
  const response = await fetch(ENDPOINT.datasetId);
  const data = await response.json();
  let { datasetId } = data;
  return datasetId;
}

/**
 * Get Vehicles.
 *
 * @returns {promise} Object containing datasetId and array of vehicles ids.
 */
export async function getVehicleIds() {
  const datasetId = await getDatasetId();
  const vehiclesResponse = await fetch(ENDPOINT.vehicles(datasetId));
  let { vehicleIds } = await vehiclesResponse.json();
  vehicleIds = [...new Set(vehicleIds)];
  return { datasetId, vehicleIds };
}

/**
 * Get Vehicle Information.
 * Calls API to retrieve information about each vehicle id.
 *
 * @returns {object} Object containing:
 *   - {string} datasetId.
 *   - {array} vehicleIds.
 *   - {array} All vehicles with detailed info.
 */
export async function getAllVehiclesWithInfo() {
  const { datasetId, vehicleIds } = await getVehicleIds();
  let vehicles = [];
  const getDetails = async (id) => {
    const response = await fetch(ENDPOINT.vehicleInfo(datasetId, id));
    const data = await response.json();
    data.dealerName = await getDealerName(datasetId, data.dealerId);
    vehicles.push(data);
  };
  await Promise.all(vehicleIds.map(getDetails));
  return { datasetId, vehicleIds, vehicles };
}

/**
 * Get Dealer Name.
 *
 * @param {string} datasetId The dataset id.
 * @param {number} dealerId The dealer id.
 *
 * @returns {string} The dealer name.
 */
export async function getDealerName(datasetId, dealerId) {
  const response = await fetch(ENDPOINT.dealerInfo(datasetId, dealerId));
  const data = await response.json();
  const { name } = data;
  return name;
}

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
      console.log(data);
    })
    .catch((error) => {
      console.log('Error processing "postAnswer()"');
    });
}
