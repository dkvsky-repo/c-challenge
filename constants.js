const BASE_URL = "http://api.coxauto-interview.com/api";

const ENDPOINT = {
  datasetId: `${BASE_URL}/datasetId`,
  vehicles: (datasetId) => `${BASE_URL}/${datasetId}/vehicles`,
  vehicleInfo: (datasetId, vehicleId) =>
    `${BASE_URL}/${datasetId}/vehicles/${vehicleId}`,
};

export { BASE_URL, ENDPOINT };
