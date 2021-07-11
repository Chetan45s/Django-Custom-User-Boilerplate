// Get the navbar
var navbar = document.getElementById("mynavbar1");
var dropdown = document.getElementsByClassName("dropdown")

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

function navClick () {
  $('.link').click(function (e) {
    var $this = $(this);
    console.log($this);
    if ($this.find('.dropdown').hasClass('show')) {
      $this.find('.dropdown').removeClass('show');
    } else {
      $this.parent().find('li .dropdown').removeClass('show');
      $this.find('.dropdown').toggleClass('show');
    }
  });
 
}
$("#check[type=checkbox]").on("click", function () {
  navbar.classList.toggle("sticky")

});


$(document).ready(function () {
  $('.panel-default').each(function (i, e) {
    $('.question-link', this).attr('href', '#' + i);
    $('.question-link', this).attr('aria-controls', i);
    $('.panel-collapse', this).attr('id', i)

  })
});

function qwertyu() {
  var conceptName = document.getElementById('category');
  console.log(conceptName.value);
  if (conceptName.value === "Synopsis") {
    $("#n").style.display = "none";
    console.log("syn");
  } else {
    $("#s").style.display = "none";
    console.log("nsyn");

  }
}

$(document).ready(function() {
  if (window.matchMedia('(min-width: 950px)').matches) {
    window.onscroll = function () {
      myFunction()
    };
  }
  if (window.matchMedia('(max-width: 950px)').matches) {
    navClick();
  }
});
$(window).on("resize", function() {
  if (window.matchMedia('(min-width: 950px)').matches) {
    window.onscroll = function () {
      myFunction()
    };
  }
  if (window.matchMedia('(max-width: 950px)').matches) {
    navClick();
  }
});