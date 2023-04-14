//////////////Blur bubble/////////////////

const move = document.getElementById("move")
document.body.onpointermove = event => {
    const { pageX, pageY } = event;

move.animate ({
    left: `${pageX}px`,
    top: `${pageY}px`
}, {duration: 2000, fill: "forwards"})
};

////////////Swiper///////////////

new Swiper('.swiper', {
            spaceBetween: 12,
            speed: 400,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
            },
            freeMode: true,
        });
    

///////video/////////////

const videoBtn = $('.video-btn');
const videoBox = $('.video');

$(document).unbind("click").on("click", ".video-btn", toggleView);
$(document).on("click", ".video", togglePause);

function toggleView(e) {
    e.preventDefault();
    window.setTimeout(function(){
        videoBox.toggleClass("visible");
    }, 200);
}

function togglePause(e) {
    e.preventDefault();
    videoBox.toggleClass("visible");
    videoBox.click(function(){
        $('#myiframe').each(function(){
          const refresh = $(this).attr("src");
          $(this).attr("src", refresh);
        });
      });
}

