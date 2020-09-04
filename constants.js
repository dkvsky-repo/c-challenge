const BASE_URL = "http://api.coxauto-interview.com/api";

const ENDPOINT = {
  datasetId: `${BASE_URL}/datasetId`,
  vehicles: (datasetId) => `${BASE_URL}/${datasetId}/vehicles`,
  vehicleInfo: (datasetId, vehicleId) =>
    `${BASE_URL}/${datasetId}/vehicles/${vehicleId}`,
  dealerInfo: (datasetId, dealerId) =>
    `${BASE_URL}/${datasetId}/dealers/${dealerId}`,
  answer: (datasetId) => `${BASE_URL}/${datasetId}/answer`,
};

export { BASE_URL, ENDPOINT };
