// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown"); /*  */
// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "Enter project title.",
  },
  {
    type: "input",
    name: "description",
    message: "Enter project description",
  },
  {
    type: "input",
    name: "installation",
    message: "Enter installation instructions for project.",
  },
  {
    type: "input",
    name: "usage",
    message: "Enter usage info for project.",
  },
  {
    type: "list",
    name: "license",
    message: "Choose a license for this project",
    choices: ["MIT", "Apache 2.0", "GNU 3.0", "BDS 3"],
  },
  {
    type: "input",
    name: "contribute",
    message: "Enter the how to contribute instructions.",
  },
  {
    type: "input",
    name: "tests",
    message: "Enter test info",
  },
  {
    type: "input",
    name: "gituser",
    message: "Enter GitHub username",
  },
  {
    type: "input",
    name: "email",
    message: "Enter email",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log("Successfully completed")
  );
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((data) => {
    console.log(data);
    writeToFile("README.md", generateMarkdown(data));
  });
}

// Function call to initialize app
init();
