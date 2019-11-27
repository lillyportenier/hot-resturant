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
        name: "rick",
        state: "NC"
    },
    {
        name: "matt",
        state: "CO"
    }
];

var waitingTables = [
    {
        name: "bob",
        state: "NC"
    },
    {
        name: "bobby",
        state: "NY"
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

app.post("/api/reserve", function (req, res) {
    var newReservation = req.body;

    // newReservation.routeName = newReservation.name.replace(/\s+/g, "").toLowerCase();

    for (var i=0; i<tableReservations.length; i++) {
        
        if (tableReservations.length > 5) {
            waitingTables.push(newReservation)
            // alert("You almost had it! You gotta be quicker than that!")
            // console.log("Table Res: " + tableReservations.length)
            // console.log("Good Res: " + waitingTables.length)
            console.log("You almost had it! You gotta be quicker than that!")
            res.json(false);
        }
        else {
            tableReservations.push(newReservation);
            // alert("You're all set! See you soon!");
            // console.log("Table Res: " + tableReservations.length)
            // console.log("Good Res: " + waitingTables.length)
            console.log("You're all set! See you soon!")
            res.json(true);
        }
    }
})
