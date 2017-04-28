function human(name){
  person = {
    myname: name,
    distance_traveled: 0
  }
  function say_name(a){
    return alert(a)
  }
  say_name(person.myname)

  function say_something(b){
    var str = "I am cool"
   return console.log( b + " says "+ str)
  }
  say_something(person.myname)

  function walk(c){
    var str = "I am walking"
    person.distance_traveled +=3
   return console.log( c + " says "+ str + 'distance_traveled:'+ person.distance_traveled)
  }
  walk(person.myname)

  function run(d){
    var str = "I am runnin"
    person.distance_traveled +=;10
   return console.log(d + " says "+ str + 'distance_traveled:'+ person.distance_traveled)
  }
  run(person.myname)

  function crawl(e){
    var str = "I am crawling"
    person.distance_traveled +=;10
   return console.log(e + " says "+ str + 'distance_traveled:'+ person.distance_traveled)
  }
  crawl(person.myname)
}
human('Benis')
