// test("mock promise resolution", () => {
//   const mock = jest.fn();
//   mock.mockResolvedValue("bar");

//   expect(mock("foo")).resolves.toBe("bar");
//   expect(mock).toHaveBeenCalledWith("foo");
// });
import * as apiService from "./apiService";

test("getDatasetId() should return datasetId object", async () => {
  const getDatasetIdMock = jest.spyOn(apiService, "getDatasetId");
  getDatasetIdMock.mockResolvedValue({ datasetId: "llsWSxdkwER" });
  const datasetId = await apiService.getDatasetId();
  expect(datasetId).toEqual({ datasetId: "llsWSxdkwER" });
});

/*
test outcome of getAllV


*/

// test("Testing hello()", () => {
//   const helloMock = jest.spyOn(apiService, "hello");

//   helloMock.mockImplementation(() => "David");
//   expect(apiService.hello()).toEqual("David");

//   helloMock.mockRestore();
//   expect(apiService.hello("David")).toBe("Well, hello David!");
// });
