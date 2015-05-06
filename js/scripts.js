var $overlay = $('<div id="overlay"></div>');
var $image = $("<img id='img-rome'>");
var $imagenature = $("<img id='img-nature'>");



$("body").append($overlay);

$("#gallery-rome a").click(function(event){
  event.preventDefault();
  $overlay.append($image);

  var imageLocation = $(this).attr("href");
  $image.attr("src", imageLocation);
  
  $overlay.show();
});

// $("#gallery-nature a").click(function(event){
//   event.preventDefault();
//   $overlay.append($imagenature);

//   var imageLocation = $(this).attr("href");
//   $image.attr("src", imageLocation);
  
//   $overlay.show();
// });

$overlay.click(function(){
  $overlay.hide();

});



// var $overlayRome = $('<div id="overlay-rome"></div>');
// var $image = $("<img>");

// $overlayRome.append($image);

// $("body").append($overlayRome);

// $("#gallery-rome a").click(function(event){
//   event.preventDefault();
//   var imageLocation = $(this).attr("href");
//   $image.attr("src", imageLocation);
  
//   $overlayRome.show();
// });

// $overlayRome.click(function(){
//   $overlayRome.hide();

// });


// var $overlayNature = $('<div id="overlay-nature"></div>');
// var $image = $("<img>");

// $overlayNature.append($image);

// $("body").append($overlayNature);

// $("#gallery-nature a").click(function(event){
//   event.preventDefault();
//   var imageLocation = $(this).attr("href");
//   $image.attr("src", imageLocation);
  
//   $overlayNature.show();
// });

// $overlayNature.click(function(){
//   $overlayNature.hide();

// });