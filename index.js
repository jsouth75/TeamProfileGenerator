const inquirer = require("inquirer");
const Employee = require('./lib/employee')
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const fs = require("fs");
const path = require("path");
const OUTPUT_DIR = path.resolve(__dirname, "dist")
const outputTeam = path.join(OUTPUT_DIR, "myTeam.html");
const createdTeam = require('./src/create_myTeam');
const myTeam = [];

// Prompted with questions
const startProgram = () => {
    inquirer.prompt([
        {
            message: "What would you like to do?",
            name:"option",
            type: "list",
            choices: ["Add Manager", "Add Engineer", "Add Intern", "Finished building My Team"]
        },
        ]).then(answers => {
            switch (answers.option) {
                case "Add Manager":
                    managerMenu();
                    break;
                case "Add Engineer":
                    engineerMenu();
                    break;
                case "Add Intern":
                    internMenu();
                    break;
                case "Finished building My Team":
                    completeMyTeam();
            }
        });
    };

// Prompted questions when user selects Add Manager
    const managerMenu = () => {
        console.log(`Add Manager`);
        return inquirer.prompt([
        {
            message: "What is the manager's name?",
            name: "managerName",
            type: 'input',
        },
        {
            message: "What is the manager's ID?",
            name: "managerId",
            type: 'input',
        },
        {
            message: "What is the manager's email?",
            name: "managerEmail",
            type: 'input',
        },
        {
            message: "What is the manager's office Number?",
            name: "officeNumber",
            type: 'input',
        },

    ]).then(answers => {
        console.log(answers);
        const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.officeNumber);
        myTeam.push(manager);
        startProgram();
    })
    };

// Prompted questions when user selects Add Engineer
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
            startProgram();
        })
    };

// Prompted questions when user selects Add Intern
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
                startProgram();
            })
    };

// Team is created when "Finish building my Team" is selected
    const completeMyTeam = () => {
        console.log('My Team is complete!!!');
        if (!fs.existsSync(OUTPUT_DIR)) {
            fs.mkdirSync(OUTPUT_DIR)
        }
        fs.writeFileSync(outputTeam, createdTeam(myTeam), "utf-8");
    }
    

startProgram();

