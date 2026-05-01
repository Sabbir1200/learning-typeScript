const user : {
    organization: string;
    firstName: string;
    middleName?: string;
    lastName: string;
    isMarried: boolean;
}= {
    organization: "Programming hero",
    firstName: 'Sabbir',
    middleName: 'Hossain',
    lastName: 'Matubber',
    isMarried: true
}
user.organization = "Programming Hero Fire";
console.log(user);