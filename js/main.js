$(document).ready(function(){
   
    
const burger = document.querySelector('.burger');
const navbar = document.querySelector('.mt-mobile');
const body = document.querySelector('body');

burger.addEventListener('click', () => {
    navbar.classList.toggle('nav-open');
    body.classList.toggle('body-open');
    burger.classList.toggle('burger-open');
    
});

const items = document.querySelectorAll(".item");

items.forEach((item) => {
    item.addEventListener("click", () => {
        item.classList.toggle("open");
    });
});


$('ul.tabs li').click(function(){
        var tab_id = $(this).attr('data-tab');

        $('ul.tabs li').removeClass('current');
        $('.tab-content').removeClass('current');

        $(this).addClass('current');
        $("#"+tab_id).addClass('current');
})



});





$(document).ready(function () {
  
    $('.sidebar-menu').mouseenter(function(){
      $(this).children('.expand').addClass('turn');
    });
  
    $('.sidebar-menu').mouseleave(function(){
      if ($(this).hasClass('open')) {
      } else {
        $(this).children('.expand').removeClass('turn');
      }
    });
    
    $('.sidebar-menu').click(function () {
      var $this = $(this);
      if ($this.hasClass('open')) {
        $('.sidebar-menu').removeClass('open');
        $('.sub-menu').stop(true).slideUp("fast");
        $('.expand').removeClass('turn');        
        $this.removeClass('open');
        $this.children('.expand').removeClass('turn');
        $this.next().stop(true).slideUp("fast");
      }    
      else {
        $('.sidebar-menu').removeClass('open');
        $('.sub-menu').stop(true).slideUp("fast");
        $('.expand').removeClass('turn');
        
        $this.addClass('open');
        $this.children('.expand').addClass('turn');
        $this.next().stop(true).slideDown("fast");
        }
    });
  
});



$(document).ready(function () {
  
    $('.sidebar-menu2').mouseenter(function(){
      $(this).children('.expand').addClass('turn');
    });
  
    $('.sidebar-menu2').mouseleave(function(){
      if ($(this).hasClass('open2')) {
      } else {
        $(this).children('.expand').removeClass('turn');
      }
    });
    
    $('.sidebar-menu2').click(function () {
      var $this = $(this);
      if ($this.hasClass('open2')) {
        $('.sidebar-menu2').removeClass('open2');
        $('.sub-menu').stop(true).slideUp("fast");
        $('.expand').removeClass('turn');        
        $this.removeClass('open2');
        $this.children('.expand').removeClass('turn');
        $this.next().stop(true).slideUp("fast");
      }    
      else {
        $('.sidebar-menu2').removeClass('open2');
        $('.sub-menu').stop(true).slideUp("fast");
        $('.expand').removeClass('turn');
        
        $this.addClass('open2');
        $this.children('.expand').addClass('turn');
        $this.next().stop(true).slideDown("fast");
        }
    });
  
});






