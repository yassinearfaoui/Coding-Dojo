console.log(hello);                                   
var hello = 'world'; 
// var hello
// console.log(hello);  logs : undefined
// hello = 'world'; 


var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}
// var needle
// function test()
// var needle = 'haystack';
// test()
// function test(){
//         var needle = 'magnet';
//         console.log(needle): logs : magnet;
//    }



var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);
// var brendan
// function print()
// var brendan = 'super cool';
// console.log(brendan); logs : super cool

var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}
// var food 
// function eat()
// var food = 'chicken';
// console.log(food) => logs : chicken 
// eat();
// function eat(){
//         food = 'half-chicken';
//         console.log(food);  logs :  half-chicken
//         var food = 'gone';
//     }

mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);
// var mean : logs : mean is not a function  and stop



console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);
// var genre 
// function rewind()
// console.log(genre); logs : undefined 
// var genre = "disco";
// rewind();
// function rewind() {
//         genre = "rock";
//         console.log(genre);  logs :rock
//         var genre = "r&b";
//         console.log(genre); logs : r&b
//     }
// console.log(genre); logs : disco 


dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);
// function learn()
// dojo = "san jose";
//console.log(dojo);  logs : san jose 
// learn();
// function learn() {
//         dojo = "seattle";
//         console.log(dojo); logs : seatle 
//         var dojo = "burbank";
//         console.log(dojo); logs burbank
//     }
// console.log(dojo); logs : san jose 

console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo.hiring = "closed for now";
    }
    return dojo;
}
// function makeDojo(name, students)
// console.log(makeDojo("Chicago", 65));
// function makeDojo(name, students){
//         const dojo = {};
//         dojo.name = name;
//         dojo.students = students;
//         if(dojo.students > 50){
//             dojo.hiring = true;
//         }
//         else if(dojo.students <= 0){
//             dojo.hiring = "closed for now";
//         }
//         return dojo;
//     }
// logs : { name: 'Chicago', students: 65,' hiring: true }
// console.log(makeDojo("Berkeley", 0));
// function makeDojo(name, students){
//         const dojo = {};
//         dojo.name = name;
//         dojo.students = students;
//         if(dojo.students > 50){
//             dojo.hiring = true;
//         }
//         else if(dojo.students <= 0){
//             dojo.hiring = "closed for now";
//         }
//         return dojo;
//     }
//        { name: 'Berkeley', students: 0, hiring: 'closed for now' }




