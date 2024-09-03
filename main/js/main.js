$(()=>{
    /* swiper */
    var swiper = new Swiper(".tab-slider", {
        slidesPerView: 'auto',
        spaceBetween: 24,
        loop: true,
        speed: 1200,
        autoplay:{
            delay: 4000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

    let $tab_text = $('.tab-text-box'),
        $tab_content = $('.slide-content-box');

    $tab_text.click(function(e){
        e.preventDefault();
        let index = $tab_text.index(this);
        console.log(index);

        /* 탭메뉴 텍스트 클래스 */
        $tab_text.removeClass('active');
        $(this).addClass('active');

        /* 탭메뉴 컨텐츠 클래스 */
        $tab_content.removeClass('active');
        $tab_content.eq(index).addClass('active');
    });
});