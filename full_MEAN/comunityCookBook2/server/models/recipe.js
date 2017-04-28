var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Model = mongoose.model;

var RecipeSchema = new Schema({
  name: String,
  cookedTimes: {type: Number, default: 0},
  ingredients: [{amount : String, ingredient: String}],
  _user : {type: Schema.Types.ObjectId, ref: 'User'}
}, {timestamps : true}, {collection: 'Recipe'})

var Recipe = mongoose.model('Recipe', RecipeSchema)
