Modernizr.load({
  test: Modernizr.cssanimations && Modernizr.svg && Modernizr.smil,
  yep: 'css/logoanimation.css',
  nope: 'css/logoanimation-polyfill.css',
  complete: function(){
    document.body.className = "";
  }
});

document.getElementsByClassName("menubtn")[0].addEventListener("click", function(){
  this.classList.toggle('active');
});
