// spread operator 

const friends = ['Rahim', 'Karim'];

const schoolFriends = ['pintu', 'chintu', 'bulbul'];

const collegeFriends = ["Mr. Smart", "Mr. very very Smart"];

friends.push(...schoolFriends)
friends.push(...collegeFriends)

console.log(friends)

const user = { name: 'sabbir', phoneNumber: '01741412725'}

const otherInfo = {hobby: 'outing', favoriteColor: 'Green'}
const userInfo = { ...user, ...otherInfo}

console.log(userInfo)

// rest operator

const sendInvite = (...friends : string[])=>{
    
    friends.forEach((friend : string)=>{
        console.log(friend)
    })
}

sendInvite('pintu', 'cintu', 'bulbul')