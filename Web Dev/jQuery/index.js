$("h1").text("jQuery Practice");
$(".btn2").text("Button 2");
$(".btn3").text("Button 3");
$(".btn4").text("Button 4");
$("#p1").text("This is jQuery Practice Session");

$("a").attr("href", "https://www.bing.com")
$(".secondlink").text("Bing");

$("a").addClass("margin");


$("h1").on("mouseover", function(){
    $("h1").css("color", "red");
});