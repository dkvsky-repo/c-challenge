import * as apiService from "./src/services/apiService.js";
import { createAnswerObject } from "./src/helpers/answerHelper.js";
import ora from "ora";

const spinner = ora("Processing... This will take a few seconds ⏱");

(async function submitAnswer() {
  spinner.start();
  try {
    let {
      datasetId,
      vehicleIds,
      vehicles,
    } = await apiService.getAllVehiclesWithInfo();

    const answerObject = createAnswerObject(vehicleIds, vehicles);
    apiService.postAnswer(datasetId, answerObject);

    spinner.stop();
  } catch (error) {
    spinner.fail("Sorry, something is not right 🤮");
    console.log(error);
  }
})();
