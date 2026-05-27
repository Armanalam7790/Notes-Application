import express from  'express'
import NotesModel from './models/notes.model.js'

let app  = express()
app.use(express.json())

/**
 * @route  patch /api/note/:id
 * @descriprion  description update notes
 * @access public
 */
app.post('/api/notes',async(req, res)=>{
 let {title, description} =  req.body
 console.log(req.body);

 if (!title) {
    return res.status(400).json({
        error:"title is required"
    })
 }

 if (!description) {
    return res.status(400).json({
        error:"description is required"
    })
 }

 if (title.trim().length < 3) {
    return res.status(404).json({
        error:"title is must  4 char long"
    })
 }

  if (description.trim().length < 10) {
    return res.status(404).json({
        error:"description is must  10 char long"
    })
 }

 let NewNotes  =  await NotesModel.create({title, description})

 return res.status(201).json({
    message:"notes created ", 
    NewNotes
 })
 
})

export default app