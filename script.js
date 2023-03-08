function random(min, max) {
  return Math.random() * (max - min) + min;
}

$(document).click(function (event) {
  $("p").fadeOut(500);
  var randomcolor = Math.random() * 255 - event.pageX;
  color = "hsla(" + randomcolor + ", 90%, 60%, 1)";
  for (i = 1; i < 300; i++) {
    var xevent = event.pageX,
      yevent = event.pageY;
    var x = xevent + random(1, 500) - 250,
      y = yevent - random(1, 250) + 125,
      opacity = Math.random() + 0.4,
      size = random(5, 40);

    $(".container").append(
      '<div class="color" style="width:' +
        size +
        "px; height:" +
        size +
        "px; top:" +
        y +
        "px; left:" +
        x +
        "px; background:" +
        color +
        "; opacity:" +
        opacity +
        ';  "></div>'
    );
  }
});
