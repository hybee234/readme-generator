// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
//fs
//inquirer


const generateReadme = ({ name, location, github, linkedin }) =>
`   <h1>Hi! My name is ${name}</h1>
I am from ${location}.

My GitHub username is ${github}
LinkedIn: ${linkedin}

<a name="readme-top"></a>

# Example Project Readme File 

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description

Provide a short description explaining the what, why, and how of your project. Use the following questions as a guide:

- What was your motivation?
- Why did you build this project? (Note: the answer is not "Because it was a homework assignment.")
- What problem does it solve?
- What did you learn?

What is the application and what does it do?

The Weather dashboard has some other notable features
* Storage storage of search history to allow for quick searches
* Clear history button to remove previous searches
* The history section is hidden when there are no previous searches stored

This webpage was developed without a boiler plate

## Table of contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Contributing](#contributing)
- [Testing](#testing)
- [Questions](#questions)

## Installation

Cloning the repo is the only step required.

<p align="right">(<a href="#readme-top">back to top</a>)</p>


## Usage

<a name="URL"></a>
Link to deployed website is found here:
* https://hybee234.github.io/weather-dashboard/

index.html, script.js and style.css files can be opened in Visual Studio Code

<p align="right">(<a href="#readme-top">back to top</a>)</p>
    

## Credits

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## License
Please refer to the LICENSE in the repo.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Tests

### Application specific:

#### Responsive Design
* Validate that the webpage has a responsive design and scales for different screensizes

* Validate that the correct date displays when the page loads
* Validate that you are presented with 9 slots where tasks can be captured (9am - 5pm) - each slot representing an hour of the working dya
* Validate that, compared to the current time, slots in the past are grey, the current hour is red and future hours are green
* Validate that you are able to type into the main field in each hourly slot (i.e. enter a task)
* Validate that when you save the task for the hour, that the task remains when you refresh the page

### Developer practice tests:
* Validate that the application deployed at the live URL (<a href="#URL">Navigate to URL</a>)
* Validate that the webpage loaded without errors
* Validate that GitHub URL has been submitted
* Validate that GitHub repository contains application code
* Validate that the application resembles mock-up provided in the challenge instructions
* Validate that the GitHub repository has a unique name
* Validate that the GitHub repostiory followed be practice for class/id naming conventions, indentation, quality comments, etc
* Validate that the repository contains multiple descriptive commit messages
* Validate that the repository contains a quality README file with description, screenshot and link to deployed applications

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Questions?

If you have questions, please contact me:

- Email: test@gmail.com
- GitHUb Username: test123

 
 
 
 
        `;

inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?',
    },
    {
      type: 'input',
      name: 'location',
      message: 'Where are you from?',
    },
    {
      type: 'input',
      name: 'hobby',
      message: 'What is your favorite hobby?',
    },
    {
      type: 'input',
      name: 'food',
      message: 'What is your favorite food?',
    },
    {
      type: 'input',
      name: 'github',
      message: 'Enter your GitHub Username',
    },
    {
      type: 'input',
      name: 'linkedin',
      message: 'Enter your LinkedIn URL.',
    },
  ])
  .then((answers) => {
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
