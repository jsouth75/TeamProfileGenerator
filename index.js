const inquirer = require("inquirer");
const Employee = require('./lib/employee')
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const fs = require("fs");
const path = require("path");
const createdTeam = require('./src/create_myTeam');
const createDir = path.resolve(__dirname, "dist");
const outputTeam = path.join(createDir, "myTeam.html");

const myTeam = [];

const startProgram = () => {
    inquirer.prompt([
        {
            message: "What is the manager's name?",
            name: "newMgr",
            type: 'input',
        },
        {
            message: "What is the manager's ID?",
            name: "newMgrId",
            type: 'input',
        },
        {
            message: "What is the manager's email?",
            name: "newMgrEmail",
            type: 'input',
        },
        {
            message: "What is the manager's office Number?",
            name: "newMgrOffice",
            type: 'input',
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
            choices: ["Add Engineer", "Add Intern", "Finished building My Team"]
        }
    ]).then(answers => {
        switch (answers.option) {
            case "Add Engineer":
                engineerMenu();
                break;
            case "Add Intern":
                internMenu();
                break;
            default:
                completeMyTeam();
        }
    });
};

    const engineerMenu = () => {
        console.log(`Add Engineer`);
        return inquirer.prompt([
            {
                message: "What is the engineer's name?",
                name: "engineerName",
                type: "input",
            },
            {
                message: "Please enter the ID?",
                name: "engineerId",
                type: 'input',
            },
            {
                message: "Please enter an email address?",
                name: "engineerEmail",
                type: 'input',
            },
            {
                message: "Please enter the GitHub username?",
                name: "githubUsername",
                type: 'input',
            },

        ]).then(answers => {
            console.log(answers);
            const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.githubUsername);
            myTeam.push(engineer);
            mainMenu();
        })
    };

    const internMenu = () => {
        console.log(`Add Intern`);
        return inquirer.prompt([
            {
                message: "What is the intern's name?",
                name: "internName",
                type: "input",
            },
            {
                message: "Please enter the ID?",
                name: "internId",
                type: 'input',
            },
            {
                message: "Please enter an email address?",
                name: "internEmail",
                type: 'input',
            },
            {
                message: "What School did the intern come from?",
                name: "schoolName",
                type: 'input',
            },

        ]).then(answers => {
                console.log(answers);
                const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.schoolName);
                myTeam.push(intern);
                mainMenu();
            })
        };

        const completeMyTeam = () => {
            console.log('My Team is complete!!!');
            if (!fs.existsSync(createDir)) {
                fs.mkdirSync(createDir)
            }
            fs.writeFileSync(outputTeam, createdTeam(myTeam), "utf-8");
        }
    

startProgram()
