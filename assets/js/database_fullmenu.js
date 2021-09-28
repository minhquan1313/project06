function getDataFullMenu() {
    let items = [];

    items.push(new Slider({ src: "/project06/assets/img/menu/page1.jpg" }));
    items.push(new Slider({ src: "/project06/assets/img/menu/page2.jpg" }));
    items.push(new Slider({ src: "/project06/assets/img/menu/page3.jpg" }));
    items.push(new Slider({ src: "/project06/assets/img/menu/page4.jpg" }));
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
    const frame = document.querySelector(".frame");
    // console.log(items.map((r) => `<img src="${r.src}" alt="" />`));
    frame.innerHTML = items.map((r) => `<img src="${r.src}" alt="" />`).join("");
    // items.forEach((r) => {
    //     let img = document.createElement("img");
    //     img.src = r.src;

    //     frame.appendChild(img);
    // });

    function Slider({ src }) {
        this.src = src;
    }
}
getDataFullMenu();
