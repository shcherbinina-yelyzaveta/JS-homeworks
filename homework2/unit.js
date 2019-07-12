function Unit(name) {
    this._health = Unit.MAX_HEALTH;
    this._name = name;
    this._level = 1;
    this._xp = 0;
}

Unit.MAX_HEALTH = 100;

Unit.prototype.getName = function () {
    return this._name;
};

Unit.prototype.getLevel = function () {
    return this._level;
};

Unit.prototype.getHealth = function () {
    return this._health;
};

Unit.prototype.getXp = function () {
    return this._xp;
};

Unit.prototype.isAlive = function () {
    return this._health > 0;
};

Unit.prototype.addHealth = function (amount) {
    if (this.isAlive()) {
        if ((this.getHealth() + +amount) <= Unit.MAX_HEALTH)
            this._health += +amount;
        else this._health = Unit.MAX_HEALTH;
    }
};

Unit.prototype.takeDamage = function (amount) {
    this._health -= amount;
    if (this.isAlive())
        this.earnExperience(500);
};

Unit.prototype.earnExperience = function (amount) {
    const extraXp = (this.getLevel() > 1) ? Math.round((amount - amount * this.getLevel() * 0.1)) : amount;
    this._xp += extraXp;
    while (this.getXp() > 1000) {
        this.levelUp();
        this._xp -= 1000;
    }
};

Unit.prototype.levelUp = function () {
    this._level++;
};

Unit.prototype.printInfo = function () {
    if (this.isAlive())
        console.log("Игрок " + this.getName() + ": уровень - " + this.getLevel() + ", опыт - " + this.getXp() +
            ", здоровье - " + this.getHealth());
    else
        console.log("Игрок " + this.getName() + " убит");
};

module.exports = Unit;