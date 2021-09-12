//import the express module
const express = require("express");

//instantiate an application server
const app = express();

//add support to parsing json in body
app.use(express.json());

//define the port that this application is listneing on
const PORT = 4000;

let nextId = 3;

let db= [{
    "id": 1,
    "label":"Call Mom!",
    "dueDate":"yesterday",
    "done":false,
    "priority":"High"
},{
    "id":2,
    "label":"Buy Dad A Beer",
    "dueDate":"yesterday",
    "done":false,
    "priority":"High"
}]

// GET /
// return some banner info - used for a sanity check
app.get("/", function(req,res){
res.json("Best Todo App");
});

// GET /items
app.get("/items", function(req,res){
    console.log("GET /items");

    //exersize for homework,
    //use .map() higher order function
    let simplifiedDB = db.map(function(req, res){
     //write the code that will convert item(with all details),
     // to a simpler copy(with just the id,label and done)   
});
// use this when testing if you have not figured out how to conver to a simplfied list of items
//res.json(db)

res.json(simplifiedDB);
})



// GET /item /:id
//return the entire item matching the id 
app.get("/items/id:", function(req,res){
    console.log("GET .items/id:", req.params);

    let theID = req.params.id;

    // loop through the db array and find the correct item
    // and return it
     for(let i = 0; i<theID.length; i++){
         theID.length.find("items/:id");
     }
    // you can use a higher order function find() function(ie>find())

    let found = null; //find this in
    res.json(found);

})


// POST /items body(label(req) extra attributes are stored with the item)
// label is required
// if id is sent, we are going to replace it 
// if any other attribute is sent we will accepot it as additional info
// if done is sent as true, we will accepot it, otherwise we will set it to false
app.post("/items", function(req,res){
    console.log("POSt /items", req.body);

    let dataIn = req.body;
    let newID = nextID; // need to find a way to come up with a new id
    nextId++;

    //if the sent an id, override it
    dataIn.id = newID;

    //this checks if label was provided
    if(!dataIn.label){
        //this code will execute if label is falsey
        //have to decide what to do?
        res.status(400).send("Label required");
        return;
    }

   // if they send in anything other than 'true' for the done flag,
   // we mark the item as not done (ie set done flag to false)
   if(dataIn.done!= true){
       dataIn.done = false;

   }
   db.push(dataIn);
   res.sendStatus(204);

})

// PUT /items/:id body{}
// update the item with the matching id in the db array with information provided in the body
// so if the body looks like {"done":true, "priority":"high"},
//then the item would be updated to be done and this priority changed.
// it should leave all the other attributes unchanged
app.put("items/:id", function(req,res){
    console.log("PUT /items/:id", req.params, req.body);
    // your code here
let items = getItemsById(req.body.todo.id);
if(items){
    editItems(req.body.id, req.body.todo);
    res.send('Ok');
} else{
    res.status(400).send("record not found");
}


})

//DELETE /items/:id
//find the items with the id in the db and remove it
app.delete("/items/:id", function(req,res){
    console.log("DELETE /items/:id", req.params)
    // your code here
    let { id } = req.params;

    let index = items.findIndex(p => p.id == id);

    items.splice(index, 1);

    return res.send();
})

//start the application server
app.listen(PORT, function(){
    console.log("App started, listening on PORT", PORT);
})

