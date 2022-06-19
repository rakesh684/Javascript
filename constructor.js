function demo(){
  console.log(this)
}
console.log(this);
demo();

//function epressiion
var demo2=function(){
  console.log(this);
}
console.log(this);
demo2();

//another way of clling function
var obj ={
  'prop1':10,
  'prop2': function(){
    console.log(this);
  }
}
obj.prop2();

//strict mode in this function
"use strict";
function demo3(){
  console.log(this);
}
var obj1 = {
  'prop': 100,
  'print': function(){
    console.log(this);
  }
}
demo3();
//using call
demo3.call(obj1);
obj1.print();

//using apply
demo3.apply(obj1);

// difference bwn call and apply is of passing argument
// in call we have to pass argument normally
// in apply argument is pass as array

// example of call and apply with argument
"use strict";
function demo4(a,b){
  console.log(this);
  console.log(a,b);
}
var obj2={
  'one': 300,
  'two':function(){
    console.log(this);
  }
}
// call with argument
demo4.call(obj2,2,3);
// apply with argument
demo4.apply(obj2,[2,3]);
