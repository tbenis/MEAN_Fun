function  Ninja(name, cohort, belt_level){
  ninja = {
    myname: name,
    cohort: cohort,
    belt_level: belt_level
  }
  function say_name(a){
    return alert(ninja.myname)
  }
  say_name(ninja.level_up)

  function say_mycohort(b,c){
    var str = "I am in the "
   return console.log( b + " says: "+ str + c +" cohort")
  }
  say_mycohort(ninja.myname, ninja.cohort)

  function belt_level(e,g){
    var str = "I have a"
    if (ninja.belt_level == 1){
      str + " Yellow Belt"
    }
    if (ninja.belt_level == 2){
      str + " Red Belt"
    }
    if (ninja.belt_level == 3){
      str + " Black Belt"
    }
    ninja.level_up +=3;
   return console.log( e + " says "+ str)
  }
  walk(ninja.myname, ninja.belt_level)

}
var ninja1 = new ninjaConstructor('MindyL', "eta", 2)
