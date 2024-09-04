$(()=>{
    console.log($);
    /* button effect */
    $button_effect = $('.button-effect');
    $button_effect.each(function(){
        $(this).attr('data-hover', $(this).text());
    });


    /* header scroll logo change event */
    $(window).scroll(()=>{
        // console.log(window.scrollY);
        if($(window).width() > 450) {
            /* PC */
            if(window.scrollY >= 60 ) {
                $('header .container .logo-category-wrap .category-box ul li a span').css({
                    color: '#2a2a2a',
                });
                $('header .container .menu-lang-box .lang-box a span').css({
                    color: '#2a2a2a',
                });
                $('header .container .menu-lang-box .lang-box a .icon-box svg path').css({
                    fill: '#2a2a2a',
                });
                $('header .container .menu-lang-box .menu-box a span').css({
                    background: '#2a2a2a',
                });
                $('.header-bg').css({
                    background: '#fff',
                });
            }else {
                $('header .container .logo-category-wrap .category-box ul li a span').css({
                    color: '#fff',
                });
                $('header .container .menu-lang-box .lang-box a span').css({
                    color: '#fff',
                });
                $('header .container .menu-lang-box .lang-box a .icon-box svg path').css({
                    fill: '#fff',
                });
                $('header .container .menu-lang-box .menu-box a span').css({
                    background: '#fff',
                });
                $('.header-bg').css({
                    background: 'transparent',
                });
            }
        }else{
        }
    });

    $('header .category-box').mouseenter(()=>{
        $('.header-bg').css({
            'height': '520px',
        });

        if(window.scrollY == 0) {
            $('.header-bg').css({
                'height': '520px',
            });
            $('header .container .logo-category-wrap .category-box ul li a span').css({
                color: '#2a2a2a',
            });
            $('header .container .menu-lang-box .lang-box a span').css({
                color: '#2a2a2a',
            });
            $('header .container .menu-lang-box .lang-box a .icon-box svg path').css({
                fill: '#2a2a2a',
            });
            $('header .container .menu-lang-box .menu-box a span').css({
                background: '#2a2a2a',
            });
            $('.header-bg').css({
                background: '#fff',
            });
        }else{

        }
    })
    .mouseleave(()=>{
        $('.header-bg').css({
            'height': '88px',
        });

        if(window.scrollY == 0) {
            $('header .container .logo-category-wrap .category-box ul li a span').css({
                color: '#fff',
            });
            $('header .container .menu-lang-box .lang-box a span').css({
                color: '#fff',
            });
            $('header .container .menu-lang-box .lang-box a .icon-box svg path').css({
                fill: '#fff',
            });
            $('header .container .menu-lang-box .menu-box a span').css({
                background: '#fff',
            });
            $('.header-bg').css({
                background: 'transparent',
            });
        }else{

        }
    });

    /* gsap effect */
    gsap.registerPlugin(ScrollTrigger);
    $fade_up = gsap.utils.toArray('.gsap-fade-up');
    $fade_up.forEach(el => {
        gsap.to(el, {
            'transform': 'translateY(0px)',
            'opacity': 1,
            'duration': 2,
            'ease': 'ease',
            scrollTrigger: {
                markers: false,
                trigger: el,
                start: '-20% 100%',
                end: 'top 70%',
                scrub: 2,
                // toggleClass: 'active',
            }
        })
    });

    gsap.fromTo('.gsap-fade-up-01', {
        y: 20,
        opacity: 0,
    },{
        y: 0,
        opacity: 1,
        duration: .4,
        delay: .8,
    });

    gsap.fromTo('.gsap-fade-up-02', {
        y: 20,
        opacity: 0,
    },{
        y: 0,
        opacity: 1,
        duration: .4,
        delay: 1,
    });

    gsap.fromTo('.gsap-fade-up-03', {
        y: 20,
        opacity: 0,
    },{
        y: 0,
        opacity: 1,
        duration: .4,
        delay: 1.2,
    });

    gsap.fromTo('.gsap-opacity-01', {
        opacity: 0,
    },{
        opacity: 1,
        duration: 1,
        delay: 1.2,
    });
});

const lenis = new Lenis();
lenis.on('scroll', (e) => {
    // console.log(e);
})
function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf);
}
requestAnimationFrame(raf);