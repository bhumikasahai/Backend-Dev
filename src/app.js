// to create a server

const express = require("express") 

const app = express()

app.use(express.json())


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

const notes = []

/* title, description */
/* POST - /notes */
app.post('/notes', (req,res)=>{
    notes.push(req.body)

    res.status(201).json({
        message : "note created successfully"
    })
})

/* GET - /notes */
app.get('/notes', (req,res) => {
    res.status(200).json({
        message : "notes fetched successfully",
        notes : notes
    })
})

/* DELETE - /notes/1(index) 1 is the index from notes[] array */
app.delete('/notes/:index',(req,res)=>{
    console.log("deleted api")
    const index = req.params.index  //index = 1 as per the comment above
    delete notes[ index ]
    res.status(200).json({
        message : "note deleted successfully"
    })      
})

/* PATCH - /notes/index */
app.patch('/notes/:index',(req,res)=>{
    const index = req.params.index
    const description = req.body.description
    notes[ index ].description = description
    res.status(200).json({
        message : "note updated succesfully"
    })
})

module.exports = app