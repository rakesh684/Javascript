// const student1 = {
//   id: 1,
//   name: "Reed",
//   subjects: [],
//   addSubject(subject) {
//     this.subjects = [...this.subjects, subject];
//   }
// }
// constructor function
function Student(id, name, subjects = []) {
    this.id = id;
    this.name = name;
    this.subjects = subjects;  
  }
  
  Student.prototype.addSubject = function(subject) {
    this.subjects = [...this.subjects, subject];   
  }
  
  const student1 = new Student(1, 'Reed');
  const student2 = new Student(2, 'Doug');
  
  student1.addSubject('Math');
  student2.addSubject('Physics');
  console.log(student2.subjects);

  // 1. create a new constructor function, Book, which logs books in the school library (id, title, author, themes[]), 
// 2. Add ids, titles and authors for your two favourite books. 
// 3. Use the prototype keyword to add a theme property to the  books. 
// 4. Add at least one theme to each of your books. 

// Beginning:

function Book(id,title,author,theme=[]) {
	// your code here
	this.id=id,
	this.title=title,
	this.author=author,
	this.theme=theme
}
Book.prototype.addTheme=function(themes){
	this.theme=[...this.theme,themes]
}
const book1=new Book(1,"life of pie","Rakesh")

book1.addTheme("About life")
console.log(book1)