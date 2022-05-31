// WHILE LOOPS


// function call_loop() {
//   var digit = "";
//   var x = 1;
//   while(x < 50) {
//       digit +="-"+x;
//       x++;
//   }
//   document.getElementById("loop").innerHTML = digit;
// }








//END WHILE LOOPS

// FOR LOOPS

// var instruments = ["Guitar", "Piano", "Drums"];
// var content = "";
// var y;
// function for_loop() {
//   for (y=0;y < instruments.length; y++) {
//     content += instruments[y] + "<br>";
//   }
//   document.getElementById("list_of_instruments").innerHTML=content;

// }






// END FOR LOOPS 



// ARRAYS

// function cat_pics () {
//   var cat_pic = [];
//   cat_pic[0] = "sleeping";
//   cat_pic[1] = "playing";
//   cat_pic[2] = "eating";
//   cat_pic[3] = "purring";
//   document.getElementById("cat").innerHTML = "in this picture, the cat is "+ cat_pic[2];
// }


// END ARRAYS

// CONSTANT 

// function constant_func() { 
//   const musical_instrument = {type: "guitar", brand:"fender", color:"black", newproperty:"decibel"};
//   musical_instrument.price="900";
//   document.getElementById("constant").innerHTML="the sound of "+musical_instrument.type+" is in "+musical_instrument.newproperty;

// }


// END CONSTANT















// RETURN  and let


// let pizza = {
//   toppings: "cheese and tomato",
//   cooking: "wood fired",
//   style:"classic neapolitan",
//   description : function() {
//        return "my favorite pizza is " + this.toppings  + this.cooking + this.style;
//   }

// };
// document.getElementById("myfavpizza").innerHTML = pizza.description;

// END RETURN  and let



var text = "";
for (i = 0; i < 10; i++) {
    if(i === 4) {  // once i is equal to 4 we break the loop. 
      break;       // if instead we put continue once we hit 4 instead to break the entire loop we just 
                  // pass the loop of i=4 and then continue to the next so the output will be
    }             // 1-2-3-5-6-7-8-9
    text += i + "<br>";

}
document.getElementById("text").innerHTML = text;
      
