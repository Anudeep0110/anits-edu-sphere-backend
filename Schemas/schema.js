
      const mongoose = require('mongoose')
      let Form;
      if(mongoose.models.file_663241a351718d2ae4616f98){
        Form = mongoose.model('file_663241a351718d2ae4616f98')
      } else {
        Form = mongoose.model('file_663241a351718d2ae4616f98', new mongoose.Schema({
          col1:{type:String,required:true}

        }))
      }
      
      module.exports = Form;
    