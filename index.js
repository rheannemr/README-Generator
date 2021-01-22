// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const {writeFile} = require('fs');
const generateMarkdown = require('./generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Project title:',
        validate: (input) => !!input.length
    },
    {
        type: 'input',
        name: 'description',
        message: 'Project description:'
    },
    {
        type: 'input',
        name: 'link',
        message: 'Link to deployed application:'
    },
    {
        type: 'input',
        name: 'prerequisites',
        message: 'Prerequisites:'
    },
    {
        type: 'input',
        name: 'credit',
        message: 'Contributors:'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How to install:'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How to use application:'
    },
    {
        type: 'input',
        name: 'credit',
        message: 'Contributors:'
    },
    {
        type: 'input',
        name: 'username',
        message: 'Github username:'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Email address:'
    },
    {
        type: 'list',
        name: 'license',
        message: 'License used for project:',
        choices: ['MIT', 'Apache 2.0', 'Eclipse']
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    writeFile(fileName, data, (err) => console.log('error in write file:', err));
}

// TODO: Create a function to initialize app
async function init() {
    const answers = await inquirer.prompt(questions);
    console.log('answers are: ', answers);
    const markDown = generateMarkdown(answers);
    console.log('generated markdown: ', markDown);
    writeToFile(answers.title + '_README.md', markDown);
}

// Function call to initialize app
init();
