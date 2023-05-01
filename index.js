const inquirer = require("inquirer");
const fs = require("fs");
const express = require('express');
const mysql = require('mysql2');

function askQuestion() {
    inquirer.prompt([
        {
            type: "list",
            name: "addmenu",
            choices: ["View all Departments", "View all Roles", "View all Employees", "Add a Department", "Add a Role", "Add an Employee", "Update an Employee Role"]
        }
    ]).then( menuSelection => {
        // const emp = new Manager(addManagerAnswers.name, "Manager", addManagerAnswers.eid, addManagerAnswers.email, addManagerAnswers.phone);
        // manager.push(emp);

        switch (menuSelection.addmenu) {
            case "View all Departments":
                console.log("All Departments");
                viewDepartments();
                break;
            
            case "View all Roles":
                console.log("All Roles");
                viewRoles();
                break;   

            case "View all Employees":
                console.log("All Employees");
                viewEmployees();
                break;
                
            case "Add a Department":
                console.log("Add Departments");
                addDepartments();
                break;
                
            case "Add a Role":
                console.log("Add Roles");
                addRoles();
                break;   
    
            case "Add an Employee":
                console.log("Add Employees");
                addEmployees();
                break;

            case "Update an Employee Role":
                console.log("Update Employee Role");
                updateEmployeeRole();
                break;
        }
    })
}