import mongoose from "mongoose";

let notesSchema = mongoose.Schema({
    title:String,
    description:String
})


let NotesModel =  mongoose.model('notes', notesSchema)

export default NotesModel