import { ProxyState } from "../AppState.js";
import { housesService } from "../Services/HousesService.js";
import { getHouseForm } from "../Components/HouseForm.js";

function _drawHouses() {
  let template = ''
  let houses = ProxyState.houses
  houses.forEach(h => {
    template += h.Template
  })
  document.getElementById('listings').innerHTML = template
}


export class HousesController{
 constructor(){
   console.log('Houses controller loaded', ProxyState.houses);
   ProxyState.on('houses', _drawHouses)
  //  Don't draw in the constructor if you want cars to be the default landing page
  //  _drawHouses() 
 }

  createHouse() {
    window.event.preventDefault()
    console.log('data is in controller');
    let form = window.event.target
   
    let houseData = {
      address: form.address.value,
      rooms: form.rooms.value,
      price: form.price.value,
      img: form.img.value,
      description: form.description.value
    }
    console.log('the new house', houseData)
housesService.createHouse(houseData)
form.reset()
bootstrap.Modal.getOrCreateInstance(document.getElementById('form-modal')).hide()
  }

  deleteHouse(houseId){
    console.log("controller passing", houseId);
    housesService.deleteHouse(houseId)
  }

 viewHouses(){
  let form = getHouseForm()
  document.getElementById('form-body').innerHTML = form
  _drawHouses()
 }
}