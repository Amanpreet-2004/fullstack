//condition : doing something based on certain condition
let a=20;
// if(a<21){
//     console.log('a is small')
// }
// if(a===20){
//     console.log("a is equal")
// }

// if(a>0){
//     console.log('a is positive')
// }

// if(a<20){
//     console.log("a is smaller")
// }else{
//     console.log('a is greater or equal')
// }

// if(a==40){
//     console.log("21 this is true")
// }
// else if(a>30){
//     console.log("24 this is true")
// }
// else if(a<15){
//     console.log("27 this is true")
// }
// else if(a<20){
//     console.log("30 this is true")
// }
// else if(a>20){
//     console.log("33 is true")
// }
// else{
//     console.log("non of above is true")
// }

let marks = [100,100,80,85,75];

//percentage>=90 A+
//80<=percentage and percentage<90  A


//percentage>=70 B+
//60<=percentage and percentage<70  B


//percentage>=50 c+
//40<=percentage and percentage<50  c

// percentage>=33 D

// percentage<33 then F

let sum=0;
for(let i=0;i<5;i++){
    sum=sum+marks[i];
}

let per=sum/5;
console.log(sum);
console.log(per)

if(per>=90) {console.log("A+")}
else if(per>=80) {console.log("A")}
else if(per>=70) {console.log("B+")}
else if(per>=60) {console.log("B")}
else if(per>=50) {console.log("C+")}
else if(per>=40) {console.log("C")}
else if(per>=33) {console.log("D")}
else {console.log("F")}


//foolow up question
//make a program whihc take marks from user and then calculate the per and sum

let m1=prompt("enter your marks1 ")
let m2=prompt("enter your marks2 ")










