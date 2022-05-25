import { ProxyState } from "../AppState.js"
import { Stuff } from "../Models/Stuff.js"



class StuffsService {

    addStuff(data) {
        let stuffs = ProxyState.stuffs
        ProxyState.stuffs = [...stuffs, new Stuff(data)]
    }


    deleteStuff(id) {
        let stuffs = ProxyState.stuffs
        let goodStuff = stuffs.filter(s => s.id != id)
        ProxyState.stuffs = goodStuff
        
    }
}




export const stuffsService = new StuffsService