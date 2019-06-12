let store = { drivers: [], passengers: [] };
 
let driverId = 0;
class Driver {
    constructor(name) {
        this.id = ++driverId;
        this.name = name;
        store.users.push(this);
    }
    
    trips() {
      
    }
    
    passengers() {
      
    }
}
 
let passengerId = 0;
class Passenger {
    constructor(name, price, user) {
        this.id = ++itemId;
        this.name = name;
        this.price = price;
        if (user) {
            this.userId = user.id;
        }
 
        // insert in the item to the store
        store.items.push(this);
    }
    setUser(user) {
        this.userId = user.id;
    }
}