// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const promptUser = () => {
    return inquirer.prompt(
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
                    'GNU GPL v3',
                    'Apache 2',
                    'BSD 3-Clause',
                    'None'
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
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
    promptUser().then(userAnswers => {
        console.log('Writing README');
        writeToFile(`${userAnswers.title}.md`, generateMarkdown({ ...userAnswers }));
    });
}

// Function call to initialize app
init();

