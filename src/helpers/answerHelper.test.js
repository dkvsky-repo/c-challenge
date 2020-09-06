import { createAnswerObject } from "./answerHelper";

/**
 * Test - AnswerHelper
 */
describe("Create answer object", () => {
  it("should create an object with one dealer", () => {
    const vehicleIds = [117385904];
    const vehicles = [
      {
        vehicleId: 117385904,
        year: 2014,
        make: "Ford",
        model: "F150",
        dealerId: 1936803401,
        dealerName: "Bob's Cars",
      },
    ];
    const expectedObject = {
      dealers: [
        {
          dealerId: 1936803401,
          name: "Bob's Cars",
          vehicles: [
            {
              vehicleId: 117385904,
              year: 2014,
              make: "Ford",
              model: "F150",
            },
          ],
        },
      ],
    };
    const answer = createAnswerObject(vehicleIds, vehicles);
    expect(answer).toMatchObject(expectedObject);
  });

  it("should create an object with two dealers", () => {
    const vehicleIds = [117385904, 2146648308];
    const vehicles = [
      {
        vehicleId: 117385904,
        year: 2014,
        make: "Ford",
        model: "F150",
        dealerId: 1936803401,
        dealerName: "Bob's Cars",
      },
      {
        vehicleId: 2146648308,
        year: 2012,
        make: "Nissan",
        model: "Altima",
        dealerId: 2034765001,
        dealerName: "Doug's Doozies",
      },
    ];
    const expectedObject = {
      dealers: [
        {
          dealerId: 1936803401,
          name: "Bob's Cars",
          vehicles: [
            {
              vehicleId: 117385904,
              year: 2014,
              make: "Ford",
              model: "F150",
            },
          ],
        },
        {
          dealerId: 2034765001,
          name: "Doug's Doozies",
          vehicles: [
            {
              vehicleId: 2146648308,
              year: 2012,
              make: "Nissan",
              model: "Altima",
            },
          ],
        },
      ],
    };
    const answer = createAnswerObject(vehicleIds, vehicles);
    expect(answer).toMatchObject(expectedObject);
  });

  it("should create object with two dealers, and add additional vehicle to one of them", () => {
    const vehicleIds = [117385904, 2146648308, 1362076446];
    const vehicles = [
      {
        vehicleId: 117385904,
        year: 2014,
        make: "Ford",
        model: "F150",
        dealerId: 1936803401,
        dealerName: "Bob's Cars",
      },
      {
        vehicleId: 2146648308,
        year: 2012,
        make: "Nissan",
        model: "Altima",
        dealerId: 2034765001,
        dealerName: "Doug's Doozies",
      },
      {
        vehicleId: 1362076446,
        year: 2016,
        make: "Honda",
        model: "Accord",
        dealerId: 1936803401,
        dealerName: "Bob's Cars",
      },
    ];
    const expectedObject = {
      dealers: [
        {
          dealerId: 1936803401,
          name: "Bob's Cars",
          vehicles: [
            {
              vehicleId: 117385904,
              year: 2014,
              make: "Ford",
              model: "F150",
            },
            {
              vehicleId: 1362076446,
              year: 2016,
              make: "Honda",
              model: "Accord",
            },
          ],
        },
        {
          dealerId: 2034765001,
          name: "Doug's Doozies",
          vehicles: [
            {
              vehicleId: 2146648308,
              year: 2012,
              make: "Nissan",
              model: "Altima",
            },
          ],
        },
      ],
    };
    const answer = createAnswerObject(vehicleIds, vehicles);
    const dealerOneVehiclesArray = answer.dealers[0].vehicles;

    expect(answer).toMatchObject(expectedObject);
    expect(dealerOneVehiclesArray).toHaveLength(2);
  });
});
