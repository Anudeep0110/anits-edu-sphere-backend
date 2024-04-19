
    const mongoose = require('mongoose')
    const Form = mongoose.model('file_661fa56ce0b02f5c019da4a2',new mongoose.Schema({
        testCol1:{type:String,required:true}
,testCol2:{type:String,required:true}

    }))
    module.exports = Form
    