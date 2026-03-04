const name = "Nikam"
const repoCount = 50

// console.log(name + repoCount + "Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Pooja-Nikam')
console.log(gameName[0])
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.indexOf('a'))

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString)

const newString1 = " Pooja "
console.log(newString1);
console.log(newString1.trim());

const url = "https://www.youtube.com/watch?v=fozwNnFunlo&list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37&index=11"
console.log(url)
console.log(url.replace('11', '-'))

console.log(url.includes('index'))

console.log(gameName.split('-'))

