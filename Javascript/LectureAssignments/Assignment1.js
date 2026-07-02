// Write a function that takes a user as an input and greets them with their name and age
function greetUser(user) {
    console.log("Hi " + user.name + ", you are welcome after " + user.age + " years!");
}

let user = {
    name: "John",
    age: 30 
}
greetUser(user);