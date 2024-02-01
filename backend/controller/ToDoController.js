const toDoModel = require('../models/toDoModels')

module.exports.getToDos =  async (req, res) =>{
    const todos = await toDoModel.find()
    res.send(todos)
}

module.exports.saveToDos = (req, res) =>{
    const {ToDo} =  req.body
    toDoModel.create({ToDo}).then(data =>{
        console.log('Saved Successfully......')
        res.status(201).send(data)
    })
    .catch(err =>{console.log(err)
        res.send({error: err, msg: "Save Went Wrong."})
    })
}

module.exports.updateToDos = (req, res) =>{
    const {id} = req.params
    const {ToDo} =  req.body
    toDoModel.findByIdAndUpdate(id, {ToDo}).then(()=>{
        res.send('Updated Successfully!!')
    })
    .catch(err =>{console.log(err)
        res.send({error: err, msg: "Update Went Wrong."})
    })
}

module.exports.deleteToDos = (req, res) =>{
    const {id} = req.params
    toDoModel.findByIdAndDelete(id).then(()=>{
        res.send('Deleted Successfully!!')
    })
    .catch(err =>{console.log(err)
        res.send({error: err, msg: "Deletion Went Wrong."})
    })
}