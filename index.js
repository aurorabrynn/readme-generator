// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your app?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is the description of your app?',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the installation instructions of your app?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How would someone use your app?',
    },
    {
        type: 'input',
        name: 'license',
        message: 'Choose a license for your app.',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'How can other developers contribute to your app?',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'How do you run the tests of your app?',
    },
    {
        type: 'input',
        name: 'question',
        message: 'Where can users go to ask you questions?',
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    `
    # ${data.title}

    ## Description
    ${data.description}

    ## Installation
    ${data.installation}

    ## Usage
    ${data.usage}

    ## License
    ${data.license}

    ## How to Contribute
    ${data.contribute}

    ## Tests
    ${data.tests}

    ## Questions?
    ${data.question}
    `
};

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((data) => {
            const mdPageContent = writeToFile(data);

            fs.writeFile('README.md', mdPageContent, (err =>
                err ? console.log(err) : console.log('Successfully created README.md!')
            ))
        })
}

// Function call to initialize app
init();
