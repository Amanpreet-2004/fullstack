// let a=7;

// let changea=function(num){
//     num=9;
//     console.log(num)
// }

// changea(a);

// console.log(a)

// let name="aman"

// let changename=function(str){
//     str="aman2"
//     console.log(str)
// }
// changename(name)

// console.log(name)


// let obj={
//     name:"chandan",
//     clg:"pec"
// }


// let changeobj=function(arg){
//     arg.name="kumar"
//     arg.clg="cu"
//     console.log(arg.name, arg.clg)

//     arg.name="aman",
//     arg.clg="42girlclg"
// }



// changeobj(obj)
// console.log(obj.name, obj.clg)

function updateBrand(obj) {
    obj.brand = "Toyota";
    obj = null;
  }
  
  const car = {
    brand: "Honda",
    model: "Accord",
    year: 1998,
  };
  
  console.log(car.brand);
  
  updateBrand(car);
  
  console.log(car.brand);
  
