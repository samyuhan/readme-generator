// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

function generate(data) {
    return `# ${data.title}
![license](https://img.shields.io/badge/license-${data.license}-blue)](https://shields.io)
## Table of Contents 
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contribution](#contribution)
- [Testing](#testing)
- [Questions](#questions)
## Description
${data.description}
## Installation
${data.installation}
## Usage
${data.usage}
## License
${data.license}
## Contribution
${data.contribution}
## Testing
${data.test}
## Questions
- Github: [${data.github}](https://github.com/${data.github})
- Email: ${data.email}`;
  }

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the project title?"
    },
    {
        type: "input",
        name: "description",
        message: "What is the description of this project?"
    },
    {
        type: "input",
        name: "installation",
        message: "What are the installation instructions?"
    },
    {
        type: "input",
        name: "usage",
        message: "What is this project used for?"
    },
    {
        type: "input",
        name: "contribution",
        message: "What are the guidelines for contributing to this project?"
    },
    {
        type: "input",
        name: "test",
        message: "What are the instructions for testing this project?"
    },
    {
        type: 'checkbox',
        name: 'license',
        message: 'Which license is the application covered under?',
        choices: ['Apache', 'MIT', 'Mozilla-Public', 'GNU-General-Public', 'Common-Development-and Distribution', 'None']
    },
    {
        type: "input",
        name: "github",
        message: "What is your GitHub username?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your email?"
    }

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err)
            throw err;
        console.log('Your information is now on the README.md')
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function (input) {
        console.log(input);
        writeToFile("README.md", generate(input));
    });
}

// Function call to initialize app
init();
