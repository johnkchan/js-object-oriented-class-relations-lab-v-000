let store = { drivers: [], passengers: [] };
 
let driverId = 0;
class Driver {
    constructor(name) {
      this.id = ++driverId;
      this.name = name;
      store.drivers.push(this);
    }
    
    trips() {
      
    }
    
    passengers() {
      
    }
}
 
let passengerId = 0;
class Passenger {
    constructor(name) {
      this.id = ++itemId;
      this.name = name;
 
      store.passengers.push(this);
    }
    
    trips() {
      
    }
    
    passengers() {
      
    }
}

let tripID = 0;
class Trip {
  constructor(driver, passenger) {
    this.id = ++itemId;
    this.driverID = driver.id;
    this.passengerID = passenger.id;
  }
  
  driver() {
    
  }
  
  passenger() {
    
  }
}