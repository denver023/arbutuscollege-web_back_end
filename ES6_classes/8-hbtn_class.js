export default class HolbertonClass {
    constructor(size, location) {
        this._size = size;
        this._location = location;
    }

    // Symbol.toPrimitive handler to customize type conversion
    [Symbol.toPrimitive](hint) {
        if (hint === 'number') {
            return this._size;
        }
        if (hint === 'string') {
            return this._location;
        }
        // Default behavior for other hints
        return this._location;
    }
}