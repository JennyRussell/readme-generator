const inquirer = require("inquirer");
const fs = require("fs");


inquirer
    .prompt([{
            type: 'input',
            name: 'title',
            message: "What is the name of your application?"
        }, {
            type: 'input',
            name: 'description',
            message: "Please write a brief description of your application."
        },
        {
            type: 'input',
            name: 'installation',
            message: "What are the installation instructions for your application?"
        },
        {
            type: 'input',
            name: 'usage',
            message: "Please describe the Usage of your application"
        },
        {
            type: 'input',
            name: 'contributing',
            message: "Please provide instructions on how you would like others to contribute to your application"
        },
        {
            type: 'list',
            name: 'license',
            message: "Please select a type of license you would like to use from the drop-down.",
            choices: ['MIT', 'Apache 2.0 License', 'Boost Software License 1.0', 'BSD 3-Clause License', 'BSD 2-Clause License', 'Eclipse Public License 1.0'],
            default: 'MIT'

        },
        {
            type: 'input',
            name: 'tests',
            message: "Please explain your testing procedures."
        },
        {
            type: 'input',
            name: 'questions',
            message: "How to reach you for additional questions?",


        },
        {
            type: 'input',
            name: 'github',
            message: "What is your GitHub username?",


        },
        {
            type: 'input',
            name: 'email',
            message: "What is your email?",


        },

    ])
    .then(({
        title,
        description,
        installation,
        usage,
        contributing,
        license,
        tests,
        questions,
        github,
        email

    }) => {
        const readmeTemplate =
            `## ${title} ##

         # Table of Contents
        ---------------------
        
         * [Description](#description)
         * [Installation](#installation)
         * [Usage](#usage)
         * [Contributing](#contributing)
         * [License](#license)
         * [Tests](#tests)
         * [Questions](#questions)
        
        # Description
        ---------------------
        ${description}

        # Installation
        ---------------------
        ${installation}

        # Usage
        ---------------------
        ${usage}

        # Contributing
        ---------------------
        ${contributing}

        # License
        ---------------------
        ${license}

        # Tests
        ---------------------
        ${tests}

        # Questions
        ---------------------
        ${questions}
        ${email}
        ${github}`;

        generateFile(title, readmeTemplate);
    });

function generateFile(fileName, data) {
    fs.writeFile(`./${fileName.toLowerCase().split(' ').join('')}.md`, data, (err) => {
        if (err) {
            console.log(err)
        }
        console.log('README generated successfully!');
    })
}