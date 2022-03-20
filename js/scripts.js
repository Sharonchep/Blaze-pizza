$(document).ready(function() {
  $(".click").click(function() {
    $(".clicked").show();
    $(".click").hide();
    $("#clickable").click(function() {
    $(".click").show();
    $(".clicked").hide();
  });
});
$(".good").click(function() {
  $(".best").show();
  $(".good").hide();
  $("#better").click(function() {
  $(".good").show();
  $(".best").hide();
});
});
$(".bad").click(function() {
  $(".worst").show();
  $(".bad").hide();
  $("#worse").click(function() {
  $(".bad").show();
  $(".worst").hide();
});
});
$("#first").hover(function(){
  $(".text-block1").toggle();
  });
$("#second").hover(function(){
  $(".text-block2").toggle();
  });
$("#third").hover(function(){
  $(".text-block3").toggle();
  });
$("#forth").hover(function(){
  $(".text-block4").toggle();
  });
$("#fifth").hover(function(){
  $(".text-block5").toggle();
  });
$("#sixth").hover(function(){
  $(".text-block6").toggle();
  });
$("#seventh").hover(function(){
  $(".text-block7").toggle();
  });
$("#eighth").hover(function(){
  $(".text-block8").toggle();
  }); 

$('#lost').submit(function(e){
  e.preventDefault();
});
$('button').click(function(e){
 $("#lost")[0].reset();
});
});
