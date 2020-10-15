const fs = require("fs");
const inquirer = require("inquirer")
const util = require("util");
const writeFileAsync = util.promisify(fs.writeFile);
// array of questions for user
const questions = ["What is the Title of the application?",
"Write a short description of what your application does: ",
"How can users install your application?",
"How can the user interact with your application?",
"Where can the user find the License information about your application?",
"Who contributed toward this application?",
"Please include any data about testing this application: ",
"Please list any Frequently asked questions: "
];
async function userQuestions(){
  inquirer.prompt([
    {
      type: "input",
      message: questions[0],
      name: "title"
    },
    {
      type: "input",
      message: questions[1],
      name: "description"
    },
    {
      type: "input",
      message: questions[2],
      name: "install"
    },
    {
      type: "input",
      message: questions[3],
      name: "usage"
    },
    {
      type: "input",
      message: questions[4],
      name: "License"
    },
    {
      type: "input",
      message: questions[5],
      name: "contributors"
    },
    {
      type: "input",
      message: questions[6],
      name: "tests"
    },
    {
      type: "input",
      message: questions[7],
      name: "faqs"
    },
  ]).then(function(response){
    let myReadme = 
`
##################################${response.title}######################################
* ${response.description}
#########################################################################################
* Table of Contents
  1. Installation
  2. Usage
  3. License
  4. Contributors
  5. Testing
  6. FAQs
#########################################################################################
* Installation
${response.install}
#########################################################################################
* Usage
${response.usage}
#########################################################################################
* License
${response.License}
#########################################################################################
* Contributing
${response.contributors}
#########################################################################################
* Tests
${response.tests}
#########################################################################################
* Questions
${response.faqs}
`
writeFileAsync("README.md", myReadme, function(err) {
    console.log("Success!")
});
  })
}
userQuestions();