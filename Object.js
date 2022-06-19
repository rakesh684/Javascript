//class is template and object is instancre of class
// // creating object
// var student1 ={
//   'name' : "rakesh",
//   'roll_no' : 155,
//   'marks' : 75,
// }
// console.log(student1);
//crating student like object are difficult so we create function
function createStudent(name,roll_no,marks){
  var student={};//all new object
  student.name=name;
  student.roll_no=roll_no;
  student.marks=marks;
  return student;
}
var student1= createStudent("Ravi",156,90);
console.log(student1);
var student2= createStudent("Rakesh",155,75);
console.log(student2);
var student3= createStudent("Priyanka",150,74);
console.log(student3)

// creating object using constructor
"use strict";
function Student(name,roll_no,marks){
  this.name;
  this.roll_no;
  this.marks;

}
var student1= new Student("Ravi",156,90);
console.log(student1);
var student2= new Student("Rakesh",155,75);
console.log(student2);
var student3= Student("Priyanka",150,74);
console.log(student3)

// Adding property to function
function vehicle(numWheel,price){
  this.numWheel=numWheel;
  this.price=price;
  // this.getPrice = function(){
  //   console.log(this.price);
  //   return this.price;
   
  // }
}
var vehicle1 = new vehicle(3,20000);
console.log(vehicle1);
var vehicle2 = new vehicle(3,20000);
console.log(vehicle2);

//In the above code every time copy of getPrice is going to copy
//so to avoid it we use prototype
vehicle.prototype.getPrice=function(){
  return this.price;
}
var vehicle3 = new vehicle(3,30000);
console.log(vehicle3);
console.log(vehicle3.price);


