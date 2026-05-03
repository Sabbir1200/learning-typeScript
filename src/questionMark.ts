//  ? : ternary operator : decision making
//  ? : nullish coalescing operator
// ? . optional chaining 



const biyerJonoEligible = (age: number)=>{
   
//     if(age >= 21){
//     console.log("you are eligible")
// }
// else{
//      console.log("you are not eligible")
// }
const result = age >= 21 ? "you are eligible" : "you are not eligible"
console.log(result)
}

biyerJonoEligible(20)

const userTheme = undefined;

const selectedTheme = userTheme ?? 'Light Theme';

const isAuthenticated = null

const resultWithTernary = isAuthenticated ? isAuthenticated : "you are guest"

const resultWIthNullish = isAuthenticated ?? "You are guest";


console.log({resultWIthNullish}, {resultWithTernary})

// optional chaining 

const user :{
    address:{
        city: string;
        town: string;
        postalCode? : string;
    }
}= {
    address:{
        city: 'khulna',
        town: "sonadanga"
    }
}
const postalCode = user?.address.postalCode;
console.log(postalCode)