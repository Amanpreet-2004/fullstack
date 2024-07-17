//console is used to print any thing in terminal

// console.log("hello arsh aman amana2")

// let name="amana";
// name="arash"
// name=10000

// console.log(`the name of aman is ${name}`)
// console.log(`sum of 2 plus 2 is ${2+2}`)

// console.log("sum of 2 plus 2 is ${2+2}")



//DATA TYPES IN JS
//https://phpforever.com/wp-content/uploads/2022/03/Data-Types-In-JavaScript.png

//primitive data types is used to store only one type of data
//number   eg 12,  422323,2332
// console.log(typeof(12223))
// console.log(typeof("12223"))
//string   any thing in "(double qoutes)"  ,"chandan","1223","#q5232"


//boolian  only takes two values  true,false

//operation on boolans
//&&(AND)  ===> (RETURN TRUE IF all in this value coverse to true or false otherwise)
// console.log(1 && 0)
// console.log((1 && 3))

// console.log(-2 && -3)

// console.log(true && false)


// ||  OR  (return false if all this converge to false else true)
// console.log(0 || 1)
// console.log(1 || 3)
// console.log(9 || 8)
// console.log(7 || 3)


// ===,==

// console.log(4=="44")
// console.log(4==="4")

// console.log("aman")
// console.log(2+2+"2")


// let truorfalse=true
// if(truorfalse){
//     console.log("true hai")
//     truorfalse=false
// }
// console.log(truorfalse===false)
// if(truorfalse===false){
//     console.log(`kya hai ${truorfalse}`)
// }





//null    :   no value is given or this is empty
// let a=null;
// a=4
// console.log(a)


//undefined
// let aman;
// aman=4
// console.log(aman)



//NON PRIMITIVE DATA TYPES(OBJECT)

let arr = [1, 2, 2, 3, 3, 3, "chandan", false]
//0,1,2,3,4,5,   6,      7    ---->indexes 

console.log(arr[6])
console.log(arr[7])




let arr2 = [1, 2, 2, 3, 3, 3]
console.log(typeof (arr))
console.log(typeof (arr2))


//object
let students = { student1: "aman", student2: "arash", student3: "aman2", teacher: "chandan" }

// obj.keyname  aise value access krte hai

console.log(`${students.student2} is smart and ${students.student1} is also smart`)

console.log(`${students.student2} is student of ${students.teacher}`)


//nested object there are some more object is the main object
let student = {
    name: "sakshi",
    sirname: "singh",
    class: "bca",
    info: {
        age: 21,
        height: "180cm",
        gender: "female",
        contact: {
            pno: 1211121,
            hno: 78443,
            dailno: 78237823
        }
    }
}

console.log(student.class)
console.log(student.name)
let information = student.info
// console.log(information)

console.log(information.age)
console.log(student.info.age)

console.log(student.info.contact.pno)
console.log(student.info.contact.hno)


let objwithfunc = {
    name: "sakshi",
    sirname: "kumari",
    pno: "23232323",
    hno: "2323",



    getname: function () {
        return this.name + " " + this.sirname;
    },
    getdetails: function () {
        return this.pno + " " + this.hno;
    },

    info: {
        dob: "2003",
        gender: "female",
        getpersonalinfo: function () {
            return this.dob + " " + this.gender;
        }
    }
}


console.log(objwithfunc.getname())
console.log(objwithfunc.getdetails())

console.log(objwithfunc.info.getpersonalinfo())

let obj={
    "coord": {
    "lon": 76.7794,
    "lat": 30.7333
    },
    "weather": [
    {
    "id": 800,
    "main": "Clear",
    "description": "clear sky",
    "icon": "01d"
    }
    ],
    "base": "stations",
    "main": {
    "temp": 303.7,
    "feels_like": 304.21,
    "temp_min": 303.7,
    "temp_max": 303.7,
    "pressure": 1001,
    "humidity": 45,
    "sea_level": 1001,
    "grnd_level": 962
    },
    "visibility": 10000,
    "wind": {
    "speed": 3.28,
    "deg": 151,
    "gust": 2.11
    },
    "clouds": {
    "all": 5
    },
    "dt": 1721196579,
    "sys": {
    "type": 1,
    "id": 9181,
    "country": "IN",
    "sunrise": 1721174481,
    "sunset": 1721224579
    },
    "timezone": 19800,
    "id": 1274746,
    "name": "Chandigarh",
    "cod": 200
}

console.log(obj.coord.lat)
console.log(obj.coord.lon)
console.log(obj.main.temp)
console.log(obj.visibility)
console.log(obj.wind.speed)
console.log(obj.name)
console.log(obj.weather[0].description)
//lat, lon    ,  temp, visibility,speed, name,description



