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

  db.query(`SELECT * FROM role`, (err, result) => {
    if (err) {
      console.log(err);
    }
    console.table(result);
    questionPrompt();
  })
};
function viewEmployees (){
  console.log('show Employees')

  db.query(`SELECT * FROM employee`, (err, result) => {
    if (err) {
      console.log(err);
    }
    console.table(result);
    questionPrompt();
  })
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
        type: 'list',
        name: 'addDepartmentID',
        message: `Please type the role's department ID`,
        choices: [1,2,3]
      }
    ]
  )
  .then((answers) =>{
    console.table(answers);
    
    db.query(`INSERT INTO role ( title, salary, department_id)
    VALUES(?,?,?)`,[answers.addTitle, answers.addSalary, answers.addDepartmentID],(err, result) => {
      if (err) {
        console.log(err);
      }
      console.log('role added to database');
      questionPrompt();
    })
  })
};
function addEmployee (){
  console.log('add Employee')

  // db.query("SELECT * FROM role", (err, pickRole) => {
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
        type: 'list',
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
        type: 'list',
        name: 'managerNumber',
        message: `What is the employee's manager ID?`,
        choices: [3,5]
      }
    ]
  )
  .then((answers) =>{
    console.table(answers);
    
    db.query(`INSERT INTO employee ( first_name, last_name, role_id, manager_id) 
    VALUES(?,?,?,?)`,[answers.addFirst, answers.addLast, answers.roleId, answers.managerNumber],(err, result) => {
      if (err) {
        console.log(err);
      }
      console.log('employee added to database');
      questionPrompt();
    })
  })
};



function updateEmployee (){
  console.log('update employee')
  db.query(`SELECT id, first_name, last_name from employee`, (err, res) => {
    if (err) throw new Error(err);

    const employees = res.map(e => ({
      name: e.first_name + ' ' + e.last_name,
      id: e.id
    }))

    db.query(`SELECT id, title FROM role`, (err, result)=>{
      if (err) throw new Error(err);
      
      const roles = result.map(role => ({
        name: role.title,
        id: role.id
      }))
      inquirer.prompt([
        {
          type: "list",
          name: 'employeeId',
          message: 'Which employee would you like to update?',
          choices: employees
        },
        {
          type: 'list',
          name: 'updateRole',
          message: `What's the new employee's role ID?`,
          choices: roles
        },
        {
          type: 'list',
          name: 'managerNumber',
          message: `What is the new employee's manager ID?`,
          choices: employees
        }
      ])
      .then((answers)=>{
        db.query(`UPDATE employee SET role_id=?, manager_id=? WHERE id=?`,[answers.updateRole.id, answers.updateManagerId.id, answers.employeeId.id])
    
    
        questionPrompt();
      })
    })
  })
};

function escape (){
  console.log('you have escaped')
  process.exit();
};



questionPrompt();

// QUESTIONS TO ASK AT OFFICE HOURS,

// HOW DO YOU WRITE A FUNCTION THAT CALLS FROM EMPLOYEE AND CONNECTS THE DATA THAT IS UPDATED?

// HOW TO DO A SMILIAR THING FOR THE DROPDOWN MENU BUT FOR NAMES ON MANAGERS?
