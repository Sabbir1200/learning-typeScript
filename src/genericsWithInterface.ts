

interface Developer<T, X= null> {
    name:string;
    salary: number;
    device: {
        brand: string;
        model: string;
        releaseYear: string;
    };

    smartWatch: T;
    bike?: X
}


type BrandCharWatch = {
    heartRate:string;
    stopWatch: boolean;
}
type BrandWatch = {
   heartRate:string;
    callSupport: boolean;
    calculator: boolean;
    AiFeature: boolean;
}
const poorDeveloper:Developer<BrandCharWatch> = {
    name: "Mr. poor",
    salary: 20,
    device:{
        brand: 'lenovo',
        model: 'A21',
        releaseYear: '2023'

    },
    smartWatch:{
        heartRate: '200',
        stopWatch: true
    }
}
const richDeveloper:Developer<BrandWatch> = {
    name: "Mr. Rich",
    salary: 100,
    device:{
        brand: 'hp',
        model: 'x34',
        releaseYear: '2050'

    },
    smartWatch:{
        heartRate: '200',
        callSupport: true,
        calculator: true,
        AiFeature: true
    }
}

const add = (num1:number, num2:number = 0)=>{
    return num1 + num2;
}
add(2)