function __loaderRemove() {
    const modal = document.querySelector(".modal");

    const loader = document.querySelector(".loader3ThreeDots");
    const dots = loader.querySelectorAll(".loader3ThreeDots__dots-dot");
    const dotMasks = loader.querySelectorAll(".loader3-maskAfterLoad");

    const posOfApp = [document.querySelector(".main header"), document.querySelector(".app .app-side--cover svg"), document.querySelector(".app .app-side--info .info__wrapper")];

    let bound, borderR;

    const animeDura = 800,
        animeDelay = 140;

    const delayTimeout = 700;

    let svg;

    // console.log("posOfApp", posOfApp);

    setTimeout(() => {
        loader.classList.add("pause");

        // console.log("dotsBox", dots);
        // console.log("dotMasks", dotMasks);

        // console.log(window.getComputedStyle(loader).backgroundColor);

        [...dots].forEach((r, i) => {
            const mask = dotMasks[i];
            const pos = posOfApp[i];
            const delay = animeDelay * i;

            bound = r.getBoundingClientRect();

            borderR = window.getComputedStyle(pos).borderRadius;

            // console.log("bound", bound);

            mask.style.top = `${(bound.top / window.innerHeight) * 100}%`;
            mask.style.left = `${(bound.left / window.innerWidth) * 100}%`;
            mask.style.width = `${(bound.width / window.innerWidth) * 100}%`;
            mask.style.height = `${(bound.height / window.innerHeight) * 100}%`;

            r.style.opacity = "0";

            // window.addEventListener("mousemove", (e) => {
            // console.log(e.x, e.y);
            // });

            // console.log("mask", mask);
            bound = pos.getBoundingClientRect();

            // if (!mask.querySelector("svg")) {
            // let tl = anime.timeline({
            // });

            svg = mask.querySelector("svg path");

            let bg = "rgba(255, 255, 255, 1)";
            mask.style.backgroundColor = bg;

            // let _easing = i != 2 ? "easeOutSine" : "easeOutElastic";
            let _easing = "easeOutSine";

            if (svg) {
                bg = "rgba(255, 255, 255, 0)";
                mask.style.transformOrigin = "left";
                mask.style.backgroundColor = bg;

                // FINAL
                // M0 0.999999C0 0.447714 0.447715 0 1 0H267.161C267.61 0 267.984 0.224457 268.101 0.658402C270.674 10.1681 299.561 119.5 267.922 119.5C183 119.5 64.5 196.5 64.5 332C64.5 467.5 183 545.5 267.922 545.5C299.557 545.5 270.681 653.888 268.102 663.343C267.984 663.776 267.611 664 267.162 664H1C0.447717 664 0 663.552 0 663V545.5V332V119.5V0.999999Z

                // STARTING
                // M0 320C0 143.269 143.269 0 320 0H344C520.731 0 664 143.445 664 320.176C664 324.698 664 326.066 664 323.5C664 298.5 664 196.5 664 332C664 467.5 664 317 664 342.5V342.5C664 519.231 520.731 664 344 664H320C143.269 664 0 519.231 0 342.5V342.5V332V323.5V320Z

                let tl = anime.timeline({
                    delay: delay,
                    easing: "easeOutCubic",
                    // easing: "easeInQuint",
                });
                tl.add(
                    {
                        targets: svg,

                        d: [
                            "M128 64C128 76.2818 124.54 87.7556 118.543 97.5C116.096 101.474 113.228 105.161 110 108.497C98.857 120.014 82.0553 128 64 128C28.6538 128 0 99.3462 0 64C0 28.6538 28.6538 0 64 0C82.0553 0 98.3644 7.47663 110 19.5027C113.228 22.8392 116.096 26.5257 118.543 30.5C124.54 40.2444 128 51.7182 128 64Z",
                            "M128 64C128 76.2818 124.54 87.7556 118.543 97.5C116.096 101.474 113.228 105.161 110 108.497C98.857 120.014 82.0553 128 64 128C28.6538 128 0 99.3462 0 64C0 28.6538 28.6538 0 64 0C82.0553 0 98.3644 7.47663 110 19.5027C113.228 22.8392 116.096 26.5257 118.543 30.5C124.54 40.2444 128 51.7182 128 64Z",
                        ],

                        fill: {
                            value: ["#fff", "#fff"],
                            // value: ["#fff", "#39bd7f"],
                            //  duration: animeDura / 2
                        },

                        // duration: animeDura / 2,
                        duration: (animeDura * 1) / 3,
                    },
                    0
                )
                    .add(
                        {
                            targets: mask,

                            top: `${(bound.top / window.innerHeight) * 100}%`,
                            left: `${(bound.left / window.innerWidth) * 100}%`,
                            width: `${(bound.width / window.innerWidth) * 100}%`,
                            height: `${(bound.height / window.innerHeight) * 100}%`,

                            rotate: "1turn",

                            // borderRadius: borderR,

                            // backgroundColor: { value: bg, duration: animeDura / 2 },

                            duration: animeDura,
                        },
                        0
                    )
                    .add(
                        {
                            targets: svg,

                            d: "M12.5 64C12.5 88.5 34 105 53 105C58.5 105 55.5 120.5 53 128C41.857 139.517 18.0553 128 0 128C-35.3462 128 0 99.3462 0 64C0 28.6538 -35.3462 5.24521e-06 0 5.24521e-06C18.0553 5.24521e-06 41.3644 -12.0261 53 1.19209e-05C55.5 9 58.5 23 53 23C34 23 12.5 39.5 12.5 64Z",

                            easing: "easeOutElastic",
                            elasticity: 1000,

                            duration: animeDura,
                            // duration: (animeDura * 2) / 3,
                        },
                        // "+=1"
                        (animeDura * 2) / 3
                    );
            } else
                anime({
                    targets: mask,
                    delay: delay,

                    top: `${(bound.top / window.innerHeight) * 100}%`,
                    left: `${(bound.left / window.innerWidth) * 100}%`,
                    width: `${(bound.width / window.innerWidth) * 100}%`,
                    height: `${(bound.height / window.innerHeight) * 100}%`,

                    borderRadius: borderR,

                    backgroundColor: [bg, bg],

                    // easing: "easeInOutCubic",
                    // easing: "easeInQuint",
                    easing: _easing,

                    duration: animeDura,
                });
        });

        // anime({
        //     targets: loader,
        //     // backgroundColor: [window.getComputedStyle(loader).backgroundColor, "#fff"],
        //     easing: "easeOutQuad",
        //     duration: animeDura + animeDelay * --[...dots].length,
        // });

        setTimeout(() => {
            modal.style.pointerEvents = "none";

            anime({
                targets: loader,

                opacity: [1, 0],
                easing: "easeOutSine",
                duration: animeDura / 3,
            });

            // console.log("svg", svg);

            setTimeout(() => {
                loader.remove();

                modal.style.pointerEvents = "";

                document.body.classList.remove("modal--active");
            }, animeDura / 3);
        }, animeDura + animeDelay * --[...dots].length);
    }, delayTimeout);
}

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
document.addEventListener("readystatechange", () => {
    if (document.readyState === "complete") {
        __loaderRemove();
    }
});
