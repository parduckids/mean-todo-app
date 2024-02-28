var Express = require('express');
var MongoClient = require("mongodb").MongoClient;
var cors = require("cors");
const multer = require("multer");


var app = Express();
app.use(cors());

var CONNECTION_STRING = "mongodb+srv://damros:<yourMongoDbPassword>@cluster0.zmg9r0m.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";


var DATABASENAME = "todoappdb"
var database;


app.listen(5038, () => {
    MongoClient.connect(CONNECTION_STRING, { useUnifiedTopology: true }, (error, client) => {
        if (error) {
            // Log the error if the connection failed
            console.error("Failed to connect to MongoDB", error);
            return;
        }
        database = client.db(DATABASENAME);
        console.log("MongoDB Connection Successful");
    });
})


app.get('/api/todoapp/GetNotes', (request, response) => {
    database.collection("todoappcollection").find({}).toArray((error, result) => {
        response.send(result)
    })
})

app.post('/api/todoapp/AddNotes', multer().none(), (request, response) => {
    database.collection("todoappcollection").count({}, function (error, numOfDocs) {
        database.collection("todoappcollection").insertOne({
            id: (numOfDocs + 1).toString(),
            description: request.body.newNotes
        });
        response.json("Added Successfully");

    })
})

app.delete('/api/todoapp/DeleteNotes', (request, response) => {
    database.collection("todoappcollection").deleteOne({
        id: request.query.id
    });
    response.json("Deleted Successfully")
})
