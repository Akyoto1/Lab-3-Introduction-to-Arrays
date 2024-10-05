let studentInformation = ["Lexa", "Small", "N123456789", "Semester 1", "female"]; 
console.log(studentInformation, "- this is an array of studentInformation");



let studentInformation = ["Lexa", "Small", "N123456789", "Semester 1", "female"]; //define an array of strings
console.log(studentInformation[0]); // display the first item "Lexa"
console.log(studentInformation[2]); // display the studentNumber "N123456789"
console.log(studentInformation[4]); // display the first item "female"



let studentInformation = ["Lexa", "Small", "N123456789", "Semester 1", "female"];
console.log(studentInformation.length); // output: 6



let studentInformation = ["Lexa", "Small", "N123456789", "Semester 1", "female"];
let lastStudentInformation = studentInformation.pop();
console.log(lastStudentInformation); // output: "female"



let studentInformation = ["Lexa", "Small", "Semester 1", "female"];
studentInformation.push ("N123456789");
console.log(studentInformation); // output: ["Lexa", "Small", "N123456789", "Semester 1", "female"]



let studentInformation = ["Lexa", "Small", "N123456789", "Semester 1", "female"];
let name = studentInformation.slice(0, 2);
console.log(name); //output: ["lexa", "small"]



let studentInformation = ["Lexa", "Small", "N123456789", "Semester 1", "female"];
for (let i = 0; i < studentInformation.length; i++) {
console.log(studentInformation[i]);
}


let studentInformation = ["Lexa", "Small", "N123456789", "Semester 1", "female"];
let [firststudentInformation, secondstudentInformation] = studentInformation;

console.log(firststudentInformation); // outputs: "Lexa"
console.log(secondstudentInformation); // outputs: "Small"