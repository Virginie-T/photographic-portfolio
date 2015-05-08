var $overlay = $('<div id="overlay"></div>');
var $imagerome = $("<img id='img-rome'>");
var $imagenature = $("<img id='img-nature'>");
var $imagebeach = $("<img id='img-beach'>");


$("body").append($overlay);



$("#gallery-rome a").click(function(event){
  event.preventDefault();
  $overlay.append($imagerome);

  var imageLocation = $(this).attr("href");
  $imagerome.attr("src", imageLocation);
  $imagerome.show();
  $overlay.show();
});

$overlay.click(function(){
  $imagerome.hide();
  $overlay.hide();
});




$("#gallery-nature a").click(function(event){
  event.preventDefault();
  $overlay.append($imagenature);

  var imageLocation = $(this).attr("href");
  $imagenature.attr("src", imageLocation);
  $imagenature.show();
  $overlay.show();
});

$overlay.click(function(){
  $imagenature.hide();
  $overlay.hide();
});




$("#gallery-beach1 a, #gallery-beach2 a").click(function(event){
  event.preventDefault();
  $overlay.append($imagebeach);

  var imageLocation = $(this).attr("href");
  $imagebeach.attr("src", imageLocation);
  $imagebeach.show();
  $overlay.show();
});

$overlay.click(function(){
  $imagebeach.hide();
  $overlay.hide();
});
