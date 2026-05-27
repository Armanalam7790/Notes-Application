import mongoose from "mongoose";

let NotesSchema = new  mongoose.Schema({
    title:String,
    description:String
})

let NotesModel =  mongoose.model('notes', NotesSchema)

export  default  NotesModel