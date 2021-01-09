const mongoose = require("mongoose")
const Schema = mongoose.Schema


const tokenSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'users'
  },
  token: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    required: true
  }
})


module.exports = mongoose.model('token', tokenSchema)