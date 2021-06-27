const mongoose = require('mongoose')


// ------------------------ [ Creating the Schema ] ---------------------------------
const PostSchema = mongoose.Schema({
          title: {
                    type: String,
                    required: true
          },
          description: {
                    type: String,
                    required: true
          },
          data: {
                    type: String,
                    default: Date.now
          }
})


// ------------------------ [ Create the module and export it ] ---------------------------------

module.exports = mongoose.model('Posts', PostSchema)