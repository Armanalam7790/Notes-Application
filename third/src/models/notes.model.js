import mongoose from "mongoose";

let NotesSchema =  mongoose.Schema({
    title:String,
    description:String
})


let     NoteModel  =  mongoose.model("notes", NotesSchema)

export default  NoteModel