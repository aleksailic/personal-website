$(document).ready(function(){
  new WOW().init();
  
  try{
      Modernizr.load({
        test: Modernizr.cssanimations && Modernizr.svg && Modernizr.smil,
        yep: 'css/logoanimation.css',
        nope: 'css/logoanimation-polyfill.css'
      });

  }catch(e){
      alert(e);
  }

  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
        || location.hostname == this.hostname) {

        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
           if (target.length) {
             $('html,body').animate({
                 scrollTop: target.offset().top
            }, 1000);
            return false;
        }
    }
  }); 
  $(".menubtn").click(function() {
    return $(this).toggleClass("active");
  });

  $('.path').each(function(){
    console.log(this.id+': '+this.getTotalLength());
  });

});