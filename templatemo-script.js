const initBg = (autoplay = true) => {
    const bgImgsNames = ['diagoona-bg-1.jpg', 'diagoona-bg-2.jpg', 'diagoona-bg-3.jpg', 'diagoona-bg-4.jpg', 'diagoona-bg-5.jpg', 'diagoona-bg-6.jpg', 'diagoona-bg-7.jpg', 'diagoona-bg-8.jpg', 'diagoona-bg-9.jpg', 'diagoona-bg-10.jpg', 'diagoona-bg-11.jpg', 'diagoona-bg-12.jpg', 'diagoona-bg-13.jpg', 'diagoona-bg-14.jpg', 'diagoona-bg-15.jpg', 'diagoona-bg-16.jpg', 'diagoona-bg-17.jpg', 'diagoona-bg-18.jpg', 'diagoona-bg-19.jpg', 'diagoona-bg-20.jpg', 'diagoona-bg-21.jpg', 'diagoona-bg-22.jpg', 'diagoona-bg-23.jpg', 'diagoona-bg-24.jpg'];
    const bgImgs = bgImgsNames.map(img => img);

    $.backstretch(bgImgs, {duration: 4000, fade: 500});

    if(!autoplay) {
      $.backstretch('pause');  
    }    
}

const setBg = id => {
    $.backstretch('show', id);
}

const setBgOverlay = () => {
    const windowWidth = window.innerWidth;
    const bgHeight = $('body').height();
    const tmBgLeft = $('.tm-bg-left');

    $('.tm-bg').height(bgHeight);

    if(windowWidth > 768) {
        tmBgLeft.css('border-left', `0`)
                .css('border-top', `${bgHeight}px solid transparent`);                
    } else {
        tmBgLeft.css('border-left', `${windowWidth}px solid transparent`)
                .css('border-top', `0`);
    }
}

$(document).ready(function () {
    const autoplayBg = true;	// set Auto Play for Background Images
    initBg(autoplayBg);    
    setBgOverlay();

    const bgControl = $('.tm-bg-control');            
    bgControl.click(function() {
        bgControl.removeClass('active');
        $(this).addClass('active');
        const id = $(this).data('id');                
        setBg(id);
    });

    $(window).on("backstretch.after", function (e, instance, index) {        
        const bgControl = $('.tm-bg-control');
        bgControl.removeClass('active');
        const current = $(".tm-bg-controls-wrapper").find(`[data-id=${index}]`);        
        current.addClass('active');
    });

    $(window).resize(function() {
        setBgOverlay();
    });
});
