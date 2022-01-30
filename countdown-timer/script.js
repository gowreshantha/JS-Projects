console.log("new Date() = "+new Date());

//Creatng a specific date object in JavaScript using a date string
var dateOfBirth = new Date("September 13, 1991 04:15:00");
console.log(dateOfBirth);



function countdown(){
    var currentYear = new Date();
    console.log(currentYear.getFullYear());
}

countdown();


const date1 = new Date('7/13/2010');
const date2 = new Date('12/15/2010');
const diffTime = Math.abs(date2 - date1);
const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
console.log(diffTime + " milliseconds");
console.log(diffDays + " days");