export default class Building {
    constructor(sqft) {
        this._sqft = sqft;

        // Check if this is an instance of a class that extends Building
        if (this.constructor !== Building) {
            // Verify that the extending class has implemented evacuationWarningMessage
            if (this.evacuationWarningMessage === undefined ||
                typeof this.evacuationWarningMessage !== 'function') {
                throw new Error('Class extending Building must override evacuationWarningMessage');
            }
        }
    }

    // Getter for sqft
    get sqft() {
        return this._sqft;
    }
}