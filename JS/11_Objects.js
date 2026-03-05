//  singleton

//  object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Hitesh",
    "full name " : "Pooja Nikam",
    [mySym ]: "mykey1",
    age : 18, 
    location: "Pune",
    email : "nikamp870@gmail.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday", "Saturday"]

}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name "])

// we have to access some data with sqare brackets like symbol 
 
// console.log(JsUser[mySym])

// to change the value 
JsUser.email = "pooja@chatgpt.com"

// JsUSer is locked no one can change it 
// Object.freeze(JsUser)

JsUser.email = "hitesh@microsoft.com"
console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}

JsUser.greetingtwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingtwo());