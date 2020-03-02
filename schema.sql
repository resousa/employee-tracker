DROP DATABASE IF EXISTS employee_db;

CREATE DATABASE employee_db;

USE employee_db;

CREATE TABLE department (
    id INT AUTO_INCREMENT NOT NULL,
    name VARCHAR(30) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE role (
    id INT AUTO_INCREMENT NOT NULL,
    title VARCHAR(30),
    salary DECIMAL,
    department_id INT NOT NULL,
    PRIMARY KEY (id),
    CONSTRAINT fk_department_id
    FOREIGN KEY (department_id)
        REFERENCES department(id)
);

CREATE TABLE employee (
    id INT AUTO_INCREMENT NOT NULL,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INT NOT NULL,
    manager_id INT,
    PRIMARY KEY (id),
    CONSTRAINT fk_role_id
    FOREIGN KEY (role_id) 
        REFERENCES role(id),
    CONSTRAINT fk_manager_id
    FOREIGN KEY (manager_id)
        REFERENCES employee(id)
);
