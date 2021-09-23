Object.prototype._product_carousel = function () {
    // console.log(this);

    let ele = this;

    // console.log();

    let isDownProduct = false;

    let startX, differ, toChange, eX, lastEX;
    let currentX;

    let __parent;

    let maxScroll;

    let smoothScrollTimeout,
        lastSmoothScroll,
        animeScroll,
        animeScrollTime = 1000,
        smoothScrollStrength = 20;

    let addClassTimeOut;

    if (ele.classList) {
        __parent = ele.parentElement;
        // __parentWidth = __parent.offsetWidth;

        maxScroll = ele.offsetWidth - __parent.offsetWidth;

        // console.log(this, maxScroll);

        window.addEventListener("resize", () => {
            // __parentWidth = __parent.offsetWidth;
            maxScroll = ele.offsetWidth - __parent.offsetWidth;
        });
        // console.log("parent", __parentWidth);

        // wrapper.onmousedown = productMouseDown;
        // window.onmouseup = productMouseUp;
        // window.onmousemove = productMouseMove;

        // console.log(this);
        ele.onmousedown = productMouseDown;
        window.addEventListener("mouseup", productMouseUp);
        window.addEventListener("mousemove", productMouseMove);

        ele.ontouchstart = productMouseDown;
        window.addEventListener("touchend", productMouseUp);
        window.addEventListener("touchmove", productMouseMove);
    }
    // _+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+

    function productMouseDown(e) {
        if (animeScroll) animeScroll.pause();
        isDownProduct = true;

        lastSmoothScroll = 0;

        clearTimeout(addClassTimeOut);
        ele.classList.add("no");
        // console.log(isDownProduct);
        // console.log("Touch");

        currentX = parseInt(ele.style.marginLeft) || 0;
        startX = e.x || e.touches[0].clientX;
        lastEX = startX;
    }
    function productMouseUp() {
        // console.log("Mouse up");

        if (!isDownProduct) return;
        else {
            isDownProduct = false;

            // console.log("lastSmoothScroll", lastSmoothScroll);

            if (lastSmoothScroll) {
                let ml = parseInt(ele.style.marginLeft);
                let sum = ml + lastSmoothScroll * smoothScrollStrength;

                // console.log("ml", ml);
                // console.log("sum", sum);

                sum = sum <= 0 ? sum : 0;
                sum = sum >= -maxScroll ? sum : -maxScroll;

                animeOverScroll(sum);

                addClassTimeOut = setTimeout(() => {
                    ele.classList.remove("no");
                }, (animeScrollTime * 2) / 3);
            } else {
                ele.classList.remove("no");
            }
        }
    }
    function productMouseMove(e) {
        // console.log(isDownProduct);

        if (!isDownProduct) return;
        else {
            // console.log("currentX", currentX, "differ", differ, "maxScroll", maxScroll, "toChange", toChange);
            eX = e.x || e.touches[0].clientX;

            differ = startX - eX;

            toChange = differ - currentX;
            if (toChange >= 0 && toChange <= maxScroll) {
                // Main _+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_
                // console.log(toChange);

                ele.style.marginLeft = -toChange + "px";

                lastSmoothScroll = eX - lastEX;
                lastEX = eX;

                // console.log("lastSmoothScroll", lastSmoothScroll);

                // console.log("differ", differ);
                // console.log("toChange", toChange);
                // console.log("ex", differ - eX);
                clearTimeout(smoothScrollTimeout);
                smoothScrollTimeout = setTimeout(() => {
                    lastSmoothScroll = 0;
                }, 10);

                // Main _+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_
            } else {
                if (toChange < 0) {
                    currentX = differ;
                    ele.style.marginLeft = 0 + "px";
                } else {
                    if (maxScroll > 0) {
                        currentX = differ - maxScroll;
                        // startX = e.x;
                        // differ = maxScroll;
                        // currentX = differ;
                        // currentX = differ;
                        ele.style.marginLeft = -maxScroll + "px";
                    }
                }
            }
        }
    }
    function animeOverScroll(amount) {
        // console.log("element", element);
        // console.log("anime", anime);

        animeScroll = anime({
            targets: ele,
            marginLeft: amount,

            easing: "easeOutCubic",

            duration: animeScrollTime,
        });
    }
};
const modalController = {
    modal: document.querySelector(".modal"),
    modal_overlay: document.querySelector(".modal .modal__overlay"),
    modal_content: document.querySelector(".modal .modal__inner"),
    body: document.body,

    icons: {
        Specialty: `<i class="icofont-coffee-alt"></i>`,
        Coffee: `<i class="icofont-coffee-cup"></i>`,
        "Blended Non-caffein": `<i class="icofont-beans"></i>`,
        "Blended Beverage": `<i class="icofont-coffee-pot"></i>`,
        Smoothie: `<i class="icofont-juice"></i>`,
        Unknown: ``,
    },

    show: function () {
        this.body.classList.add("modal--active");
    },
    show_overlay: function () {
        this.body.classList.add("modal--active");
        this.body.classList.add("modal--overlay");
    },
    hide: function () {
        this.body.classList.remove("modal--active");
        this.body.classList.remove("modal--overlay");
    },
    reset: function () {
        this.modal_content.innerHTML = ``;
    },
    reset_hide: function () {
        this.hide();
        this.reset();
    },
    show_product_menu: function () {
        let ele = document.createElement("div");
        ele.classList.add("modalFullMenu");

        ele.innerHTML = `<div class="modalFullMenu__header"><i class="icofont-restaurant-menu"></i><span> All items</span></div><ul class="modalFullMenu__categories"></ul><div class="modalFullMenu__close"><div class="modalFullMenu__close-mask"></div></div>`;
        // ele.innerHTML = `

        // <div class="modalFullMenu__header"><i class="icofont-restaurant-menu"></i><span> All items</span></div>

        // <ul class="modalFullMenu__categories">
        // </ul>

        // <div class="modalFullMenu__close">
        //     <div class="modalFullMenu__close-mask"></div>
        // </div>
        //     `;
        // console.log(ele);

        this.modal_content.appendChild(ele);
    },
    render_product_menu: function () {
        // This should be called once
        const menuContent = this.modal.querySelector(".modalFullMenu .modalFullMenu__categories");
        // const delayAnimation = 200;

        if (menuContent) {
            menuContent.innerHTML = "";
            let index = 0,
                indexCate = 0;

            // const pArray = [..._product_items];

            // const categorySize = categories.size;
            // console.log(categories, categorySize);

            // itemInCategory = {};

            // for (let i of categories) {
            //     itemInCategory[i] = [];
            // }
            // _product_items.forEach((re) => {
            //     itemInCategory[re.category].push(re);
            // });

            // console.log(itemInCategory);

            for (let i of categories) {
                // console.log(i);
                let eleObj = categoryToHtml(i, this.icons[i]);

                menuContent.appendChild(eleObj.ele);

                index = indexCate++;

                for (let j of itemInCategory[i]) {
                    // console.log(i, j);
                    let productEle = productToHtml(j);

                    // console.log("index", index++);
                    // animateProduct(productEle, animateMask.durationClose + delayAnimationProductInMenu * index++, durationAnimationProductInMenu);
                    eleObj.wrapper.appendChild(productEle);
                }
                product_carousel_handler(eleObj.wrapper);
                // console.log(i);
            }
            animateProducts();
        }
    },
};
const productController = {
    app: document.querySelector(".app"),
    cover: document.querySelector(".app-cover__imgBox"),
    name: document.querySelector(".info__header-name"),
    cate: document.querySelector(".info__header-category"),
    des: document.querySelector(".info__body--des"),
    options: document.querySelector(".info__body--options"),
    priceBox: document.querySelector(".info__footer-price"),

    load: function (id) {
        // console.log("obj", obj, "this.cover", this.cover, "this.name", this.name);

        let objj = _product_items.find((r) => r.id == id);
        // let objj = _product_items[0];

        if (objj) {
            let category = objj.category;

            category = browsingWithSubCategory && objj.category_sub ? `${category} - ${objj.category_sub}` : category;

            this.app.setAttribute("data-category", objj.category);
            this.app.setAttribute("data-category_sub", objj.category_sub || "");
            this.app.setAttribute("data-current_id", objj.id);

            this.cover.classList.remove("loaded");
            // .style.backgroundImage = `url("")`;
            let imgBg = document.createElement("div");
            imgBg.classList.add("app-cover__imgBg");

            this.cover.innerHTML = ``;
            this.cover.appendChild(imgBg);

            let fakeImg = new Image();
            fakeImg.onload = (e) => {
                // console.log("Fake load complete");

                imgBg.style.backgroundImage = `url("${objj.png}")`;
                this.cover.classList.add("loaded");
            };
            fakeImg.src = objj.png;

            this.name.innerText = objj.name;
            this.cate.innerText = category;
            this.des.innerText = objj.des;

            this.options.innerHTML = "";

            this.options.appendChild(optionToHtml(objj.typeText, objj.type, objj.currency, true, objj.fixed));

            if (objj.hasSweetness) {
                this.options.appendChild(optionToHtml(objj.sweetnessText, objj.sweetness, objj.currency, true, objj.fixed));
            }
            if (objj.hasExtra) {
                this.options.appendChild(optionToHtml(objj.extraText, objj.extra, objj.currency, false, objj.fixed));
            }

            this.priceBox.setAttribute("data-fixed", objj.fixed);
            this.priceBox.innerHTML = `Total cost:<span>${objj.currency} ${Math.min(...objj.type.map((r) => r.price))}</span>`;

            updateAvailableArrows();
        }
    },
};
const animateMask = {
    opening: false,
    closing: false,
    durationOpen: 400,
    durationClose: 300,
    delayForTransition: 200,
    show: function () {
        this.opening = true;
        const pcBtn = document.querySelector(".info__footer-menu"),
            pcBtnIcon = pcBtn.querySelector("i");

        const mask = document.querySelector(".info__footer-menuMASK"),
            maskIcon = mask.querySelector("i");

        const menu = document.querySelector(".modalFullMenu"),
            menuIcon = menu.querySelector("i");

        let bg = window.getComputedStyle(pcBtn).backgroundColor;
        let color = window.getComputedStyle(pcBtnIcon).color;
        let bound = pcBtn.getBoundingClientRect();
        mask.classList.add("active");

        copyLocation(mask, pcBtn);
        mask.style.backgroundColor = bg;

        copyBorderRadius(mask, pcBtn);
        bound = pcBtnIcon.getBoundingClientRect();

        copyLocation(maskIcon, pcBtnIcon);
        maskIcon.style.color = color;

        bg = window.getComputedStyle(menu).backgroundColor;
        bound = menu.getBoundingClientRect();
        let brs = getBorderRadius(menu);
        // let dura = this.durationOpen;
        anime({
            targets: mask,

            top: bound.top,
            left: bound.left,
            width: bound.width,
            height: bound.height,

            backgroundColor: bg,

            borderTopLeftRadius: brs.tl,
            borderTopRightRadius: brs.tr,
            borderBottomLeftRadius: brs.bl,
            borderBottomRightRadius: brs.br,

            easing: "easeInOutQuad",

            duration: this.durationOpen,
        });

        bound = menuIcon.getBoundingClientRect();
        color = window.getComputedStyle(menuIcon).color;
        anime({
            targets: maskIcon,

            top: bound.top,
            left: bound.left,
            width: bound.width,
            height: bound.height,

            color: color,

            easing: "easeInOutQuad",

            duration: this.durationOpen,
        });

        setTimeout(() => {
            mask.style.opacity = "1";
            mask.style.transition = `opacity ${this.delayForTransition}ms`;
            setTimeout(() => {
                mask.style.opacity = "0";
            }, 1);

            setTimeout(() => {
                mask.style.transition = "";
            }, this.delayForTransition);

            setTimeout(() => {
                mask.classList.remove("active");
                this.opening = false;
            }, this.delayForTransition + 20);
        }, this.durationOpen);

        // console.log("bound", bound);
    },
    hide: function () {
        // console.log("hiding");
        this.closing = true;
        const pcBtn = document.querySelector(".info__footer-menu"),
            pcBtnIcon = pcBtn.querySelector("i");

        const mask = document.querySelector(".info__footer-menuMASK"),
            maskIcon = mask.querySelector("i");

        const menu = document.querySelector(".modalFullMenu"),
            menuIcon = menu.querySelector("i");

        document.body.classList.remove("modal--overlay");

        let bg;
        let color;
        let bound;

        copyLocation(mask, menu);

        mask.style.opacity = "0";
        mask.style.transition = `opacity ${this.delayForTransition}ms`;
        setTimeout(() => {
            mask.style.opacity = "1";
        }, 1);

        mask.classList.add("active");
        setTimeout(() => {
            mask.style.transition = "";
        }, this.delayForTransition);

        bg = window.getComputedStyle(pcBtn).backgroundColor;
        bound = pcBtn.getBoundingClientRect();
        let brs = getBorderRadius(pcBtn);
        // let dura = this.durationOpen;
        setTimeout(() => {
            menu.classList.remove("show");

            anime({
                targets: mask,

                top: bound.top,
                left: bound.left,
                width: bound.width,
                height: bound.height,

                backgroundColor: bg,

                borderTopLeftRadius: brs.tl,
                borderTopRightRadius: brs.tr,
                borderBottomLeftRadius: brs.bl,
                borderBottomRightRadius: brs.br,

                easing: "easeInOutQuad",

                duration: this.durationClose,
            });

            bound = pcBtnIcon.getBoundingClientRect();
            color = window.getComputedStyle(pcBtnIcon).color;
            anime({
                targets: maskIcon,

                top: bound.top,
                left: bound.left,
                width: bound.width,
                height: bound.height,

                color: color,

                easing: "easeInOutQuad",

                duration: this.durationClose,
            });
        }, this.delayForTransition);

        // console.log("bound", bound);

        setTimeout(() => {
            mask.classList.remove("active");
            this.closing = false;
        }, this.durationClose + this.delayForTransition + 20);
    },
};
function separateItem() {
    // const categories = new Set(_product_items.map((r) => r.category));
    let ttt = {};
    for (let i of categories) {
        ttt[i] = [];
    }
    _product_items.forEach((re) => {
        ttt[re.category].push(re);
    });

    return ttt;
}
function getBound(ele) {
    return ele.getBoundingClientRect();
}
function animateProduct(ele, _delay, dura) {
    ele.style.opacity = "0";
    ele.style.transition = "0s";

    let tl = anime.timeline({
        targets: ele,
    });

    tl.add({
        opacity: [0, 1],
        scale: [0.5, 1],
        translateY: ["100%", 0],

        duration: dura,
        delay: _delay,
    });

    setTimeout(() => {
        ele.removeAttribute("style");
    }, dura + _delay + 20);

    // console.log("ele", ele, "delay", _delay);
}
function animateProducts() {
    let cate = document.querySelectorAll(".modalFullMenu__category");

    // const delayAnimation = delayAnimationProductInMenu;
    let index = 0,
        indexCate = 0;
    // let products = document.querySelectorAll(".modalFullMenu .menuCategory__item");

    // console.log("products", products);
    // console.log("cate", cate);
    setTimeout(() => {
        [...cate].forEach((r, i) => {
            let products = cate[i].querySelectorAll(".menuCategory__item");

            index = indexCate++;
            [...products].forEach((rr) => {
                // console.log(rr, rr.offsetLeft);
                // console.log(rr, (animateMask.durationOpen + delayAnimationProductInMenu) * (index + 1));

                // -=Make sure just to animate product that inside the view of window
                if (rr.offsetLeft < window.innerWidth) {
                    animateProduct(rr, delayAnimationProductInMenu * index++, durationAnimationProductInMenu);
                }
            });
            // console.log(products);
            // console.log(r);
        });
    }, animateMask.durationOpen);
}
function copyLocation(ele1, ele2) {
    const bound = ele2.getBoundingClientRect();

    ele1.style.top = bound.top + "px";
    ele1.style.left = bound.left + "px";
    ele1.style.width = bound.width + "px";
    ele1.style.height = bound.height + "px";
}
function copyBorderRadius(ele1, ele2) {
    const _style = window.getComputedStyle(ele2);

    ele1.style.borderTopLeftRadius = _style.borderTopLeftRadius;
    ele1.style.borderTopRightRadius = _style.borderTopRightRadius;
    ele1.style.borderBottomLeftRadius = _style.borderBottomLeftRadius;
    ele1.style.borderBottomRightRadius = _style.borderBottomRightRadius;
}
function getBorderRadius(ele2) {
    const _style = window.getComputedStyle(ele2);

    return { tl: _style.borderTopLeftRadius, tr: _style.borderTopRightRadius, bl: _style.borderBottomLeftRadius, br: _style.borderBottomRightRadius };
    // ele1.style.borderTopLeftRadius = _style.borderTopLeftRadius;
    // ele1.style.borderTopRightRadius = _style.borderTopRightRadius;
    // ele1.style.borderBottomLeftRadius = _style.borderBottomLeftRadius;
    // ele1.style.borderBottomRightRadius = _style.borderBottomRightRadius;
}
function product_carousel_handler(wrapper) {
    // _+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+
    let width = 0;

    // document.body.parentElement;
    // console.log(wrapper);

    for (let i of wrapper.children) {
        width += i.offsetWidth;
        // console.log("i", i.offsetWidth);
    }
    // for (let i of ) {
    // console.log("i", i.offsetWidth);
    // }
    // console.log(wrapper.childNodes);
    // console.log(width);
    // console.log("parent", wrapper.parentElement, wrapper.parentElement.offsetWidth);
    wrapper.style.width = width + "px";

    // if (wrapper.parentElement.offsetWidth < width) {
    // console.log(typeof wrapper);
    wrapper._product_carousel();
    // }

    // console.log(getBound(wrapper));
}
function categoryToHtml(name, icon) {
    let ele = document.createElement("li");
    ele.classList.add("modalFullMenu__category");

    ele.innerHTML = `<div class="menuCategory__title">${icon} ${name}</div>`;

    let ul = document.createElement("ul");
    ul.classList.add("menuCategory__items");
    ele.appendChild(ul);

    // <ul class="menuCategory__items"></ul>

    // ele.innerHTML = `
    // <div class="menuCategory__title">${icon}${name}</div>
    // <ul class="menuCategory__items">
    // </ul>
    // `;

    return { ele: ele, wrapper: ul };
}
function productToHtml(obj) {
    // obj = _product_items[0];

    // let ob = _product_items[0];
    let ob = obj;
    let _price = Math.min(...ob.type.map((r) => r.price));

    let hasSub = ob.category_sub ? " active" : "";

    let ele = document.createElement("li");
    ele.classList.add("menuCategory__item");

    ele.innerHTML = `<div class="itemCard" data-id="${ob.id}"><div class="itemCard__header"><p class="itemCard__header_category${hasSub}">${
        ob.category_sub || ob.category
    }</p><p class="itemCard__header_name">${ob.name}</p></div><div class="itemCard__des">${ob.des_short}</div><div class="itemCard__price">${ob.currency} ${_price.toFixed(ob.fixed)}</div></div>`;

    let imgBox = document.createElement("div");
    imgBox.classList.add("itemCover");

    let imgBg = document.createElement("div");
    imgBg.classList.add("itemCoverBackground");

    imgBox.appendChild(imgBg);

    let fakeImg = new Image();
    fakeImg.onload = (e) => {
        // console.log("Fake load complete", ob.png);
        imgBg.style.backgroundImage = `url("${ob.png}")`;
        imgBox.classList.add("loaded");
    };
    fakeImg.src = ob.png;

    ele.appendChild(imgBox);
    // ele.innerHTML = `
    // <div class="itemCard" data-id="${ob.id}">
    //     <div class="itemCard__header">
    //         <p class="itemCard__header_category${hasSub}">${ob.category_sub || ob.category}</p>
    //         <p class="itemCard__header_name">${ob.name}</p>
    //     </div>
    //     <div class="itemCard__des">${ob.des_short}</div>
    //     <div class="itemCard__price">${ob.currency} ${_price.toFixed(ob.fixed)}</div>
    // </div>
    // <div class="itemCover" style="background-image: url('${ob.png}')"></div>
    // `;

    return ele;
}
function autoSelectLowestFromUl(ul) {
    // console.log("ul", ul);
    let eles = ul.querySelectorAll(".info__option[data-price]");
    let lowest = parseFloat(eles[0].getAttribute("data-price"));
    let lastAct = eles[0];
    lastAct.classList.add("active");
    for (let i of eles) {
        // console.log(i);
        let price = parseFloat(i.getAttribute("data-price"));

        if (price < lowest) {
            lastAct.classList.remove("active");
            lastAct = i;
            lastAct.classList.add("active");
            lowest = parseFloat(i.getAttribute("data-price"));
        }
    }
}
function optionToHtml(title, options, currency, oneChoice, fixed) {
    let ul = document.createElement("ul");
    ul.classList.add("info__options");
    if (oneChoice) ul.classList.add("info__options--oneChoice");

    let titleEle = document.createElement("li");
    titleEle.classList.add("info__option", "info__option--title");
    titleEle.innerText = title;

    ul.appendChild(titleEle);

    for (let i of options) {
        let price = i.price ? `${currency} ${i.price.toFixed(fixed)}` : "Free";
        // console.log("price", price);
        // console.log("i", i);

        let li = document.createElement("li");
        li.classList.add("info__option");

        li.setAttribute("data-price", i.price || "0");
        li.setAttribute("data-cur", currency);

        li.innerHTML = `<p class="info__option-name">${i.name}</p><div class="info__option-price">${price}</div>`;
        // li.innerHTML = `
        // <p class="info__option-name">${i.name}</p>
        // <div class="info__option-price">${currency} ${i.price}</div>`;

        // <li class="info__option">
        // <p class="info__option-name">Cold Regular</p>
        // <div class="info__option-price">$ 7.95</div>
        // </li>

        ul.appendChild(li);
    }

    if (oneChoice) {
        autoSelectLowestFromUl(ul);
    }

    return ul;
}

function modalControls() {
    // Hide menu when click on overlay
    modalController.modal_overlay.addEventListener("click", (e) => {
        if (!animateMask.opening && !animateMask.closing) {
            if (modalController.modal_content.querySelector(".modalFullMenu")) {
                // console.log("calling hide");
                animateMask.hide();

                let inter = setInterval(() => {
                    if (!animateMask.closing) {
                        clearInterval(inter);
                        modalController.hide();
                    }
                }, 100);
            } else modalController.hide();
        }
    });

    let product, isDown, btn, lastEx, lastEy;

    // -=Turn off modal when click on "X" button on top right
    modalController.modal_content.addEventListener("click", (e) => {
        btn = e.target.closest(".modalFullMenu__close");

        if (btn) {
            animateMask.hide();

            let inter = setInterval(() => {
                if (!animateMask.closing) {
                    clearInterval(inter);
                    modalController.hide();
                }
            }, 100);
            // modalController.hide();
        }

        // product = e.target.closest(".menuCategory__item");

        // if (product) {
        // let idEle = product.querySelector("*[data-id]");

        // if (idEle) {
        //     let id = parseInt(idEle.getAttribute("data-id"));

        //     modalController.hide();
        //     productController.load(id);
        // }
        // }
    });

    // -=Load product when click without move your finger or mouse cursor
    modalController.modal_content.addEventListener("mousedown", productDown);
    modalController.modal_content.addEventListener("mousemove", productMove);
    modalController.modal_content.addEventListener("mouseup", productUp);

    // modalController.modal_content.addEventListener("mousemove", (e) => {
    // console.log(e.which);
    // });
    // modalController.modal_content.addEventListener("click", productClick);

    modalController.modal_content.addEventListener("touchstart", productDown);
    modalController.modal_content.addEventListener("touchmove", productMove);
    modalController.modal_content.addEventListener("touchend", productUp);

    // _+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+
    // function productClick(e) {
    //     product = e.target.closest(".menuCategory__item");
    //     if (product) {
    //         let idEle = product.querySelector("*[data-id]");

    //         if (idEle) {
    //             let id = parseInt(idEle.getAttribute("data-id"));

    //             let subCategory = e.target.closest(".itemCard__header_category.active");

    //             // console.log("e.target", e.target);
    //             // console.log(`e.target.closest(".itemCard__header_category.active")`, e.target.closest(".itemCard__header_category.active"));

    //             // browsingWithSubCategory = subCategory ? true : false;
    //             browsingWithSubCategory = false;

    //             modalController.hide();
    //             productController.load(id);
    //         }
    //     }
    // }
    function productDown(e) {
        // console.log(e.button);
        if (isDown) return;
        else {
            product = e.target.closest(".menuCategory__item");

            // console.log("product down", product);

            let isMouse = e.button ? (e.button == 0 ? true : false) : true;
            if (product && isMouse) {
                // console.log("true");
                isDown = true;

                lastEx = e.x || e.touches[0].clientX;
                lastEy = e.y || e.touches[0].clientY;

                // console.log("lastEx", lastEx);
            }
        }
    }

    function productMove(e) {
        // console.log("isDown move", isDown);
        if (!isDown) return;
        else {
            let eX = e.x || e.touches[0].clientX;
            let eY = e.y || e.touches[0].clientY;
            if (eX != lastEx || eY != lastEy) {
                isDown = false;
            }
            //  else {
            //     isDown = true;
            // }
        }
    }

    function productUp(e) {
        // console.log("isDown up", isDown);
        if (!isDown) return;
        else {
            isDown = false;
            // if (e.target.closest(".menuCategory__item") == product) {

            let idEle = product.querySelector("*[data-id]");

            if (idEle) {
                let id = parseInt(idEle.getAttribute("data-id"));

                let subCategory = e.target.closest(".itemCard__header_category.active");

                // console.log("e.target", e.target);
                // console.log(`e.target.closest(".itemCard__header_category.active")`, e.target.closest(".itemCard__header_category.active"));

                browsingWithSubCategory = subCategory ? true : false;
                // browsingWithSubCategory = false;

                // if (!animateMask.opening && !animateMask.closing) {
                // if (modalController.modal_content.querySelector(".modalFullMenu")) {
                // console.log("calling hide");
                animateMask.hide();

                let inter = setInterval(() => {
                    if (!animateMask.closing) {
                        clearInterval(inter);
                        modalController.hide();

                        productController.load(id);
                    }
                }, 100);
                // } else modalController.hide();
                // }

                // modalController.hide();
            }
            // }
        }
    }
}
function menuPopupControl() {
    const pcBtn = document.querySelector(".info__footer-menu"),
        pcBtnIcon = pcBtn.querySelector("i");

    let firstTime = true;

    const mask = document.querySelector(".info__footer-menuMASK"),
        maskIcon = mask.querySelector("i");

    const animationDura = 500;

    pcBtn.onclick = clickFunc;

    // pcBtn.click();

    function clickFunc() {
        if (firstTime) {
            modalController.reset_hide();

            modalController.show_overlay();
            // modalController.show();
            modalController.show_product_menu();
            modalController.render_product_menu();
            firstTime = false;
        } else {
            modalController.show_overlay();

            // let inter = setInterval(() => {
            // if (!animateMask.opening) {
            // clearInterval(inter);

            animateProducts();
            // }
            // }, 50);
            // modalController.show();
        }

        let menu = document.querySelector(".modalFullMenu");
        menu.classList.remove("show");

        // animateMask.s
        animateMask.show();
        // animateMask();

        setTimeout(() => {
            menu.classList.add("show");
        }, animateMask.durationOpen);
    }

    // function animateMask() {}
}
function appControls() {
    function hasActive(ele) {
        // document.body.nextElementSibling;
        // if (ele && ele.classList.contains("active")) {
        // } else return false;

        return ele && ele.classList.contains("active");
        // console.log(ele.previousElementSibling);
    }
    function updatePrice() {
        let opts = options.querySelectorAll(".info__option.active");

        let price = 0;

        for (let i of opts) {
            let p = parseFloat(i.getAttribute("data-price"));

            price += p;
        }

        // console.log("opts", opts, price);

        productController.priceBox.innerHTML = `Total cost:<span>${opts[0].getAttribute("data-cur")} ${price.toFixed(parseInt(productController.priceBox.getAttribute("data-fixed")) || 0)}</span>`;
    }
    function clearAllActive(ele) {
        let firstEle = ele.parentElement.children[0];

        let currentEle = firstEle;
        while (currentEle) {
            currentEle.classList.remove("active");
            currentEle.classList.remove("active--t");
            currentEle.classList.remove("active--m");
            currentEle.classList.remove("active--b");

            currentEle = currentEle.nextElementSibling;
        }

        // console.log("firstEle", firstEle);
    }
    function updateSelect(ele, oneChoice) {
        let prev = ele.previousElementSibling;
        let nex = ele.nextElementSibling;

        // console.log(ele, oneChoice);

        if (oneChoice) {
            clearAllActive(ele);
        }

        if (ele.classList.contains("active")) {
            // Remove active _+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+
            ele.classList.remove("active");

            ele.classList.remove("active--t");
            ele.classList.remove("active--m");
            ele.classList.remove("active--b");

            if (hasActive(prev)) {
                prev.classList.remove("active--t");
            }

            if (hasActive(nex)) {
                nex.classList.remove("active--b");
            }
        } else {
            // Add active _+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_
            ele.classList.add("active");

            if (hasActive(prev)) {
                ele.classList.add("active--b");
                prev.classList.add("active--t");
            }

            if (hasActive(nex)) {
                ele.classList.add("active--t");
                nex.classList.add("active--b");
            }
        }
    }

    // function downFunc(e) {
    //     // if (isDown) return;
    //     // else {
    //     let target = e.target.closest(product);

    //     if (target) {
    //         // console.log(target);

    //         isDown = true;
    //         downValue = target.innerText;
    //         // console.log(downValue);
    //     }
    //     // }
    // }
    // function upFunc(e) {
    //     if (!isDown) return;
    //     else {
    //         isDown = false;
    //         let target = e.target.closest(product);
    //         if (target) {
    //             // console.log(target);

    //             // isDown = true;
    //             upValue = target.innerText;
    //             // console.log(downValue);

    //             if (upValue == downValue) {
    //                 // console.log("YES");
    //                 updateSelect(target, target.parentElement.classList.contains("info__options--oneChoice"));
    //                 updatePrice();
    //             }
    //         }
    //     }
    // }

    function clickFunc(e) {
        let target = e.target.closest(product);
        if (target) {
            // console.log(target);

            // isDown = true;
            // upValue = target.innerText;
            // console.log(downValue);

            // if (upValue == downValue) {
            // console.log("YES");
            updateSelect(target, target.parentElement.classList.contains("info__options--oneChoice"));
            updatePrice();
            // }
        }
    }

    // _+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+

    const options = productController.app.querySelector(".info__body--options");

    // let isDown, downValue, upValue;
    let product = ".info__option[data-price]";

    // console.log(options);

    // options.addEventListener("mousedown", downFunc);
    // window.addEventListener("mouseup", upFunc);

    // options.addEventListener("touchstart", downFunc);
    // window.addEventListener("touchend", upFunc);

    options.addEventListener("click", clickFunc);

    // options.addEventListener("click", clickFunc);
    // app.addEventListener("click");
}
function loadFirstProduct() {
    const params = new URLSearchParams(window.location.search);
    let id = params.get("id");

    id = id ? parseInt(id) : 0;

    let cate = params.get("cate");
    if (cate) {
        id = _product_items.find((r) => r.category == cate).id;
        // console.log(_product_items);

        browsingWithSubCategory = params.get("cate_sub");

        if (browsingWithSubCategory) {
            id = _product_items.find((r) => r.category_sub == browsingWithSubCategory).id;
        }
    }
    // console.log("params", [...params]);
    // console.log(params.get("cate_sub"));
    // sub=y

    // console.log("Param", params);
    // console.log("Param", typeof params);
    // console.log("Param id", params.get("id"));
    // console.log("Param ", params.toString());

    // console.log(Object.keys(params)[0]);

    // for (let param of params) {
    // console.log(param);
    // }
    // console.log("id", id);

    productController.load(id);
}
function updateAvailableArrows() {
    let arrowL = document.querySelector(".app-nav--left"),
        arrowR = document.querySelector(".app-nav--right");

    let category = productController.app.getAttribute("data-category");

    let filteredArray = itemInCategory[category];

    if (filteredArray.length > 1) {
        if (browsingWithSubCategory) {
            let categorySub = productController.app.getAttribute("data-category_sub");

            filteredArray = filteredArray.filter((r) => r.category_sub == categorySub);

            if (filteredArray.length > 1) {
                arrowL.style.filter = "";
                arrowR.style.filter = "";
            } else {
                arrowL.style.filter = "grayscale(1)";
                arrowR.style.filter = "grayscale(1)";
            }
        } else {
            // document.body.style.filter=''
            arrowL.style.filter = "";
            arrowR.style.filter = "";
            // arrowL.style.filter = "grayscale(1)";
        }
    } else {
        arrowL.style.filter = "grayscale(1)";
        arrowR.style.filter = "grayscale(1)";
    }
}
function arrowNavControl() {
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

    function switchProduct(mode) {
        let category = productController.app.getAttribute("data-category");
        let id = productController.app.getAttribute("data-current_id");

        let filteredArray = itemInCategory[category];

        // console.log(itemInCategory[category]);

        if (browsingWithSubCategory) {
            let categorySub = productController.app.getAttribute("data-category_sub");

            filteredArray = filteredArray.filter((r) => r.category_sub == categorySub);
            // console.log("filteredArray", filteredArray);
        }

        let pos,
            j = 0;
        // console.log("id", id);
        // console.log("itemInCategory", itemInCategory);
        // console.log(itemInCategory[category]);

        for (let i of filteredArray) {
            if (i.id == id) {
                pos = j;

                break;
            }
            j++;
        }

        // console.log("pos", pos);

        if (filteredArray.length > 1) {
            if (mode == "next") {
                let next = filteredArray[pos + 1] ? filteredArray[pos + 1] : filteredArray[0];

                // console.log("next", next);

                productController.load(next.id);
            } else {
                let prev = filteredArray[pos - 1] ? filteredArray[pos - 1] : filteredArray[filteredArray.length - 1];

                // console.log("prev", prev);

                productController.load(prev.id);
            }

            return !0;
        } else return !1;
    }
    // _+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+
    let arrowL = document.querySelector(".app-nav--left"),
        arrowR = document.querySelector(".app-nav--right");
    let arrow_anime;

    // arrowL.addEventListener("click", arrow_animeFunc);
    // arrowR.addEventListener("click", );

    arrowR.addEventListener("click", () => {
        if (switchProduct("next")) arrow_animeFunc(arrowR);
    });
    arrowL.addEventListener("click", () => {
        if (switchProduct("prev")) arrow_animeFunc(arrowL);
        // switchProduct("prev");
    });
}
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
var browsingWithSubCategory = false;
const delayAnimationProductInMenu = 50,
    durationAnimationProductInMenu = 1200;
// setInterval(() => {
// console.log(browsingWithSubCategory);
// }, 200);

const categories = new Set(_product_items.map((r) => r.category));
const itemInCategory = separateItem();
modalControls();
appControls();
menuPopupControl();
arrowNavControl();
// console.log(_product_items);

// modalController.reset_hide();
// modalController.show_overlay();
// modalController.show_product_menu();
// modalController.render_product_menu();

document.addEventListener("readystatechange", () => {
    if (document.readyState === "complete") {
        loadFirstProduct();
    }
});
