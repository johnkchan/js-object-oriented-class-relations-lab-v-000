let store = { drivers: [], passengers: [] };
 
let driverId = 0;
 
class Driver {
    constructor(name) {
        this.id = ++userId;
        this.name = name;
 
        // insert in the user to the store
        store.users.push(this);
    }
}
 
let itemId = 0;
 
class Item {
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