// mapped types

// map 

const arrayOfNum : number[] = [1,4,6];

const arrayOfString : string[] = ["1", "2", "6"]

const arrayOfStringUsingMap : string[] = arrayOfNum.map((num)=> num.toString());

console.log(arrayOfStringUsingMap)

type AreaOfNum = {
    height: number;
    width: number;
};

type height = AreaOfNum["height"]

// type AreaOfString = {
//     height: string;
//     width: string;
// }

type AreaOfString = {
    [key in "height" | "width"] : string
}