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


app.get('/api/notes',async (req,res)=>{
  let fetchdata = await NoteModel.find()
 return res.status(200).json({
    message:"all notes fetched",
    fetchdata
  })
})



app.patch('/api/notes/:id',async(req, res)=>{
    let {id} =  req.params
    let {description} =  req.body

   
     if (!description) {
        return res.status(400).json({
            error:" description is required"
        })
    }
    if (description.trim().length <10) {
    return res.status(404).json({
      error:'description must be 10 char long'
      
    })
  }

       let notes  =  await NoteModel.findById(id)

       if (!notes) {
        return res.status(200).json({
            message:"notes not exist",
        })
       }

       notes.description =  description
       await notes.save()
       
       return res.status(200).json({
        message:"updated",
        notes
       })
 })


 //main task 


//  app.delete('/api/notes/:id' ,async(req, res)=>{
//         let {id} = req.params

//         let deleteNote  = await NoteModel.findByIdAndDelete(id)

   

       


//          if (!deleteNote) {
//         return res.status(404).json({
//             error: "not not exist"
//         })

//           return res.status(200).json({
//         message: "Note deleted successfully",
//         deleteNote
//     })

//     }


        
       
//  })

app.delete('/api/notes/:id', async (req, res) => {
    const { id } = req.params

    const deleteNote = await NoteModel.findByIdAndDelete(id)

    if (!deleteNote) {
        return res.status(404).json({
            error: "note not exist"
        })
    }

    return res.status(200).json({
        message: "note deleted",
        deleteNote
    })
})
export default app