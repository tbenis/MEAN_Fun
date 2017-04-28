var mongoose = require('mongoose')
var User = mongoose.model('User')
var Product = mongoose.model('Product')
var Bid = mongoose.model('Bid')

module.exports = {
  index: function(req, res) {

    Product.find({})
    .populate('bids')
    .populate({path:'bids', populate:{path: '_bidder'}})
    .exec(function(err, results){
      if(results.length == 3){
      res.json({results})
    }else{
      var product1 = new Product({
        name : 'product1',
      })
      product1.save(function(err){})
      var product2 = new Product({
        name : 'product2',
      })
      product2.save(function(err){})
      var product3 = new Product({
        name : 'product3',
      })
      product3.save(function(err){})
      Product.find({}).exec(function(err, results){
        res.json({results})
      })
    }
    })

  },


  }
