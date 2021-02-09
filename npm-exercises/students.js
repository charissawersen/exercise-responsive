const express = require("express");
const students = express.Router();

// logic for endpoints

const studentsList = ["Charissa", 'Alessia', 'Kim', 'Suguna', 'Katie'];

students.get("/students", (req, res) => {
    //the actual function
    // go to the database

    // set the data from the database to a variable

    // transform
    res.json(studentsList);
});

// accept POST request at URI: /students
students.post("/students", (req, res) => {
    // students.push(newStudent); 
    res.json("Adding a student..");
});
// accept PUT request at URI: /students
students.put("/students", (req, res) => {
    //students.splice(index, 1, newStudent);   
    //removes 1 item from the array, starting at index provided then adds new student in its place. 
    res.json("Updating a student..");
});
// accept DELETE request at URI: /students
students.delete("/students", (req, res) => {
    //students.splice(index, 1); 
    res.json("Deleting a student..");
});

// export module so it's usable in other files
module.exports = students;