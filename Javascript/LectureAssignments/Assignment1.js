// Write a function that takes an array of users as inputs and returns only the users who are more than 18 years old 
let users = [{
    name: "John",
    age:15
},
    {
     name: "Jane",
     age: 17            
    }]

function AdultUsers(users) {
    let adultUsers = users.filter(user => user.age > 18);
    return adultUsers;
}    

console.log(AdultUsers(users));