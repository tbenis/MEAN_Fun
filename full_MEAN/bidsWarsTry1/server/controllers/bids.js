var mongoose = require('mongoose')
var User = mongoose.model('User')
var Product = mongoose.model('Product')
var Bid = mongoose.model('Bid')

module.exports = {
  placeBid : function(req, res){
    console.log(req.body);
  var bid = new Bid({
    _bidder : req.body._bidder,
    _product : req.body._product,
    bid : req.body.bid
  })
  bid.save(function(err){
    Product.findById({_id : req.body._product}, function(err, result){
      result.bids.push(bid)
      result.save(function(){
    User.findById({_id : req.body._bidder}, function(err, result1){
      result1.bids.push(bid)
      result1.save(function(err){
        Product.findById({_id : req.body._product})
        .populate('bids')
        .populate({path: "bids", populate: {path :"_bidder", ref: 'User'}})
        .sort()
        .exec(function(err, result){
          console.log("requested param", result);
          res.json(result)
        })
      })
      })
    })
    })

  })
},
delete : function(req, res){
  Bid.collection.remove(function(err){
    res.json({dropped : 'dropped'})
  })
}
  }
