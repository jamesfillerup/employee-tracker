const mysql = require('mysql2');
const inquirer = require('inquirer');
const consoleTable = require('console.table');
require('dotenv').config();
const listOptions = ['View all departments', 'View all roles', 'View all employees', 'Add a department', 'Add a role', 'Add a employee', 'Update employee role', 'Escape'];

//connect to database mysql
const db = mysql.createConnection(
    {
        host: 'localhost',

        //your mysql username,
        user: 'root',
        //your mysql password
        password: 'Rockclimb#369',
        database: 'employee-db'
    },
    console.log('Connected to the employee database')
);



function questionPrompt (){

  const questionMenu = [
    {
      type: 'list',
      name: 'options',
      message: 'What would you like to do?',
      choices: listOptions
    }
  ]

  inquirer.prompt(questionMenu)

  .then ((answers) => {
    switch (answers.options){
      case 'View all departments':
          viewDepartments();
        break;
        case 'View all roles':
          viewRoles ();
        break;
        case 'View all employees':
          viewEmployees();
        break;
        case 'Add a department':
          addDepartments();
        break;
        case 'Add a role':
          addRole();
        break;
        case 'Add a employee':
          addEmployee();
        break;
        case 'Update employee role':
          updateEmployee();
        break;
        case 'Escape':
          escape();
        break;
    }
  })
}

function viewDepartments (){
  console.log('show departments')
  
}
function viewRoles (){
  console.log('show Roles')
  
}
function viewEmployees (){
  console.log('show Employees')
  
}
function addDepartments (){
  console.log('add departments')
  
}
function addRole (){
  console.log('add Role')
  
}
function addEmployee (){
  console.log('add Employee')
  
}
function updateEmployee (){
  console.log('update employee')
  
}
function escape (){
  console.log('you have escaped')
  
}



