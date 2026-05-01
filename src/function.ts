// function 
// arrow function , normal function

function addNormal(num1 : number, num2 : number) : number{
    return num1 + num2;
}


console.log(addNormal(2,2))

const addArrow = (num1: number, num2: number) : number=>{
    return num1 + num2;
}
console.log(addArrow(2,2))

// object => function method 

const poorUser = {
    name: 'Sabbir',
    balance: 0,
    addBalance: function(value: number){
      const totalBalance =   this.balance = value;
      return totalBalance;
    }
}
poorUser.addBalance(10);
console.log(poorUser)

const arr: number[] = [1,2,3,4,5]; 
// for(let i =0; i<arr.length; i++){
//     console.log(arr[i]*arr[i]);
// }

const sqrArray = arr.map((elem:number) : number =>  elem * elem)
console.log(sqrArray)