#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import chalkanimation from "chalk-animation";
const sleep = () => { return new Promise(resolve => setTimeout(resolve, 2000)); };
async function wellcome() {
    let rainbowTiyle = chalkanimation.rainbow("Welcome to the TypeScript calcultor!");
    await sleep();
    rainbowTiyle.stop();
}
await wellcome();
async function answers() {
    await inquirer.prompt([{
            message: chalk.bgGreenBright("Please enter your first_number"), type: "number", name: "first_number"
        },
        {
            message: chalk.blueBright("Please enter your second_number"), type: "number", name: "second_number"
        },
        {
            message: chalk.bgGreenBright("Please select your operators"), type: "list", name: "operator", choices: ["+", "-", "*", "/", "**", "%"],
        },
    ])
        .then((answer) => {
        if (answer.operator === "+") {
            console.log(chalk.redBright(` ${answer.first_number + answer.second_number} `));
        }
        else if (answer.operator === "-") {
            console.log(chalk.greenBright(` ${answer.first_number - answer.second_number} `));
        }
        else if (answer.operator === "*") {
            console.log(chalk.redBright(` ${answer.first_number * answer.second_number} `));
        }
        else if (answer.operator === "/") {
            console.log(chalk.greenBright(` ${answer.first_number / answer.second_number} `));
        }
        else if (answer.operator === "**") {
            console.log(chalk.blueBright(` ${answer.first_number ** answer.second_number} `));
        }
        else if (answer.operator === "%") {
            console.log(chalk.red(` ${answer.first_number % answer.second_number} `));
        }
        else {
            console.log(chalk.redBright(" please select correct operator"));
        }
    });
}
answers();
