function myBirthYearFunc(){
    console.log("I was born in" + 1980);
}
myBirthYearFunc();
 // console.log will state 'i was  born in 1980'






 function myBirthYearFunc(birthYearInput){
    console.log("I was born in" + birthYearInput);
}
myBirthYearFunc(1980);
// console.log will state 'i was born in' and the parametre that the user  put







function add(num1, num2){
    // this consolelog will show a message 'summing numbers'
    console.log("Summing Numbers!");
    // console log will show us 'num1 is ' and the number that the user put
    console.log("num1 is: " + num1);
   // console log will show us 'num2 is ' and the number that the user put
    console.log("num2 is: " + num2);
    var sum = num1 + num2;
    // console log will show us the sum of num1 and num2
    console.log(sum);
}
add(10, 20)