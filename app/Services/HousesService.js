import { ProxyState } from "../AppState.js";
import { House } from "../Models/House.js";



class HousesService{
    createHouse(houseData){
        console.log("data arrived at service", houseData);
        ProxyState.houses = [...ProxyState.houses, new House(houseData)]
        console.log("houses after add", ProxyState.houses);
    }

    deleteHouse(houseId){
        let houses = ProxyState.houses
        let goodHouses = houses.filter(h => h.id != houseId)
        console.log(goodHouses);

        // DOES refresh listings
        ProxyState.houses = goodHouses

        // DOES NOT refresh listings
        // houses = goodHouses
    }
}



export const housesService = new HousesService