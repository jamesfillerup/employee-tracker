DROP DATABASE IF EXISTS employee_db;
CREATE DATABASE employee_db;
USE employee_db;

    CREATE TABLE department (
        id INTEGER PRIMARY KEY ,
        name VARCHAR(30) NOT NULL
    );

    CREATE TABLE role (
        id INTEGER PRIMARY KEY ,
        title VARCHAR(30) NOT NULL, 
        salary DECIMAL NOT NULL,
        department_id INTEGER
    );

    CREATE TABLE employee (
        id INTEGER PRIMARY KEY ,
        first_name VARCHAR(30) NOT NULL,
        last_name VARCHAR(30) NOT NULL,
        role_id INTEGER, 
        manager_id INTEGER
    );
