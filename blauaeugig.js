
// Get the scroll up and down buttons
var buttonUp = document.getElementById("button-up");
var buttonDown = document.getElementById("button-down");

// Hide the buttons initially
buttonUp.style.opacity = "0";
buttonDown.style.opacity = "0";

// Show/hide the buttons based on the scroll position
window.onscroll = function() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    buttonUp.style.display = "none";
  } else {
    buttonUp.style.display = "block";
  }
  
  if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight) {
    buttonDown.style.display = "none";
  } else {
    buttonDown.style.display = "block";
  }
  
  // Fade in the buttons gradually
  if (window.pageYOffset > 0) {
    buttonUp.style.opacity = "0.40";
    buttonDown.style.opacity = "0.40";
  }
};

// Scroll up when the user clicks the scroll up button
buttonUp.onclick = function() {
  window.scrollBy({top: -window.innerHeight, behavior: 'smooth'});
};

// Scroll down when the user clicks the scroll down button
buttonDown.onclick = function() {
  window.scrollBy({top: window.innerHeight, behavior: 'smooth'});
};

var isTouch = window.DocumentTouch && document instanceof DocumentTouch;


// Increase the opacity of the button when the user hovers over it
buttonUp.addEventListener("mouseover", function() {
  buttonUp.style.opacity = "1";
});

buttonDown.addEventListener("mouseover", function() {
  buttonDown.style.opacity = "1";
});

// Reset the opacity of the button when the user stops hovering over it
buttonUp.addEventListener("mouseout", function() {
  buttonUp.style.opacity = "0.4";
});

buttonDown.addEventListener("mouseout", function() {
  buttonDown.style.opacity = "0.4";
});


//Trigger anmiation on viewpoint


$(document).ready(function() {
  var $animationElements = $('.animation-viewpoint');
  var $window = $(window);

  function checkIfInView() {
    var windowHeight = $window.height();
    var windowTopPosition = $window.scrollTop();
    var windowBottomPosition = (windowTopPosition + windowHeight);

    $.each($animationElements, function () {
      var $element = $(this);
      var elementHeight = $element.outerHeight();
      var elementTopPosition = $element.offset().top;
      var elementBottomPosition = (elementTopPosition + elementHeight);

      // check if this current container is within the viewport
      if ((elementBottomPosition >= windowTopPosition) &&
          (elementTopPosition <= windowBottomPosition) &&
          $element.hasClass('animation-viewpoint')) {
        $element.addClass('in-view')
        .one('animationend', function() {
          $(this).removeClass('animation-viewpoint');
        });
      } else {
        $element.removeClass('in-view');
      }
    });
  }

  $window.on('scroll resize', checkIfInView);
  $window.trigger('scroll');
});
