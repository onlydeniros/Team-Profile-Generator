const generateEngineer = function (engineer) {
    return `
<div class="col-4 mt-4">
    <div class="card h-100">
        <div class="card-header">
            <h3>${engineer.name}</h3>
            <h4>Engineer</h4><i class="fa fa-desktop"></i>
        </div>

        <div class="card-body">
        <p class="id"><span class="key">ID:</span> ${engineer.id}</p>
        <p class="email"><span class="key">Email:</span> <a href="mailto:${engineer.email}">${engineer.email}</a></p>
        <p class="github"><span class="key">Github:</span> <a href="https://github.com/${engineer.github}">${engineer.github}</a></p>
        </div>
    </div>
</div>
`;
}

const generateManager = function (manager) {
    return `
    <div class="col-4 mt-4">
        <div class="card h-100">
            <div class="card-header">
                <h3>${manager.name}</h3>
                <h4>Manager</h4><i class="fa fa-address-card"></i>
            </div>
    
            <div class="card-body">
            <p class="id"><span class="key">ID:</span> ${manager.id}</p>
            <p class="email"><span class="key">Email:</span> <a href="mailto:${manager.email}">${manager.email}</a></p>
            <p class="office"><span class="key">Office Number:</span> ${manager.officeNumber}</p>
            </div>
        </div>
    </div>
    `;
}

const generateIntern = function (intern) {
    return `
    <div class="col-4 mt-4">
        <div class="card h-100">
            <div class="card-header">
                <h3>${intern.name}</h3>
                <h4>Intern</h4><i class="fa fa-graduation-cap"></i>
            </div>
    
            <div class="card-body">
            <p class="id"><span class="key">ID: </span>${intern.id}</p>
            <p class="email"><span class="key">Email:</span> <a href="mailto:${intern.email}">${intern.email}</a></p>
            <p class="school"><span class="key">School:</span> ${intern.school}</p>
            </div>
        </div>
    </div>
    `;
}

uploadHTML = data => {
    pageArray = [];

    for (let i = 0; i < data.length; i++) {
        const employee = data[i];
        const role = employee.getRole();

        if (role === 'Manager') {
            const managerInfo = generateManager(employee);
            pageArray.push(managerInfo)
        }

        if (role === 'Engineer') {
            const engineerInfo = generateEngineer(employee);
            pageArray.push(engineerInfo)
        }

        if (role === 'Intern') {
            const internInfo = generateIntern(employee);
            pageArray.push(internInfo)
        }

    }
    const collectInfo = pageArray.join('')

    const teamUpload = generateInfoHtml(collectInfo);
    return teamUpload;


}




const generateInfoHtml = function (collectInfo) {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile</title>
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm" crossorigin="anonymous"/>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <header>
            <nav class="navbar" id="navbar">
                <span class="navbar-brand mb-0 h1 w-100 text-center" id="navbar-text">Team Profile</span>
            </nav>
        </header>
        <main>
            <div class="container">
                <div class="row justify-content-center" id="info-cards">
                ${collectInfo}
                </div>
            </div>
        </main>

    </body>

    </html>

    `
}

module.exports = uploadHTML;