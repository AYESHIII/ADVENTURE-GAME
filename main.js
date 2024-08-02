//#! user/bin/env node 
import inquirer from "inquirer";
import chalk from "chalk";
class Player {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
    fuelIncrease() {
        this.fuel = 100;
    }
}
class Opponent {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
}
let player = await inquirer.prompt([
    {
        name: "name",
        type: "input",
        message: "please enter your name",
    }
]);
let opponent = await inquirer.prompt([
    {
        name: "select",
        type: "list",
        message: " select your opponent",
        choices: ["Alien", "Skeleton", "Zombie"]
    }
]);
let p1 = new Player(player.name);
let o1 = new Opponent(opponent.select);
//skeleton
do {
    if (o1.name == "Skeleton") {
        let ask = await inquirer.prompt([
            {
                name: "opt",
                type: "list",
                message: "what would you like to do?",
                choices: ["Attack", "Drink portion", "Run for your live..."]
            }
        ]);
        if (ask.opt == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${o1.name} fuel is ${o1.fuel}`);
                if (p1.fuel <= 0) {
                    console.log(chalk.red.bold("YOU LOOSE! , BETTER LUCK NEXT TIME"));
                    break;
                }
            }
            if (num <= 0) {
                o1.fuelDecrease();
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${o1.name} fuel is ${o1.fuel}`);
                if (o1.fuel <= 0) {
                    console.log(chalk.green.bold("YOU WIN"));
                    break;
                }
            }
        }
        if (ask.opt == "Drink portion") {
            p1.fuelIncrease();
            console.log(chalk.green.bold(`you drink health portion your fuel is ${p1.fuel}`));
        }
        if (ask.opt == "Run for your live...") {
            console.log(chalk.red.bold("YOU LOOSE! , BETTER LUCK NEXT TIME"));
            break;
        }
    }
    //alien
    if (o1.name == "Alien") {
        let ask = await inquirer.prompt([
            {
                name: "opt",
                type: "list",
                message: "what would you like to do?",
                choices: ["Attack", "Drink portion", "Run for your live..."]
            }
        ]);
        if (ask.opt == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${o1.name} fuel is ${o1.fuel}`);
                if (p1.fuel <= 0) {
                    console.log(chalk.red.bold("YOU LOOSE! , BETTER LUCK NEXT TIME"));
                    break;
                }
            }
            if (num <= 0) {
                o1.fuelDecrease();
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${o1.name} fuel is ${o1.fuel}`);
                if (o1.fuel <= 0) {
                    console.log(chalk.green.bold("YOU WIN"));
                    break;
                }
            }
        }
        if (ask.opt == "Drink portion") {
            p1.fuelIncrease();
            console.log(chalk.green.bold(`you drink health portion your fuel is ${p1.fuel}`));
        }
        if (ask.opt == "Run for your live...") {
            console.log(chalk.red.bold("YOU LOOSE! , BETTER LUCK NEXT TIME"));
            break;
        }
    }
    //zombie
    if (o1.name == "Zombie") {
        let ask = await inquirer.prompt([
            {
                name: "opt",
                type: "list",
                message: "what would you like to do?",
                choices: ["Attack", "Drink portion", "Run for your live..."]
            }
        ]);
        if (ask.opt == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${o1.name} fuel is ${o1.fuel}`);
                if (p1.fuel <= 0) {
                    console.log(chalk.red.bold("YOU LOOSE! , BETTER LUCK NEXT TIME"));
                    break;
                }
            }
            if (num <= 0) {
                o1.fuelDecrease();
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${o1.name} fuel is ${o1.fuel}`);
                if (o1.fuel <= 0) {
                    console.log(chalk.green.bold("YOU WIN"));
                    break;
                }
            }
        }
        if (ask.opt == "Drink portion") {
            p1.fuelIncrease();
            console.log(`you drink health portion your fuel is ${p1.fuel}`);
        }
        if (ask.opt == "Run for your live...") {
            console.log(chalk.red.bold("YOU LOOSE! , BETTER LUCK NEXT TIME"));
            ;
            break;
        }
    }
} while (true);
