function main_run() {}
function my_carousel() {
    // Default
    //   transform: perspective(800px) scale(2.6) rotateY(0deg) translateX(0%);
    //   z-index: 1;
    //   opacity: 1;

    const slider = document.querySelector(".slider");

    const transitionTimeOut = 500;
    const percentToSwitchToNextSlider = 0.2;

    const wrapper = document.querySelector(".slider__items");
    let items = wrapper.querySelectorAll("li.slider__item");
    let items_pos = [];
    const mask = wrapper.querySelector(".slider__item--popupFree");
    let maskTimeOut, maskInter;
    const leftArrow = slider.querySelector(".arrowNav--left");
    const rightArrow = slider.querySelector(".arrowNav--right");
    // let arrowTimeOut;
    let arrow_anime;
    const dots = slider.querySelector(".dots");
    let dot = [],
        activeDot;

    const base_rotate = 30;
    const base_scale = 2.6;

    // const base_arrowAnimation = 0.6;

    let startX;
    let eX,
        diff = 0,
        diff_percent = 0,
        scale,
        scale_l,
        scale_r,
        rotate,
        rotate_l,
        rotate_r,
        current_xAll = [];

    let orderNext, orderPrev;

    let mouseDown = false;
    let centerI, leftI, rightI, nextEle, prevEle;

    let wrapper_width = wrapper.offsetWidth;

    // update_mask_hide();

    // let kk = 0;
    // let kkk = 1;
    // let t = setInterval((e) => {
    //   kk += kkk;

    //   if (kk > 4) {
    //     switch_on_trigger("right");
    //   } else {
    //     switch_on_trigger("left");
    //   }
    // }, 1000);
    set_id_for_Items();

    update_mask_show();
    update_Item();

    organize();
    update_currentX();

    generateDots();
    update_dot();

    wrapper.addEventListener("mousedown", mousedownFunc);
    window.addEventListener("mouseup", mouseupFunc);
    window.addEventListener("mousemove", moveCarousel);

    leftArrow.addEventListener("click", arrow_trigger);
    rightArrow.addEventListener("click", arrow_trigger);

    window.addEventListener("resize", (e) => {
        wrapper_width = wrapper.offsetWidth;

        organize();
        reset_Items();
        update_mask_hide();
        update_mask_show();
    });

    wrapper.addEventListener("touchstart", mousedownFunc);
    window.addEventListener("touchmove", moveCarousel);
    window.addEventListener("touchend", mouseupFunc);

    updateArrowColor();

    autoPlay_carousel();
    // _+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+
    function autoPlay_carousel() {}
    function set_id_for_Items() {
        let j = 0;
        for (let i of items) {
            i.setAttribute("data-slider_item_id", j++);
        }
    }
    function update_dot() {
        // console.log(centerI.getAttribute("data-slider_item_id"));
        let id = centerI.getAttribute("data-slider_item_id");
        if (activeDot) {
            activeDot.classList.remove("active");
        }

        activeDot = dot[id];

        activeDot.classList.add("active");
    }
    function generateDots() {
        for (let i of items) {
            let t = document.createElement("div");
            t.classList.add("dot");

            //       t.innerHTML = `
            // <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 42">
            //   <path
            //     d="M72.12 3.089l51.635 16.943c1.047.343 1.694.694 2.046.969-.352.274-.999.625-2.046.969L72.12 38.911C69.968 39.617 67.029 40 64 40s-5.968-.383-8.12-1.089L4.245 21.969c-1.047-.343-1.694-.694-2.046-.969.353-.274 1-.625 2.046-.969L55.88 3.089C58.032 2.383 60.971 2 64 2s5.968.383 8.12 1.089zm53.931 18.153zm-.007-.471zM1.949 20.759zm.007.471z"
            //   />
            // </svg>
            // `;
            t.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 42"><path d="M72.12 3.089l51.635 16.943c1.047.343 1.694.694 2.046.969-.352.274-.999.625-2.046.969L72.12 38.911C69.968 39.617 67.029 40 64 40s-5.968-.383-8.12-1.089L4.245 21.969c-1.047-.343-1.694-.694-2.046-.969.353-.274 1-.625 2.046-.969L55.88 3.089C58.032 2.383 60.971 2 64 2s5.968.383 8.12 1.089zm53.931 18.153zm-.007-.471zM1.949 20.759zm.007.471z"/></svg>`;

            dots.appendChild(t);
            dot.push(t);
        }
    }
    function arrow_trigger() {
        // clearTimeout(arrowTimeOut);
        let direction = this.getAttribute("data-direction");

        // leftArrow.classList.remove("active");
        // rightArrow.classList.remove("active");

        // setTimeout(() => {
        //   this.classList.add("active");
        // }, 1);

        // arrowTimeOut = setTimeout(() => {
        //   leftArrow.classList.remove("active");
        //   rightArrow.classList.remove("active");
        // }, (base_arrowAnimation + 0.05) * 1000);
        if ((direction == "right" && rightI) || (direction == "left" && leftI)) {
            arrow_animeFunc(this);
            // arrow_anime
            switch_on_trigger(direction.charAt(0));
        }
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
    function switch_on_trigger(direction) {
        update_currentX();
        update_Item();

        if (direction == "r") {
            orderNext = true;
            orderPrev = false;

            if (rightI) {
                // console.log("rightI", rightI);
                update_mask_hide();
                nextEle = rightI.nextElementSibling;
                nextEle = nextEle.classList.contains("slider__item") ? nextEle : undefined;
                mouseupFunc(0, true);
            }
        } else {
            orderNext = false;
            orderPrev = true;

            if (leftI) {
                update_mask_hide();
                prevEle = leftI.previousElementSibling;
                // prevEle = prevEle.classList.contains("slider__item") ? prevEle : undefined;
                mouseupFunc(0, true);
            }
        }
    }
    function updateArrowColor() {
        if (leftI) {
            leftArrow.style.filter = ``;
        } else {
            leftArrow.style.filter = `grayscale(1)`;
        }

        if (rightI) {
            rightArrow.style.filter = ``;
        } else {
            rightArrow.style.filter = `grayscale(1)`;
        }
    }
    function mousedownFunc(e) {
        // console.log("Mouse down");
        //||e.touches[0].clientY
        startX = e.x || e.touches[0].clientX;

        update_mask_hide();

        orderNext = false;
        orderPrev = false;

        mouseDown = true;

        // current_c = centerI.offsetLeft;
        // current_l = leftI.offsetLeft;
        // current_r = rightI.offsetLeft;

        // console.log(items);

        update_currentX();
    }

    function mouseupFunc(e, force_start) {
        if (!mouseDown && !force_start) return;
        else {
            mouseDown = false;

            if (orderNext) {
                changeOrder("n");
            } else if (orderPrev) {
                changeOrder("p");
            }

            reset_Items();
            update_mask_show();

            updateArrowColor();
        }
    }
    function update_currentX() {
        for (let i = 0; i < items.length; i++) {
            current_xAll[i] = items[i].offsetLeft;
        }
    }
    function moveCarousel(e) {
        if (!mouseDown) return;
        else {
            // console.log("e.x", e.x);
            // console.log("e.x", e.x, "\ne.touches[0].clientX", e.touches[0].clientX);

            eX = e.x || e.touches[0].clientX;

            diff = eX - startX;
            diff_percent = diff / (wrapper_width / 3);

            scale = 1 + base_scale - Math.abs(base_scale * diff_percent);
            scale = scale > base_scale ? base_scale : scale;
            scale = scale < 0 ? 0 : scale;

            scale_l = 1 + base_scale * diff_percent;
            scale_l = scale_l > base_scale ? base_scale : scale_l;
            scale_l = scale_l < 0 ? 0 : scale_l;

            scale_r = 1 - base_scale * diff_percent;
            scale_r = scale_r > base_scale ? base_scale : scale_r;
            scale_r = scale_r < 0 ? 0 : scale_r;

            rotate = base_rotate * -diff_percent;
            rotate_l = base_rotate - base_rotate * diff_percent;
            rotate_r = -base_rotate + base_rotate * -diff_percent;
            for (let i = 0; i < items.length; i++) {
                items[i].style.left = current_xAll[i] + diff + "px";
            }

            //   centerI.style.left = current_c + diff + "px";
            //   leftI.style.left = current_l + diff + "px";
            //   rightI.style.left = current_r + diff + "px";

            centerI.style.transform = `scale(${scale}) rotateY(${rotate}deg)`;
            if (leftI) {
                leftI.style.transform = `scale(${scale_l}) rotateY(${rotate_l}deg)`;

                if (diff_percent > 0.47) {
                    leftI.style.zIndex = "2";
                } else {
                    leftI.style.zIndex = "";
                }

                prevEle = leftI.previousElementSibling;
                if (diff_percent > 0.47) {
                    leftI.style.zIndex = "2";
                } else {
                    leftI.style.zIndex = "";
                }

                if (prevEle) {
                    prevEle.style.zIndex = "-1";
                    prevEle.style.transform = `scale(${diff_percent < 0 ? 0 : diff_percent}) rotateY(${base_rotate}deg)`;
                }
            }

            if (rightI) {
                rightI.style.transform = `scale(${scale_r}) rotateY(${rotate_r}deg)`;

                if (diff_percent < -0.47) {
                    rightI.style.zIndex = "2";
                } else {
                    rightI.style.zIndex = "";
                }

                nextEle = rightI.nextElementSibling;
                nextEle = nextEle.classList.contains("slider__item") ? nextEle : undefined;
                if (nextEle) {
                    nextEle.style.zIndex = "-1";
                    nextEle.style.transform = `scale(${-diff_percent < 0 ? 0 : -diff_percent}) rotateY(${-base_rotate}deg)`;
                }
            }

            if (centerI.offsetLeft + centerI.offsetWidth / 2 < wrapper_width / 2 && rightI && diff_percent < -percentToSwitchToNextSlider) {
                // startX = e.x;
                orderNext = true;
                orderPrev = false;
            } else if (centerI.offsetLeft + centerI.offsetWidth / 2 > wrapper_width / 2 && leftI && diff_percent > percentToSwitchToNextSlider) {
                orderNext = false;
                orderPrev = true;
            }

            // console.log("diff", diff);
            // console.log("diff_percent", diff_percent);
        }
    }

    function changeOrder(type) {
        // console.log("Changorder");
        // console.log(nextEle, prevEle);

        if (type == "n") {
            centerI.classList.remove("slider__item--center");
            centerI.classList.add("slider__item--left");

            rightI.classList.remove("slider__item--right");
            rightI.classList.add("slider__item--center");
            //   rightI.nextElementSibling.classList.add("slider__item--right");

            if (leftI) {
                leftI.classList.remove("slider__item--left");
            }

            if (nextEle) {
                nextEle.classList.add("slider__item--right");
            }
            //   current_x++;

            update_Item();
            //   }
        } else if (type == "p") {
            centerI.classList.remove("slider__item--center");
            centerI.classList.add("slider__item--right");

            if (rightI) {
                rightI.classList.remove("slider__item--right");
            }

            leftI.classList.remove("slider__item--left");
            leftI.classList.add("slider__item--center");

            if (prevEle) {
                prevEle.classList.add("slider__item--left");
            }

            update_Item();

            //   leftI.nextElementSibling.classList.add("slider__item--center");
        }
        update_dot();
    }
    function reset_Items() {
        // centerI = c_Item();
        // rightI = r_Item();
        // leftI = l_Item();
        let j = 1;

        centerI.setAttribute("style", `transition:${transitionTimeOut}ms;left:${items_pos[1]}`);
        removeTransition(centerI);
        if (leftI) {
            leftI.setAttribute("style", `transition:${transitionTimeOut}ms;left:${items_pos[0]}`);
            removeTransition(leftI);
            j = 1;
            prevEle = leftI.previousElementSibling;
            while (prevEle) {
                prevEle.setAttribute("style", `transition:${transitionTimeOut}ms;left:-${parseInt(items_pos[1]) * j}px`);
                removeTransition(prevEle);

                j--;
                prevEle = prevEle.previousElementSibling;
            }
        }

        if (rightI) {
            rightI.setAttribute("style", `transition:${transitionTimeOut}ms;left:${items_pos[2]}`);
            removeTransition(rightI);

            nextEle = rightI.nextElementSibling;
            j = 1;
            while (nextEle && nextEle.classList[0] == "slider__item") {
                nextEle.setAttribute("style", `transition:${transitionTimeOut}ms;left:${items_pos[2 + j]}`);
                removeTransition(nextEle);

                j++;
                nextEle = nextEle.nextElementSibling;
            }
        }
    }
    function removeTransition(ele) {
        setTimeout(() => {
            ele.style.transition = "";
        }, transitionTimeOut);
    }
    function organize() {
        let k = 0;
        let j = 0;
        let increase = wrapper.offsetWidth / 3;

        if (items.length > 1) {
            for (let i of items) {
                i.style.left = `${Math.round(j)}px`;
                items_pos[k++] = Math.round(j) + "px";
                j += increase;
                //   console.log(i);
            }
        } else {
            j = increase;
            items[0].style.left = `${Math.round(j)}px`;
            items_pos[0] = Math.round(j) + "px";
            items_pos[1] = items_pos[0];
            // Only one img exist
        }
    }
    function update_Item() {
        centerI = c_Item();
        leftI = l_Item();
        rightI = r_Item();
    }
    function update_mask_hide() {
        clearTimeout(maskTimeOut);
        mask.style.display = "none";
    }
    function update_mask_show() {
        maskTimeOut = setTimeout(() => {
            const img = centerI.querySelector("img");
            const imgBound = img.getBoundingClientRect();
            let maskImg = mask.querySelector("img");

            maskImg.src = img.src;
            mask.style.width = imgBound.width + "px";

            let left = imgBound.left - wrapper.getBoundingClientRect().left;
            // console.log("mask", mask);
            // mask.style.top = imgBound.top + "px";

            // document.body.
            // console.log("wrapper", wrapper.getBoundingClientRect().left);
            // console.log("left", left);
            if (maskInter) clearInterval(maskInter);
            if (!centerI.classList.contains("slider__item--loaded")) {
                mask.classList.remove("slider__item--loaded");

                maskInter = setInterval(() => {
                    if (maskImg.complete) {
                        clearInterval(maskInter);
                        mask.classList.add("slider__item--loaded");
                    }
                }, 200);
            } else {
                mask.classList.add("slider__item--loaded");
            }
            mask.style.display = "flex";
            mask.style.left = left + "px";
        }, transitionTimeOut + 20);

        // console.log(imgBound);

        //   {
        //     "x": 196.6750030517578,
        //     "y": 104,
        //     "width": 1109.30615234375,
        //     "height": 623.9593505859375,
        //     "top": 104,
        //     "right": 1305.9811553955078,
        //     "bottom": 727.9593505859375,
        //     "left": 196.6750030517578
        // }
    }
    function c_Item() {
        return wrapper.querySelector(".slider__item--center");
    }
    function l_Item() {
        return wrapper.querySelector(".slider__item--left");
    }
    function r_Item() {
        return wrapper.querySelector(".slider__item--right");
    }
}

function generateSliders() {
    const wrapper = document.querySelector(".slider__items");
    // wrapper.innerHTML = "";

    // console.log(_slider_items[0]);

    const order = ["slider__item--left", "slider__item--center", "slider__item--right"];

    for (let i = 0; i < _slider_items.length; i++) {
        let ele = document.createElement("li");
        ele.classList.add("slider__item");
        ele.classList.add("slider__item--loading");

        if (i < 3) {
            ele.classList.add(order[i]);
        }

        ele.innerHTML = `<div class="pt" style="--pt: 56.25%"><img src="${_slider_items[i].src}" draggable="false" alt="" /></div>`;
        wrapper.appendChild(ele);
        // ele.innerHTML = `
        // <div class="pt" style="--pt: 56.25%">
        //               <img src="/assets/img/slider/IMG_2795.jpg" draggable="false" alt="" />
        //             </div>
        // `;

        let img = ele.querySelector("img");

        if (img.complete) {
            ele.classList.add("slider__item--loaded");
        } else {
            img.onload = (e) => {
                ele.classList.add("slider__item--loaded");
            };
        }
    }

    if (_slider_items.length == 1) {
        wrapper.querySelector(".slider__item").classList.replace(order[0], order[1]);
    }

    let ele = document.createElement("li");
    ele.classList.add("slider__item--popupFree");
    ele.classList.add("slider__item--loading");

    ele.innerHTML = `<div class="pt" style="--pt: 56.25%"><img src="" draggable="false" alt="" /></div>`;
    // ele.innerHTML = `
    //   <div class="pt" style="--pt: 56.25%">
    //     <img src="" draggable="false" alt="" />
    //   </div>`;
    wrapper.appendChild(ele);

    // let img = ele.querySelector("img");

    // if (img.complete) {
    //   ele.classList.add("slider__item--loaded");
    // } else {
    //   img.onload = (e) => {
    //     ele.classList.add("slider__item--loaded");
    //   };
    // }
}
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// const hasLoader = false;

// if (hasLoader) {
//   let inter = setInterval(() => {
//     if (typeof readyToPlay) {
//       clearInterval(inter);

//       if (typeof _slider_items) {
//         generateSliders();
//         my_carousel();
//       }
//     }
//   }, 100);
// } else
//  {
document.addEventListener("readystatechange", () => {
    if (document.readyState === "complete" && typeof _slider_items) {
        anime.suspendWhenDocumentHidden = false;
        generateSliders();

        // console.log("carousel");

        my_carousel();
    }
});
// }
