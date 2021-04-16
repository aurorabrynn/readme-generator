// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'github',
    message: 'What is your GitHub account?',
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email?',
  },
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
    type: 'list',
    name: 'license',
    message: 'Choose a license for your app.',
    choices: ["MIT", "Apache", "GPL", "None"],
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
  }
];

// Create a function to write README file
function writeToFile(fileName, data) {
  inquirer
    .prompt(questions)
    .then((data) => {
      fs.writeFile(`README.md`, generateMarkdown(data), (err) => {
        if (err) {
          throw err;
        }
      });
    }
    )
};
// Create a function to initialize app
function init() {
  writeToFile();
}

// Function call to initialize app
init()
