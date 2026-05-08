// constraint : strict rules 

// keyof  : type operator 

type RichPeopleVehicle = {
    car: string;  // key: value
    bike: string;
    cng: string;
}

type myVehicle1 = "bike" | "car" | "cng"
type myVehicle2 = keyof RichPeopleVehicle
const mtVehicle: myVehicle1 =  "bike"


type User = {
    id: number;
    name: string;
    address:{
        city: string;
    }
}
const user = {
    id: 222,
    name: "Sabbir",
    address:{
        city: "Khulna"
    }
}
// const myId = user.id;
// const myId = user['id'];
// const myName = user['name'];
// const myAddress = user['address']

// console.log(myId, myName, myAddress)

const  getPropertyFromObj = <X>(obj: X, key: keyof X)=>{

    return obj[key]
}

const result1 = getPropertyFromObj(user, "name")
console.log(result1)

const product = {
    brand: 'HP',

}

const student = {
    id: 123,
    class: 'Four'
}

const result = getPropertyFromObj(product, "brand")
const result3 = getPropertyFromObj(student, "id")