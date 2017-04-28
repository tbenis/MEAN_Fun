var mongoose = require('mongoose')
var User = mongoose.model('User')
var Recipe = mongoose.model('Recipe')

module.exports = {
  index :function (req, res){
    Recipe.find({}).populate('_user').sort('-cookedTimes').exec(function(err, result){
      res.json(result)
    })
  },
  findRecipeInfo : function(req, res){
    Recipe.findOne({_id : req.params.id}).populate('_user').exec(function(err, result){
      res.json(result)
    })
  },
  newRecipe : function(req, res){
    console.log(req.body);
    var recipe = new Recipe({
      _user : req.body._user,
      ingredients : req.body.ingredients,
      name : req.body.name
    })
    recipe.save(function(err){
      if(err){
        console.log('Errorrr');
      }
      res.json({recipe})
    })
  },
  cookedTimes : function(req, res){
    Recipe.findOneAndUpdate({_id: req.params.id}, { $inc: { cookedTimes: 1 }}, function(err, result){
      console.log('forund question',result);
      res.json(result)
    })
  },
  delete : function(req, res){
    Recipe.findByIdAndRemove(req.params.id, function(err){
      res.json({del: "deleted"})
    })
  }
  }
