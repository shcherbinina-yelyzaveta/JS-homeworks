const Soldier = require('./soldier');

function Heavy(name) {
    Soldier.call(this, name);
}

Heavy.prototype = Object.create(Soldier.prototype);

Heavy.prototype.takeDamage = function (amount) {
    amount = Math.round(amount * 0.8);
    Soldier.prototype.takeDamage.call(this, amount);
};

Heavy.prototype.machineGunAttack = function (unit, amountOfShots) {
    let damage = 0;
    if (this.isAlive() && unit.isAlive()) {
        for (let i = 1; i <= amountOfShots; i++) {
            damage += this.handAttack(unit);
        }
    }

    return damage;
};

module.exports = Heavy;