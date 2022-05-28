function my_Function() {
       
       document.getElementById("Test").innerHTML=isNaN ("this is sparta!");
}

function my_Function1() {
       document.getElementById("Test1").innerHTML=isNaN ("007");
}

function my_Function2() {
       document.getElementById("Test2").innerHTML= 0/0;
}


function my_Function3 () { // infinite 
       var a = document.write(2E310);
       document.getElementById(Test3).innerHTML= a;
}

function my_Function4 () { //-infinite
       var b = document.write(-2E310);
       document.getElementById(Test4).innerHTML= b;
}

function my_Function5 () { //Boolean Logic
       var c = document.write(10>2);
       document.getElementById(Test5).innerHTML= c;
}

function my_Function6 () {   //Coercion
       var d = document.write("10"+5);
       document.getElementById(Test6).innerHTML= d;

}

function not_Function() {
       document.getElementById("Test7").innerHTML= !(5 > 10);
}


console.log (10>102); // display false on the console

console.log (10==10); // display true 



X = 10;
Y= 10;
console.log (X === Y);

X = 10;
Y= 11;
console.log (X === Y);

X = "10";
Y= "11";
console.log (X === Y);

X = "10";
Y= "10";
console.log (X === Y);

console.log (5>2 && 10>4);

console.log (5>6 && 5>4);

console.log (5>10 || 10 > 20);