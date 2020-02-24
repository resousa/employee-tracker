# employee-tracker

## Table of contents
- [General info](#Info)
- [Technologies](#Technologies)
- [Summary](#Summary)
- [Authors](#Authors)
- [License](#License)

### Info
This application was created using MySQL and Node.js. This employee databsae gives the user the ability to choose from an array of prompts. The prompts have the ability to add data, remove data, update data, and return tables of information. Below is an example of the data tables that were created with MySQL displayed in the node application.

![node](https://github.com/resousa/employee-tracker/blob/master/node.PNG?raw=true)

### Technologies
Project created with :
- [node.js](https://nodejs.org/en/)
- [MySQL](https://www.mysql.com/)

#### npm packages
- [mysql](https://www.npmjs.com/package/mysql)
- [inquirer](https://www.npmjs.com/package/inquirer)
- [console.table](https://www.npmjs.com/package/console.table)


### Summary

The employee tracker has a datatbase created with MySQL. The database has 3 tables department, role, and employee. The database info is retrieved using node in terminal. When the user openes the application, the following choices are available. "View all employees", "View all employees by department", "View all employees by manager", "Add employee", "Remove employee", "Update employee role", "Update employee manager", "View all roles", "Add role", "Remove role", "View all departments", "Add department", "Remove department", and"Exit". Any choices that start with View will return a console.table in node. All choices that start with Add will insert a new row into one of the 3 tables. There is also the ability to delete rows from every table by choosing a prompt that starts with Remove. Finally the user has the ability to edit the employee table by choosing one of thr Update choices.

### Authors

- Ryan Sousa

### License

- MIT License Copyright (c) 2020 Ryan Sousa