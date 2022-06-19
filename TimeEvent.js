function sayHello(){
  console.log("Hello");
}
setTimeout(sayHello,1000);

//setting intervl and stop
var sec = 1;
function sayHi(){
  console.log("after",sec);
  sec++;
  if(sec==6){
    clearInterval(id);
  }
}

var id = setInterval(sayHi,1000);

