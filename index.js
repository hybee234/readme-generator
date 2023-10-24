//--------------------//
//- Global Variables -//
//--------------------//
var githubtest = ""; 
var badge = "";
var licenseBody = ""

//---------------------//
//- Required packages -// 
//---------------------//
const fs = require('fs');
const inquirer = require('inquirer');
const licenseBadge = require('./utils/licenseSection.js');



//------------------------------------//
//- Constant used to generate ReadMe -//
//------------------------------------//

//Only pass through values that will be used verbatim in responses to questions)
//All other variables need to be global variables

const generateReadme = ({title, description, installation, usage, license, contributing, testing, github, email }) =>
`

# Messing around

My GitHub username is ${github}
  ${githubtest}

License badge test:

<a name="readme-top"></a>

# ${title} 

${badge}

## Description

${description}

- What was your motivation?
- Why did you build this project? (Note: the answer is not "Because it was a homework assignment.")
- What problem does it solve?
- What did you learn?

What is the application and what does it do?

## Table of contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Testing](#testing)
- [Questions](#questions)

## Installation

${installation}

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Usage

${usage}

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

Please contact me via below methods with your questions

- GitHub Username: ${github}
- Email: ${email}
 
`;


//---------------------------//
//- Prompts to the end user =//
//---------------------------//

inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: 'Title - What is the title of your project?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Description - provide a short description of your application (What is it? What does it do? What problem(s) does it solve? Any relevant background information to include?)',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Installation intructions - How does one get to the starting screen? (Consider any platforms or pre-requisites required, what set up/installation is required)',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Usage Information - How does an end-user use your application?',
    },
    {
      type: 'list',
      name: 'license',
      message: 'License - which license applies to your repository?',
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
      message: 'Contribution Guidelines - What guidelines  should be developer community to be aware of? (consider error reporting, feature development, management of repository (forking vs cloning), pull requests, issue logging)',
    },
    {
      type: 'input',
      name: 'testing',
      message: 'Test Instrcutions - detail tests required to validate that the application is running as expcted. (Use the structure: "validate that [when these steps occur], that [expected result happens]")'
    },
    {
      type: 'input',
      name: 'github',
      message: 'What is your GitHub Username?',
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is the best email to be contacted about your project?',
    },

  ])
 
  //-----------------------//
  //- Process all answers -//
  //-----------------------//
  
  .then((answers) => {
    

    //Assess response to github username - set the value of githubtest based on whether github is blank (declare githubtest as a global variable so that it can be used in the readme template in generateReadme())
    if (answers.github) {
      githubtest = `My GitHub username is ${answers.github} and this was dynamically inserted`
      console.log (githubtest)
  } else {
    console.log ("github is blank")
    githubtest = `github is null/undefined ... do something to remove  this section`
    console.log (githubtest)
  };

  // Call badge function in licenseSection.js to provide badge URL (store as "badge" global variable)
  badge = licenseBadge.badge(answers.license)
 
  // Call licenseBody function in licenseSection.js to provide text for license body (store as "licenseBody" global variable)
  // Passes through license resposne and the badge details determined above
  licenseBody = licenseBadge.licenseBody(answers.license, badge)

//-----------------------------------//
//- Function - Generate README file -//
//-----------------------------------//

  const readmeContent = generateReadme(answers);
    fs.writeFile('README OUTPUT.MD', readmeContent, (err) =>
      err ? console.log(err) : console.log('Successfully created README OUTPUT.md')
    );
  });













// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
