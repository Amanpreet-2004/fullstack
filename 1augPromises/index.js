
// let p1 = new Promise((resolve, reject) => {

//     // reject("rejected p1")
//     setTimeout(() => {
//         resolve("take pacekt of maggi")
//     }, 2000)




// })


// let p2 = new Promise((resolve, reject) => {

//     setTimeout(() => {
//         // resolve("boil it")

//         reject("some fals done in p2")
//     }, 10000)

//     // 

// })


// let p3 = new Promise((resolve, reject) => {

//     setTimeout(() => {
//         resolve("msala pao")
//         //  reject("some false in masala pao")
//     }, 15000)

// })

// let p4 = new Promise((resolve, reject) => {

//     setTimeout(() => {
//         resolve("eat or moj kro")
//     }, 20000)

// })

// console.log("hellllo")


// p1.then(res1=>{
//     console.log(res1);

//     return p2
// }).then(res2=>{
//     console.log(res2)
//     return p3
// }).then(res3=>{
//     console.log(res3)
//     return p4
// }).then(res=>{
//     console.log(res);
// }).catch(err=>console.log(err))

// let maggiprocess=async function(){

//     let res1=await p1;
//     setTimeout(() => {
//         console.log(res1)
//     }, 10000);
//     // 
//     // console.log(res1)

//     let res2=await p2
//     console.log(res2)

//     let res3=await p3
//     console.log(res3)

//     let res4=await p4
//     console.log(res4)

//     console.log("helloooooo")

// }


// let maggiprocess = async function () {


//     try {

//         let res1 = await p1;
//         console.log(res1)


//         let res2 = await p2
//         console.log(res2)

//         let res3 = await p3
//         console.log(res3)

//         let res4 = await p4
//         console.log(res4)

//     } 
//     catch (err) {
//         console.log(`the error is ${err}`)
//     }
// }

// maggiprocess()


// const promise = new Promise((resolve, reject) => {
//     const res = false;
//     // An asynchronous operation
//     const res2= true
//     // reject("jkkkkkkjjkjjk")
//     resolve("yoooooooooo");

//     console.log("arrrrrrrrrrrrrsh")
//     if (res && res2) {
//       resolve('Resolved!');
//     }

//     else {
//       reject("erro hai");
//     }
//   });

//   promise.then((res) => console.log(res)).catch(err=>console.log(err))






//try catch block

let obj = {
    "userId": 1,
    "id": 1,
    "title": "delectt us auautem",
    "completed": false
}



// console.log(obj)

// console.log(obj.id, obj.completed)
console.log("SAKSHI")

let newobj = JSON.stringify(obj)
console.log(newobj)

// console.log(newobj.json())

let secondobj = JSON.parse(newobj)
console.log(secondobj)



let url = "https://jsonplaceholder.typicode.com/users"

// let getdata=function(){
//     fetch(url).
//     then(res => res.json()).
//     then(data => console.log(data)).
//     catch(err=>console.log(err))

// }

// let getdata = async function () {

//     try {
//         let res = await fetch(url)

//         // console.log(res)

//         let data = await res.json()

//         console.log(data)
//     } catch (err) {
//         console.log(err)
//     }

// }

// url = "https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=37fa9304349edd22e0256fe99d865d23"
let getdata = async function () {
    try {
        let res = await fetch(url)
        let data = await res.json()

        let n = data.length
        for (let i = 0; i < n; i++) {
            console.log(data[i].name + " street is " + data[i].address.street)

        }

      
    }
    catch (err) {
        console.log(err)
    }
}

getdata()








