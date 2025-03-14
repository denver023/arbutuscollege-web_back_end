export default class Car {
    constructor(brand, motor, color) {
        this._brand = brand;
        this._motor = motor;
        this._color = color;
    }

    // Symbol to store the class reference
    static get [Symbol.species]() {
        return this;
    }

    // Clone car method
    cloneCar() {
        const Species = this.constructor[Symbol.species];
        return new Species();
    }
}