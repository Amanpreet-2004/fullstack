
// console.log("classs")
// console.log("hello world")

// setTimeout(() => {
//     console.log("arashaman")
// }, 10000);    //delay is given in miliseconds


// setTimeout(() => {
//     console.log("arashaman")
// }, 0);    //delay is given in miliseconds


// setTimeout(()=>{

//     console.log("i got printed 2 sec ")

//     setTimeout(()=>{
//         console.log("it will run...after")
//         setTimeout(()=>{
//             console.log("printttttttted")
//         },10000)
//     },5000)

// },2000)






// let x = function () {
//     for (var i = 1; i <= 10; i++) {
//         setTimeout(function () {
//             console.log(i);
//         }, i * 1000);
          
//     }
//     console.log("Learn")
// }
// x();


// for (var i = 0; i < 5; i++) {
    
//     setTimeout(() => console.log(i), 0);
//     // var i=6
// }

// for (let i = 0; i < 5; i++) {
    
//     setTimeout(() => console.log(i), 0);
//     // var i=6
// }





// let arr=[2,7,11,15,2,7,11,15,2,7,11,15,2,7,11,15,2,7,11,15,2,7,11,15,2,7,11,15,2,7,11,15,2,3,4,2,6,7,3,9,0];

// console two indexs whose sum is 9;
// console.log(a,b)
// console.log(c,d)

// let n=arr.length
// for(let i=0;i<n;i++){
//     for(let j=i+1;j<n;j++){
//         if(arr[i]+arr[j]===9){
//             console.log(i,j," ",arr[i],arr[j]);
//         }
//     }
// }





let pr=new Promise((resolve,reject)=>{

    setTimeout(()=>{
          resolve("fillfilled yooooooo")
    },6000)

    // resolve("fillfilled")

    setTimeout(()=>{
        console.log("printed after 5 sec")
        setTimeout(()=>{
            reject("rejecteeeeeeed")
        },10000)
       
  },5000)


})

pr.
then(res=>console.log(res)).
catch(error=>console.log(error))



// let getdata=function(){

//     fetch('https://jsonplaceholder.typicode.com/users').
//     then(res=>res.json()).
//     then(res=>console.log(res))
//     .catch(error=>console.log(error))
// }


// getdata()

// let obj=[
//     {
//       "name": "Molecule Man",
//       "age": 29,
//       "secretIdentity": "Dan Jukes",
//       "powers": ["Radiation resistance", "Turning tiny", "Radiation blast"]
//     },
//     {
//       "name": "Madame Uppercut",
//       "age": 39,
//       "secretIdentity": "Jane Wilson",
//       "powers": [
//         "Million tonne punch",
//         "Damage resistance",
//         "Superhuman reflexes"
//       ]
//     }
//   ]

//   let newobj=JSON.stringify(obj)

//   console.log(newobj)

//   console.log(JSON.parse(newobj))















