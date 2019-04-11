$(document).ready(function(){
    $('#slides').superslides({
        animation:'fade',
        play:5000,
        pagination:false
    });

    var typed = new Typed(".typed", {
        strings:["Software Engineer", "MS in Computer Science"],
        typeSpeed: 100,
        loop:true,
        startDelay:1000,
        showCursor:false
    });

    $('.owl-carousel').owlCarousel({
        loop:true,
        items:4,             
        responsive:{
            0:{
                items:1
            },
            480:{
                items:3
            },
            768:{
                items:5
            },
            938:{
                items:5
            }
        }
    })

   


    var skillsTopOffset = $(".skillSection").offset().top;

    $(window).scroll(function(){
        if(window.pageYOffset > skillsTopOffset - $(window).height() - 100 ){
            $('.chart').easyPieChart({
                easing:'easeInOut',
                barColor: '#fff', 
                trackColor:false,
                scaleColor:false,
                lineWidth:4,
                size:152,
                onStep:function(from,to,percent){
                    $(this.el).find('.percent').text(Math.round(percent));
                }
            });
        }
    });

    $(".counter").countup(200);

    $("[data-fancybox]").fancybox();

    $(".items").isotope({
        filter:'*',
        animationOptions:{
            duration:1500,
            easing:'linerar',
            queue:false
        }
    });

    $("#filters a").click(function(){
        $("#filters.current").removeClass("current");
        $(this).addClass("current");

        var selector = $(this).attr("data-filter");

        $(".items").isotope({
            filter: selector,
            animationOptions:{
                duration:1500,
                easing: 'linerar',
                queue: false
            }
        });

        return false;

    });

});

