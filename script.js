//This is assigmnet no 12
// 1. Write a js program to print all natural numbers from 1 to n. - using while loop
// var i=1;
// var n=10;
// while (i<=n) {
//     console.log(i);
//     i++;
// }

// 2. Write a js program to print all natural numbers in reverse (from n to 1). - using while loop
// let n=10;
// let i= n;
// while(i>=1){
//     console.log(i);
//     i--;
// }
// 3. Write a js program to print all alphabets from a to z. - using while loop
// let i="a".charCodeAt(0);
// let z="z".charCodeAt(0);
// while (i<=z) {
//     var char=String.fromCharCode(i);
//     console.log(char);
//     i++;
// }
                // 4. Write a js program to print all even numbers between 1 to 100. - using while loop
// var i=1;
// var n=100;
// while (i<=100) {
//     if(i%2==0){
//         console.log(i); 
//     }
//     i++;
// }

                // 5. Write a js program to print all odd number between 1 to 100.
// var i=1;
// var n=100;
// while (i<=100) {
//     if(i%2==1){
//         console.log(i); 
//     }
//     i++;
// }
                //6. Write a js program to find sum of all natural numbers between 1 to n.

// let sum=0;
// i=1;
// n=100;

// for (let i = 1; i <= 100; i++) {
//     sum += i;
//  console.log(sum);   
// }


                // 7. Write a js program to find sum of all even numbers between 1 to n.
// var i =1;
// var n=10;
// var sum=0;
// for (let i = 2; i <= n; i++) {

//                                     //chatgpt also solve this example with function method 

//     if (i%2==0) {
//         sum+=i;
//         console.log(sum);
//     }
// }

                // 8. Write a js program to find sum of all odd numbers between 1 to n.
// var i=0;
// var sum=0;
// var n=10;
// for(let i=0; i<=n;i++){
//     if(i%2==1)  {
//         sum+=i;
//         console.log(sum);
//     }
// }


                                //If-else exercise
                //  1. Write a js program to find maximum between two numbers.
// var a=15;
// var b=10;
// if (a>b) {
//     console.log(`The Value of a ${a} is greater then b ${b}`);
// } else {
//     console.log(`The Value of a ${a} is smaller then b ${b}`)
// }

                // 2. Write a js program to find maximum between three numbers.
// var a=10;
// var b=s2;
// var c=3;
// if (a>b&&a>c) {
//     console.log("a is greater than b and c");
// } else if(b>a&&b>c) {
//     console.log("b is greater than a and c");
// }
// else{
//     console.log("c is greater than a and b");
// }

                // 3. Write a js program to check whether a number is negative, positive or zero.
// let number=-1;
// if(number>0){
//     console.log("The number is positive and greater than  zero");
// }
// else if(number<0){
//     console.log("The Number is negtive and less than zero");
// }
// else {
//     console.log("the number is neutral zero");
// }

                // 4. Write a js program to check whether a number is divisible by 5 and 11 or not.
// number=55;
// if(number%5==0 && number%11==0){

// console.log("This number is divisible by 5 and 11");
// }else{
//     console.log("Sorry This number is not divisible by 5 and 11 ");
// }

                // 5. Write a js program to check whether a number is even or odd.\
// var number=20;
// if(number%2==0){
//     console.log("The number is even");
// }else{
//     console.log("The Number is Odd");
// }

                    // 6. Write a js program to check whether a year is leap year or not.
                    // a js program to check whether a character is alphabet or not.
// var year=2024;
// if (year%4==0){
//     console.log("This is leap year");
// }else{
//     console.log("This is not leap year");
// }
                    // 8. Write a js program to input any alphabet and check whether it is vowel or consonant.
// var alphabet=prompt("Please Enter a alphabet");
// if(alphabet=="a"||alphabet=="e"||alphabet=="i"||alphabet=="o"||alphabet=="u"){
//     console.log("Your alphabet is vowel ");
// }else{
//     console.log("your alphabet is consonent");
// }
                // 9. Write a js program to input any character and check whether it is alphabet, digit or special character.
// var char =prompt("pleasse press any single key/character");
// if(char.length==1){
//         if(char.match(/[0-9]/)){
//             console.log("your entered value is numeric didgit");
//         }else if(char.match(/[a-zA-Z]/)){
//             console.log("your enterd value is alphabatic");
//         }else{
//             console.log("Your entered value is a special character");
//         }
// }else{
//     console.log("please enter any single character");
// }


            // 10. Write a js program to check whether a character is uppercase or lowercase alphabet.
// var char=prompt("Enter Character");
// if(char.match(/[a-zA-Z]/)){
//     if(char.match(/[a-z]/)){
//         console.log("your input character is lowercase");
//     }else{
//         console.log("input is Upper Csase");
//     }
// }else{
//     console.log("please enter only alphanatic value");
// }

            //11. Write a js program to input week number and print week day.
// var weekNumber=prompt("Please enter number between 1-7")
// if(weekNumber.match(/[1-7]/)){
//     if(weekNumber==1){
//         console.log("Today is Monday");
//     }else if(weekNumber==2){
//         console.log("Today is Tuesday");
//     }else if(weekNumber==3){
//         console.log("Today is Wednesday");
//     }else if(weekNumber==4){
//         console.log("Today is Thuresday");
//     }else if(weekNumber==5){
//         console.log("Today is Friday");
//     }else if(weekNumber==6){
//         console.log("Today is Saturday");
//     }else{
//         console.log("Today is Sunnday");
//     }
// }else{
//     console.log("Please Enter number between 1-7");
// }


            // 12. Write a js program to input month number and print number of days in that month.
// var monthNumber=prompt("Please Enter month Number");
// if(monthNumber>=1 && monthNumber<=12){                  //why .match function doesn't work here?
//     if(monthNumber==1){
//         console.log("january month consit on 31 days");
//     }else if(monthNumber==2){
//         console.log("February month have 28/29(leapYear) days");
//     }else if(monthNumber==3){
//         console.log("March month have 31 days");
//     }else if(monthNumber==4){
//         console.log("April month have 30 days");
//     }else if(monthNumber==5){
//         console.log("May month have 31 days");
//     }else if(monthNumber==6){
//         console.log("June month have 30 days");
//     }else if(monthNumber==7){
//         console.log("july month have 31 days");
//     }else if(monthNumber==8){
//         console.log("August month have 31 days");
//     }else if(monthNumber==9){
//         console.log("September month have 30 days");
//     }else if(monthNumber==10){
//         console.log("October month have 31 days");
//     }else if(monthNumber==11){
//         console.log("November month have 30 days");
//     }else{
//         console.log("December month have 31 days");
//     }
// }else{
//     console.log("Please Enter Number between 1 to 12");
// }
                //13. Write a js program to count total number of notes in given amount.
// var amount=prompt("Please Enter Amount ")
// if(amount>=5000){
//     thousandRemain=amount/5000;
// }

        // 14. Write a js program to input angles of a triangle and check whether triangle is valid or not.
// var angle1=parseFloat(prompt("please Enter the first angle of triangle "));
// var angle2=parseFloat(prompt("please Enter the second angle of triangle "));
// var angle3=parseFloat(prompt("please Enter the third angle of triangle "));
// var sum=angle1+angle2+angle3;
// if(angle1>0 && angle2>0 && angle3>0 &&(angle1+angle2+angle3===180)){
//     console.log("This is valid triangle"+sum);
// }else{
//     console.log("This is not valid Triangle"+sum);
// }

        // 15. Write a js program to input all sides of a triangle and check whether triangle is valid or not.
// var sideA=parseFloat(prompt("Please Enter The value of triangle's A side"));
// var sideB=parseFloat(prompt("Please Enter The value of triangle's B side"));
// var sideC=parseFloat(prompt("Please Enter The value of triangle's C side"));
// if(sideA>0 && sideB>0 && sideC>0 && (
//     sideA+sideB>sideC &&
//     sideB+sideC>sideA &&
//     sideA+sideC>sideB
// )){
//     console.log("Triangle is valid");
// }else{
//     console.log("Triangle is not valid");
// }

// 16. Write a js program to check whether the triangle is equilateral, isosceles or scalene triangle.
// var side1=parseFloat(prompt("Please Enter the side 1 value of triangle"));
// var side2=parseFloat(prompt("Please Enter the side 2 value of triangle"));
// var side3=parseFloat(prompt("Please Enter the side 3 value of triangle"));
// if (side1>0 && side2>0 && side3>0) {
//     if (side1==side2&&side1==side3&&side2==side3) {
//         console.log("The triangle is Equilatreal");
//     }else if((side1==side2||side1==side3||side2==side3)){
//             console.log("The Triangle is isosceles");
//     }else{
//         console.log("The Triangle is scalene ");
//     }
    
// }else{
//     console.log("please enter the value greter than 0");
// }

                    //17. Write a js program to find all roots of a quadratic equation.
// var a=parseFloat(prompt("Please Enter The value of a"));
// var b=parseFloat(prompt("Please Enter The value of b"));
// var c=parseFloat(prompt("Please Enter The value of c"));
// var internal=b*b- 4*a*c;


                    //18. Write a js program to calculate profit or loss.
// var buyRate=parseFloat(prompt("Please Enter the buying value "));
// var sellRate=parseFloat(prompt("Please Enter the selling value "));
// if(buyRate<sellRate){
//     console.log("Profit");
// }else{
//     console.log("Loss");
// }

//19. Write a js program to input marks of five subjects Physics, Chemistry, Biology, Mathematics and Computer. Calculate percentage and grade according to following:
// Percentage >= 90% : Grade A
// Percentage >= 80% : Grade B
// Percentage >= 70% : Grade C
// Percentage >= 60% : Grade D
// Percentage >= 40% : Grade E
// Percentage < 40% : Grade F


// var Physics=parseFloat(prompt("Please Enter the Physics Number"));
// var Chemistry=parseFloat(prompt("Please Enter the chemistry Number"));
// var Biology=parseFloat(prompt("Please Enter the Biology Number"));
// var Mathematics=parseFloat(prompt("Please Enter the Mathematics Number"));
// var Computer=parseFloat(prompt("Please Enter the Computer Number"));
// var ObtainigMarks=Physics+Chemistry+Biology+Mathematics+Computer;
// var totalMarks=500;
// var percentage=100*ObtainigMarks/totalMarks;
// if (percentage>=90) {
//     console.log("You Got Grade A",percentage);
// }else if(percentage>=80){
//     console.log("You Got Grade B",percentage);
// }else if(percentage>=70){
//     console.log("You Got Grade C",percentage);
// }else if(percentage>=60){
//     console.log("You Got Grade D",percentage);
// }else if(percentage>=40){
//     console.log("You Got Grade E",percentage);
// }else{
//     console.log("You Got Grade F",percentage);
// }


// 20. Write a js program to input basic salary of an employee and calculate its Gross salary according to following:
// Basic Salary <= 10000 : HRA = 20%, DA = 80%
// Basic Salary <= 20000 : HRA = 25%, DA = 90%
// Basic Salary > 20000 : HRA = 30%, DA = 95%
// var basicSalary=parseFloat(prompt("Please Enter Your Basic Salary"));
// if (basicSalary<=10000){
//     var HRA=20*basicSalary/100;
//     var DA=80*basicSalary/100;
//     var grossSalary=basicSalary+HRA+DA;
//     console.log("Your Gross Salary is ",grossSalary);
// }else if(basicSalary<=20000){
//     var HRA=25*basicSalary/100;
//     var DA=90*basicSalary/100;
//     var grossSalary=basicSalary+HRA+DA;
//     console.log("Your Gross Salary is ",grossSalary);
// }else{
//     var HRA=30*basicSalary/100;
//     var DA=95*basicSalary/100;
//     var grossSalary=basicSalary+HRA+DA;
//     console.log("Your Gross Salary is ",grossSalary);
// }

// 21. Write a js program to input electricity unit charges and calculate total electricity bill according to the given condition:
// For first 50 units Rs. 0.50/unit
// For next 100 units Rs. 0.75/unit
// For next 150 units Rs. 1.20/unit
// For unit above 250 Rs. 1.50/unit
var electricUnit=parseFloat(prompt("Please Enter Electric Unit consumption"));
if(electricUnit<=50){
    var rate=0.50;
    var bill=electricUnit*rate;
    console.log("Your Electric bill is",bill);
}else if(electricUnit<=100){
    var rate=0.75;
    var bill=electricUnit*rate;
    console.log("Your Electric bill is",bill);
}else if(electricUnit<=150){
    var rate=1.20;
    var bill=electricUnit*rate;
    console.log("Your Electric bill is",bill);
}else{
    var rate=1.50;
    var bill=electricUnit*rate;
    console.log("Your Electric bill is",bill);
}