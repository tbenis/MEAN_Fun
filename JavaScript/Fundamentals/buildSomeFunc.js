function runningLogger(){
  console.loh('I am running!')
}
function miltiplyByTen(five){
  return five *=10
}
multiplyByTen(5)

function str1(){
  return "Hey i am str 1"
}

function str2(){
  return "Hey i am str 2"
}

function caller(a){
  if (typeof(a) == Function){
    a();
  }
}


function myDoubleConsoleLog(a, b){
  if (typeof(a) == Function){
    a();
    return b();
  }
  if (typeof(b) == Function){
    return b();
  }
}

function caller2(a){
  console.log('starting');

  if (typeof(a) == function){

    setTimeout(explode, 2000)
    console.log('ending');
    return 'interesting';
  }
}
