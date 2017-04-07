//Business Logic
function Pizza (size, crust, cheese, cost, toppings) {
  this.size = size;
  this.crust = crust;
  this.cheese = cheese;
  this.toppings = toppings;
  this.cost = cost;
}


var choiceArr = function(){
  $("input:checkbox[name=top]:checked").next
}





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
    var myPizza = new Pizza(size, crust, cheese, basicCost);
    console.log(myPizza);
  });
  $("#toppings").submit(function(event){
    event.preventDefault();
    var toppingCost = [];
    $("input:checkbox[name=top]:checked").each(function(){
      toppingCost.push(parseInt($(this).val()));
    });

    var toppingChoices =
    $("input:checkbox[name=top]:checked + label").map(function() {
      return $(this).text();
    }).get()

      console.log(toppingChoices);
      console.log(toppingCost);
  });
});
