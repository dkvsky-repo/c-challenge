// import { addDealer, addVehicle } from "./answerHelper";

/*
export function addDealer(dealersArray, vehicle) {
  dealersArray.push({
    dealerId: vehicle.dealerId,
    name: vehicle.dealerName,
    vehicles: [],
  });
*/

// describe('Add Dealer', () => {
//   const dealers = [];
//   const vehicle = {
//     vehicleId: 117385904,
//     year: 2014,
//     make: 'Ford',
//     model: 'F150',
//     dealerId: 1936803401,
//     dealerName: "Bob's Cars"
//   };
//   const expected = []
//   it('should return array with a dealer item if array is empty', () {
//     // expect()
//   })
// })

/*
- test empty dealer array empty
-- should return array with one item
    
  test data:
    datasetId = "3OQN_vBR2Ag"
    dealers = []
    vehicle item: 
    [{
      vehicleId: 117385904,
      year: 2014,
      make: 'Ford',
      model: 'F150',
      dealerId: 1936803401,
      dealerName: "Bob's Cars"
    }]

- test dealer array, dealer exists
  -- should return array with same length and
  -- dealer[0].vehicles array length should be greater than 1

    test data:
        datasetId = "3OQN_vBR2Ag"
        dealers = [
          {
            "dealerId": 1368796853,
            "name": "Bob's Cars",
            "vehicles": [
              {
                "vehicleId": 1362076446,
                "year": 2016,
                "make": "Honda",
                "model": "Accord"
              }
            ]
          },
        ]

        new vehicle item: 
        {
          vehicleId: 117385904,
          year: 2014,
          make: 'Ford',
          model: 'F150',
          dealerId: 1936803401,
          dealerName: "Bob's Cars"
        }


- test dealers array not empty and dealer does not exist
    -- should return array with additional item containing new dealer item

      test data:
        datasetId = "3OQN_vBR2Ag"
        dealers = [
          {
            "dealerId": 1368796853,
            "name": "Bob's Cars",
            "vehicles": [
              {
                "vehicleId": 1362076446,
                "year": 2016,
                "make": "Honda",
                "model": "Accord"
              }
            ]
          },
        ]

        new vehicle item: 
        {
          vehicleId: 2146648308,
          year: 2012,
          make: 'Nissan',
          model: 'Altima',
          dealerId: 2034765001,
          dealerName: "Doug's Doozies"
        }

*/
