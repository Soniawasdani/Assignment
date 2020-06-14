//Chapter 1
//TASK:1


alert("Hello Guys\n CHAPTER:1 THIS IS TASK 1")

//TASK:2

alert("Error!Please enter a valid password. \n CHAPTER:1 THIS IS TASK 2")

//TASK:3

alert("Welcome to JS Land. \nHappy coding! \n CHAPTER:1 THIS IS TASK 3")

//TASK:4
alert("Welcome to JS Land. \n CHAPTER:1 THIS IS TASK 4")
alert("Happy coding!  \n CHAPTER:1 THIS IS TASK 4")

//TASK:5
// 5. Generate the following message through browser’s developer console
// Note we can not save work of js on console window so iam writing steps
// Step:1
// we will open html file on browser
// Step2
// we will click inspect and click on console window
// Step3
// We will write alert fuction with the message and when we will enter message will be pop out.


///TASK:6

alert("Iam using Alert in this Html project!  \n CHAPTER:1  THIS IS TASK 6")





// Chapter 2


//TASK:1

var userName;


//TASK:2

var myName ="Sonia Kumari";



//TASK:3
var message;
 message = "Hello World \n CHAPTER:2 THIS IS TASK 3";
 alert(message)

//TASK:4

 var name = "john Doe";
var age = "15 Years old"
var certification = "Certified Mobile Application Development"

alert(name +"\n CHAPTER:2  THIS IS TASK 4")
alert(age +"\n CHAPTER:2  THIS IS TASK 4")
alert(certification +"\n CHAPTER:2  THIS IS TASK 4")


//TASK:5

var food = ["Pizza", "pizz", "piz","pi" ,"p"];
alert(food[0]+ "\n" +" " + food[0,1] + "\n" +" " + food[0,2] + "\n" +" " + food[0,3]+ "\n" +" " + food[0,4] +"\n CHAPTER:2  THIS IS TASK 5" );



//TASK:6

var email = "soniawasdani@gmail.com"
alert("My email address is" + " "+email +"\n  CHAPTER:2 THIS IS TASK 6" )



//TASK:7

var book = "A smarter way to learn javascript";
alert("Iam trying to learn from the book" + " "+book +"\n CHAPTER:2  THIS IS TASK 7" )


//TASK:8
document.write("<br> <br> CHAPTER:2 THIS IS TASK 8 <br> <br>")
var example = 'yay! I can write HTML content through javascript';
document.write(example+"<br><br>");




//TASK:9

var design ="“▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬” ";
alert(design +"\n  CHAPTER:2 THIS IS TASK 9")


// Chapter 3
//TASK:1

var age = 15;
alert("Iam"+" "+age + " " + "Years old" +"\n  CHAPTER:3 THIS IS TASK 1")

//TASK:2

var track;
track = 15;
alert("your visit number is "+ track + "times" +"\n  CHAPTER:3THIS IS TASK 2")

//TASK:3
document.write("<br> <br> CHAPTER:3 THIS IS TASK 3<br> <br>")
var birthYear = 1991;
document.write("<br> My birth year is"+ birthYear + "<br>" +"data is save in number"  + "<br> <br> <br>");


//TASK:4
document.write("<br> <br> CHAPTER:3 THIS IS TASK 4 <br> <br>")
var VisitorName ="John";
var Producttitle ="T.Shirts";
var Quantity = 5;
document.write("<br>"+VisitorName+ " " + "ordered" +" "+ Quantity + Producttitle + " "+ "on xyzClothing store" + "<br> <br> <br>");


// Chapter 4

//TASK:1

var number = [1,2,3];

//TASK:2


//5 legal variable name
var firstName = "sonia";
var lastName = "wasdani";
var $age = 30;
var Qualification = "Masters"
var _height = 6;





//Iam commenting illegal variable names

// var 1firstName = "sonia";
// var 3lastName = "wasdani";
// var 4age = 30;
// var 5Qualification = "Masters"
// var 6height = 6;


//TASK:3
document.write("<br> <br> CHAPTER:4  THIS IS TASK 3 ")
document.write("<br> <h1>“Rules for naming JS variables</h1>" +" Variable names can only contain numbers, $, and _. For example $my_1stVariable "+"<br> Variables must begin with a letter, $ or _. For example $name, _name or name"+"<br> Variable names are case sensitive"+" <br> Variable names should not be JS Keywords "+ "<br>  CHAPTER:4 THIS IS TASK 3")


   // chapter 5
//TASK:1

   document.write("<br> <br> CHAPTER:5  THIS IS TASK 1 <br> <br>")
    var num1 = 3;
    var num2 = 5;
    var result = num1+num2;

    document.write("SUM of"+" "  + num1 +" " +"and "+ num2 +" " +"is"+" " + result + "<br> ");

//TASK:2
    document.write("<br> <br> CHAPTER:5 THIS IS TASK 2 <br>")
    var num3 = 5;
    var num4 = 3;
    var resultmin = num3-num4;
    document.write("<br><br>  SUBTRACTION of"+" "  + num3 +" " +"and "+ num4 +" " +"is"+" " + resultmin + "<br> ");


    // Multiply
    var num5 = 5;
    var num6 = 3;
    var resultmul = num3*num4;
    document.write("<br><br>  MULTIPLICATION of"+" "  + num5 +" " +"and "+ num6 +" " +"is"+" " + resultmul + "<br> ");


    // Division

    var x = 8;
    var y = 2;
    var z = x / y
    document.write("<br><br>  DIVISION of"+" "  + x +" " +"and "+ y+" " +"is"+" " + z + "<br> ");

//Modulous
    var a = 10;
    var b= 3;
    var c = a % b
    document.write("<br><br>  Modulous of"+" "  + a +" " +"and "+ b+" " +"is"+" " + c + "<br> ");




//TASK:3
    document.write("<br> <br> CHAPTER:5 THIS IS TASK 3 <br>")
 var number1;

 document.write("<br> <br> Value after variable declaration is"+" "+number1 + "<br> ");

 number1 = 5;
 document.write("<br> <br> Initial value :"+" "+number1 + "<br> ");

 number1++;
 document.write("<br> <br> Value after increment is :"+" "+number1 + "<br>");

 var operation =number1++ + number1  ;
document.write("<br> <br> Value after addition is :"+" " +operation + "<br> ")

var decoperation =  --number1+ number1++  ;
document.write("<br> <br> Value after decrement is :"+" " +decoperation + "<br> ")

var decoperation =  number1++ - --number1  ;
document.write("<br> <br> Remainder is :"+" " +decoperation + "<br> ")

//TASK:4

document.write("<br> <br> CHAPTER:5 THIS IS TASK 4 <br>")
var ticket = 600;
var fivetick = ticket*5;
document.write("<br> <br> Total cost to buy 5 tickets to a movie is :"+" " +fivetick + "<br> ")


//TASK:5
document.write("<br> <br> CHAPTER:5 THIS IS TASK 5 <br>")
for(var i =1; i<=10; i++)
{

    document.write("<br><br>  4" + "x" + i + "="+ 4*i + "<br>")
    
}

//TASK:6

document.write("<br> <br>  CHAPTER:5 THIS IS TASK 6 <br>")
var Celsius = 25 ;
var Fahrenheit;

Fahrenheit = (Celsius *9/5)+32;

 document.write("<br>"+Celsius + " " + "is "+ " " + Fahrenheit)


var cel;
var far = 70;

cel = (far-32)*5/9;


 document.write("<br>"+far +" " + "is " + " " + cel)
 
//TASK:7


 document.write("<br> <br><br> CHAPTER:5 THIS IS TASK 7 ")
 document.write("<br> <h1> Shopping Cart</h1> <br>")
 
 
 var item1 = 650;
 var item2 = 100;
 var OQ1 = 3;
 var OQ2 = 7;
 var Shippingcharges = 100;
 var totalcost = item1*3 + item2*7 + Shippingcharges;
 
 document.write("Price of item 1 is" + " " + item1 +"<br><br> ")
 document.write("Quantity of item 1 is" + " " +OQ1 +"<br><br> ")
 
 document.write("Price of item 2 is" + " " + item2+"<br><br> " )
 document.write("Quantity of item 1 is" + " " +OQ2 +"<br><br> ")
 
 document.write("Shipping charges is" + " " +Shippingcharges +"<br><br> ")
 
 document.write("Total cost s is" + " " +totalcost +"<br><br> ")



 //TASK:8

 document.write("<br> <br> CHAPTER:5 THIS IS TASK 8 <br>")
document.write("<br> <br><h1>Marks Sheet</h1> <br>")



var totaMarks = 980;
var obtainedMarks = 804;
var percentage = obtainedMarks*100/totaMarks;

document.write("Total Maks :" + " " + totaMarks + "<br>"   +"Obtained Marks :" + " " + obtainedMarks + "<br>"+"Percentage :" + " " + percentage + "%")



//TASK:9

document.write("<br> <br><br> CHAPTER:5 THIS IS TASK 9 <br>")
document.write("<br> <br><h1> Curency in PKR</h1> ")

var Dollar =  104.80 ;
var  Riyals =  28 ;
var pkr = Dollar*10 + Riyals*25;

document.write("Total currency in PKR:"+ " " + pkr +"<br>")

//TASK:10


document.write("<br> <br> CHAPTER:5 THIS IS TASK 10<br>")

 var firstNum = 5;
var resulltt = firstNum+5*10/2;

document.write("Result is:"+ " " + resulltt+"<br>");

//TASK:11


document.write("<br> <br><br> CHAPTER:5 THIS IS TASK 11 ")
document.write("<br> <h1> Age Calculator</h1> <br>")
var cuurentYear = 2016;
var  birthYear = 1992;
var age = cuurentYear-birthYear;

document.write("Current Year is" + " " +cuurentYear +"<br>" +"Birth Year is" + " "+birthYear+"<br>" +"Your age is:"+ " " + age+"<br>");


//TASK:12


document.write("<br> <br> CHAPTER:5 THIS IS TASK 12")
document.write("<br> <h1> The Geometrizer</h1> <br>")
var radius = 20;
var radius2 = radius+radius;
var  circumference = 2*3.142*radius
var area = 3.142*radius2;
document.write("Radius of a circle is" + " " +radius +"<br>" +"The Circumference is" + " "+circumference+"<br>" +"The area is:"+ " " + area+"<br>");



//TASK:13

document.write("<br> <br> CHAPTER:5 THIS IS TASK 13")
   document.write("<br> <h1> The Lifetime Supply Calculator</h1> <br>")

var snack = "chips";
   var Curenttage = 15;
var  maximumAge = 65;
var perDay = 3;
var totalLife = perDay*Curenttage - perDay*maximumAge;
document.write("Favouite snack is" + " " +snack +"<br>" +"Current age is" + " "+Curenttage+"<br>" +"Estimated Maximum age:"+maximumAge+ " " +"<br>" +"Amount of snacks per day:"+ perDay + " " +"<br>" +"you will need:"+totalLife +"chip to last you until the ripe old age of "+maximumAge +"<br>");


//chapter6-9

//TASK:1
document.write("<br> <br> CHAPTER:6-9 THIS IS TASK 1 <br> <br>")

var a  = 10;


document.write("Result"+ " <br>"+"The value of a is" + " " +a +"<br>");
var b =++a;

document.write("The value of ++a is:"+ b+ "<br>"+"Now the value of a is:"  +a +"<br>");

var c = a++;

document.write("The value of a++ is:"+ c +"<br>"+"Now the value of a is:"  + a +"<br>");

var d = --a;
document.write("The value of --a is:"+ d +"<br>"+"Now the value of a is:"  + a +"<br>");

var e = a--;
document.write("The value of a-- is:"+ e +"<br>"+"Now the value of a is:"  + a +"<br>");


//TASK:2
document.write("<br> <br> CHAPTER:6-9 THIS IS TASK 2 <br><br> ")


var f= 2;
 var g = 1;
 var result =   --f - --g + ++g + g--;
                 
 document.write("f is:"+ f +"<br>"+"g is:"  + g +"<br>"+"result is"+result+"<br>");


//TASK:3

 document.write("<br> <br> CHAPTER:6-9 TASK 3 is in alert function <br><br> ")

 var userName = prompt("Enter your name");
 alert("hello" + " " +userName);

//TASK:5

 document.write("<br> <br> CHAPTER:6-9 THIS IS TASK 5 <br><br> ")

 var i = prompt("Enter your number 2 to 10 for table")

if(i>=2 && i < 3){

    for(var i =1; i<=10; i++)
    {
    
        document.write("<br><br>  2" + "x" + i + "="+ 2*i + "<br>")
        
    }
}


else if(i>=3 && i <4){

    for(var i =1; i<=10; i++)
    {
    
        document.write("<br><br>  3" + "x" + i + "="+ 3*i + "<br>")
        
    }
}

else if(i>=4 && i <5){

    for(var i =1; i<=10; i++)
    {
    
        document.write("<br><br>  4" + "x" + i + "="+ 4*i + "<br>")
        
    }
}

else if(i>=5 && i <6){

    for(var i =1; i<=10; i++)
    {
    
        document.write("<br><br> 5" + "x" + i + "="+ 5*i + "<br>")
        
    }
}

else if(i>=6 && i <7){

    for(var i =1; i<=10; i++)
    {
    
        document.write("<br><br>  6" + "x" + i + "="+ 6*i + "<br>")
        
    }
}
else if(i>=7 && i <8){

    for(var i =1; i<=10; i++)
    {
    
        document.write("<br><br>  7" + "x" + i + "="+ 7*i + "<br>")
        
    }
}
else if(i>=8 && i <9){

    for(var i =1; i<=10; i++)
    {
    
        document.write("<br><br>  8" + "x" + i + "="+ 8*i + "<br>")
        
    }
}

else if(i>=9 && i <10){

    for(var i =1; i<=10; i++)
    {
    
        document.write("<br><br>  9" + "x" + i + "="+ 9*i + "<br>")
        
    }
}
else if(i>=10 && i <10){

    for(var i =1; i<=10; i++)
    {
    
        document.write("<br><br>  10" + "x" + i + "="+ 10*i + "<br>")
        
    }
}

else   {
    for(var i =1; i<=10; i++)
    {
    
        document.write("<br><br>  5" + "x" + i + "="+ 5*i + "<br>")
        
    }

}


//TASK:6

document.write("<br> <br> CHAPTER:6-9 THIS IS TASK 6 <br><br> ")
document.write("<br> <br> Subject total marks Obtained Marks Percentage <br><br> ")
    


   

var english = prompt("Enter your Subject1");
var urdu = prompt("Enter your Subject2");

var maths= prompt("Enter your Subject3");



var  subjectMarks = 100;
var threesubjectmarks = 300;
var obtainedMarks1 = +prompt("Enter Your English Marks")

var obtainedMarks2 = +prompt("Enter Your History Marks")
var obtainedMarks3 = +prompt("Enter Your Maths Marks")


var totalMarksSubjects = obtainedMarks1+obtainedMarks2+obtainedMarks3 ;
var percentage =  totalMarksSubjects *100/threesubjectmarks;

document.write(english + " " + " " + subjectMarks +  " " +" "+obtainedMarks1 + " " +  " " +" "+obtainedMarks1*100/100+"%"+"<br> <br>")
document.write(urdu + " " + " " + subjectMarks +  " " +" "+obtainedMarks3 + " " +  " " +" "+obtainedMarks3*100/100+"%" +"<br> <br>")

document.write(maths + " " + " " + subjectMarks +  " " +" "+obtainedMarks3 + " " +  " " +" "+obtainedMarks3*100/100+"%" +"<br> <br>")

document.write(threesubjectmarks + " " + " " + " "+ totalMarksSubjects+ " " + " "+ percentage+"%" +"<br> <br>");


//chapter9-11

//TASK:1

document.write("<br> <br> chapter9-11 THIS IS TASK 1 <br><br> ")



var city = prompt("enter your city");
if (city === "karachi")
{
document.write("Welcome to karachi")
}
else
{
    document.write("Not Welcome to city of lights")
}



// TASK 2

document.write("<br> <br> chapter9-11 THIS IS TASK 2 <br><br> ")

var gender = prompt("enter your gender");
if (gender === "female")
{
document.write("Good Morning Ma’am")
}
else if(gender === "male")
{
    document.write("Good Morning Sir")
}
else
{
    document.write("Good Morning ")
}



// TASK 3


document.write("<br> <br> chapter9-11 THIS IS TASK 3 <br><br> ")

var signalColor = prompt("enter your Color");
if (signalColor === "red")
{
document.write("Must Stop")
}
else if(signalColor === "yellow")
{
    document.write("Ready to move")
}
else if(signalColor === "green")
{
    document.write("Move now ")
}
else
{
    document.write("Enter your color")
}



// TASK 4


document.write("<br> <br> chapter9-11 THIS IS TASK 4 <br><br> ")

var fuel = prompt("enter your remaining fuel");
if (fuel <= 0.25)
{
    document.write("Please refill the fuel in your car")
}
else{
    document.write("You have enough fuel")
}



// TASK 5


document.write("<br> <br> chapter9-11 THIS IS TASK 5 <br><br> Result in alert ")
var a = 4; 
if (++a === 5)
{ alert("given condition for variable a is true"); }   

 var b = 82; 
 if (b++ === 83)
 { alert("given condition for variable b is true"); }  
 else{
    alert("given condition for variable b is not true"); 
 }

  var c = 12; 
  if (c++ === 13)
  { 
      alert("condition 1 is true");
     } 
  if (c === 13)
  { 
      alert("condition 2 is true");
     } 
     if (++c < 14)
     { 
         alert("condition 3 is true"); 
        } 
     if(c === 14)
     { 
         alert("condition 4 is true");
         } 

var materialCost = 20000;
 var laborCost = 2000;
  var totalCost = materialCost + laborCost; 
  if (totalCost === laborCost + materialCost)
  { 
      alert("The cost equals"); 
    } 

    if (true)
    { 
        alert("True");
     } 
     if (false)
     { 
         alert("False");
         }    
    if("car" < "cat")
    { 
        alert("car is smaller than cat"); 
    }



// TASK 6

    document.write("<br> <br> chapter9-11 THIS IS TASK 6 <br><br> ")
  



    var english = +prompt("Enter your Subject1 Marks");
    var urdu = +prompt("Enter your Subject2 Marks");
    
    var maths= +prompt("Enter your Subject3 Marks");
    var totalMarks= prompt("Enter your total marks");
    var obtainedMarks = english+urdu+maths;

    var percentage = obtainedMarks*100/totalMarks;

document.write("Total Marks"+ " " + totalMarks+ "<br>")
document.write("Marks Obtained"+ " " + obtainedMarks +"<br>")








  

    if(percentage >= 80 && percentage<= 100){
        document.write("Percentage"+ " " + percentage +"%"+"<br>")
        document.write("Grade :A-ONE"+"<br>")
        document.write("Remarks :Exellent"+"<br>")
}
else if(percentage >= 70 && percentage<= 80){
    document.write("Percentage"+ " " + percentage +"%"+"<br>")
        document.write("Grade :A"+"<br>")
        document.write("Remarks :Good"+"<br>")
}
else if(percentage >= 60 && percentage<= 70){
    document.write("Percentage"+ " " + percentage +"%"+"<br>")
        document.write("Grade :B"+"<br>")
        document.write("Remarks :You need to improve"+"<br>")
}
else if(percentage >= 50 && percentage<= 60){
    document.write("Percentage"+ " " + percentage +"%"+"<br>")
        document.write("Grade :Fail"+"<br>")
        document.write("Remarks :sorry"+"<br>")
}

else{
    alert("incorrect number")
}


// TASK 7


document.write("<br> <br> chapter9-11 THIS IS TASK 7 <br><br> Result in alert ")

var secretNo = 6;
var yourGuess = prompt("Enter your number");

if (yourGuess == 6)
{

    alert("Bingo! Correct answer")


}
 else if (yourGuess == ++secretNo){

    alert("Close enough")


 }

 else {

    alert("oops sorry")

 }



// TASK 8

 document.write("<br> <br> chapter9-11 THIS IS TASK 8 <br><br>Result in alert  ")
var givenNo = prompt("enter your number")

if(givenNo%3 == 0 ){

    alert("yes it is divisible")

}
else{
    alert("no it is not divisible")

}


// TASK 9

document.write("<br> <br> chapter9-11 THIS IS TASK 9 <br><br> Result in alert  ")

var checkNo = prompt("Enter Your Number")

if(checkNo%2 == 0){

alert("Even No")


}

else if (checkNo%3 == 0){

    alert("Odd No")


}


// TASK 10

document.write("<br> <br> chapter9-11 THIS IS TASK 10 <br><br> ")

var  temperature = prompt("Enter your Temprature")



    if(temperature >= 40 ){
      
        document.write("It is too hot outside."+"<br>")
        
}
else if(temperature >= 30 ){
   
        document.write("The Weather today is Normal."+"<br>")
}
else if(temperature >= 20 )
{

        document.write("Today’s Weather is cool"+"<br>")
}
else if(temperature >= 10  )
{

        document.write("OMG! Today’s weather is so Cool"+"<br>")
}


else{
   
    document.write("Enrtr no"+"<br>")
}



// TASK 11

document.write("<br> <br> THIS IS TASK 11 <br><br> ")

var num1 = +prompt("Enter your first number");
var num2 = +prompt("Enter your second number");
var Operation = prompt("Enter your operator")

if (Operation == "+")
{

    
alert(num1+num2)

}
if (Operation == "-")
{

    
alert(num1-num2)

}
if (Operation == "*")
{

    
alert(num1*num2)

}
if (Operation == "/")
{

    
alert(num1/num2)

}
if (Operation == "%")
{

    
alert(num1%num2)

}


else{
   
    document.write("Enrtr no"+"<br>")
}




//Chapter 12-13

//TASK:1


document.write("<br> <br> chapter12-13 THIS IS TASK 1 <br><br>Result in alert  ")


var alphabet = prompt("Enter your word")

if(alphabet >= "A" && alphabet <= "Z"  ){

    alert("This is uppercase")

}

else if (alphabet >= "a" && alphabet <= "z")
{
    alert("This is lowercase")

}
else{
    alert("is not an aplhabetic character\n")
}








//TASK:2

document.write("<br> <br> chapter12-13 THIS IS TASK 2<br><br>Result in alert  ")


var firstNum = prompt("Enter your 1st number");
var secondNum = prompt("Enter your 2nd number");

if (firstNum > secondNum){

alert(firstNum)

}
else if(secondNum > firstNum)

{

    alert(secondNum)
}

else if (firstNum === secondNum){

    alert("equal")
}
else{

    alert("put correct num")
}















//TASK:3

document.write("<br> <br> chapter12-13 THIS IS TASK 3 <br><br>Result in alert  ")


var inpNumber = prompt("Enter your number")

if(inpNumber > 0 && inpNumber <=9){
    alert("positive")


}
else if (inpNumber < 0){
    alert("negative")


}

else if (inpNumber == 0){
    alert("zero")


}
else   {

    alert("Enter corect number")
    
    }


















//TASK:4
document.write("<br> <br> chapter12-13 THIS IS TASK 4 <br><br>Result in alert  ")


var text = prompt("enter word")
var vowel = ["A","E","I","O","a","e"]
  for (var i = 0; i < text.length; i++)
   {    if (text.slice(i, i + 1) === "a" ||text.slice(i, i + 1) === "e"||text.slice(i, i + 1) === "i"||text.slice(i, i + 1) === "o" ||text.slice(i, i + 1) === "u" ||text.slice(i, i + 1) === "A" ||text.slice(i, i + 1) === "E" ||text.slice(i, i + 1) === "I" ||text.slice(i, i + 1) === "O" ||text.slice(i, i + 1) === "U" )
    {   
        alert("vowel found")   
         } 
         } 














//TASK:5

document.write("<br> <br> chapter12-13 THIS IS TASK 5 <br><br>Result in alert  ")


var paswd = "sonia" ;     
 
var password = prompt("Enter paswd")

  if(password=== "sonia"){

alert("Correct")
}
else if (password !== "sonia" && password !== ""){

alert("Incorrect password")
}

else if (password === ""){

  alert("Please enter your password")
}






//TASK:6
document.write("<br> <br> chapter12-13 THIS IS TASK 6 <br><br>Result in alert  ")


var paswd = "sonia" ;     
 
var password = prompt("Enter paswd")

  if(password=== "sonia"){

alert("Correct")
}
else if (password !== "sonia" && password !== ""){

alert("Incorrect password")
}

else if (password === ""){

  alert("Please enter your password")
}

//TASK:7

document.write("<br> <br> chapter12-13 THIS IS TASK 7<br><br>Result in alert  ")

var clock = +prompt("Enter your time");
       
        
        if(clock >= 0000 && clock<= 1200)
        {
            alert("Good morning")
            }  
         else if (clock >= 1200 && clock<= 1700)
            {
                alert("Good afternoon")
                }  
                else if (clock >= 1700 && clock<= 2100)
                {
                    alert("Good evening")
                    }  
                    else if (clock >= 2100 && clock<= 2359)
                    {
                        alert("Good night")
                        }  
                    else {

                        alert("have a nice day")
                    }




//Chapter14-16
//TASK:1

var studentNames = {
    
};

//TASK:2
 var studentsnames = [];


//TASK:3
var a = ["sonia","masu","honey"];




//TASK:4
var b =[1,2,3,4];




//TASK:5
//Bollean array
var a =[true,false];





//TASK:6

 //Mixed arrays
 var fruits = ["apple",1];





//TASK:7
document.write("<br> Chatpter 14-16 TASK 7 <br><br> ")
var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil", "PhD"];

document.write("1"+qualifications[0]+"<br>"+"2"+qualifications[1]+"<br>"+"3"+qualifications[2] +"<br>"+"4"+qualifications[3] +"<br>"+"5"+qualifications[4] +"<br>"+"6"+qualifications[5] +"<br>"+"7"+qualifications[6] +"<br>"+"8"+qualifications[7]);




//TASK:8
document.write("<br><br> Chatpter 14-16 TASK 8 <br>")
var students = ["Michael","John","Tonny"];
var scores = [320,230,480];

document.write("<br>Score of"+" " +students[0] +" "+"is" +scores[0]+" "+".percentage:64%");
document.write("<br>Score of"+" " +students[1]+" " +"is" +scores[1]+" "+".percentage:46%");
document.write("<br>Score of"+" " +students[2] +" "+"is" +scores[2]+" "+".percentage:96%");





//TASK:9

document.write("<br><br> Chatpter 14-16 TASK 9 <br>")
var color = ["red","pink","black"];




var startColor = prompt("what color would you add at beginning");
var endColor = prompt("what color would you add at end");
color.unshift(startColor)  //we can add multiple value by adding coma



color.unshift("mergenda","gray")

color.shift()




color.pop();
color.push(endColor)

var userChoice = prompt("your index number");
var userchoicecolor = prompt("your color");
var deleteColorindex  = prompt("your index number for delete the color")


color[userChoice] = userchoicecolor;

delete color[deleteColorindex];




document.write(color);







//TASK:10


document.write("<br><br> Chatpter 14-16 TASK 10 <br>")

var Marks = [320,230,480,120];


document.write("Score of students" + " "+ Marks.sort())
document.write("Orderd score of students" + " "+ Marks.sort())

//Task11
document.write("<br><br> Chatpter 14-16 TASK 11<br>");

var city = ["KARACHI","LAHORE","MULTAN","MUMBAI","PERTH"];

var  selectedCities = city.slice(2,4);


document.write("city List" + " <br>"+ city + " <br>");
document.write("Selected city List" + "  <br>"+ selectedCities);



//Task 12
document.write("<br><br> Chatpter 14-16 TASK 12<br>");
var arr = ["This", " is ", " my " , "cat"];

document.write(arr.join(" ")+"<br>");



//Task13
document.write("<br><br>Chatpter 14-16  TASK 13<br>");

var computerDevices = ["Keyboard","mouse","printer","monitor"];
document.write("Out<br> "+computerDevices.shift(0)+"<br>"+"Out<br> "+computerDevices.shift(1)+"<br>"+"Out<br> "+computerDevices.shift(2)+"<br>"+"Out<br> "+computerDevices.shift(3))


//Task14
document.write("<br><br>Chatpter 14-16  TASK 14<br>");

var computerDevices = ["Keyboard","mouse","printer","monitor"];

document.write(computerDevices.reverse()+"&nbsp");

//Task15






//CHAPTER17-20

// //Task1

var data = [
    [],
    [],
    []

];

// //Task2
document.write("<br><br>Chatpter 17-20  TASK 2<br>");

var matrix = [
    [0,1,2,3],
    [1,0,1,2],
    [2,1,0,1]

];

document.write(matrix[0]+"<br>"+ matrix[1]+"<br>"+ matrix[2]);



//Task3

document.write("<br><br>Chatpter 17-20  TASK 3<br>");

var counting = [
    [1],
    [2],
    [3],
    [4],
    [5],
    [6],
    [7],
    [8],
    [9],
    [10]


];

document.write(counting[0]+"<br>"+ counting[1]+"<br>"+counting[2]+"<br>"+counting[3]+"<br>"+counting[4]+"<br>"+counting[5]+"<br>"+counting[6]+"<br>"+counting[7]+"<br>"+counting[8]+"<br>"+counting[9]);



//Task4

document.write("<br><br>Chatpter 17-20  TASK 4<br>");


var i = prompt("Enter your number 2 to 10 for table");
var length = prompt("Enter your number 2 to 10 for table");

if(i>=2 && i < 3){

    for(var i =1; i<=length; i++)
    {
    
        document.write("<br><br>  2" + "x" + i + "="+ 2*i + "<br>")
        
    }
}


else if(i>=3 && i <4){

    for(var i =1; i<=length; i++)
    {
    
        document.write("<br><br>  3" + "x" + i + "="+ 3*i + "<br>")
        
    }
}

else if(i>=4 && i <5){

    for(var i =1; i<=length; i++)
    {
    
        document.write("<br><br>  4" + "x" + i + "="+ 4*i + "<br>")
        
    }
}

else if(i>=5 && i <6){

    for(var i =1; i<=length; i++)
    {
    
        document.write("<br><br> 5" + "x" + i + "="+ 5*i + "<br>")
        
    }
}

else if(i>=6 && i <7){

    for(var i =1; i<=length; i++)
    {
    
        document.write("<br><br>  6" + "x" + i + "="+ 6*i + "<br>")
        
    }
}
else if(i>=7 && i <8){

    for(var i =1; i<=length; i++)
    {
    
        document.write("<br><br>  7" + "x" + i + "="+ 7*i + "<br>")
        
    }
}
else if(i>=8 && i <9){

    for(var i =1; i<=length; i++)
    {
    
        document.write("<br><br>  8" + "x" + i + "="+ 8*i + "<br>")
        
    }
}

else if(i>=9 && i <10){

    for(var i =1; i<=length; i++)
    {
    
        document.write("<br><br>  9" + "x" + i + "="+ 9*i + "<br>")
        
    }
}
else if(i>=10 && i <10){

    for(var i =1; i<=length; i++)
    {
    
        document.write("<br><br>  10" + "x" + i + "="+ 10*i + "<br>")
        
    }
}

else   {
    for(var i =1; i<=10; i++)
    {
    
        document.write("<br><br>  5" + "x" + i + "="+ 5*i + "<br>")
        
    }

}


//Task5

document.write("<br><br>Chatpter 17-20  TASK 5<br>");
var fruits = ["apple","banana","mango","orange","strawbery"]; 

for(var j =0; j<=fruits.length-1; j++)
{

    document.write(fruits[j]+"<br>");
  
}
document.write("<br><br>  Element at index 0" + "is" + " "+ fruits[0]+ "<br>")
  document.write("<br><br>  Element at index 1" + "is" +" "+ fruits[1]+  "<br>")
  document.write("<br><br>  Element at index 2" + "is" + " "+fruits[2]+  "<br>")
  document.write("<br><br>  Element at index 3" + "is" + " "+fruits[3]+  "<br>")
  document.write("<br><br>  Element at index 4" + "is" + " "+fruits[4]+  "<br>")



  //Task6
  document.write("<br><br>Chatpter 17-20  TASK 6<br>");
   var countingg = [
        [1],
        [2],
        [3],
        [4],
        [5],
        [6],
        [7],
        [8],
        [9],
        [10]
    
    
    ];
    
    document.write("<h3>Counting</h3>"+"<br>"+countingg + "<br>");
    document.write("<h3>Reverse Counting</h3>"+"<br>"+countingg.reverse()+ "<br>");
  document.write("<h3>Even</h3>")  
    for(k = 0; k<21;k= k+2){

        document.write([k]+"&nbsp");
    }
    document.write("<h3>Odd</h3>")  
    for(l = 1; l<20;l= l+2){

        document.write([l]+"&nbsp");
    }
    document.write("<h3>Series</h3>")  
    for(k = 2; k<21;k= k+2){

        document.write([k]+"k"+"&nbsp");
    }

    //task7
    document.write("<br><br>Chatpter 17-20  TASK 7<br>");
   var  A = ["cake", "apple" ,"pie", "cookie", "chips", "patties"] 
var user = prompt("welcome to ABC Bakery.What do you want to order sir/mam?")
   if(A[0]==user||A[1]==user||A[2]==user||A[3]==user||A[4]==user){

document.write(A[0] +"is available at index"+A.indexOf(user))

   }
   else{

    document.write("We are sorry pstery is not available in our bakery")
   }

   
   //Task8
   document.write("<br><br>Chatpter 17-20  TASK 8<br>");
   var B = [24,53,78,91,12]
   document.write("The largest number is"+Math.max.apply(null,B)+"<br><br>");

   //Task9
   document.write("<br><br>Chatpter 17-20  TASK 9<br>");
   document.write("The smallest number is"+Math.min.apply(null,B));



//    Task 10
document.write("<br>")
for(t = 5; t<101;t= t+5){

    document.write([t]+"&nbsp");
}

































