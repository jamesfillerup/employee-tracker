const mysql = require('mysql2');
const inquirer = require('inquirer');
const consoleTable = require('console.table');
require('dotenv').config();


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





