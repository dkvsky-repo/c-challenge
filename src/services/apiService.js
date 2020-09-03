import fetch from "node-fetch";
import { ENDPOINT } from "../../constants.js";

/**
 * Get Dataset Id.
 *
 * @param {string} url Dataset endpoint.
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
 * @param {string} url Dataset endpoint.
 * @returns {promise} Object containing datasetId and array of vehicles ids.
 */
export async function getVehicles() {
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
 * @param {string} url Dataset endpoint.
 * @returns {object} Object containing:
 *   - {string} datasetId.
 *   - {array} vehicleIds.
 *   - {array} All vehicles with detailed info.
 */
export async function getAllVehiclesWithInfo() {
  const { datasetId, vehicleIds } = await getVehicles();
  let vehicles = [];
  const getDetails = async (id) => {
    const response = await fetch(ENDPOINT.vehicleInfo(datasetId, id));
    const data = await response.json();
    vehicles.push(data);
  };
  await Promise.all(vehicleIds.map(getDetails));

  return { datasetId, vehicleIds, vehicles };
}
