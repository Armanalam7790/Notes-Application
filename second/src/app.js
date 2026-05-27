import express from  'express'
import NotesModel from './models/notes.model.js'
import { modelNames } from 'mongoose'

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

app.get('/api/notes',async (req,res)=>{
        let newpost  =  await NotesModel.find()

        return res.status(200).json({
            message:"all notes fetched",
            newpost
        })
})

app.patch('/api/notes/:id',async(req, res)=>{
     let {id}= req.params
     let {description}= req.body

      if (!description) {
    return res.status(400).json({
        error:"description is required"
    })
 }


       if (description.trim().length<10) {
       return res.status(400).json({
       error:"description is must mme at least 10 char long"
    })
     }


     let notes  =  await NotesModel.findById(id)

     if (!notes) {
      return  res.status(404).json({
        error:"notes not found"
      })
     }
   notes.description =  description
     await notes.save()


     return res.status(200).json({
      message:"description update",
      notes
     })

})

export default app