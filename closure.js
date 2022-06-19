//IIFE Immedietly invoked funnction expression
//we are using this to avoid the global variable

//code within global scope

var name ="file";
setTimeout(function()
{
  console.log(name);
},1000);

//same above code within function scope
function print(){
  var name ="file";
  setTimeout(function()
  {
    console.log(name);
  },1000);
}
print();

//the above code are still within global function to
//avoid it we use IIFE now below code avoid function call as

{
  function print(){
    var name ="file";
    setTimeout(function()
    {
      console.log(name);
    },1000);
  }
}print();

// Above code written using let
{
  let filename="Ram";
  setTimeout(function()
  {
    console.log(filename);
  },1000);
}

// closure example here both function share same body function
// but store different lexical envirement
function makeAdder(x){
  return function(y){
    return x+y;
  };
}
var add5 = makeAdder(5);
var add10 = makeAdder(19);
console.log(add5(2));
console.log(add10(4));


//more example on closure

var i =10;
function outer()
{
  var j= 20;
  console.log(i,j);
  var inner = function()
  {
    var k = 30;
    console.log(j,k);
    i++;
    j++;
    k++;
  }

  return inner;
}var inner = outer();
inner();


// more example
// due to closure it will give same value of i in whole loop

for (var i = 1;i<=5;i++){
  setTimeout(function(){
    console.log(i);
  
  },1000);
};

//same above code using let
function test(){
  for(let i=1;i<=5;i++){
    setTimeout(function(){
      console.log(i);
    
    },1000);
  }
}
test();

