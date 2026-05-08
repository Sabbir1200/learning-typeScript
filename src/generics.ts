// dynamically generalize


type GenericArray<T> = Array<T>

// const friends : string[] = ['Mr. X', 'Mr. Y', 'Mr. Z']
const friends : GenericArray<string> = ['Mr. X', 'Mr. Y', 'Mr. Z']

// const rollNumbers: number[] = [4,7,11];
const rollNumbers: GenericArray<number> = [4,7,11];

// const isEligibleList: boolean[] = [true, false, true]
const isEligibleList: GenericArray<boolean> = [true, false, true]

const sqrFunc = (value: number)=>{
    return value * value;
}
console.log(sqrFunc(100000))

type Coordinates<X,Y> = [X, Y]
const coordinates1: Coordinates<number, number> = [20,30];
const coordinates2: Coordinates<string, string> = ["20","30"];
type User = {name: string; age:number}

const UserList: GenericArray<User> = [
    {
        name: "Mr. X",
        age: 22
    },
    {
        name: 'Mr. Y',
        age: 22
    },
    
]

