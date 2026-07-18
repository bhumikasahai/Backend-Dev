// to create a server

const express = require("express") 
const noteModel = require("./models/note.model")

const app = express()

app.use(express.json())


/*
POST /notes = Create a note
GET /notes = Get all notes
DELETE /notes/:id = Delte a note
PATCH /notes/:id = Update a note
*/

app.post("/notes", async(req,res)=>{
    const data = req.body  // title + description
    await noteModel.create({
        title : data.title,
        description : data.description
    })
    res.status(201).json({
        message : "Note created"
    })
})

app.get('/notes', async(req,res)=>{
    const notes = await noteModel.find()         
    /*
    find = [{},{},{}]
    findOne = {} or null
    */
    res.status(200).json({
        message : "Notes fetched successfully",
        notes : notes
    })
});


app.delete("/notes/:id", async(req,res)=>{
    const id = req.params.id
    await noteModel.findOneAndDelete({
        _id : id
    })
    res.status(200).json({
        message : "Note deleted successfully"
    })
})


app.patch('/notes/:id', async(req,res)=>{
    console.log("PATCH route hit");
    const id = req.params.id
    const description = req.body.description
    await noteModel.findOneAndUpdate({_id: id},{description: description})
    res.status(200).json({
        message : "Note updated successfully"
    })
})

/*

note = {
    title : "my first note",
    description : "this is my first note"
}


const notes = {
    {
        title : "my first note",
        description : "this is my first note"
    },
    {
        title : "my first note",
        description : "this is my first note"
    },
    {
        title : "my first note",
        description : "this is my first note"
    },
}

*/

//const notes = []                  //this is to store data in array through api

/* title, description */
// POST - /notes 
/** 
 
  
  
app.post('/notes', (req,res)=>{
    notes.push(req.body)

    res.status(201).json({
        message : "note created successfully"
    })
})

// GET - /notes 
app.get('/notes', (req,res) => {
    res.status(200).json({
        message : "notes fetched successfully",
        notes : notes
    })
})

// DELETE - /notes/1(index) 1 is the index from notes[] array 
app.delete('/notes/:index',(req,res)=>{
    console.log("deleted api")
    const index = req.params.index  //index = 1 as per the comment above
    delete notes[ index ]
    res.status(200).json({
        message : "note deleted successfully"
    })      
})

// PATCH - /notes/index 
app.patch('/notes/:index',(req,res)=>{
    const index = req.params.index
    const description = req.body.description
    notes[ index ].description = description
    res.status(200).json({
        message : "note updated succesfully"
    })
})

*/

module.exports = app
