//Business Logic









//UI Logic
$(document).ready(function(){
  $("#sizeAndCrust").submit(function(event){
    event.preventDefault();
    var size = $("#sizeChoice option:selected").text();
    var sizeCost = parseInt($("#sizeChoice").val());
    var crust = $("#crustChoice option:selected").text();
    var crustCost = parseInt($("#crustChoice").val());
    alert(size + " " + crust + ", $" + (sizeCost + crustCost));
  });
});
