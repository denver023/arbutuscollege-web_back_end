export default class Airport {
    constructor(name, code) {
      this._name = name;
      this._code = code;
    }
  
    // Override toString() method to return the code
    toString() {
      return `[object ${this._code}]`;
    }
  
    // Symbol.toStringTag getter to customize the output of console.log
    get [Symbol.toStringTag]() {
      return this._code;
    }
  }