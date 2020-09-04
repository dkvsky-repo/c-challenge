const { getDatasetId } = require("../__mocks__/apiService");

jest.mock("../__mocks__/apiService");

// import getDatasetId from "../src/services/apiService.js";

test("should return datasetId string", () => {
  getDatasetId().then((datasetId) => {
    expect(datasetId).toBe("uPeXs3ZL2Ag");
  });
});
