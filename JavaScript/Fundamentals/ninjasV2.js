//using an object constructor function that returns an object literal
function ninjaConstructor(name, cohort) {
    ninja = {
        name: name,
        cohort: cohort,
        belt_level: "Yellow Belt"
    }
    ninja.level_up = function() {

        if (ninja.belt_level == "Yellow Belt") {
            ninja.belt_level = "Red Belt"

        } else if (ninja.belt_level == "Red Belt") {
            ninja.belt_level = "Black Belt"

        }
        return ninja.belt_level
    }
    ninja.introduce = function() {
        return 'Hi! I am ' + ninja.name + " from the " + ninja.cohort + " cohort. My curr Belt level is: " + ninja.belt_level
    }
    return ninja
}
var ninja1 = ninjaConstructor('BENIS', 'ETA')
console.log(ninja1.introduce())
console.log(ninja1.level_up())
console.log(ninja1.introduce())
console.log(ninja1.level_up())
console.log(ninja1.introduce())
//methods are not chainable :(..
