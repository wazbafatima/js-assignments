//Chapter : 1
//ques:1
var welcome = "welcome to my website";
 alert(welcome);


 //quest:2
 var error = "Error! please enter a valid password ";
 alert(error);


 //quest:3
 var jsland = "welcome to JS Land... \n happy coding ! ";
 alert(jsland);

//ques:4
var message1 = "welcome to Js Land....";
var message2 =  "happy coding! \n Prevent this Page From creating Additional Dialouges";
alert(message1);
alert(message2);

//ques:5
var message1 = "Hello... i can run Js through my browser's console";
console.log ("message1===", message1);

                   //CHAPTER:01 END//

//chapter:2//

//ques:01
var username;

//ques:02
var myName = "wazba fatima";

//ques:03
var message = "Hello world";
alert(message);

//ques:04
var studentName ="wazba fatima";
var studentAge = 18;
var studentClass = "1st year ";
var studentCourse ="Bachelors of education";

alert(studentName);
alert(studentAge);
alert(studentClass);
alert(studentCourse);

//ques:05
var pizza = " PIZZA \n PIZZ \n PIZ  \n PI \n P";
alert(pizza);


//ques:06
var myEmail = "wazbakhan@gmail.com";
alert("My Email adress is==" + myEmail);

//ques:07
var book = "A smarter way to learn Java script";
alert("I am trying to learn from the Book "  +   book);

//ques:08
document.write("yah i can write html through js");
     // OR //
document.getElementById("para").innerHTML = "yah i can write html through js ";

//ques:09
var design = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
alert(design);
document.write("<br>" + design);

//                 //CHAPTER : 02 END //


 //chapter :03
 //ques:01
 var age = 18;
 alert("I am " + age + " years old");

 //ques:02
 var visitor = 05;
 alert("You have visited this site " +  visitor + " Times");

 //ques:03
 var birthYear = 2007;
 document.write ("<br> My birthYear is " + birthYear  + "<br> Data type of my declared variable is number")


 //ques:04
 var visitorName = "wazba fatima";
 var productTitle = "kurta shalwar";
 var quantity = 5;
 document.write("<br> <br>" + visitorName + " Ordered " + quantity + " " +  productTitle  + " XYZ clothing store")

          // CHAPTER :03 END//


 //chapter:04//
 //ques:01
var name = "wazba Fatima " , favouriteFood = "Biryani" , favouritePlace = "sawat"
console.log(" name : " +  name ,"favoutitefood : " + favouriteFood , "favouriteplace : " + favouritePlace) 

//ques:02
var legalVariables = "myName , $wazba , _hello , book1 , place";
var illegalVariables = "my name , 12hello , @age , var-name , var var";

console.log("Legal variables: " + legalVariables);
console.log("Illegal variables: " + illegalVariables);

//ques:03
document.write("<h2>Rules for naming JS variables</h2>");
document.write("Variable names can only contain letters, numbers, $ and _. For example: $my_1stVariable <br>");
document.write("Variables must begin with a letter, $ or _. For example: $name, _name or name <br>");
document.write("Variable names are case sensitive.<br>");
document.write("Variable names should not be JS reserved keywords.<br>");

//             //CHAPTER :4 END//

//chapter :05
//ques:01
var num1 = 5;
var num2 = 3;
var sum = num1 + num2;
document.write(" <br> The sum of 5 and 3 is " + sum);

//quest:02 
//subtraction//
var num1 = 5;
var num2 = 3;
var sub = num1 - num2;
document.write(" <br> The sub of 5 and 3 is " + sub);

//multiplication//
var num1 = 5;
var num2 = 3;
var multiply = num1 * num2;
document.write(" <br> The muliplication of 5 and 3 is " + multiply);

//division//
var num1 = 5;
var num2 = 3;
var division = num1 / num2;
document.write(" <br> The division of 5 and 3 is " + division);

//modulus//
var num1 = 5;
var num2 = 3;
var remainder = num1 % num2;
document.write("The modulus of " + num1 + " and " + num2 + " is: " + remainder + "<br><br>");


//ques:03
var a;
document.write("<br> <br>Value after declaration is " + a);

a = 10;
document.write("<br> value of initialization is " + a);

a++
document.write("<br> value  after increment is " + a++);

a = a + 7
document.write("<br> value after addition is " + a);

a--
document.write("<br> value ater decrement is " + a);

var remainder = a % 3
document.write("<br> The remainder  is " + remainder);

//ques:04
var movie = 600;
var ticket = 5;
var product = movie * ticket;
document.write(" <br> <br> Total cost to buy 5 to a movie is " + product)

//ques:05
var number = 8
document.write("<h2> Table of 8 </h2>")
for (var i = 1; i <= 10; i++) {
  document.write(number + "x" + i + "=" + number * i + "<br> ")
}

//ques:06
var c = 25;
f = (c * 9 / 5 + 32)
document.write("<br> <br>" + c + "C" + " is" + f + "F")

var f = 70;
c = (f - 32) * 5 / 9
document.write("<br>" + f + "F" + " is" + c + "C")

//ques:07
// a. Prices
var item1 = 800;
var item2 = 500;

var quantity1 = 3;
var quantity2 = 4;

var shippingCharges = 200;

var totalCost = (item1 * quantity1) + (item2 * quantity2) + shippingCharges;

document.write("<h2>Shopping Cart</h2>");
document.write("Price of item 1 is " + item1 + "<br>");
document.write("Quantity of item 1 is " + quantity1 + "<br>");
document.write("Price of item 2 is " + item2 + "<br>");
document.write("Quantity of item 2 is " + quantity2 + "<br>");
document.write("Shipping Charges " + shippingCharges + "<br><br>");
document.write("<b>Total cost of your order is " + totalCost + "</b>");

//ques:08
var totalMarks = 980;
var marksObtained = 804
var percentage = marksObtained / totalMarks * 100
document.write("<br> <h2> MARK SHEET </h2>" + "Total marks : " + totalMarks + " <br> Obtained marks : " + marksObtained + " <br> Percentage : " + percentage)

//ques:09
var dollar = 104.80;
var riyal = 28;
var totalCurrency = (10 * dollar) + (25 * riyal);

document.write("<h2>Currency in PKR</h2>");
document.write("Total Currency in PKR: " + totalCurrency);


//ques:10
var b = 10;
var result = (b + 10) * 10 / 2;
document.write(" <br> <br>  Result is " + result)



//ques:11
var currentYear = 2025;
var birthYear = 2007;
var age1 = currentYear - birthYear;
var age2 = age1 - 1;
document.write("<h2>The Age Calculator</h2>");
document.write("<br> Current year is = " + currentYear);
document.write("<br> birth year is = " + birthYear);
document.write("<br> They are either" + age2 + " or " + age1 + " years old ")



//ques:12
var radius = 25;
var pi = 3.142;
var circumference = 2 * pi * radius;
var area = pi * radius * radius;

document.write("<br> <h2>Area of circle</h2>");
document.write("Radius of a circle = " + radius);
document.write("<br> The circumference is = " + circumference);
document.write("<br> The area is = " + area);


//ques:13
var snacks = "choclates";
var currentAge = 18;
var maxAge = 60;
var perday = 2;

var totalNeeded = (maxAge - currentAge) * 365 * perday;

document.write("<br> <br> <h2> The life Time supply calculator </h2>");
document.write("<br> favourite snacks = " + snacks);
document.write("<br> current Age  =" + currentAge);
document.write("<br> max Age = " + maxAge);
document.write("<br>  snacks per day  = " + perday);
document.write("<br> You will need " + totalNeeded + " " + snacks + " to last you until the ripe old age of " + maxAge + ".");

//CHAPTER :05 END


//chapter:06 to 09 
//ques:01
var a = 10;
document.write("<br><h2>Result </h2>");
document.writeln("<br>The value of a is : " + a);
document.write("<br> ---------------------------");

document.write("<br> The value of ++a is :" + ++a);
document.write("<br> The value of a is :" + a + "<br>");

document.write("<br> The value of a++ is :" + a++);
document.write("<br> The value of a is :" + a + "<br>");


document.write("<br> The value of --a is :" + --a);
document.write("<br> The value of a is :" + a + "<br>");

document.write("<br> The value of a-- is :" + a--);
document.write("<br> The value of a is :" + a + "<br>");


// ques: 02
document.write("<br> <h2>Result </h2><br>");
document.write("The value of a is: 2<br><br>");

// Step 1
var a = 2, b = 1;
var step1 = --a; // a = 1
document.write("The value of --a is: " + step1 + "<br>");
document.write("Now the value of a is: " + a + "<br><br>");

// Step 2
a = 2; b = 1; // reset
var step2 = --a - --b; // (1 - 0) = 1
document.write("The value of --a - --b is : " + step2 + "<br><br>");

// Step 3
a = 2; b = 1; // reset
var step3 = --a - --b + ++b; // (1 - 0 + 1) = 2
document.write("The value of --a - --b + ++b is :" + step3 + "<br><br>");

// Step 4
a = 2; b = 1; // reset
var step4 = --a - --b + ++b + b--; // (1 - 0 + 1 + 1) = 3
document.write("The value of --a - --b + ++b + b-- is: " + step4 + "<br>");
document.write("Now the final value of b is: " + b + "<br>");


//ques:03
var userName = prompt("Enter your username");
alert("welcome " + userName);
 if (userName === null || userName.trim() === "") {
    userName = "Guest"; 
  }
document.write("<h2>Hello " + userName + ", Welcome to our website!</h2>");

  //ques:04
  var number = prompt("Enter your number");
  if (number === null || number.trim()===""){
    number = 5;
  }else{
    number = Number(number);
  }
  document.write("<h2>Tabel of " + number + "</h2>");
   for (let i = 1; i <= 10; i++) {
      document.write(number + " x " + i + " = " + (number * i) + "<br> <br>");
    }

    //ques:05

    var subject1 = prompt("Enter first subject name:");
    var subject2 = prompt("Enter second subject name:");
    var subject3 = prompt("Enter third subject name:");

    var totalMarksEach = 100;

    var marks1 = +prompt("Enter obtained marks for " + subject1 + ":");
    var marks2 = +prompt("Enter obtained marks for " + subject2 + ":");
    var marks3 = +prompt("Enter obtained marks for " + subject3 + ":");

    var totalMarks = totalMarksEach * 3;
    var obtainedMarks = marks1 + marks2 + marks3;
    var percentage = (obtainedMarks / totalMarks) * 100;

    document.write("<table border='1' cellpadding='8'>");
    document.write("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th></tr>");
    document.write("<tr><td>" + subject1 + "</td><td>" + totalMarksEach + "</td><td>" + marks1 + "</td></tr>");
    document.write("<tr><td>" + subject2 + "</td><td>" + totalMarksEach + "</td><td>" + marks2 + "</td></tr>");
    document.write("<tr><td>" + subject3 + "</td><td>" + totalMarksEach + "</td><td>" + marks3 + "</td></tr>");
    document.write("<tr><th>Total</th><th>" + totalMarks + "</th><th>" + obtainedMarks + "</th></tr>");
    document.write("</table>");

    document.write("<h3>Percentage: " + percentage.toFixed(2) + "%</h3>");

                    //CHAPTER:6 to 9 END//

 //chapter:09 to 11
//ques:01
var city = prompt("Enter your city");
if (city === null || city.trim() === "") {
  document.write("<h2>You did not enter any city</h2>");
}
else if (city.trim().toLowerCase() === "karachi") {
  document.write("<h2>Welcome to city of lights</h2>");
}
else {
  document.write("<h2>Welcome to " + city.trim() + "</h2>");
}

//ques:02
var gender = prompt("Enter your gender");
if(gender == null || gender.trim() ===""){
  document.write("<h2>Enter you gender</h2>")
}
else if(gender.trim().toLowerCase()==="male"){
  document.writeln("Good morning sir")
}
else if(gender.trim().toLowerCase()==="female"){
  document.writeln("Good morning mam")
}

//ques:03
var color = prompt("Enter traffic signals colors (red,green,yellow)");
if (color === null ||  color.trim () ==""){
  document.write("<h2> you didn,t enter traffic signals color</h2>")
}
else{
  color = color.trim().toLowerCase();
  if (color ==="red"){
    document.write("<h2>you must stop</h2>")
  }
  else if(color ==="yellow"){
         document.write("<h2>Ready to move </h2>")
  }
  else if(color ==="green"){
         document.write("<h2>move now </h2>")
  }
  else {
        document.write("<h2>Invalid color! Please enter red, yellow, or green.</h2>");
      }
}


// //ques:04
var fuel = prompt("Enter your car fuel in liters");
 if (fuel === null || fuel.trim() === "") {
      document.write("<h2>You didn't enter any value</h2>");
    } else {
      // convert to number
      fuel = Number(fuel);

      if (fuel < 0.25) {
        alert("Please refill the fuel in your car");
      } else {
        document.write("<h2>You don't need to refill your car fuel</h2>");
      }
    }


// // //ques:05
// // var a = 4;
// // if(++a === 5 ){
// //   alert("given condition for variable a is true")
// // }

// //ques:06

    var sub1 = +prompt("Enter marks obtained in Subject 1:");
    var sub2 = +prompt("Enter marks obtained in Subject 2:");
    var sub3 = +prompt("Enter marks obtained in Subject 3:");
    var totalMarks = +prompt("Enter total marks:");

    var obtainedMarks = sub1 + sub2 + sub3;
    var percentage = (obtainedMarks / totalMarks) * 100;

    var grade, remarks;
    if (percentage >= 80) {
      grade = "A-one";
      remarks = "Excellent";
    } else if (percentage >= 70) {
      grade = "A";
      remarks = "Good";
    } else if (percentage >= 60) {
      grade = "B";
      remarks = "You need to improve";
    } else {
      grade = "Fail";
      remarks = "Sorry";
    }

    // Show result using a table
    document.write("<h2>Marks Sheet</h2>");
    document.write("<table border='1' cellspacing='0' cellpadding='5'>");
    document.write("<tr><th>Total Marks</th><td>" + totalMarks + "</td></tr>");
    document.write("<tr><th>Marks Obtained</th><td>" + obtainedMarks + "</td></tr>");
    document.write("<tr><th>Percentage</th><td>" + percentage.toFixed(2) + "%</td></tr>");
    document.write("<tr><th>Grade</th><td>" + grade + "</td></tr>");
    document.write("<tr><th>Remarks</th><td>" + remarks + "</td></tr>");
    document.write("</table>");

//ques:07

var secretNumber = 7;

var guess = prompt("Guess the secret number (between 1 and 10):");

if (guess === null || guess.trim() === "") {
  document.write("<h2>You didn't enter any number</h2>");
} else {
  guess = Number(guess);

  if (guess === secretNumber) {
    document.write("<h2>Bingo! Correct answer 🎉</h2>");
  }
  else if (guess + 1 === secretNumber || guess - 1 === secretNumber) {
    document.write("<h2>Close enough to the correct answer 🙂</h2>");
  }
  else {
    document.write("<h2>Wrong guess! Try again.</h2>");
  }
}

//ques:08
var number = prompt("Enter a number to check if it is divisible by 3:");

if (number === null || number.trim() === "") {
  document.write("<h2>You didn't enter any number</h2>");
} else {
  number = Number(number);

  if (number % 3 === 0) {
    document.write("<h2>" + number + " is divisible by 3 ✅</h2>");
  } else {
    document.write("<h2>" + number + " is NOT divisible by 3 ❌</h2>");
  }
}

//ques:09
var number = prompt("Enter a number to check if it is even or odd:");

if (number === null || number.trim() === "") {
  document.write("<h2>You didn't enter any number</h2>");
} else {
  number = Number(number);

  if (number % 2 === 0) {
    document.write("<h2>" + number + " is an EVEN number ✅</h2>");
  } else {
    document.write("<h2>" + number + " is an ODD number 🔢</h2>");
  }
}

//ques:10
var temp = prompt("Enter the current temperature:");

if (temp === null || temp.trim() === "") {
  document.write("<h2>You didn't enter any temperature</h2>");
} else {
  temp = Number(temp);

  if (temp > 40) {
    document.write("<h2>It is too hot outside. 🔥</h2>");
  } else if (temp > 30) {
    document.write("<h2>The Weather today is Normal. ☀️</h2>");
  } else if (temp > 20) {
    document.write("<h2>Today's Weather is Cool. 🌤️</h2>");
  } else if (temp > 10) {
    document.write("<h2>OMG! Today's weather is so Cool. ❄️</h2>");
  } else {
    document.write("<h2>Brr! It's very cold outside! 🥶</h2>");
  }
}

//ques:11


var num1 = prompt("Enter first number:");
var num2 = prompt("Enter second number:");
var operation = prompt("Enter operation (+, -, *, /, %):");

if (num1 === null || num2 === null || operation === null ||
  num1.trim() === "" || num2.trim() === "" || operation.trim() === "") {
  document.write("<h2>You didn't provide complete input</h2>");
} else {
  num1 = Number(num1);
  num2 = Number(num2);
  operation = operation.trim();

  var result;

  if (operation === "+") {
    result = num1 + num2;
  } else if (operation === "-") {
    result = num1 - num2;
  } else if (operation === "*") {
    result = num1 * num2;
  } else if (operation === "/") {
    if (num2 === 0) {
      document.write("<h2>Division by zero is not allowed ❌</h2>");
    } else {
      result = num1 / num2;
    }
  } else if (operation === "%") {
    if (num2 === 0) {
      document.write("<h2>Division by zero is not allowed ❌</h2>");
    } else {
      result = num1 % num2;
    }
  } else {
    document.write("<h2>Invalid operation! Please enter +, -, *, /, or %</h2>");
  }

  if (result !== undefined) {
    document.write("<h2>Result: " + num1 + " " + operation + " " + num2 + " = " + result + "</h2>");
  }
}
       //chapter9 to 11 End//








