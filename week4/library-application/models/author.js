const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const authorSchema = new Schema({
  name: {type: String, required: true},
  nationality: String,
  birthday: String,

});


const Author = mongoose.model("Author", authorSchema);


module.exports = Author;