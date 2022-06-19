var cars =[
  "fdajfh",
  "fdhuf",
  "ryire"
];
var cars=[];
cars[0]="djkgk";
cars[1]="djkgk";
cars[2]="djkgk";

const cars = new Array("fkjaf","uoqheu","jniufg",9);
cars.splice(0,2,99);
// cars[0]="ueuhuf";
console.log(cars);

//iterating over array
// for(var i =0; i<=cars.length-1;i++){
//   console.log(cars[i]);
// }

//iterating over array using foreach
function print(element){
  console.log(element);
}
cars.forEach(print);

// every property for checking either array pass all test case
const test = function(x){
  return x=String;
}
console.log(cars.every(test));