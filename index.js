const inquirer = require("inquirer")
const Manager = require('./manager')

const startProgram = () => {
    inquirer.prompt([
        {
            message: "What is the manager's name?",
            name: "newmgr",
            type: 'input'
        },
        {
            message: "What is the manager's ID?",
            name: "newmgrid",
            type: 'input'
        },
        {
            message: "What is the manager's email?",
            name: "newmgremail",
            type: 'input'
        },
        {
            message: "What is the manager's office Number?",
            name: "newmgroffice",
            type: 'input'
        },
    ]).then(answers => {
        mainMenu()
    })
}

const mainMenu = () => {
    inquirer.prompt([
        {
            message: "What would you like to do?",
            name:"option",
            type: "list",
            choices: ["Add Engineer", "Add Intern", "I am done adding"]
        }
    ]).then(answers => {
        if(answers.option == "Add Engineer") {
            //ask questoins of engineer, similar to the start program prompt
        }
    })
}

startProgram()