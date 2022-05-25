import { generateId } from "../Utils/generateId.js";



export class Stuff{
    constructor(data){
        this.id = generateId()
        this.img = data.img
        this.title = data.title
        this.price = data.price
        this.description = data.description
        this.condition = data.condition
    }

    get Template(){
        return`
        <div class="col-3">
        <div class="bg-light rounded shadow p-2">
        <img class="img-fluid" src="${this.img}" alt="">
        <h5 class="text-center">${this.title} | ${this.condition}</h5>
        <h4 class="text-center">$${this.price}</h4>
        <p>${this.description}</p>
        <button class="btn btn-danger" onclick="app.stuffsController.deleteStuff('${this.id}')"><i class="mdi mdi-delete"></i></button>

        </div>
        </div>`
    }
}