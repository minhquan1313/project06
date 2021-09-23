function getDataSlider() {
    let items = [];

    items.push(new Slider({ src: "/project06/assets/img/slider/IMG_2795.jpg" }));
    items.push(new Slider({ src: "/project06/assets/img/slider/page1.jpg" }));
    items.push(new Slider({ src: "/project06/assets/img/slider/page2.jpg" }));
    items.push(new Slider({ src: "/project06/assets/img/slider/page3.jpg" }));
    items.push(new Slider({ src: "/project06/assets/img/slider/page4.jpg" }));
    /**
     *    Notice above only, don't mind the codes below
     *    Slider use to display img only, so src is the source of the img, you can do http|https
     *
     */
    // -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
    let u = document.querySelector('script[src$="database_slider.js"]');
    if (u) {
        u.remove();
    }
    return items;
    function Slider({ src }) {
        this.src = src;

        let fakeImg = new Image();
        fakeImg.src = src;
    }
}
const _slider_items = getDataSlider();
