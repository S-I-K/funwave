$(()=>{
    let page_nav_drop_btn = $('.category-btn-box');
    page_nav_drop_btn.click(function(e){
        if(!$(this).hasClass('active')){
            $(this).addClass('active');
        }else{
            $(this).removeClass('active');
        }
    });
    $('.category-btn-box > a').click((e)=>{
        e.preventDefault();
    });
});