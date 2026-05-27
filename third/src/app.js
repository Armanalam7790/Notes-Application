import express   from 'express'
import NoteModel from './models/notes.model.js'

let app  = express()
app.use(express.json())

app.post('/api/notes',async (req,res)=>{
    let { title, description} =  req.body
    console.log(req.body);
    

    if (!title) {
        return res.status(400).json({
            error:" title is required"
        })
    }
    if (title.trim().length <3) {
    return res.status(404).json({
      error:'title must be 3 char long'
      
    })
  }
  if (description.trim().length <10) {
    return res.status(404).json({
      error:'description must be 10 char long'
      
    })
  }
     if (!description) {
        return res.status(400).json({
            error:" description is required"
        })
    }

    let newpost  = await NoteModel.create({title, description})

    return res.status(201).json({
        message:"notes created",
        newpost
    })

})

export default app