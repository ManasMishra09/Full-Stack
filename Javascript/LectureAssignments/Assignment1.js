// Write a function that takes a new object as input which has name , age  and gender and greets the user with their gender (Hi Mr/Mrs/Others harkirat, your age is 21). Also tell the user if they are legal to vote or not

function greetUser(user) {
    let greeting = "Hi ";
    if (user.gender === "male") {
        greeting += "Mr. ";
    }   else if (user.gender === "female") {                         
        greeting += "Mrs. ";
    } else {
        greeting += " ";
    }
    console.log(greeting + user.name + ", your age is " + user.age);
    if (user.age >= 18) {
        console.log("You are legal to vote.");
    } else {
        console.log("You are not legal to vote.");
    }
}

let user = {
    name: "Harkirat",
    age: 21,
    gender: "male"
}
greetUser(user);