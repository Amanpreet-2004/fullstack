
//break and continue in for loop

// break: keyword it is to break out or come out from loop at certain condition

//for ex
// for(let i=0;i<1000;i++){
//     console.log(i)
//     if(i==500){
//         console.log("comming out from loop")
//         break;
//     };
// }

//continue : keyword used in loops to skip program in for loops at certain conditions

// for(let i=0;i<10;i++){
//     // console.log(i)
//     if(i%2==0) continue;
//     console.log(i)
//     console.log("hi r u nur ruurururuururururuur")
//     // 
//     // if(i>=1000) break;
// }



// for(let i=0;i<100;i++){
//     // console.log(i)
//     if(i%2==1){
//         console.log(i)
//     }
//     if(i>=50) break;
// }

//WHILE LOOP

let i=0;
let j=1;

while(i<1000 && j<=1000){
    console.log(j)
    i=i+2
    j=j*10
}



// while(i<1000 || j<=1000){
//     console.log(i)
//     i=i+2
//     j=j*10
// }

// //  j=1  i=0;
//     j=1x10  i=2
//     j=10x10  i=4
//     j=100x10  i=6
//     j=1000x10  i=8

// let name="sarasharma"
// let arr=[1,2,3]
// arr.push(5)
// console.log(arr)

// console.log(name[0], name[2])
// // name.push('a')
// name=name+'a'
// console.log(name)

// let n=name.length
// let ans=""
// console.log(n)
// for(let i=n-1;i>=0;i--){
//     ans=ans+name[i]
// }

// console.log(ans)


// let name="arashamanaman"
// let n=name.length
// let ans=" "
// for(let i=n-1; i>=0; i--){
//     ans=ans+name[i]
// }
// console.log(ans)


//palindrome string : string whihc is same after reversed is known as palidnrome

//ex  amma    amma
//"Dad", "civic", "kayak", "level", "mom", "noon", "racecar", "radar", "redder", "refer", "repaper", "rotator", "rotor", "sagas", "solos", "stats", "tenet", "wow"

// Q take a input string and check if it is palidrome or not  if palidrome then cosole "yes" else "no"



// let str=prompt("enter the string: ")
// let n=str.length
// let ans="";
// for(let i=n-1;i>=0;i--){
//     ans=ans+str[i];
// }
// if(ans===str){
//     console.log("palideome yes")
// }
// else{
//     console.log("no")
// }