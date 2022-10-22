// TODO: Include packages needed for this application
const  inquirer = require('inquirer');
const fs = require('fs');
const generateReadme = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
// const questions = [];

inquirer
  .prompt([
    {
      type: 'input',
      message: 'Project name: ',
      name: 'title',
    },
    {
      type: 'input',
      message: 'Description of your project: ',
      name: 'description',
    },
    {
      type: 'input',
      message: 'Provide instructions and examples for use. Include screenshots as needed.',
      name: 'usage',
    },
    {
      type: 'list',
      message: 'Choose your license.',
      name: 'license',
      choices: [
        {value: 'Apache 2.0'},
        {value: 'BSD 3-Clause'},
        {value: 'GNU LGPL v3'},
        {value: 'MIT'},
        {value: 'Mozilla Public License 2.0'},
        {value: 'None'},
      ]
    },
    {
      type: 'input',
      message: 'Who are the contributors for this project?',
      name: 'contributors'
    },
    {
      type: 'input',
      message: 'Provide tests for project, and explain how to test.',
      name: 'test'
    },
    {
      type: "input",
      message: "Enter your GitHub username: ",
      name: "username",
    },
    {
      type: "input",
      message: "Enter your email: ",
      name: "email"
    }
  ])
  .then((data) => {
    // TODO: Create a function to write README file
    const filename = data.title.replace(' ', "").toLowerCase()
    fs.writeFile(`${filename}.md`, generateReadme(data), (err) =>
        err ? console.error(err) : console.log("Thanks! Your Professional Readme is generated"))
})

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
