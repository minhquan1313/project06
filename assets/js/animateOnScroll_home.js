function _myDefaultWp(ele, callback) {
    let inter = setInterval(() => {
        if (canRunAnimate) {
            clearInterval(inter);

            let wp = new Waypoint({
                element: ele,
                handler: function (d) {
                    if (d == "down") {
                        wp.destroy();

                        callback();
                    }
                },
                // offset: window.innerHeight - ele.offsetHeight,
                offset: `${((window.innerHeight * 2) / 3 / window.innerHeight) * 100}%`,
            });
        }
    }, 100);
}
function setStuff() {
    function transformLeftScreen(elementNode) {
        anime({
            targets: elementNode,
            translateX: 0,
            duration: 0,
        });
        const bound = elementNode.getBoundingClientRect();
        anime({
            targets: elementNode,
            translateX: -bound.right,
            duration: 0,
        });
        return -bound.right;
    }
    function rmStyle(ele) {
        // setTimeout(() => {
        ele.removeAttribute("style");
        // }, delay);
    }
    window.addEventListener("resize", (e) => {
        Waypoint.refreshAll();
        // console.log("refresh", new Date());
    });
    // _+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+
    const headerIcons = document.querySelectorAll(".header__nav_item");
    const sect1 = document.querySelector(".content");
    const sect2 = document.querySelector(".content--alt");
    const circleShape = [document.querySelector(".blurCircle--1"), document.querySelector(".blurCircle--2")];

    let title = [],
        des = [],
        cover = [],
        btn = [],
        arrSect = [];
    // --------------------------------------------------------------------------------------------
    [...headerIcons].forEach((r) => {
        transformLeftScreen(r);
        r.style.transformOrigin = "right";
    });
    _myDefaultWp(headerIcons[0], () => {
        anime({
            targets: headerIcons,
            opacity: [0, 1],
            translateX: 0,
            scaleX: { value: [0, 1], duration: 1600 },

            delay: anime.stagger(80),
            duration: 1000,

            complete: () => {
                [...headerIcons].forEach((r) => {
                    rmStyle(r);
                });
            },
        });
    });
    // --------------------------------------------------------------------------------------------
    title.push(sect1.querySelector(".content__title"));
    des.push(sect1.querySelector(".content__des"));
    cover.push(sect1.querySelector(".content_wrapper"));
    btn.push(sect1.querySelector(".content__btn"));
    arrSect.push(...title, ...des, ...cover, ...btn);
    title.push(sect2.querySelector(".content__title"));
    des.push(sect2.querySelector(".content__des"));
    cover.push(sect2.querySelector(".content_wrapper"));
    btn.push(sect2.querySelector(".content__btn"));
    arrSect = [...arrSect, ...title, ...des, ...cover, ...btn, ...circleShape];
    arrSect.forEach((r) => {
        r.style.opacity = "0";
        r.style.transition = "0s";
    });

    if (window.innerWidth >= 1280) {
        // cover.forEach((r) => {
        //     r.style.transformOrigin = "left";
        // });
        cover[0].style.transformOrigin = "left";
        cover[1].style.transformOrigin = "right";
        // cover[0].style.transformOrigin = "right";
    }
    cover.forEach((r, i) => {
        _myDefaultWp(r, () => {
            // let ele = r;
            anime({
                targets: r,
                opacity: [0, 1],
                scale: [0, 1],
                scaleX: { value: [0, 1], duration: 1500 },

                easing: "easeOutQuart",
                duration: 800,

                begin: () => {
                    r.querySelector("svg").classList.add("animate");
                },

                complete: () => {
                    rmStyle(r);
                    // r.querySelector("svg").classList.add("animate");
                },
            });

            anime({
                targets: circleShape[i],
                opacity: [0, 1],

                scale: [0, 1],

                easing: "easeOutQuart",
                duration: 1400,
            });
        });
    });

    title.forEach((r, i) => {
        _myDefaultWp(r, () => {
            // let ele = r;
            let negative = !i ? -1 : 1;
            anime({
                targets: r,

                opacity: { value: [0, 1], easing: "easeOutBack" },
                skewX: { value: [negative * 180, 0], duration: 1400 },

                translateX: [`${-negative}00%`, 0],

                duration: 1200,

                complete: () => {
                    rmStyle(r);
                },
            });
        });
    });

    des.forEach((r) => {
        _myDefaultWp(r, () => {
            r.style.transformOrigin = "top";
            // let ele = r;
            anime({
                targets: r,
                opacity: [0, 1],
                // skewX: { value: [negative * 180, 0], duration: 1400 },

                scaleY: [0, 1],
                // translateX: [`${-negative}00%`, 0],
                translateY: ["-100%", 0],

                // delay: 400,

                easing: "easeOutBack",
                duration: 700,

                complete: () => {
                    rmStyle(r);
                },
            });
        });
    });

    console.log(title);
}
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
var canRunAnimate = false;
//     b;
// setTimeout(() => {
//     b = 3;
// }, 0);

document.addEventListener("readystatechange", () => {
    if (document.readyState === "complete") {
        setStuff();
        let inter = setInterval(() => {
            if (
                loader_loaded
                //  || typeof b != "undefined"
            ) {
                clearInterval(inter);
                canRunAnimate = true;
            }
        }, 50);
    }
});
