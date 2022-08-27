
const createTeam = (myTeam) => {
    const html = [];
    const createMgr = manager => {
        let mgrFile = ` 
        <div class="card" style="width: 18rem">
        <div class="card-header">${manager.name} <br>
        <i class="fa-solid fa-mug-hot"></i>Manager
        </div>
        <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${manager.id}</li>
        <li class="list-group-item">Email: <span id='email'>
        <a href="maiilto:${manager.email}">${manager.email}</a>
        </span>
        </li>
        <li class="list-group-item">Office Number: ${manager.officeNumber}</li>
        </ul>
        </div>
        `;
            html.push(mgrFile);
    }
    const createEng = engineer => {
        let engFile = `
        <div class="card" style="width: 18rem">
        <div class="card-header">${engineer.name} <br>
        <i class="fa-solid fa-glasses"></i>Engineer
        </div>
        <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${engineer.id}</li>
        <li class="list-group-item">Email: <span id="email">
        <a href="mailto:${engineer.email}">${engineer.email}</a>
        </span></li>
        <li class="list-group-item">GitHub username: 
        <a target = '_blank' href="https://github.com/${engineer.github}">${engineer.github}</a>
        </li>
        </ul>
        </div>
        `;
            html.push(engFile);
    }

    const createIntern = intern => {
        let internFile = `
        <div class="card" style="width: 18rem">
        <div class="card-header">${intern.name} <br>
        <i class="fa-solid fa-user-graduate"></i>Intern
        </div>
        <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${intern.id}</li>
        <li class="list-group-item">Email: <span id="email">
        <a href="mailto:${intern.email}">${intern.email}</a>
        </span></li>
        <li class="list-group-item">School: ${intern.school}</li>
        </ul>
        </div>
        `;
            html.push(internFile);
    }

    for (let i = 0; i < myTeam.length; i++) {
        if (myTeam[i].getRole() === "Manager") {
            createMgr(myTeam[i]);
        }
        if (myTeam[i].getRole() === "Engineer") {
            createEng(myTeam[i]);
        }
        if (myTeam[i].getRole() === "Intern") {
            createIntern(myTeam[i]);
        }
    }

    return html.join('');
}

module.exports = myTeam => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" 
            integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" 
            crossorigin="anonymous">
        <script src='https://kit.fontawesome.com/a076d05399.js' crossorigin='anonymous'></script>
        <link rel="stylesheet" href="./style.css">
        <title>My Team Profile</title>
    </head>
    <body>
        
        <div class="container-fluid row col-12 jumbotron mb-3">
            <header>
                 <h1 class="text-center">My Team</h1>
            </header>   
        </div>

        <main> ${createTeam(myTeam)} </main>
    
    </body>
    </html>
    `;
}