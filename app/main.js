import { CarsController } from "./Controllers/CarsController.js";
import { HousesController } from "./Controllers/HousesController.js";
import { StuffsController } from "./Controllers/StuffsController.js";


class App {
  // valuesController = new ValuesController();
  carsController = new CarsController()

  stuffsController = new StuffsController()
  
  housesController = new HousesController()
}

window["app"] = new App();
