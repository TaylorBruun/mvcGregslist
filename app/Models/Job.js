import { generateId } from "../Utils/generateId.js"


export class Job{
    constructor(data){
        this.id = generateId()
        this.title = data.title
        this.employer = data.employer
        this.wage = data.wage
        this.description = data.description
        this.hours = data.hours

    }

    get Template(){
        return`
        <div class="bg-light rounded shadow p-2">
            <img class="img-fluid" src="" alt="">
                <h5 class="text-center">${this.title} | ${this.employer}</h5>
                <h4 class="text-center">$${this.wage} | ${this.hours}</h4>
                <p>${this.description}</p>
        </div>`
    }
}