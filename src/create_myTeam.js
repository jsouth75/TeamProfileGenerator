const Engineer = require("../lib/engineer");
const Manager = require("../lib/manager");

const createTeam = (myTeam) => {
    const html = [];
    const createMgr = Manager => {
        let mgrFile = 
            <div class="card" style="width: 18rem;">
                <div class="card-header">${Manager.name}
                    <i class="fas fa-mug-hot"></i>Manager
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${Manager.id}</li>
                    <li class="list-group-item">Email: <span id='email'>
                        <a href="maiilto:${manager.email}">${Manager.email}</a>
                        </span>
                    </li>
                    <li class="list-group-item">Office Number: ${Manager.officeNumber}</li>
                </ul>
            </div>
            html.push(mgrFile);
    }
    const createEng = Engineer => {
        let engFile =
            <div class="card" style="width: 18rem;">
                <div class="card-header">
                    <i class="fas fa-mug-hot"></i>Engineer
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${Engineer.id}</li>
                    <li class="list-group-item">Email: <span id="email">
                        <a href="mailto:${engineer.email}">${Engineer.email}</a>
                        </span></li>
                    <li class="list-group-item">GitHub username: 
                        <a target = '_blank' href="https://github.com/${engineer.github}">${Engineer.github}</a>
                    </li>
                </ul>
            </div>
    }
    const createIntern = Intern => {
        <div class="card" style="width: 18rem;">
            <div class="card-header">
                <i class="fas fa-mug-hot"></i>Intern
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${Intern.id}</li>
                <li class="list-group-item">Email: <span id="email">
                        <a href="mailto:${intern.email}">${Intern.email}</a>
                        </span></li>
                <li class="list-group-item">School: ${Intern.school}</li>
            </ul>
        </div>
    }
}