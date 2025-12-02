//object questions

//Task:01
/*iska output not provided ayega qk age ki value undefined he joke null hoti he or jb bh koi value null to 
js me uska output not provided ata he qk wo null he*/

//Task :02
const obj = Object.freeze({ a: 1 });
obj.a = 2;
console.log(obj.a);

//obj.freeze ka mtlb hota he k jo bh humne value assign ki he wo usko add , modify or delete nh 
// krskta islie obj.a = 2 ye run nh hoga qk upper wali value fixed /freeze he to agr isko run krenge to 
//output 1 hi ayega .


//Task:03
const person = {
  name: "Tapas",
  company: {
    name: "tapaScript",
    location: {
      city: "Bangalore",
      zip: "94107"
    }
  }
};


const { name, company, company: { location: { city } }, } = person
console.log(name)
console.log(company)
console.log(city)


//TASK:04
const std = {
  name: "wazba",
  age: 18,
  grades: [75, 80, 85, 90],

  average() {
    let sum = 0;
    for (let grade of this.grades) {
      sum += grade
    }
    return sum / this.grades.length;
  },

  Details() {
    console.log(`Name: ${this.name}`);
    console.log(`Age: ${this.age}`);
    console.log(`Grades: ${this.grades.join(", ")}`);
    console.log(`Average Grade: ${this.average()}`);
  }
};
std.Details();

//question :05
//try kia tha but br br error arha tha or clear nh horha tha kia logic lgegi islie nh kia



//Task:06
/*object.key : isko use kr k agr hum console ya print krwaty hen to ye hume object ki jo keys hoti hen usko 
print kr k deta h for example ;*/
let student1 = {
  name: "wazba",
  age: 18,
  hobby: "travelling",
}
//isko print krenge to ye hume keys dega like (name , age ,hobby)
console.log(Object.keys(student1));

/* object.entries: agr hum ye use krenge to ye hume keys or values dono print krega for example;*/
let student2 = {
  name: "wazba",
  age: 18,
  hobby: "travelling",
}
//isko print krenge to ye hume keys dega like (name:wazba , age:18 ,hobby:travelling)
console.log(Object.entries(student2));


//Task:07
const user = {
  name: "wazba",
  Age: 18,
  city: "Karachi"
};
//three ways to check property
console.log("city" in user);
user.hasOwnProperty("name");
Object.hasOwnProperty(user, "Age")

//Task :08
//iska output "doe " ayega qk const person me name john store he or newperson me person to jb newperson ki value ko
//change krenge to automatically person ki value bh change hojaigi qk qk in dono ka address same he bs name change he
// to heap me value ek hi jaga store hogi to location bh ek hi hogi iski .


//Task :09
//method 1 to copy deeply nested obj
const employee1 = {
  name: "wazba",
  age: 18,
  salary: 50000,
  address: {
    city: "karachi",
    state: "sindh",
    street: 6,
  }
}
const copy1 = structuredClone(employee1);
copy1.address.city = "lahore";
console.log(employee1)
console.log(copy1)

//method 2 to copy deeply nested obj
const employee2 = {
  name: "muskan",
  age: 20,
  salary: 60000,
  address: {
    city: "Quetta",
    state: "punjab",
    street: 12,
  }
}
const copy2 = Object.assign({}, employee2);
copy2.address.city = "islamabad";
console.log(employee2)
console.log(copy2)



//Task:10
const users = [
  { name: "rimsha", age: 20, city: "karachi" },
  { name: "dua", age: 19, city: "muree" },
  { name: "sania", age: 21, city: "lahore" },

]
for (const { name, age, city } of users) {
  console.log(name, age, city);
}


//FUNCTIONS..................
//ques:01
function CtoF(c) {
  return (c * 9 / 5) + 32;
}
console.log(CtoF(30));

//ques:02
function maximum(a, b) {
  return a > b ? a : b;
}

console.log(maximum(10, 20));

//ques:03
function isPalindrome(string) {
  let clean = string.toLowerCase();
  let reversed = clean.split("").reverse().join("");
  return clean === reversed;
}

console.log(isPalindrome("madam"));
console.log(isPalindrome("hello"));

//ques:04 
function factorial(n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}

console.log(factorial(5));

//ques:05
function countVowels(str) {
  let vowels = "aeiouAEIOU";
  let count = 0;

  for (let character of str) {
    if (vowels.includes(character)) count++;
  }

  return count;
}

console.log(countVowels("Wazba Fatima"));

//ques:06
function capitalizeWords(sentence) {
  return sentence
    .split(" ")
    .map(word => word[0].toUpperCase() + word.slice(1))
    .join(" ");
}

console.log(capitalizeWords("hello world from javascript"));

//ques:07
(function () {
  console.log("Hello, JavaScript!");
})();



//ques:08
function greet(name, callback) {
  console.log("Hello " + name);
  callback();
}

function sayGoodbye() {
  console.log("Goodbye!");
}

greet("Wazba", sayGoodbye);

//ques:09
function a() {
  b();
  console.log("Inside A");
}

function b() {
  c();
  console.log("Inside B");
}

function c() {
  console.log("Inside C");
}

a();

//ques:10
//regular
function area(length, width) {
  return length * width;
}

console.log(area(5, 4));

//anonymous
const area2 = function (l, w) {
  return l * w;
};

console.log(area2(5, 4));

//arrow
const area3 = (l, w) => l * w;

console.log(area3(5, 4));

//ques:11
function processNumbers(arr, callback) {
  for (let num of arr) {
    callback(num);
  }
}
function showDouble(n) {
  console.log(n * 2);
}

processNumbers([1, 2, 3, 4], showDouble);

//ques:12
let checkEvenOdd = function (num) {
  if (num % 2 === 0) {
    console.log(num + " is Even");
  } else {
    console.log(num + " is Odd");
  }
};

checkEvenOdd(7);
checkEvenOdd(10);

//ques:13
let checkNum = (n) => {
  if (n > 0) console.log("Positive");
  else if (n < 0) console.log("Negative");
  else console.log("Zero");
};

checkNum(-5);

//ques:14
(function () {
  console.log(new Date());
})();

//ques:15
function repeatTask(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i], i);
  }
}
repeatTask([10, 20, 30], (value, index) => {
  console.log("Index:", index, "Value:", value);
});

//ques:16
function reverseString(str) {
  return str.split("").reverse().join("");
}

console.log(reverseString("wazba"));

//ques:17
function isPrime(n) {
  if (n <= 1) return false;

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}
console.log(isPrime(7));
console.log(isPrime(10));

//ques:18
//smjh nh arha kese hoga

//ques:19
function flatten(arr) {
  return arr.flat(Infinity);
}

console.log(flatten([1, [2, [3, 4]], 5]));

//ques:20
function removeDuplicates(arr) {
  return [...new Set(arr)];
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4]));

//ques:21
function fibonacci(n) {
  let seq = [0, 1];
  for (let i = 2; i < n; i++) {
    seq.push(seq[i - 1] + seq[i - 2]);
  }
  return seq.slice(0, n);
}

console.log(fibonacci(10));

//ques:22
//smjh nh arha kese hoga

//ques:23
let squares = arr => arr.map(n => n * n);

console.log(squares([2, 3, 4]));

//ques:24
function calculator(a, b, callback) {
    return callback(a, b);
}

let add = (x, y) => x + y;
let sub = (x, y) => x - y;
let mul = (x, y) => x * y;
let div = (x, y) => x / y;

console.log(calculator(10, 5, add));
console.log(calculator(10, 5, mul));









