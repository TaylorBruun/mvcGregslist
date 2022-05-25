import { Car } from "./Models/Car.js"
import { House } from "./Models/House.js"
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
