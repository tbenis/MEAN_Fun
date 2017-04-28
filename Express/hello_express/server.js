var express = require('express');

var app = express();

app.get('/', function(request, response){

  response.send("Hello Express");

})
app.use(express.static(__dirname + "/static"));

app.set('views', __dirname + '/views')
app.set('view engine', 'ejs')
app.set('/users', function(request, response){
  var users_array = [
    {name: "Micheal", email: "micheal@codingdojo.com"},
    {name: "Jay", email: "jay@codingdojo.com"},
    {name: "Brendan", email: "brendan@codingdojo.com"},
    {name: "Benis", email: "benis@codingdojo.com"},
    {name: "Andrew", email: "andrew@codingdojo.com"},
  ];
  response.render('users', {users: users_array});
})
// console.log(')))))))))))))))')
// console.log(__dirname)
// console.log(')))))))))))))))')
app.listen(8000, function(){
  console.log('listening on 8000')
})
