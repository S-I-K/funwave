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
        if($(window).width() >= 450) {
            if(window.scrollY >= 60 ) { /* PC */
                $('header .container .logo-category-wrap .logo-box a img').attr('src', './img/logo.png');
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
                $('header .container .logo-category-wrap .logo-box a img').attr('src', './img/logo-white.png');
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
        }else{ /* mobile */
            if(window.scrollY >= 130 ) {
                $('header .container .logo-category-wrap .logo-box a img').attr('src', './img/logo.png');
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
                $('header .container .logo-category-wrap .logo-box a img').attr('src', './img/logo-white.png');
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
        }
    });

    $('header .category-box').mouseenter(()=>{
        $('header .container .logo-category-wrap .logo-box a img').attr('src', './img/logo.png');

        $('.header-bg').css({
            'height': '264px',
        });

        if(window.scrollY == 0) {
            $('.header-bg').css({
                'height': '264px',
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
        $('header .container .logo-category-wrap .logo-box a img').attr('src', './img/logo-white.png');

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

    /* sub page category button */
    let page_nav_drop_btn = $('.category-btn-box');
    page_nav_drop_btn.click(function(e){
        if(!$(this).hasClass('active')){
            $(this).addClass('active');
            $(this).find($('.hamburger-icon-box')).addClass('active');
        }else{
            $(this).removeClass('active');
            $(this).find($('.hamburger-icon-box')).removeClass('active');
        }
    });
    $('.category-btn-box > a').click((e)=>{
        e.preventDefault();
    });

    /* header mobile menu click event */
    $menu_box = $('.menu-lang-box > .menu-box');
    $menu_box.click(function(e){
        e.preventDefault();
        if(!$(this).hasClass('active')){
            $(this).addClass('active');
            $('.mobile-menu-area').stop().slideDown();
        } else {
            $(this).removeClass('active');
            $('.mobile-menu-area').stop().slideUp();
        }
    });

    $('.menu-list-box').click(function(e) {
        // e.preventDefault();
        var $contentBox = $(this).find('.menu-content-box');
        // 이미 활성화된 카테고리를 다시 클릭한 경우 슬라이드 업
        if ($(this).hasClass('active')) {
            $contentBox.stop().slideUp();
            $(this).removeClass('active');
            
            // 모든 카테고리의 opacity를 100%로 복원
            $('.menu-list-box').css('opacity', '1');
        } else {
            // 다른 카테고리는 닫고, opacity를 40%로 설정
            $('.menu-list-box').removeClass('active').find('.menu-content-box').stop().slideUp();
            $('.menu-list-box').css('opacity', '0.4');
            
            // 클릭한 카테고리만 slideDown 및 opacity 100%로 설정
            $contentBox.stop().slideDown();
            $(this).addClass('active').css('opacity', '1');
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