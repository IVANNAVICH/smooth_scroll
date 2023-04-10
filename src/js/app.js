const move = document.getElementById("move")
document.body.onpointermove = event => {
    const { pageX, pageY } = event;


move.animate ({
    left: `${pageX}px`,
    top: `${pageY}px`
}, {duration: 2000, fill: "forwards"})
};


new Swiper('.swiper', {
            spaceBetween: 12,
            speed: 400,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
            },
            freeMode: true,
        });
    



