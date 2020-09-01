// const chalk = require("chalk");
import fetch from "node-fetch";

// ENDPOINTS
const endpoint = {
  dataset: `http://api.coxauto-interview.com/api/datasetId`,
  vehicles: (datasetId) =>
    `http://api.coxauto-interview.com/api/${datasetId}/vehicles`,
};

/**
 * Get Dataset Id.
 *
 * @param {string} url Dataset endpoint.
 * @returns {Promise} JSON object - dataset id.
 */
const getDatasetId = async (url) => {
  const response = await fetch(url);
  return await response.json();
};

/**
 * Get List of Vehicle Ids
 *
 * @param {string} url Dataset endpoint.
 * @returns {promise} JSON object with array of  vehicles ids.
 */
const getVehicleIds = async (url = endpoint.dataset) => {
  const data = await getDatasetId(url);
  const { datasetId } = data;
  const vehiclesIds = await fetch(endpoint.vehicles(datasetId));
  return await vehiclesIds.json();
};

getVehicleIds();
