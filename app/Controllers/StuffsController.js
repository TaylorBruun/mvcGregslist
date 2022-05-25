import { ProxyState } from "../AppState.js";
import { getStuffForm } from "../Components/StuffForm.js";
import { stuffsService } from "../Services/StuffsService.js";




function _drawStuffs(){
    let stuffs = ProxyState.stuffs
    let template = ''
    stuffs.forEach(s => {
    template += s.Template
    })
    document.getElementById('listings').innerHTML = template
}

export class StuffsController{
    constructor(){
        console.log('stuffscontroller loaded', ProxyState.stuffs);
        // Only draw on construction to test, otherwise it overwrites cars, the intended landing page 
        // _drawStuffs()
        ProxyState.on('stuffs', _drawStuffs)
    }
    viewStuffs(){
        let form = getStuffForm()
        document.getElementById('form-body').innerHTML = form
        _drawStuffs()
    }
    
    addStuff(){
        window.event.preventDefault()
        console.log("adding stuff from controller")
        let form = window.event.target

        let data = {
            img: form.img.value,
            title: form.title.value,
            price: form.price.value,
            description: form.description.value,
            condition: form.condition.value,
        }

        stuffsService.addStuff(data)
        form.reset()
        bootstrap.Modal.getOrCreateInstance(document.getElementById('form-modal')).hide()
    }

    deleteStuff(id){
        console.log('controller passing', id);
        stuffsService.deleteStuff(id)
    }

}