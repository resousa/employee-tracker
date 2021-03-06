"use strict";

const mysql = require("mysql");
const inquirer = require("inquirer");
const consoleTable = require("console.table");

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "toby",
  database: "employee_db"
});

connection.connect(err => {
  if (err) throw err;
  promptUser();
});

const promptUser = () => {
  inquirer
    .prompt({
      name: "startQuestion",
      type: "list",
      message: "Welcome to the Employee Database",
      choices: [
        "View all employees",
        "View all employees by department",
        "View all employees by manager",
        "Add employee",
        "Remove employee",
        "Update employee role",
        "Update employee manager",
        "View all roles",
        "Add role",
        "Remove role",
        "View all departments",
        "Add department",
        "Remove department",
        "Exit"
      ]
    })
    .then(res => {
      switch (res.startQuestion) {
        case "View all employees":
          viewAllEmployees();
          break;
        case "View all employees by department":
          viewAllDepartmentEmployees();
          break;
        case "View all employees by manager":
          viewAllManagerEmployees();
          break;
        case "Add employee":
          addEmployee();
          break;
        case "Remove employee":
          removeEmployee();
          break;
        case "Update employee role":
          updateEmployeeRole();
          break;
        case "Update employee manager":
          updateEmployeeManager();
          break;
        case "View all roles":
          viewAllRoles();
          break;
        case "Add role":
          addRole();
          break;
        case "Remove role":
          removeRole();
          break;
        case "View all departments":
          viewAllDepartments();
          break;
        case "Add department":
          addDepartment();
          break;
        case "Remove department":
          removeDepartment();
          break;
        case "Exit":
          connection.end();
          break;
      }
    });
};

const viewAllEmployees = () => {
  const query = "SELECT * FROM employee";
  connection.query(query, (err, res) => {
    if (err) throw err;
    console.table(res);
    promptUser();
  });
};

const viewAllDepartmentEmployees = () => {
  inquirer
    .prompt([
      {
        name: "viewByDepartment",
        type: "input",
        message: "Which department(ID) employees would you like to see?"
      }
    ])
    .then(res => {
      const query = "SELECT * FROM employee WHERE ?";
      connection.query(query, { id: res.viewByDepartment }, (err, res) => {
        if (err) throw err;
        console.table(res);
        promptUser();
      });
    });
};

const viewAllManagerEmployees = () => {
  inquirer
    .prompt([
      {
        name: "viewByManager",
        type: "input",
        message: "Which manager(ID) employees would you like to see?"
      }
    ])
    .then(res => {
      const query = "SELECT * FROM employee WHERE ?";
      connection.query(query, { manager_id: res.viewByManager }, (err, res) => {
        if (err) throw err;
        console.table(res);
        promptUser();
      });
    });
};

const addEmployee = () => {
  inquirer
    .prompt([
      {
        name: "firstName",
        type: "input",
        message: "Employee's first name:"
      },
      {
        name: "lastName",
        type: "input",
        message: "Employee's last name:"
      },
      {
        name: "roleID",
        type: "input",
        message: "Employee's role(ID):"
      },
      {
        name: "managerID",
        type: "input",
        message: "Employee's manager(ID):"
      }
    ])
    .then(res => {
      const query = "INSERT INTO employee SET ?";
      let userInput = {};
      userInput = {
        first_name: res.firstName,
        last_name: res.lastName,
        role_id: res.roleID,
        manager_id: res.managerID
      };

      connection.query(query, userInput, (err, res) => {
        if (err) throw err;
        console.log("Employee added");
        promptUser();
      });
    });
};

const removeEmployee = () => {
  inquirer
    .prompt([
      {
        name: "removeEmployeeFirst",
        type: "input",
        message:
          "Please enter the first name of the employee you would like to remove."
      },
      {
        name: "removeEmployeeLast",
        type: "input",
        message:
          "Please enter the last name of the employee you would like to remove."
      }
    ])
    .then(res => {
      const query =
        "DELETE FROM employee WHERE first_name = ? AND last_name = ?";
      connection.query(
        query,
        [res.removeEmployeeFirst, res.removeEmployeeLast],
        (err, res) => {
          if (err) throw err;
          console.log("Employee removed");
          promptUser();
        }
      );
    });
};

const updateEmployeeRole = () => {
  inquirer
    .prompt([
      {
        name: "employeeFirst",
        type: "input",
        message:
          "Please enter the first name of the employee you would like to update."
      },
      {
        name: "employeeLast",
        type: "input",
        message:
          "Please enter the last name of the employee you would like to update."
      },
      {
        name: "roleID",
        type: "input",
        message: "Please enter the new role ID."
      }
    ])
    .then(res => {
      const query =
        "UPDATE employee SET role_id = ? WHERE first_name = ? AND last_name = ?";
      connection.query(
        query,
        [res.roleID, res.employeeFirst, res.employeeLast],
        (err, res) => {
          if (err) throw err;
          console.log("Employee's role ID updated");
          promptUser();
        }
      );
    });
};

const updateEmployeeManager = () => {
  inquirer
    .prompt([
      {
        name: "employeeFirst",
        type: "input",
        message:
          "Please enter the first name of the employee you would like to update."
      },
      {
        name: "employeeLast",
        type: "input",
        message:
          "Please enter the last name of the employee you would like to update."
      },
      {
        name: "managerID",
        type: "input",
        message: "Please enter the id of the employee's new manager."
      }
    ])
    .then(res => {
      const query =
        "UPDATE employee SET manager_id = ? WHERE first_name = ? AND last_name = ?";
      connection.query(
        query,
        [res.managerID, res.employeeFirst, res.employeeLast],
        (err, res) => {
          if (err) throw err;
          console.log("Employee's manager ID updated");
          promptUser();
        }
      );
    });
};

const viewAllRoles = () => {
  const query = "SELECT * FROM role";
  connection.query(query, (err, res) => {
    if (err) throw err;
    console.table(res);
    promptUser();
  });
};

const addRole = () => {
  inquirer
    .prompt([
      {
        name: "roleTitle",
        type: "input",
        message: "Title of role:"
      },
      {
        name: "roleSalary",
        type: "input",
        message: "Salary of role:"
      },
      {
        name: "roleDepartmentID",
        type: "input",
        message: "Department ID of role:"
      }
    ])
    .then(res => {
      const query = "INSERT INTO role SET ?";
      connection.query(
        query,
        {
          title: res.roleTitle,
          salary: res.roleSalary,
          department_id: res.roleDepartmentID
        },
        (err, res) => {
          if (err) throw err;
          console.log("New role created");
          promptUser();
        }
      );
    });
};

const removeRole = () => {
  inquirer
    .prompt([
      {
        name: "deleteTitle",
        type: "input",
        message: "Please enter the title of the role you would like to remove."
      }
    ])
    .then(res => {
      const query = "DELETE FROM role WHERE ?";
      connection.query(query, { title: res.deleteTitle }, (err, res) => {
        if (err) throw err;
        console.log("Role removed");
        promptUser();
      });
    });
};

const viewAllDepartments = () => {
  const query = "SELECT * FROM department";
  connection.query(query, (err, res) => {
    if (err) throw err;
    console.table(res);
    promptUser();
  });
};

const addDepartment = () => {
  inquirer
    .prompt([
      {
        name: "newDepartment",
        type: "input",
        message: "Please enter the department you would like to add."
      }
    ])
    .then(res => {
      const query = "INSERT INTO department SET ?";
      connection.query(query, { name: res.newDepartment }, (err, res) => {
        if (err) throw err;
        console.log("Department added");
        promptUser();
      });
    });
};

const removeDepartment = () => {
  inquirer
    .prompt([
      {
        name: "deleteDepartment",
        type: "input",
        message: "Please enter the department you would like to remove."
      }
    ])
    .then(res => {
      const query = "DELETE FROM department WHERE ?";
      connection.query(query, { name: res.deleteDepartment }, (err, res) => {
        if (err) throw err;
        console.log("Department removed");
        promptUser();
      });
    });
};