const inquirer = require("inquirer")
const fs = require("fs")
require('dotenv').config()

// console.log(process.env)

inquirer.prompt([
  {
    type: "input",
    message: "What is your name?",
    name: "name"
  },
  {
    type: "input",
    message: "Where are you from?",
    name: "location"
  },
  {
    type: "input",
    message: "What is your favorite color?",
    name: "color"
  },
  {
    type: "input",
    message: "What is your github username?",
    name: "github"
  },
]).then((answers) => {
  const htmlTemplate = `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
  </head>
  <body>
    <h1>Name: ${process.env.API_KEY}</h1>
    <h1>Name: ${answers.name}</h1>
    <h3>From: ${answers.location}</h3>
    <h3>Color: ${answers.color}</h3>
    <h3>Github: ${answers.github}</h3>
  
  </body>
  </html>`
  fs.writeFile(`${answers.name}.html`, htmlTemplate, (err) => {
    if (err) {
      throw err
    }
    console.log("success")
  })
})