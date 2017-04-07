//Business Logic
function Pizza (size, crust, cheese, toppings, costs) {
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

var update = function(){
  $(".size").text(myPizza.size);
  $(".crust").text(myPizza.crust);
  $(".cheese").text(myPizza.cheese);
}

var getCost = function(){
  toppingCost = toppingCost.reduce(getTotal);
}

Pizza.prototype.finalOrder = function(){
  myPizza.toppings = toppingChoices;
  myPizza.costs = (myPizza.costs + toppingCost);

  myPizza.toppings.forEach(function (topping) {
    $("#topList").append("<li>" + topping + "</li>");
  });
  $(".total").text("$" + myPizza.costs + ".97" )
}


//UI Logic
$(document).ready(function(){
  $("#sizeAndCrust").submit(function(event){
    event.preventDefault();

     myPizza.size = $("#sizeChoice option:selected").text();
     myPizza.crust = $("#crustChoice option:selected").text();
     myPizza.cheese = $("#cheeseChoice option:selected").text();
     var sizeCost = parseInt($("#sizeChoice").val());
     var crustCost = parseInt($("#crustChoice").val());
     var cheeseCost = parseInt($("#cheeseChoice").val());
     var basicCost = sizeCost + crustCost + cheeseCost;
     myPizza.costs = (basicCost);
     update(myPizza);

     $("#sizeCrust").hide();
     $("#dough").hide();
     $("#toppings").show();
     $("#topPic").show();
  });

  $("#toppings").submit(function(event){
    event.preventDefault();
    $("#toppings").hide();
    $("#topPic").hide();

    toppingCost = [0];
    $("input:checkbox[name=top]:checked").each(function(){
      toppingCost.push(parseInt($(this).val()));
    });
    toppingChoices =
    $("input:checkbox[name=top]:checked + label").map(function() {
      return $(this).text();
    }).get()

    getCost(toppingCost);
    myPizza.finalOrder();

    $(".final").show();
  });
  $(".deliver").click(function(event){
    event.preventDefault();
    $(".wait").show();
  });
  $(".really").click(function(event){
    event.preventDefault();
    $(".wow").show();
  });

});
