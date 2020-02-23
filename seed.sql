INSERT INTO department (name)
VALUES ("Sales"), ("Marketing"), ("Finance"), ("Engineering"), ("Legal");

INSERT INTO role (title, salary, department_id)
VALUES ("Sales Manager", 125000, 1), ("Sales Agent", 75000, 1), ("Marketing Manager ", 150000, 2), ("Marketing Specialist", 80000, 2), ("Sr. Accountant", 175000, 3), ("Accountant", 100000, 3), ("Sr. Software Engineer", 200000, 4), ("Software Engineer", 125000, 4), ("Lawyer", 250000, 5);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Bill", "Francis", 1, null), ("Brett", "Schwab", 2, 1), ("Alexis", "Ames", 2, 1), ("Jen", "Alberts", 3, null), ("Nancy", "Devans", 4, 3), ("Randy", "Scotts", 4, 3), ("Rob", "Stacks", 5, null), ("Fran", "Gains", 6, 5), ("Tim", "Timms", 7, null), ("Jessica", "Days", 8, 7), ("Fred", "Nights", 8, 7), ("Lawyer", "Mclawyerface", 9, null);