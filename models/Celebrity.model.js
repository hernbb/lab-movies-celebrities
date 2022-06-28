//  Add your code here
const mongoose = require("mongoose");

// aqui creamos el Schema
const celebritySchema = new mongoose.Schema({
  name: {
    type: String,
  },

  occupation: {
    type: String,
  },

  catchPhrase: {
    type: String,
  }
  
});

// crear el Model
const Celebrity = mongoose.model("celebrity", celebritySchema);
// mongoose.model(nombreDelModelo, schemaDelModelo)
// "celebrity" indica como se llamara nuestra colección => "celebrities"

module.exports = Celebrity;
