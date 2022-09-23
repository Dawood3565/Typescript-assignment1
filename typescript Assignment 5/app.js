//Sailani Typescript Assignment
//Add number with .get push function
var x = [2, 4, 6];
var length = x.push(10);
console.log(length);
console.log(x);
//write a ts program input number and get
/*var input:number = Number(prompt("enter unit number"));
console.log(Math.floor((input/1100)*100));*/
//write a ts program student saygradient #1
//export{};
function saygraydient() {
    var studentlist = ["ali", "Naveed"];
    for (var index = 0; index < studentlist.length; index++) {
        console.log("hi" + index + "welcome to university");
    }
    var input = "Naveed";
    if (input == "Naveed") {
        console.log("hi" + studentlist[1] + "welcome to our university, you are toper");
    }
    else {
        console.log("by");
    }
}
saygraydient();
//End
//program no 1,2
//write a ts program to find a maximum between two numbers
// I did use Math.max() function in this program
function MaxNum() {
    var num1 = [2, 4];
    var num2 = [2, 4, 8];
    console.log(Math.max.apply(Math, num1));
    console.log(Math.max.apply(Math, num2));
}
MaxNum();
//output: 4,8
//End
//program no 3
//write ts program to check whether a number is negative, positive or zero
// I did use if, else statement
function numbers() {
    var user_input = 2;
    //var convert:number = Number(user_input);
    if (user_input > 0) {
        console.log("Number is positive");
    }
    else {
        console.log("Number is Negative");
    }
}
numbers();
//end
//4.Write a ts program to check whether a number is divisible by 5 and 11 or not.
var input_number = 2;
if (input_number % 2 == 0) {
    console.log("number is divisible");
}
else {
    console.log("the number is not divisible");
}
//end.
//5. Write a ts program to check whether a number is even or odd.
var inp_num = 4;
if (inp_num % 2 == 0) {
    console.log("even");
}
else {
    console.log("ODD");
}
//6. Write a ts program to check whether a year is leap year or not.
var leap_value = 6;
//var conver:number = Number(leap_value);
if (0 == leap_value % 4 && 0 != leap_value % 100) {
    console.log(leap_value + "is leap year");
}
else {
    console.log(leap_value + "is not leap year");
}
//end
//7.8.9.10 Write a ts program to check whether a character is alphabet or not.
function alphabet() {
    var alphabet = document.getElementById("alpha").value;
    var latter = /^[A-Za-z]+$/;
    if (alphabet.match(latter)) {
        console.log("alphabet");
    }
    else {
        console.log("False");
    }
}
//end
//11. Write a ts program to input week number and print week day.
var week_num = 5;
var weekday = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
if (week_num == 1) {
    console.log(weekday[0]);
}
else if (week_num == 2) {
    console.log(weekday[1]);
}
else if (week_num == 3) {
    console.log(weekday[2]);
}
else if (week_num == 4) {
    console.log(weekday[3]);
}
else if (week_num == 5) {
    console.log(weekday[4]);
}
else if (week_num == 6) {
    console.log(weekday[5]);
}
else if (week_num == 7) {
    console.log(weekday[6]);
}
else {
    console.log("False");
}
//end
//12.Write a ts program to input month number and print number of days in that month
var month = "February";
//var result:number[] = [1,2,3,4,5] 
if (month == "januarry") {
    console.log("31 days");
}
else if (month == "February") {
    console.log("Total 28 days");
}
else {
    console.log("false");
}
//end
//program no 13.
//write ts program to count number of notes in given amount
var input = 100;
//var convert_int:number = Number(input);
console.log(input / 10);
console.log(input / 50);
//end 13. program
//14.Write a ts program to calculate profit or loss.
var cp = 1000;
var sp = 1300;
var op = (sp - cp);
var oop = (cp - sp);
//console.log(op);
if (sp > cp) {
    console.log(op + "you get the profit");
}
else if (sp < cp) {
    console.log(oop + "you want a Lose");
}
else if (sp == cp) {
    console.log(op + "Equal profit");
}
function resultfun() {
    // var input1 = ((document.getElementById("test1") as HTMLInputElement).value);
    // var a:number = Number(input1);
    // var input2 = ((document.getElementById("test2") as HTMLInputElement).value);
    // var b:number = Number(input2);
    // var input3 = ((document.getElementById("test3") as HTMLInputElement).value);
    // var c:number = Number(input3);
    // var input4 = ((document.getElementById("test4") as HTMLInputElement).value);
    // var d:number = Number(input4);
    // var input5 = ((document.getElementById("test5") as HTMLInputElement).value);
    // var e:number = Number(input5);
    //console.log(a+b+c+d+e);
    var math = 30;
    var chemistry = 60;
    var physics = 40;
    var english = 35;
    var urdu = 20;
    var result = math + chemistry + physics + english + urdu;
    console.log(result);
    console.log((result / 500) * 100);
}
resultfun();
