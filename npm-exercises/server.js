// seperate the students endpoint into its own file
// import and use the students route in our app

// create second endpoint called teachers
// add to our GET method to search for teacher by their name

// require the Express module
const express = require("express");
// creates an instance of an Express server 
const app = express();

// define the port
const port = 3000;
// run the server
app.listen(port, () => console.log(`Listening on port: ${port}.`));

const students = ["Charissa", 'Alessia', 'Kim', 'Suguna', 'Katie'];

app.get("/students", (req, res) => {
    //the actual function
    res.json(students);
});

// accept POST request at URI: /students
app.post("/students", (req, res) => {
    // students.push(newStudent); 
    res.json("Adding a student..");
});
// accept PUT request at URI: /students
app.put("/students", (req, res) => {
    //students.splice(index, 1, newStudent);   
    //removes 1 item from the array, starting at index provided then adds new student in its place. 
    res.json("Updating a student..");
});
// accept DELETE request at URI: /students
app.delete("/students", (req, res) => {
    //students.splice(index, 1); 
    res.json("Deleting a student..");
});