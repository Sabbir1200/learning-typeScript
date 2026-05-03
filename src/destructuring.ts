// object destructuring 
// array destructuring 

const user = {
    id: 123,
    name:{
        firstName: 'Sabbir',
        middleName: "Hossain",
        lastName: "Matubber",
    },
    gender: "male",
    favoriteColor: "Green"
}
// const myFavoriteColor = user.favoriteColor;
// const myMiddleName = user.name.middleName

const {favoriteColor, name:{middleName}} = user;

console.log(favoriteColor)