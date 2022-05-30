// GLOBAL VARIABLE BECAUSE IS OUTSIDE OF THE FUNCTION


// var x = 10;
// function addnumber1 () {
//     document.write(20 + x + "<br>");
// }

// function addnumber2 () {
//     document.write(x + 100);
// }
// addnumber1();
// addnumber2();


// END GLOBAL VARIABLE





// LOCAL BECAUSE IS INSIDE OF THE FUNCTION



// function addnumber1 () {
//     var x = 10;
//     document.write(20 + x + "<br>");
// }

// function addnumber2 () {
//     document.write(x + 100);
// }
// addnumber1();
// addnumber2();


// END LOCAL VARIABLE



// ELSE AND IF 

// function Age_Function() {
//     Age = document.getElementById("Age").value;
//     if (Age >= 18) {
//         Vote = "You are Old enough to vote";
//     }
   
//     else {
//         Vote = "you are not Old enough to vote";
//     }
//     document.getElementById("how").innerHTML = Vote;
// }

// END ELSE AND IF 










// TIME FUNCTION 


function timeofday(){
    var time = new Date().getHours();
    var Reply;
    if (time < 12 == time > 0) {
        Reply = "it is morning time";
    }
    else if (time > 12 == time < 18) {
        Reply = "it is afternoon time";
    }
    else {
        Reply = "it is evening time";
    }
    document.getElementById("timeofday").innerHTML = Reply;
}



// END TIME FUNCTION 
