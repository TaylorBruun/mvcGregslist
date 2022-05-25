import { generateId } from "../Utils/generateId.js"



export class House{
    constructor(data){
        this.id = generateId()
        this.address = data.address
        this.rooms = data.rooms
        this.price = data.price
        this.img = data.img
        this.description = data.description
    }


    get Template(){
        return`
        <div class="col-3">
            <div class="bg-light rounded shadow p-2">
                <img class="img-fluid" src="${this.img}" alt="">
                    <h5 class="text-center">${this.address} | ${this.rooms} Rooms</h5>
                    <h4 class="text-center">$${this.price}</h4>
                    <p class="">${this.description}</p>
                    <button class="btn btn-danger" onclick="app.housesController.deleteHouse('${this.id}')"><i class="mdi mdi-delete"></i></button>
            </div>
        </div>`
    }
}