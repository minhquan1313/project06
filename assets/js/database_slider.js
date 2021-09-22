function getDataSlider() {
    let items = [];

    items.push(new Slider({ src: "/assets/img/slider/IMG_2795.jpg" }));
    items.push(new Slider({ src: "/assets/img/slider/page1.jpg" }));
    items.push(new Slider({ src: "/assets/img/slider/page2.jpg" }));
    items.push(new Slider({ src: "/assets/img/slider/page3.jpg" }));
    items.push(new Slider({ src: "/assets/img/slider/page4.jpg" }));
    /**
     *    Notice above only, don't mind the codes below
     *    Slider use to display img only, so src is the source of the img, you can do http|https
     *
     */
    // -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
    return items;
    function Slider({ src }) {
        this.src = src;
    }
}
const _slider_items = getDataSlider();

var ____ijijijij = document.querySelector('script[src$="database_slider.js"]');
if (____ijijijij) {
    ____ijijijij.remove();
}
