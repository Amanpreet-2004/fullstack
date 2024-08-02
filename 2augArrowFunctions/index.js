

// let getname=function(name){
//     console.log(name)
// }

// let getsum=function(a1,a2,a3,a4){
//     return a1+a2+a3+a4
// }


//arrow fucntion
// let getname=(name)=>{
//     console.log(name)
// }

// let getname=(name)=> name
// let getname=(name)=> console.log(name)



// let getsum=(a1,a2,a3,a4)=>{
//     return a1+a2+a3+a4
// }

// getname("chandan")
// let res=getsum(1,2,3,4)
// console.log(res)


// let func=function(){

//     this.age=24
//     this.name="chandan"

//     console.log(this.age,this.name)

//     this.getnameage=function(){
         
//         this.name="arash"
//         this.age="21"

//         console.log(this.name, this.age)

//     }

//     console.log(this.getnameage())
// }


// let func=()=>{

//     this.age=24
//     this.name="chandan"

//     // console.log(this.age,this.name)

//     this.getnameage=()=>{
         
//         this.name="arash"
//         this.age="21"

//         console.log(this.name, this.age)

//     }
//      this.getnameage()
// }


// func()


//MAP AND FILTER IN JS

// let arr=["arash","aman","simran"]

// let addkaur=arr.map(name=>name+" kaur")

// let addpunjab=addkaur.map(name=>name+" from punjab")

// addpunjab.push("skahsi from UK")

// console.log(addpunjab)


let num=[13,23,23,23,23,23,2312,43,54,54,54,63,34];
    //  [1  ,2, 2, 2, 2, 2, 2,   1, 0, 0, 0, 0 , 1]
//   % reaminder(modulas)
//   / divide
//   + plus
//   - sub
//   * mul
// console.log(7%5)
// console.log((7/5).toFixed(0))
// let rem3=num.map(num => num%3)
// console.log(rem3);
// let rem3=[];
// let n=num.length;
// for(let index=0;index<n;index++){
//     // console.log(rem%3)
//     rem3.push(num[index]%3)
// }
// console.log(rem3)

// const arrayOfObjects = [
//     { id: 1, name: "Object 1", value: 10 },
//     { id: 2, name: "Object 2", value: 20 },
//     { id: 3, name: "Object 3", value: 30 },
//     { id: 4, name: "Object 4", value: 40 },
//     { id: 5, name: "Object 5", value: 50 },
//     { id: 6, name: "Object 6", value: 60 },
//     { id: 7, name: "Object 7", value: 70 },
//     { id: 8, name: "Object 8", value: 80 },
//     { id: 9, name: "Object 9", value: 90 },
//     { id: 10, name: "Object 10", value: 100 }
// ];

// let names=arrayOfObjects.map(obj => obj.name)
// console.log(...names)



// const arrayOfNestedObjects = [
//     {
//         id: 1,
//         name: "Object 1",
//         details: {
//             value: 10,
//             info: {
//                 description: "Description 1",
//                 tags: ["tag1", "tag2"]
//             }
//         }
//     },
//     {
//         id: 2,
//         name: "Object 2",
//         details: {
//             value: 20,
//             info: {
//                 description: "Description 2",
//                 tags: ["tag3", "tag4"]
//             }
//         }
//     },
//     {
//         id: 3,
//         name: "Object 3",
//         details: {
//             value: 30,
//             info: {
//                 description: "Description 3",
//                 tags: ["tag5", "tag6"]
//             }
//         }
//     },
//     {
//         id: 4,
//         name: "Object 4",
//         details: {
//             value: 40,
//             info: {
//                 description: "Description 4",
//                 tags: ["tag7", "tag8"]
//             }
//         }
//     },
//     {
//         id: 5,
//         name: "Object 5",
//         details: {
//             value: 50,
//             info: {
//                 description: "Description 5",
//                 tags: ["tag9", "tag10"]
//             }
//         }
//     },
//     {
//         id: 6,
//         name: "Object 6",
//         details: {
//             value: 60,
//             info: {
//                 description: "Description 6",
//                 tags: ["tag11", "tag12"]
//             }
//         }
//     },
//     {
//         id: 7,
//         name: "Object 7",
//         details: {
//             value: 70,
//             info: {
//                 description: "Description 7",
//                 tags: ["tag13", "tag14"]
//             }
//         }
//     },
//     {
//         id: 8,
//         name: "Object 8",
//         details: {
//             value: 80,
//             info: {
//                 description: "Description 8",
//                 tags: ["tag15", "tag16"]
//             }
//         }
//     },
//     {
//         id: 9,
//         name: "Object 9",
//         details: {
//             value: 90,
//             info: {
//                 description: "Description 9",
//                 tags: ["tag17", "tag18"]
//             }
//         }
//     },
//     {
//         id: 10,
//         name: "Object 10",
//         details: {
//             value: 100,
//             info: {
//                 description: "Description 10",
//                 tags: ["tag19", "tag20"]
//             }
//         }
//     }
// ];





//  

// let decp=arrayOfNestedObjects.map(obj=> obj.details.info.description)
// console.log(decp)

// const arrayOfNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,64,84,90,53,23,54];

// let even=arrayOfNumbers.filter(num => num%2===0)

// let odd=arrayOfNumbers.filter(num => num%2===1)



// console.log(...even)
// console.log(...odd)


// const arrayOfHindiNames = [
//     "Aaryan",
//     "Aditya",
//     "Vedika",
//     "Sakshi",
//     "Arjun",
//     "Nandini",
//     "Krishna",
//     "Anushka",
//     "Rahul",
//     "Neha"
// ];

//we want that names whose size is grater 6

// let names=arrayOfHindiNames.filter(name => name.length>6)

// console.log(names)

// const arrayOfNestedObjects = [
//     {
//         id: 1,
//         name: "Object 1",
//         details: {
//             value: 10,
//             info: {
//                 description: "Description 1",
//                 tags: ["tag1", "tag2"]
//             }
//         }
//     },
//     {
//         id: 2,
//         name: "Object 2",
//         details: {
//             value: 20,
//             info: {
//                 description: "Description 2",
//                 tags: ["tag3", "tag4"]
//             }
//         }
//     },
//     {
//         id: 3,
//         name: "Object 3",
//         details: {
//             value: 30,
//             info: {
//                 description: "Description 3",
//                 tags: ["tag5", "tag6"]
//             }
//         }
//     },
//     {
//         id: 4,
//         name: "Object 4",
//         details: {
//             value: 40,
//             info: {
//                 description: "Description 4",
//                 tags: ["tag7", "tag8"]
//             }
//         }
//     },
//     {
//         id: 5,
//         name: "Object 5",
//         details: {
//             value: 50,
//             info: {
//                 description: "Description 5",
//                 tags: ["tag9", "tag10"]
//             }
//         }
//     },
//     {
//         id: 6,
//         name: "Object 6",
//         details: {
//             value: 60,
//             info: {
//                 description: "Description 6",
//                 tags: ["tag11", "tag12"]
//             }
//         }
//     },
//     {
//         id: 7,
//         name: "Object 7",
//         details: {
//             value: 70,
//             info: {
//                 description: "Description 7",
//                 tags: ["tag13", "tag14"]
//             }
//         }
//     },
//     {
//         id: 8,
//         name: "Object 8",
//         details: {
//             value: 80,
//             info: {
//                 description: "Description 8",
//                 tags: ["tag15", "tag16"]
//             }
//         }
//     },
//     {
//         id: 9,
//         name: "Object 9",
//         details: {
//             value: 90,
//             info: {
//                 description: "Description 9",
//                 tags: ["tag17", "tag18"]
//             }
//         }
//     },
//     {
//         id: 10,
//         name: "Object 10",
//         details: {
//             value: 100,
//             info: {
//                 description: "Description 10",
//                 tags: ["tag19", "tag20"]
//             }
//         }
//     }
// ];

//   in above object print the description of that obj whose value is divisble by 20




// const arrayOfNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,64,84,90,53,23,54];

// let sum=arrayOfNumbers.reduce((res,num)=>{
//     return res+num
// },0)

// console.log(sum)


const arrayOfHindiNames = [
    "Aaryan",
    "Aditya",
    "Vedika",
    "Sakshi",
    "Arjun",
    "Nandini",
    "Krishna",
    "Anushka",
    "Rahul",
    "Neha"
];

console.log(arrayOfHindiNames[0])

let addnames=arrayOfHindiNames.reduce((res,name)=>{
    return res+name;
},"")

console.log(addnames)



















