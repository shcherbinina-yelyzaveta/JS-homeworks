const Unit = require('./unit');

function Soldier(name) {
    Unit.call(this, name);
    this._attackPower = 15;
}

Soldier.prototype = Object.create(Unit.prototype);

Soldier.prototype.getAttackPower = function () {
    return this._attackPower;
};

Soldier.prototype.handAttack = function (unit) {
    let power = 0;
    if (this.isAlive() && unit.isAlive()) {
        power = this.getAttackPower();
        if (this.getLevel() > 1)
            power += Math.round(this.getAttackPower() * this.getLevel() * 0.1);

        unit.takeDamage(power);
        this.earnExperience(250);


    }

    return power;
};

module.exports = Soldier;