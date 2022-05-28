function myPizzaFun() {
       var Pizza = {
              type:"Neapoletan",
              Topping:"Cheese and tomato",
              Origin:"Italy",
              Age:1889,
              Sound:"Gnam Gnam!"
              
       };
       delete Pizza.Origin;
       document.getElementById("Pizza1").innerHTML= Pizza.Sound;
}