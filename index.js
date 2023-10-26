//---------------------//
//- Required packages -// 
//---------------------//
const fs = require('fs');
const inquirer = require('inquirer');
const licenseBadge = require('./utils/licenseSection.js');

//--------------------//
//- Global Variables -//
//--------------------//
var badge = "";
var licenseBody = "";
var installCommand = "";
var usageCommand = "";

//------------------------------------//
//- Constant used to generate ReadMe -//
//------------------------------------//

const generateReadme = ({title, description, installation, usage, contributing, testing, github, email }) =>

`
<a ID="readme-top"></a>

# <p style="text-align: center;">${title}</p>

${badge}

## Description

${description}

## Table of contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Testing](#testing)
- [Questions](#questions)

## Installation

${installation}

${installCommand}

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Usage

${usage}

${usageCommand}

<p align="right">(<a href="#readme-top">back to top</a>)</p>
    
## License

${licenseBody}

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Contributing

${contributing}

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Testing

${testing}

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Questions

- Contact me via email ${email}

- Visit my GitHub page: <a href="https://github.com/${github}"> ${github} </a>
  
<p align="right">(<a href="#readme-top">back to top</a>)</p>
`;

//---------------------------//
//- Prompts to the end user =//
//---------------------------//

inquirer
    .prompt([
        {
            type: 'input',
            name: 'title',
            message: 'Title: What is your application called?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Description: Provide a short description of your application (What is it? What problem(s) does it solve? How does it do this?)',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Installation intructions: How is your application set up for use? (Consider pre-requisites and set up required)',
        },
        {
            type: 'input',
            name: 'installation_command',
            message: 'Installation intructions: What command is run to install dependencies? (Leave blank if none)',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Usage Information - How is your application used?',
        },
        {
            type: 'input',
            name: 'usage_command',
            message: 'Usage Information - What command is run to execute the application? (leave blank if none)',
        },
        {
            type: 'list',
            name: 'license',
            message: 'License - which license applies to your application?',
            choices: [
                {name: "Apache License 2.0", value: "Apache License 2.0"},
                {name: "MIT License", value: "MIT License"},
                {name: "BSD 2-Clause 'Simplified' License", value: "BSD 2-Clause 'Simplified' License"},
                {name: "BSD 3 - Clause 'New' or 'Revised' License", value: "BSD 3 - Clause 'New' or 'Revised' License"},
                {name: "Boost Software License 1.0", value: "Boost Software License 1.0"},
                {name: "Creative Commons Zero v1.0 Universal", value: "Creative Commons Zero v1.0 Universal"},
                {name: "Eclipse Public License 2.0", value: "Eclipse Public License 2.0"},
                {name: "GNU General Public License v3.0", value: "GNU General Public License v3.0"},
                {name: "GNU Affero General Public License v3.0", value: "GNU Affero General Public License v3.0"},
                {name: "GNU General Public License v2.0", value: "GNU General Public License v2.0"},
                {name: "GNU Lesser General Public License v2.1", value: "GNU Lesser General Public License v2.1"},
                {name: "Mozilla Public License 2.0", value: "Mozilla Public License 2.0"},
                {name: "The Unlicence", value: "The Unlicence"},
                {name: "None", value: "None"},
            ]
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'Contribution Guidelines - What guidelines do you have? (Consider error reporting, feature development, management of repository (forking vs cloning), pull requests, issue logging)',
        },
        {
            type: 'input',
            name: 'testing',
            message: 'Test Instructions - provide instructions on any tests or test files available (Provide execution steps, any required packages)' ,
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email?',
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is your GitHub Username?',
        },

    ])
 
    //-----------------------//
    //- Process all answers -//
    //-----------------------//
    
    .then((answers) => {
        
    // Description

    // Installation
        if (answers.installation_command === "") {
            installCommand = ""
        } else {
            installCommand = `
Run this command to set up the application:
~~~
${answers.installation_command}
~~~
            `       
        };
    // Usage
    if (answers.usage_command === "") {
        usageCommand = ""
    } else {
        usageCommand = `
Run this command the execute the application:
~~~
${answers.usage_command}
~~~
        `       
    };
    // License
        // License Badge -  Call badge function in licenseSection.js to provide badge URL (store as "badge" global variable)
    badge = licenseBadge.badge(answers.license)
    
        // License Body - Call licenseBody function in licenseSection.js to provide text for license body (store as "licenseBody" global variable)
        // Passes through license response and the badge details determined above
    licenseBody = licenseBadge.licenseBody(answers.license, badge)

//-----------------------------------//
//- Function - Generate README file -//
//-----------------------------------//

const readmeContent = generateReadme(answers);
    // Ensure there is an 'output' folder to store the readme file in.
    fs.mkdir('./output', { recursive: true }, (err) => { err ? console.log(err) : 1
    });
    // Create the Readme File
    fs.writeFile('./output/README OUTPUT.MD', readmeContent, (err) =>
    err ? console.log(err) : console.log('Successfully created README OUTPUT.md - stored in output folder')
    );
});
