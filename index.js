// TODO: Include packages needed for this application
import inquirer from "inquirer";
import * as fs from "fs";

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
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

}

// TODO: Create a function to initialize app
function init() {
    
}

// Function call to initialize app
init();
