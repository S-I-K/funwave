$(()=>{
    console.log($);
    /* button effect */
    $button_effect = $('.button-effect');
    $button_effect.each(function(){
        $(this).attr('data-hover', $(this).text());
    });


    /* header scroll logo change event */
    $(window).scroll(()=>{
        console.log(window.scrollY);
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