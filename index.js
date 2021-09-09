// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const promptUser = () => {
    inquirer.prompt(
        [
            {
                type: 'input',
                name: 'title',
                message: 'What is the title of your project?'
            },
            {
                type: 'input',
                name: 'description',
                message: 'Give a description of your project'
            },
            {
                type: 'input',
                name: 'installation',
                message: 'Please explain installation instructions for your project'
            },
            {
                type: 'input',
                name: 'usage',
                message: 'Please enter usage instructions for your application'
            },
            {
                type: 'list',
                name: 'license',
                message: 'Which license would you like to add to your project?',
                choices: [
                    'MIT',
                    'Apache',
                    'Apache 2',
                    'BSD'
                ]
            },
            {
                type: 'input',
                name: 'contributing',
                message: 'If you created an application or package you would like other developers to contribute to, please include details here.'
            },
            {
                type: 'input',
                name: 'tests',
                message: 'Please include instructions on how to run the tests that are included in your application'
            },
            {
                type: 'input',
                name: 'github',
                message: 'Please enter your GitHub username.'
            },
            {
                type: 'input',
                name: 'email',
                message: 'Please enter your email address.'
            }
        ]
    )
    .then((answers) => {
        console.log(JSON.stringify(answers));
    });
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
// init();
promptUser();
