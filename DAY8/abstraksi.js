// case abstraksi -- bisa dikombinasi dengan OOP lainnya

class Car {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }

    startEngine() {
        console.log(`Starting ${this.make} ${this.model} engine`); // methode ini disembunyikan
    }

    stopEngine() {
        console.log(`Stopping ${this.make} ${this.model} engine`);
    }
}

const myCar = new Car('Ford', 'Mustang');
myCar.startEngine();
myCar.stopEngine();