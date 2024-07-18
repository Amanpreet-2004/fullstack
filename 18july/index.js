//ARGUMENTS
// let add=function(a,b){
//     return a+b;
// }
              //a,b
// console.log(add(4,5))
// console.log("aman ","arash")
// console.log(21,"arash")



//HOF(HIGHER ORDER FUNCTION)
// let printname=function(name){
//     console.log(name);
//     // return name;
// }

// // printname("aman")
// // console.log(printname("arash"))

// let hof=function(name,printname){
//     // printname(name)
//     let printname=function(name){
//         console.log(name)
//     }

//     printname(name)
//     console.log("hof me hu")
// }

// hof("aman",printname)
        //printname("aman")

//make hof whihc take two function named add and sub and two numbers a,b  
//add function will console the sum and subtract function will console the diff  i.e a-b
// let add=function(a,b){
//     console.log(a+b)
// }
// let sub=function(a,b){
//     console.log(a-b)
// }
// let hof= function(a,b,add,sub){
//     add(a,b)
//     sub(a,b)
// }


// hof(6,4,add,sub)


//CALL BACK FUNCTION :

// let add=function(a,b){
//     console.log(a+b)
// }
// let sub=function(a,b){
//     console.log(a-b)
// }
// let hof= function(a,b,add,sub){
//     add(a,b)
//     sub(a,b)
// }

// add(3,4)

//add,sub are functions but IN ABOVE add,sub are paassed as arguments threfore they are callbck functions

//examples of HOF whihc return a function

// let hofRF=function(){
//     // return 9;
//     return function(){
//         // console.log("returned function")
//         return "returned"
//     }
// }
// let returnedFN=hofRF()
// console.log(returnedFN())
// console.log(hofRF()())



// let obj={
//     name:"chandna",
//     class:"clg++"
// }
// let obj2={

//     age:21,
//     city:"kharar"

// }
// let showobj2
// let showobj=function(object,object2){
//     console.log(object.name," ",object.class, object2.age, object2.city )
// }

// showobj(obj, obj2);


let retunedobj=function(){
    return {
        name:"sugandh",
        age:23,
        month:11,
        clg:46,
        getsum:function(){
         return this.age + this.month   
        }
        
    }
}

let obj=retunedobj();
console.log(obj.getsum())
console.log(obj.age," ",obj.clg)

















