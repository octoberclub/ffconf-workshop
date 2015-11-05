var Student = (function () {
    function Student(firstname, middleinitial, lastname) {
        this.firstname = firstname;
        this.middleinitial = middleinitial;
        this.lastname = lastname;
        this.fullname = firstname + " " + middleinitial + " " + lastname;
    }
    return Student;
})();
function greeter(person) {
    return "Hello, " + person.firstname + " " + person.lastname;
}
var user = new Student("Michelle", "Babe", "Steele");
var user1 = new Student("Martyn", "Metal", "Osbourne");
var user2 = new Student("Declan", "smiley", "Ward");
var _a = printStudents(user, user1, user2), michelle = _a[0], martyn = _a[1], declan = _a[2];
printStudents(michelle);
function printStudents() {
    var listOfStudents = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        listOfStudents[_i - 0] = arguments[_i];
    }
    for (var _a = 0; _a < listOfStudents.length; _a++) {
        var v = listOfStudents[_a];
        document.body.innerHTML += greeter(v) + "</br>";
    }
    return listOfStudents;
}
