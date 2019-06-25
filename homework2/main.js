const Doctor = require('./doctor');
const Soldier = require('./soldier');
const Heavy = require('./heavy');

function attack(unitWho, unitWhom) {
    if (unitWho.isAlive() && unitWhom.isAlive()) {
        if (unitWho instanceof Heavy) {
            console.log("================= Атака =================");
            power = unitWho.machineGunAttack(unitWhom, Math.floor(Math.random() * 4 + 1));
            console.log(unitWho.getName() + " нанес урон " + unitWhom.getName() + " мощностью " + power + " ед.");
            console.log("-----------------------------------------");
            unitWho.printInfo();
            unitWhom.printInfo();
        } else if (unitWho instanceof Soldier) {
            console.log("================= Атака =================");
            power = unitWho.handAttack(unitWhom);
            console.log(unitWho.getName() + " нанес урон " + unitWhom.getName() + " мощностью " + power + " ед.");
            console.log("-----------------------------------------");
            unitWho.printInfo();
            unitWhom.printInfo();
        } else {
            console.log("Этот игрок не может атаковать");
        }
    }
}

function healing(unitWho, unitWhom) {
    if (unitWho.isAlive() && unitWhom.isAlive()) {
        if (unitWho instanceof Doctor) {
            console.log("================ Лечение ================");
            power = unitWho.heal(unitWhom);
            console.log(unitWho.getName() + " вылечил " + unitWhom.getName() + " на " + power + " ед. здоровья");
            console.log("-----------------------------------------");
            unitWho.printInfo();
            unitWhom.printInfo();
        } else {
            console.log("Этот игрок не может лечить");
        }
    }
}

var power;
var winner;
doctor = new Doctor("Айболит");
soldier = new Soldier("Заец");
heavy = new Heavy("Волк");

console.log("============== Начало битвы ==============");
doctor.printInfo();
soldier.printInfo();
heavy.printInfo();

while (soldier.isAlive() && heavy.isAlive()) {
    attack(soldier, heavy);
    attack(heavy, soldier);
    healing(doctor, soldier);
}

console.log("============== Конец битвы ===============");
winner = soldier.isAlive() ? soldier : heavy;
console.log("В битве победил " + winner.getName());