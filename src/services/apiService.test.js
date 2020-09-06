import * as apiService from "./apiService";

describe("API mocks", () => {
  test("getDatasetId() should return datasetId object", async () => {
    const getDatasetIdMock = jest.spyOn(apiService, "getDatasetId");
    getDatasetIdMock.mockResolvedValue({ datasetId: "llsWSxdkwER" });
    const datasetId = await apiService.getDatasetId();
    expect(datasetId).toEqual({ datasetId: "llsWSxdkwER" });
  });

  test("getVehicleInfo() should return a vehicle object", async () => {
    const getVehicleInfoMock = jest.spyOn(apiService, "getVehicleInfo");
    const vehicleObject = {
      vehicleId: 117385904,
      year: 2014,
      make: "Ford",
      model: "F150",
      dealerId: 1936803401,
    };
    getVehicleInfoMock.mockResolvedValue(vehicleObject);
    const expectedVehicle = await apiService.getVehicleInfo();
    expect(expectedVehicle).toMatchObject(vehicleObject);

    expect(getVehicleInfoMock).toHaveBeenCalled();
  });
});
