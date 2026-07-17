const mongoose = require("mongoose")

const noteSchema = new mongoose.Schema({
    title : String,
    description : String,
})

const noteModel = mongoose.model("note", noteSchema)

module.exports = noteModel

/* raw format   //instead of using raw format use above thing noteModel
    CRUD OPERATIONS
    CREATE - POST
    READ - GET
    UPDATE - PATCH
    DELETE - DELETE
*/