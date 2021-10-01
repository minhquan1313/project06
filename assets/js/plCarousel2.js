function generateSliders() {
    const wrapper = document.querySelector(".slider__items");
    const dots = document.querySelector(".slider .dots");
    wrapper.innerHTML = "";
    dots.innerHTML = "";

    // console.log(_slider_items[0]);

    let dot = document.createElement("div");
    dot.classList.add("dot");
    // dot.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 42"><path d="M72.12 3.089l51.635 16.943c1.047.343 1.694.694 2.046.969-.352.274-.999.625-2.046.969L72.12 38.911C69.968 39.617 67.029 40 64 40s-5.968-.383-8.12-1.089L4.245 21.969c-1.047-.343-1.694-.694-2.046-.969.353-.274 1-.625 2.046-.969L55.88 3.089C58.032 2.383 60.971 2 64 2s5.968.383 8.12 1.089zm53.931 18.153zm-.007-.471zM1.949 20.759zm.007.471z"/></svg>`;
    //     dot.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 42">
    //   <path
    //     d="M72.12 3.089l51.635 16.943c1.047.343 1.694.694 2.046.969-.352.274-.999.625-2.046.969L72.12 38.911C69.968 39.617 67.029 40 64 40s-5.968-.383-8.12-1.089L4.245 21.969c-1.047-.343-1.694-.694-2.046-.969.353-.274 1-.625 2.046-.969L55.88 3.089C58.032 2.383 60.971 2 64 2s5.968.383 8.12 1.089zm53.931 18.153zm-.007-.471zM1.949 20.759zm.007.471z"
    //   />
    // </svg>`;
    const order = ["slider__item--left", "slider__item--center", "slider__item--right"];

    // for (let i = 0; i < _slider_items.length; i++) {
    _slider_items.forEach((r, i) => {
        let ele = document.createElement("li");
        ele.classList.add("slider__item", "slider__item--loading");
        // ele.classList.add();

        // if (i < 3) {
        //     ele.classList.add(order[i]);
        // }

        // ele.innerHTML = `<img src="" draggable="false" alt="" />`;
        // ele.innerHTML = `<div class="pt" style="--pt: 56.25%"><img src="" draggable="false" alt="" /></div>`;
        // let img = ele.querySelector("img");
        let img = document.createElement("img");
        ele.appendChild(img);

        let fImg = new Image();

        fImg.onload = () => {
            img.src = r.src;
            ele.classList.add("slider__item--loaded");
        };
        fImg.src = r.src;

        wrapper.appendChild(ele);
        dots.appendChild(dot.cloneNode(true));
        // ele.innerHTML = `
        // <div class="pt" style="--pt: 56.25%">
        //               <img src="/assets/img/slider/IMG_2795.jpg" draggable="false" alt="" />
        //             </div>
        // `;

        // if (img.complete) {
        //     ele.classList.add("slider__item--loaded");
        // } else {
        //     img.onload = (e) => {
        //         ele.classList.add("slider__item--loaded");
        //     };
        // }
    });
    // }

    // if (_slider_items.length == 1) {
    //     wrapper.querySelector(".slider__item").classList.replace(order[0], order[1]);
    // }

    // let ele = document.createElement("li");
    // ele.classList.add("slider__item--popupFree");
    // ele.classList.add("slider__item--loading");

    // ele.innerHTML = `<div class="pt" style="--pt: 56.25%"><img src="" draggable="false" alt="" /></div>`;
    // ele.innerHTML = `
    //   <div class="pt" style="--pt: 56.25%">
    //     <img src="" draggable="false" alt="" />
    //   </div>`;
    // wrapper.appendChild(ele);
}
function sliderHeightAuto() {
    const pt = document.querySelector(".slider .pt");
    const parent = pt.parentElement;
    const ratio = 56.25 / 100;

    // console.log(pt);

    setHeight();
    window.addEventListener("resize", setHeight);
    function setHeight() {
        pt.style.height = parent.offsetWidth * ratio + "px";
    }
}
function my_carousel2() {
    function sActive(ele) {
        // console.log("ele", ele);
        ele.classList.add("active");
    }
    function rActive(ele) {
        ele.classList.remove("active");
    }
    function getIndex() {
        let index = 0;
        for (let i of sliders) {
            if (i.classList.contains("active")) return index;
            index++;
        }
    }
    function updateCurrent(ele) {
        // console.log("update");
        // if (ft) {
        //     sActive(sliders[0]);
        // } else {
        //     if (activeSlider) {
        //         sActive(activeSlider);
        //         rActive(lastActiveSlider);
        //     }
        // }
        sActive(ele);

        if (lastActiveSlider) rActive(lastActiveSlider);
        updateDot();
    }
    function getNext() {
        let el = curTarget.nextElementSibling;

        return el ? el : sliders.length > 1 ? sliders[0] : null;
        // return curTarget.nextElementSibling;
    }
    function getPrev() {
        // document.body.previousElementSibling

        let el = curTarget.previousElementSibling;

        return el ? el : sliders.length > 1 ? sliders[sliders.length - 1] : null;
    }

    function updateTargets() {
        curTarget = [...sliders].find((r) => r.classList.contains("active"));
        nextTarget = getNext();
        prevTarget = getPrev();
    }

    function backPos() {
        // console.log("arguments", arguments);
        // console.log("arguments", typeof arguments);
        // disableFeature();
        [...arguments].forEach((r, i) => {
            if (r) {
                // let opa = r.classList.contains("active") ? 1 : 0;
                r.style.transition = baseAnimateDur + "ms";

                // animeAnimate = anime({
                //     targets: r,
                //     opacity: opa,
                //     duration: baseAnimateDur,
                //     easing: "easeOutQuad",

                //     complete: () => {
                //         r.removeAttribute("style");
                //     },
                // });

                r.style.opacity = "";

                timeOutTriple[i] = setTimeout(() => {
                    r.removeAttribute("style");
                }, baseAnimateDur);
            }
        });

        // timeOut = setTimeout(() => {
        //     enableFeature();
        // }, baseAnimateDur + 20);
    }

    function refreshSlider(direction) {
        // console.log("refreshSlider");
        // console.log("direction", direction);
        if (direction == "l" && prevTarget) {
            // console.log("To left");

            // sActive(prevTarget);
            // rActive(curTarget);

            updateCurrent(prevTarget);

            backPos(prevTarget, curTarget);

            updateTargets();
        } else if (direction == "r" && nextTarget) {
            // console.log("To right");

            // sActive(nextTarget);
            // rActive(curTarget);

            updateCurrent(nextTarget);

            backPos(nextTarget, curTarget);

            updateTargets();
        } else {
            backPos(nextTarget, curTarget, prevTarget);
        }
        // disableFeature();

        // clearTimeout(featureTimeOut);
        // featureTimeOut = setTimeout(enableFeature, baseAnimateDur);
    }

    function updateDot() {
        const at = getIndex();
        sActive(dots[at]);
        // console.log("-=-=-=found in update: ", at);
        if (lastDot) rActive(lastDot);
        lastDot = dots[at];
    }
    function dir(percent) {
        return percent <= -baseMinForceSide ? "r" : percent >= baseMinForceSide ? "l" : "m";
    }
    function remove3Transition() {
        curTarget.style.transition = "";
        if (nextTarget) nextTarget.style.transition = "";
        if (prevTarget) prevTarget.style.transition = "";
    }
    function mDown(e) {
        // console.log("mDown");
        // if (animeAnimate) animeAnimate.pause();
        // clearTimeout(timeOut);
        clearInterval(autoCarouselInter);

        down = true;
        startX = e.x || e.touches[0].clientX;
        startY = e.y || e.touches[0].clientY;
        updateTargets();
        lastActiveSlider = null;
        // console.log("curTarget", curTarget);
        // console.log("nextTarget", nextTarget);
        // console.log("prevTarget", prevTarget);
        targetWith = e.target.offsetWidth;

        timeOutTriple.forEach(clearTimeout);
        remove3Transition();
    }
    function mMove(e) {
        // console.log("mMove");
        if (down) {
            eX = e.x || e.touches[0].clientX;
            diff = eX - startX;
            diffPercent = (diff / targetWith) * baseFast;

            if (!checkedY) {
                eY = e.y || e.touches[0].clientY;

                let differY = startY - eY;

                if (differY != 0 && diff != 0) {
                    if (Math.abs(differY) > Math.abs(diff)) {
                        checkedY = true;
                        scrollDisabled = false;
                        down = false;
                    } else {
                        checkedY = true;
                        scrollDisabled = true;
                        plScroll.disable();
                        // plScroll.enable();
                    }
                }
            }

            // console.log("diff", diff, "targetWith", targetWith, "diffPercent", diffPercent);
            // console.log(1 - diffPercent);
            // console.log(-diffPercent);
            curTarget.style.opacity = 1 - Math.abs(diffPercent);
            if (nextTarget) nextTarget.style.opacity = -diffPercent;
            if (prevTarget) prevTarget.style.opacity = diffPercent;

            if (diffPercent <= -1 && nextTarget) {
                // console.log("diffPercent", diffPercent);
                startX = e.x || e.touches[0].clientX;
                lastActiveSlider = curTarget;
                // console.log("lastActiveSlider", lastActiveSlider);
                // console.log("nextTarget", nextTarget);

                updateCurrent(nextTarget);
                updateTargets();
            } else if (diffPercent >= 1 && prevTarget) {
                // console.log("diffPercent", diffPercent);
                startX = e.x || e.touches[0].clientX;
                lastActiveSlider = curTarget;
                // console.log("lastActiveSlider", lastActiveSlider);
                // console.log("nextTarget", nextTarget);

                updateCurrent(prevTarget);
                updateTargets();
            }
        } else return;
    }
    function mUp(e) {
        // console.log("mUp");
        checkedY = false;
        if (down || scrollDisabled) {
            lastActiveSlider = curTarget;
            refreshSlider(dir(diffPercent));
        }

        if (scrollDisabled) {
            scrollDisabled = false;
            plScroll.enable();
        }
        // let direction = dir(diffPercent);
        autoCarousel(baseSpeedAutoCarousel);
        down = false;

        // console.log("diffPercent", diffPercent);
        // if (direction == "r" || direction == "l") {
        // }
    }
    function arrow_animeFunc(ele) {
        if (arrow_anime) {
            arrow_anime.pause();
        }
        arrow_anime = anime.timeline({
            targets: ele.querySelectorAll("path"),
            easing: "easeOutCubic",
            duration: 200,
        });
        arrow_anime
            .add({
                translateX: "-30%",
                delay: anime.stagger(50),
            })
            .add(
                {
                    translateX: "0%",
                    delay: anime.stagger(50),
                },
                200
            )
            .add(
                {
                    targets: ele.querySelector("svg"),
                    scale: 0.8,
                    duration: 300,
                },
                0
            )
            .add(
                {
                    targets: ele.querySelector("svg"),
                    scale: 1,
                },
                300
            );
    }
    function clickArr(e) {
        clearInterval(autoCarouselInter);

        // e.stopPropagation();
        // e.stopImmediatePropagation();
        // document.onclick = (e) => {
        //     e.stopImmediatePropagation();
        //     e.stopPropagation();
        // };
        let arr = e.target.closest("._arrowNav");
        let direction = arr.getAttribute("data-direction");

        arrow_animeFunc(arr);

        updateTargets();
        lastActiveSlider = curTarget;
        refreshSlider(direction.charAt(0));
    }
    function disableFeature() {
        wrapper.removeEventListener("mousedown", mDown);
        wrapper.removeEventListener("touchstart", mDown);
    }
    function enableFeature() {
        wrapper.addEventListener("mousedown", mDown);
        wrapper.addEventListener("touchstart", mDown);
    }
    function autoCarousel(inter) {
        clearInterval(autoCarouselInter);
        autoCarouselInter = setInterval(() => {
            updateTargets();
            lastActiveSlider = curTarget;
            refreshSlider("r");
        }, inter);
    }
    // _+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+
    // let firstTime = true;
    const slider = document.querySelector(".slider");
    const wrapper = slider.querySelector(".slider__items"),
        sliders = slider.querySelectorAll(".slider__item"),
        dots = slider.querySelectorAll(".dot"),
        arrows = slider.querySelector(".arrowNav");

    const baseFast = 2;
    const baseMinForceSide = 0.3;
    const baseAnimateDur = 800;
    const baseSpeedAutoCarousel = 5000;

    let lastActiveSlider;
    let down = false,
        nextTarget,
        prevTarget,
        curTarget,
        targetWith,
        arrow_anime,
        autoCarouselInter,
        timeOutTriple = [];

    let lastDot;

    let diff, diffPercent, startX, eX, startY, eY, checkedY, scrollDisabled;

    updateCurrent(sliders[0]);

    wrapper.addEventListener("mousedown", mDown);
    window.addEventListener("mouseup", mUp);
    window.addEventListener("mousemove", mMove);

    wrapper.addEventListener("touchstart", mDown);
    window.addEventListener("touchend", mUp);
    window.addEventListener("touchmove", mMove);

    arrows.addEventListener("mousedown", clickArr);
    arrows.addEventListener("touchstart", clickArr);

    autoCarousel(baseSpeedAutoCarousel);
}
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
document.addEventListener("readystatechange", () => {
    if (document.readyState === "complete" && typeof _slider_items) {
        anime.suspendWhenDocumentHidden = false;
        generateSliders();

        sliderHeightAuto();

        my_carousel2();
    }
});
