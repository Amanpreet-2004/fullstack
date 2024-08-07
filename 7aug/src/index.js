console.log("helllooo")


localStorage.setItem("date","7aug")


localStorage.setItem("date1","9aug")

console.log(localStorage.getItem("date"))
// console.log(localStorage.getItem("date3"))

if(localStorage.getItem("date3")==null){
    console.log("printed")
}else{
    console.log("not rpinted")
}

let obj={
    "key1": "value1",
    "key2": "value2",
    "key3": {
      "nestedKey1": "nestedValue1",
      "nestedKey2": "nestedValue2"
    },
    "key4": [1, 2, 3, 4, 5]
  }
  

  
let stringobj=JSON.stringify(obj)
// console.log(stringobj)
localStorage.setItem("data",stringobj)

console.log(localStorage.getItem("data"))



