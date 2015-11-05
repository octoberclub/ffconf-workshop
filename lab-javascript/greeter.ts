class Student {
	fullname:string;
	constructor(public firstname, public middleinitial, public lastname){
		this.fullname=firstname + " " + middleinitial + " " + lastname;
	}
}

interface Person {
	firstname:string;
	lastname:string;
}

function greeter(person : Person) {
		return `Hello, ${person.firstname} ${person.lastname}`;
	}

var user =new Student("Michelle", "Babe", "Steele");
var user1=new Student("Martyn","Metal","Osbourne");
var user2 = new Student("Declan","smiley","Ward");

var [michelle, martyn, declan] = printStudents(user, user1, user2);

printStudents(michelle);

function printStudents(...listOfStudents: Student[]) {
	for(var v of listOfStudents){
		document.body.innerHTML += greeter(v) + "</br>";
	}
	return listOfStudents;
}