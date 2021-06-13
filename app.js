var button = document.getElementById("slide");
button.onclick = function () {
  var container = document.getElementById("container");
  sideScroll(container, "right", 25, 100, 10);
};

var back = document.getElementById("slideBack");
back.onclick = function () {
  var container = document.getElementById("container");
  sideScroll(container, "left", 25, 100, 10);
};

function sideScroll(element, direction, speed, distance, step) {
  scrollAmount = 0;
  var slideTimer = setInterval(function () {
    if (direction == "left") {
      element.scrollLeft -= step;
    } else {
      element.scrollLeft += step;
    }
    scrollAmount += step;
    if (scrollAmount >= distance) {
      window.clearInterval(slideTimer);
    }
  }, speed);
}

/// MObile Navbar Js
var button2 = document.getElementById("slide2");
button2.onclick = function () {
  var container = document.getElementById("container2");
  sideScroll2(container, "right", 25, 100, 10);
};

var back2 = document.getElementById("slideBack2");
back2.onclick = function () {
  var container = document.getElementById("container2");
  sideScroll2(container, "left", 25, 100, 10);
};

function sideScroll2(element, direction, speed, distance, step) {
  scrollAmount = 0;
  var slideTimer = setInterval(function () {
    if (direction == "left") {
      element.scrollLeft -= step;
    } else {
      element.scrollLeft += step;
    }
    scrollAmount += step;
    if (scrollAmount >= distance) {
      window.clearInterval(slideTimer);
    }
  }, speed);
}

function myFunction() {
  const el = document.getElementById('Nav2')
  el.style.display='block'
  
}
