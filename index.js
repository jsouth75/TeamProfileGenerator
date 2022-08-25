const inquirer = require("inquirer");
const Employee = require('./lib/employee')
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const fs = require("fs");
const path = require("path");
const myTeam = [];

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
                validate: engineerName => {
                    if (engineerName) {
                        return true;
                    } else {
                        console.log('Please enter a name for new engineer')
                        return false;
                    }
                }
            },
            {
                message: "Please enter the ID?",
                name: "engineerId",
                type: 'input',
                validate: engineerId => {
                    if (engineerId) {
                        return true;
                    } else {
                        console.log('Please enter an ID.');
                        return false;
                    }
                }
            },
            {
                message: "Please enter an email address?",
                name: "engineerEmail",
                type: 'input',
                validate: engineerEmail => {
                    if (engineerEmail) {
                        return true;
                    } else {
                        console.log('Please enter an email.');
                        return false;
                    }
                }
            },
            {
                message: "Enter the GitHub username?",
                name: "githubUsername",
                type: 'input',
                validate: githubUsername => {
                    if (githubUsername) {
                        return true;
                    } else {
                        console.log('Please enter a GitHub username.');
                        return false;
                    }
                }
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
                    validate: internName => {
                        if (internName) {
                            return true;
                        } else {
                            console.log('Please enter a name for new intern')
                            return false;
                        }
                    }
                },
                {
                    message: "Please enter the ID?",
                    name: "internId",
                    type: 'input',
                    validate: internId => {
                        if (internId) {
                            return true;
                        } else {
                            console.log('Please enter an ID.');
                            return false;
                        }
                    }
                },
                {
                    message: "Please enter an email address?",
                    name: "internEmail",
                    type: 'input',
                    validate: internEmail => {
                        if (internEmail) {
                            return true;
                        } else {
                            console.log('Please enter an email.');
                            return false;
                        }
                    }
                },
                {
                    message: "What School did the intern come from?",
                    name: "schoolName",
                    type: 'input',
                    validate: schoolName=> {
                        if (schoolName) {
                            return true;
                        } else {
                            console.log('Please enter a school name.');
                            return false;
                        }
                    }
                },
            ]).then(answers => {
                console.log(answers);
                const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.schoolName);
                myTeam.push(intern);
                mainMenu();
            })
        };

        const completeMyTeam = () => {
            console.log('Building My Team!!!');
            if (!fs.existsSync(OUTPUT_DIR)) {
                fs.mkdirSync(OUTPUT_DIR)
            }
            fs.writeFileSync(outputPath, profilePage, "utf-8");
        }
    

startProgram()
