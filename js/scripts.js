//Business Logic
function Pizza (size, crust, cheese, costs, toppings) {
  this.size = size;
  this.crust = crust;
  this.cheese = cheese;
  this.toppings = toppings;
  this.costs = costs;
}
var myPizza = new Pizza();

 function getTotal(total, num){
   return total + num;
  }
// function finalOrder(){
//   myPizza.toppings.forEach(topping){
//     $("#topList").append("<li>" + this.topping + "</li>");
//   }
// }

//UI Logic
$(document).ready(function(){
  $("#sizeAndCrust").submit(function(event){
    event.preventDefault();

     var size = $("#sizeChoice option:selected").text();
     var sizeCost = parseInt($("#sizeChoice").val());
     var crust = $("#crustChoice option:selected").text();
     var crustCost = parseInt($("#crustChoice").val());
     var cheese = $("#cheeseChoice option:selected").text();
     var cheeseCost = parseInt($("#cheeseChoice").val());
     var basicCost = sizeCost + crustCost + cheeseCost;
     myPizza = new Pizza (size, crust, cheese);
     myPizza.costs = (sizeCost + crustCost + cheeseCost);
     $("#sizeCrust").hide();
     $("#dough").hide();
     $("#toppings").show();
     $("#topPic").show();
     $(".size").text(myPizza.size);
     $(".crust").text(myPizza.crust);
     $(".cheese").text(myPizza.cheese);
     console.log(myPizza);
  });

  $("#toppings").submit(function(event){
    event.preventDefault();
    $("#toppings").hide();
    $("#topPic").hide();
     var toppingCost = [];
    $("input:checkbox[name=top]:checked").each(function(){
      toppingCost.push(parseInt($(this).val()));
    });
    console.log(toppingCost);
    var toppingChoices =
    $("input:checkbox[name=top]:checked + label").map(function() {
      return $(this).text();
    }).get()
    toppingCost = toppingCost.reduce(getTotal);
    myPizza.toppings = toppingChoices;
    myPizza.costs = (myPizza.costs + toppingCost);
    $(".final").show();
    myPizza.toppings.forEach(function (topping) {
      $("#topList").append("<li>" + topping + "</li>");
    });
    $(".total").text("$" + myPizza.costs + ".97" )
    console.log(myPizza.costs);

  });


});
