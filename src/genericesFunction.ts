// Generic Function 

// const createArrayWithString = (value: string)=>[value];

// const createArrayWithNumber = (value: number)=>[value];

// const createArrayWithUserObj = (value: {id: number; name:string})=>{
//     return[value]
// }
const createArrayWithGeneric = <T>(value:T) =>[value]
const arrString = createArrayWithGeneric('Apple')
const arrNumber = createArrayWithGeneric(12)
const arrObj = createArrayWithGeneric({
    id: 123,
    name: "Next level"
})

// tuple 

const createArrayWithTuple= (value: string)=>{
    return [value]
}