//ques:01
var numbers = [2, 4, 2, 5, 6, 4, 7];
var duplicate = []

for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] === duplicate[i]) {
        numbers.push(duplicate[i]);
    }
}
console.log(duplicate);

//ques:02
var vowels = ["a", "b", "e", "i", "o", "u", "a"]

var counta = 0;
var counte = 0;
var counti = 0;
var counto = 0;
var countu = 0;

for (var i = 0; i < vowels.length; i++) {
    if (vowels[i] === 'a') {
        counta++;
    }
    else if (vowels[i] === 'e') {
        counte++;
    }
    else if (vowels[i] == 'i') {
        counti++;
    }
    else if (vowels[i] === 'o') {
        counto++;
    }
    else if (vowels[i] === 'u') {
        countu++;
    }
}
console.log("a :" + counta)
console.log("e :" + counte)
console.log("i :" + counti)
console.log("o :" + counto)
console.log("u :" + countu)


//ques:03
var numbers = ["1", "2", "2", "3", "4", "3", "3", "5"]

var counteven = 0;
var countodd = 0;

for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        counteven++;
    }
    else if (numbers[i] % 2 !== 0) {
        countodd++;
    }
}
console.log("even numbers : " + counteven);
console.log("odd numbers :" + countodd);

//ques:04
var array = ["1", "2", "2", "3", "4", "3", "3", "5"]

var count1 = 0;
var count2 = 0;
var count3 = 0;
var count4 = 0;
var count5 = 0;

for (var i = 0; i < array.length; i++) {
    if (array[i] === "1") {
        count1++
    }
    else if (array[i] === "2") {
        count2++
    }
    else if (array[i] === "3") {
        count3++
    } else if (array[i] === "4") {
        count4++
    } else if (array[i] === "5") {
        count5++
    }
}
console.log("1 :" + count1)
console.log("2 :" + count2)
console.log("3 :" + count3)
console.log("4 :" + count4)
console.log("5 :" + count5)

//ques:05
var reverse = ["10", "20", "30", "40", "50"]
var array = []

for (var i = reverse.length - 1; i >= 0; i--) {
    array.push(reverse[i])
}
console.log("reverse number : " + array);


//ques:06
var words = ["apple", "banana", "grapes", "pineapple"]
var longestword = words[0];

for (var i = 0; i < words.length; i++) {
    if (words.length > longestword, length) {
        longestword = word[i];
    }
}
console.log("longest word is " + longestword);


//ques:07
var numbers = ["2", "-3", "5", "-7", "8", "-1", "4"]
var sum = 0;

for (var i = 0; i < numbers.length; i++) {
    if (Number(numbers[i]) > 0) {
        sum += Number(numbers[i])
    }
}
console.log("sum of positive numbers are " + sum)


//ques:08
var numbers = [1, 2, 3, 2, 4, 2, 5]
var remove = []

for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] !== 2) {
        remove.push(numbers[i])
    }
}
console.log("removing values : " + remove)

//ques:09
var numbers = [50, 60, 45, 75, 10, 90]
var greatest = []

for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] > 50) {
        greatest.push(numbers[i])
    }
}
console.log("Greatest number are " + greatest)

//ques:10
//  var array1 = [1,2,3,4]
//  var array2 = [3,4,5,6]

//  for(var i=0 ; i<)



//ques:11
var numbers = [3, -1, -7, 4, -2, 9]
var negative = []


for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] < 0) {
        negative.push(numbers[i])
    }

}
console.log("Negatives numbers are " + negative)


//ques:12
// var numbers =  [2, 3, 4, 5, 6, 7, 8, 9, 11];
// var isprime = true;

// for(var i=0 ; i<numbers.length ; i++){
//                var num= numbers[i]
// }


//ques:13
var numbers = [15, 9, 10, 20, 33, 45, 50];


for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] % 3 === 0 && numbers[i] % 5 === 0) {
        console.log("numbers divisible by 3 and 5 =  " + numbers[i])
       
    }
}

//ques:14
var numbers =  [45, 12, 78, 3, 56, 1]
var array = numbers[0]

for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] < array) {
       array = numbers[i]
    }
}
console.log("smallest numbers = " + array)


//ques:15
var words =  ["apple", "Mango", "grape","Banana", "Orange"]
var count = 0;

for (var i = 0; i < words.length; i++) {
    if (words[i].toLowerCase().includes("a")) {
        count++;
    }
}

console.log("Total words containing 'a' or 'A': " + count);