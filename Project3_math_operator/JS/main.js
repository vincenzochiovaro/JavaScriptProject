
function addition_Function () {   //To perform a simple addition
       var addition = 2 + 2;       
       document.getElementById("Math1").innerHTML = " 2+2 = " + addition;  

}

function substraction_Function () { // to perform a simple substraction
       var substraction = 2 - 2;
       document.getElementById("Math2").innerHTML = " 2-2 = " + substraction;

}

function multiplication () {  // to perform a multiplication
       var simple_Math = 6*8;
       document.getElementById("Math3").innerHTML = "6 x 8 = " + simple_Math;
}

function division () {  // to perform a division
       var simple_math1 = 48/6;
       document.getElementById("Math4").innerHTML = "48/6 ="+simple_math1;
}


function modulus_Operator () { //  is the amount left over after dividing two numbers
       var simple_Math = 25 % 6;
       document.getElementById("Math5").innerHTML = "When you divide 25 by 6 you have a remainder   of: " + simple_Math;
     
} 

function negation_Operator () { //negation operator returns the opposite or negative form of something
       var x = 10;
       document.getElementById("Math6").innerHTML = -x;


}

function IncrementFun () { //The increment operator in JavaScript is written as ++
       var y = 5;
       y++;
       document.getElementById("Math7").innerHTML = y;
       

}

function DecrementFun () { //The opposite of increment operator
       var c = 5;
       c--;
       document.getElementById("Math8").innerHTML = c;
       

}
function randomnumb () {   // function to create a random numb everytime you click on it
       var d = window.alert (Math.random()*100);
       document.getElementById(randomnumb).innerHTML;
}
