INSERT INTO department (  name)
VALUES
    ( 'Purchasing'),
    ( 'Production'),
    ( 'Marketing');

INSERT INTO role ( title, salary, department_id)
VALUES
    ( 'Welder', 62000, 2),
    ( 'Worker', 45000, 2),
    ( 'Project Manager', 85000, 2),
    ( 'Sales Man', 95000, 3),
    ( 'Marketing Manager', 125000, 3),
    ( 'Accountant', 110000, 1),
    ( 'Head of Purchasing', 85000, 1);
    

INSERT INTO employee ( first_name, last_name, role_id, manager_id) 
VALUES
    ( 'Ronald', 'McDonald', 1, 3 ),
    ( 'Virginia', 'Driggs', 2, 3),
    ( 'Frank', 'Lee', 3, 5),
    ( 'Charles', 'Miller', 4, 5),
    ( 'Katherine', 'Thegreat', 5, NULL),
    ( 'Dave', 'Anderson', 6, 5 ),
    ( 'Robert', 'Bell', 7, 5),
    ( 'Jessica', 'Sanchez', 2, 3),
    ( 'Sarah', 'Nelson', 2, 3),
    ( 'Kim', 'George', 1, 3);
