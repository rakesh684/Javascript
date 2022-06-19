var Student = {
  name :"Rakesh",
rollNo : 20,
 marks : 39,
 "2":"two"};
console.log(Student);
console.log(Student.rollNo);
Student.marks=100;
Student.sem=4;
delete Student.sem;
console.log(Student.marks);
console.log(Student);
console.log(typeof(Student));
console.log(Student["marks"]);

//acess the property that we don't know
function printProperty(obj,prop){
  console.log(obj[prop]);
}
var prop="name";
var prop1="sem";
printProperty(Student,prop);
printProperty(Student,prop1);

var Student1 = Student;
Student1.two="two";
console.log(Student1["2"]);
console.log(Student1.rollNo);
console.log(Student1==Student);
console.log();

//iterating over array method 1
for(var prop in Student){
  console.log(prop,Student[prop]);
  console.log(prop);
}
console.log();
//method 2
var keys = Object.getOwnPropertyNames(Student);
console.log(keys);

//method 3
var keys=Object.keys(Student);
console.log(keys);

//nested object
Student1.address={
  city : " karma",
  pincode : 811315
}

console.log(Student.address.city);
console.log(Student1.address["pincode"]);

