// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

const generateHTML = ({ name, department, title}) =>
  `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <title>Document</title>
</head>
<body>
    <header>My Team</header>
    <div class="jumbotron jumbotron-fluid">
        <div class="card">
            <h1 class="display-4">${name}</h1>
                <p class="lead">Department: ${department}</p>
                <p class="lead">Title: ${title}</p>
                <h3><span class="badge badge-secondary">Contact Info</span></h3>
        </div>
    </div>
</body>
</html>`;

// Questions for user input
inquirer.prompt([
    {
        type: "input",
        name: "name",
        message: "What is the name of the team member you are looking for?"
    },
    {
        type: "input",
        name: "department",
        message: "What department are they in?"
    },
    {
        type: "input",
        name: "title",
        message: "What is their title?"
    },

])
.then((answers) => {
    const htmlPageContent = generateHTML(answers);

    fs.writeFile('index.html', htmlPageContent, (err) =>
      err ? console.log(err) : console.log('Successfully created file!')
    );
  });
