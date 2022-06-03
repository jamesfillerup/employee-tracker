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
        database: 'employee_db'
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
};

function viewDepartments (){
  console.log('show departments')
  db.query(`SELECT * FROM department`, (err, result) => {
    if (err) {
      console.log(err);
    }
    console.table(result);
    questionPrompt();
  })
};
function viewRoles (){
  console.log('show Roles')
  questionPrompt();
};
function viewEmployees (){
  console.log('show Employees')
  questionPrompt();
};
function addDepartments (){
  console.log('add departments')
  
  inquirer.prompt(
    [
      {
        type: 'input',
        name: 'addDepartmentName',
        message: `Please type the new department name`
      }      
    ]
  )
  .then((answers) =>{
    console.table(answers);
    
    db.query(`INSERT INTO department (name) 
    VALUES(?)`,[answers.addDepartmentName],(err, result) => {
      if (err) {
        console.log(err);
      }
      console.log('department added to database');
      questionPrompt();
    })
  })
  
};
function addRole (){
  console.log('add Role')
  
  inquirer.prompt(
    [
      {
        type: 'input',
        name: 'addTitle',
        message: `Please type the role title`,
      },
      {
        type: 'number',
        name: 'addSalary',
        message: `Please type the role salary`,
      },
      {
        type: 'number',
        name: 'addDepartmentID',
        message: `Please type the role's department ID`,
        choices: [1,2,3]
      }
    ]
  )
  questionPrompt();
};
function addEmployee (){
  console.log('add Employee')

  // connection.query("SELECT * FROM role", (err, pickRole) => {
  //   if (err) throw err;
  //   const roleChoice = [];
  //   pickRole.forEach(({ title, id }) => {
  //     roleChoice.push({
  //       name: title,
  //       value: id
  //     });
  //   });
  // });

  inquirer.prompt(
    [
      {
        type: 'input',
        name: 'addFirst',
        message: `What is the employee's first name?`,
      },
      {
        type: 'input',
        name: 'addLast',
        message: `What is the employee's last name?`,
      },
            {
        type: 'number',
        name: 'roleId',
        message: `What is the employee's role ID?`,
        choices: [1,2,3,4,5,6,7]
      },
      // {
      //   type: 'list',
      //   name: 'roleId',
      //   message: `What is the employee's role ID?`,
      //   choices: roleChoice
      // },
      {
        type: 'number',
        name: 'managerNumber',
        message: `What is the employee's manager's ID?`,
        choices: [3,5]
      }
    ]
  )
  .then((answers) => {
    console.table(answers);
    // connection.query(
    //     `INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES(?)`
    // )
    questionPrompt();
})
};



function updateEmployee (){
  console.log('update employee')
  questionPrompt();
};
function escape (){
  console.log('you have escaped')
  process.exit();
};



questionPrompt();
