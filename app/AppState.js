import { Car } from "./Models/Car.js"
import { House } from "./Models/House.js"
import { Stuff } from "./Models/Stuff.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"


class AppState extends EventEmitter {
  /** @type {import('./Models/Value').Value[]} */
  values = []
  /** @type {import('./Models/Car').Car[]} */
  cars = [
    new Car({make: 'Chevrolet', model: 'Impala', description:'It balla', price: 10, year: 1964, color: '#000000', imgUrl: 'https://m.media-amazon.com/images/I/51IpgyJ3GmL._AC_SX466_.jpg'}),
    new Car({make: 'Buick', model: 'Grand National', description: 'It is grand', price:15, year: 1984, color:'#ff0000', imgUrl:'http://www.deansgarage.com/wp-content/uploads/GNpropsals.jpg'})
  ]
  /** @type {import('./Models/House').House[]} */
  houses = [
    new House({address: "7 Prairie...lane", rooms: 1, price: 35, img:'https://images.unsplash.com/photo-1518780664697-55e3ad937233?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765', description: "A fine house."}),
    new House({address: "1672 Squares cir.", rooms: 6, price: 51, img:'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170', description: 'House is mostly made of squares.'}),
    new House ({address: "1021 Left, pocket", rooms: 0, price: 200, img:'https://images.unsplash.com/photo-1560518883-ce09059eeffa?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073', description: "Don't lowball me, I know what I've got."})
  ]
  /** @type {import('./Models/Stuff').Stuff[]} */
  stuffs = [
    new Stuff({img:'https://images.unsplash.com/photo-1498230870289-7561110a6e69?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cm90YXJ5JTIwcGhvbmV8ZW58MHx8MHx8&auto=format&fit=crop&w=500', title: 'Antique iPhone', price: 99, description: "Original iPhone, made before invention of lowercase i", condition: "Good" }),
    new Stuff({img:'https://images.unsplash.com/photo-1583934555852-537536e49071?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGFpbnRpbmclMjBwb3J0cmFpdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500', title: "Old Portrait", price: 50, description: "Found in attic, appears to be aging poorly, decidedly creepy", condition: "Steadily deteriorating"}),
    new Stuff({img:'https://images.unsplash.com/photo-1571759025475-b96e5a998013?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YnVja2V0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500', title: "Bucket", price: 4, description: 'Plastic bucket or "pail", can be used in castle construction', condition: "Fair" })
  ]
}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
