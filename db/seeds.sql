INSERT INTO department ( name)
VALUES
    ('Purchasing'),
    ('Production'),
    ('Marketing');

INSERT INTO role (title, salary, department_id)
VALUES
    ('Welder', 62000, 2),
    ('Worker', 45000, 2),
    ('Project Manager', 85000, 2),
    ('Sales Man', 95000, 3),
    ('Marketing Manager', 125000, 3),
    ('Accountant', 110000, 1),
    ('Head of Purchasing', 85000, 1);
    

INSERT INTO employees(first_name, last_name, role_id, manager_id) 
VALUES
    ('Ronald', 'McDonald', 1),
    ('Virginia', 'Driggs', 1),
    ('Frank', 'Lee', 0),
    ('Charles', 'Miller', 1),
    ('Katherine', 'Thegreat', 1),
    ('Dave', 'Anderson', 0),
    ('Robert', 'Bell', 0),
    ('Jessica', 'Sanchez', 1),
    ('Sarah', 'Nelson', 1),
    ('Kim', 'George', 1);
