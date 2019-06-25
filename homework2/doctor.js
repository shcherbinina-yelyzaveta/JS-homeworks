const Unit = require('./unit');

function Doctor(name) {
    Unit.call(this, ("Доктор " + name));
    this._healPower = 10;
}

Doctor.prototype = Object.create(Unit.prototype);

Doctor.prototype.getHealPower = function () {
    return this._healPower;
};

Doctor.prototype.heal = function (unit) {
    let power = 0;
    if (this.isAlive() && unit.isAlive()) {
        let healPower = this.getHealPower();
        if (this.getLevel() > 1) {
            healPower += Math.round(this.getHealPower() * this.getLevel() * 0.1);
        }

        let healthBefore = unit.getHealth();
        unit.addHealth(healPower);
        let healthAfter = unit.getHealth();

        this.earnExperience(250);

        power = healthAfter - healthBefore;

    }
    return power;
};

module.exports = Doctor;