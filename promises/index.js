
let p1=new Promise((resolve,reject)=>{

    // reject("rejected p1")
    setTimeout(()=>{
        
    },2000)

    resolve("take pacekt of maggi")
    

})


let p2=new Promise((resolve,reject)=>{

    setTimeout(()=>{
         
        // reject("some fals done in p2")
    },10000)
    resolve("boil it")
    // 
   
})


let p3=new Promise((resolve,reject)=>{

    setTimeout(()=>{
         
        //  reject("some false in masala pao")
    },15000)
   resolve("msala pao")
})

let p4=new Promise((resolve,reject)=>{

    setTimeout(()=>{
        
    },20000)
    resolve("eat or moj kro")
})

console.log("hellllo")


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

let maggiprocess=async function(){

    let res1=await p1;
    setTimeout(() => {
        console.log(res1)
    }, 10000);
    // 
    // console.log(res1)

    let res2=await p2
    console.log(res2)

    let res3=await p3
    console.log(res3)

    let res4=await p4
    console.log(res4)

    console.log("helloooooo")

}

maggiprocess()








