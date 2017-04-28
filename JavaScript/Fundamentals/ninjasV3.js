//using new and this to create the Ninja constructor

function Ninja(name, cohort){
  this.name = name;
  this.cohort = cohort;
  this.belt_level ="Yellow Belt";

  this.level_up= function(){
    if(this.belt_level==="Yellow Belt"){
      this.belt_level = "Red Belt"

    } else if(this.belt_level==="Red Belt"){
      this.belt_level = "Black Belt"

    }
    return this
  }
  this.introduce = function(){
   console.log ('Hi! I am ' + this.name + " from the " + this.cohort + " cohort. My curr Belt level is: " + this.belt_level)
  return this
  }


}
var ninja1 = new Ninja('BENIS', 'Zeta')
ninja1.introduce().level_up().introduce().level_up().introduce();
