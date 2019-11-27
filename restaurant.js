var express = require("express");
var path = require("path");
var app= express();
var PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(PORT, function(){
    console.log("Port is listening on "+ PORT);
});

var tableReservations= [
    {
        name: "Gypsy",
        phone: 333-333-3333,
        email:"cats@gmail.com",
    },
    {
        name: "Gypsy",
        phone: 333-333-3333,
        email:"cats@gmail.com",
    }

];
var waitingTables = [
    {
        name: "Gypsy",
        phone: 333-333-3333,
        email:"cats@gmail.com",
    },
    {
        name: "Gypsy",
        phone: 333-333-3333,
        email:"cats@gmail.com",
    }   

];

app.get("/", function(req, response){
response.sendFile(path.join(__dirname, "hot.html"))
});

app.get("/reserve", function(req, response){
    response.sendFile(path.join(__dirname, "reserve.html"))
});

app.get("/tables", function(req, response){
    response.sendfile(path.join(__dirname, "tables.html"))
});

app.get("/api/tableReservations", function(req, response){
    return response.json(tableReservations);
});

app.get("/api/waitingTables", function(req, response){
    return response.json(waitingTables);
});
