$(document).ready(function () {
    function menuscroll() {
        let navmenu = $('.nav-menu')
        let mn=$('.bars')
        if ($(window).scrollTop() > 50) {
            navmenu.addClass('is-scrolling');
mn.addClass('changecolor');
            document.getElementById("myImg").src = "assets/images/Lynx (3).png";

        } else

        {
            navmenu.removeClass('is-scrolling');
            mn.removeClass('changecolor');

            document.getElementById("myImg").src = "assets/images/Lynx (11).png";
        }

    }

    menuscroll();

    $(window).on('scroll', menuscroll);


    let sideNav = $('#navbar');
    sideNav.on('show.bs.collapse', function () {
        $(this).parents('.nav-menu').addClass('menu-is-open');
    })

    sideNav.on('hide.bs.collapse', function () {
        $(this).parents('.nav-menu').removeClass('menu-is-open');
    })
})




let items = document.querySelectorAll('.cd-tabs-navigation li a');
items.forEach((item) => {
    item.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector('.cd-tabs-navigation li a.selected').classList.remove('selected');
        this.classList.add('selected');




        let dataBox = this.getAttribute('data-content')

        document.querySelector('.cd-tabs-content li.selected').classList.remove('selected');
        document.querySelector(`.cd-tabs-content li[data-content="${dataBox}"]`).classList.add('selected')

    })
})



$(function () {
    $('.onclick').on("click", function () {
        $('.allimage').addClass("p1");
    });

    function RemoveClass() {
        $('.allimage').removeClass("p1");
    }
});







$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('#scroll').fadeIn();
        } else {
            $('#scroll').fadeOut();
        }
    });
    $('#scroll').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });
});











jQuery(document).ready(function($) {
$('.navbar-toggler').on('click', function() {
    if ($(".navbar-toggler").hasClass('collapsed')) {
      $(".navbar").removeClass('menucolor');
      $(".navbar").removeClass('menucolor');
      $(".bars").removeClass('iconbar');
      $(".login").removeClass('log1');
      document.getElementById("myImg").src = "assets/images/Lynx (11).png";

    } 
    else  {
        document.getElementById("myImg").src = "assets/images/Lynx (3).png";

      $(".navbar").addClass('menucolor');
      $(".bars").addClass('iconbar');
      $(".login").addClass('log1');

    }
    if($(".nav-menu").hasClass('is-scrolling')){
        document.getElementById("myImg").src = "assets/images/Lynx (3).png";
    
    };
   

  });
});

$('.nav-link').click(function() {
    $('.navbar-collapse').removeClass('show');
 });
 
 $('.toplink').click(function() {
    $(".navbar-toggler").addClass('collapsed')
    $(".navbar").removeClass('menucolor');
    $(".navbar").removeClass('menucolor');
    $(".bars").removeClass('iconbar');
    $(".login").removeClass('log1');
    document.getElementById("myImg").src = "assets/images/Lynx (11).png"; });
 

$(window).resize(function() {
    var newslider= $('.row4')
    if ($(window).width() < 521) {
     newslider.addClass('slider1');
    }
    else{
        newslider.removeClass('slider1')
    }
 });


 $(document).ready(function(){
    $('.slider1').slick({
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            dots: false,
            autoplay: true,
            autoplaySpeed: 2000,
            focusOnSelect: true,
            arrow:false,
            responsive: [

                {
                    breakpoint: 800,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 680,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 550,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });
  });