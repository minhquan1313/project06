function headerControls() {
    const header = {
        trigger: document.querySelector(".navMobile__trigger"),
        show: function () {
            document.body.classList.add("noScroll");
            this.trigger.classList.add("active");
        },
        hide: function () {
            document.body.classList.remove("noScroll");
            this.trigger.classList.remove("active");
        },
        toSide: function (ele) {
            if (ele.classList.contains("toSide")) {
                ele.classList.remove("toSide");
            } else {
                ele.classList.add("toSide");
            }
        },
        removeToSide: function (ele) {
            ele.classList.remove("toSide");
        },
        toRight: function (ele) {
            ele.style.transform = "translateX(-100%)";
        },
        toNormal: function (ele) {
            ele.style.transform = "";
        },
    };
    function clickFunc(e) {
        // alert(e.target.className);
        // console.log("e", e);
        e.preventDefault();

        let arr = e.target.closest(".navMobile__Arr");
        let anchor = e.target.closest("a");
        let ele = e.target.closest(".header__nav_item--hasSub");

        if (lastAnchor) lastAnchor.classList.remove("active");
        // console.log("arr", arr);

        setTimeout(() => {
            if (arr) {
                // console.log("yes");
                // alert("yeh");
                theSame = false;
                if (lastToSide) {
                    if (lastToSide != ele) {
                        lastToSide.style.zIndex = "";

                        header.removeToSide(lastToSide);
                    } else if (ele.classList.contains("toSide")) {
                        theSame = true;
                    }

                    console.log("toSideChild", toSideChild);
                    if (toSideChild.length > 0) {
                        for (let i of toSideChild) {
                            // console.log("i", i);
                            header.toNormal(i);
                        }
                        // theSame = true;
                    }
                    // header.removeToSide(lastToSide);
                }
                lastToSide = ele;
                header.toSide(ele);
                ele.style.zIndex = baseZIndex;
                // lastToSide = ele.classList.contains("toSide") ? null : ele;

                // console.log("theSame", theSame);

                let count = ele.querySelectorAll(".nav_item__subItem");
                toSideChild = [];
                next = ele;
                if (!theSame) {
                    for (let i of count) {
                        // document.body.nextElementSibling
                        next = next.nextElementSibling;
                        if (!next) {
                            break;
                        } else {
                            header.toRight(next);
                            toSideChild.push(next);
                        }
                    }
                } else {
                    for (let i of count) {
                        next = next.nextElementSibling;
                        if (!next) {
                            break;
                        } else {
                            header.toNormal(next);
                        }
                    }
                }
            } else if (anchor) {
                if (lastAnchor) lastAnchor.classList.remove("active");
                // console.log("anchor", anchor);
                // window.location.
                // window.open(anchor.href);
                let pa = anchor.parentElement;
                console.log("anchor", anchor, "pa", pa);
                if (pa.classList.contains("nav_item__subItem") || pa.classList.contains("header__nav_item")) {
                    pa.classList.add("active");
                    lastAnchor = pa;
                } else {
                    ele.classList.add("active");
                    lastAnchor = ele;
                }

                setTimeout(() => {
                    location.replace(anchor.href);
                }, baseTransition);
            }
        }, 10);
    }
    // -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
    const nav = document.querySelector(".navMobile");
    const menuIcon = document.querySelector(".navMobile__side-items");
    const baseTransition = 300,
        baseZIndex = 2;
    let lastToSide,
        toSideChild = [],
        theSame,
        next,
        lastAnchor;

    header.trigger.addEventListener("touchstart", (e) => {
        let el = header.trigger;

        if (el.classList.contains("active")) {
            header.hide();
        } else {
            header.show();
        }
    });

    menuIcon.addEventListener("touchstart", clickFunc);
    // menuIcon.addEventListener("click", clickFunc);
    // menuIcon.addEventListener("mouseup", clickFunc);
}
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
headerControls();
document.addEventListener("readystatechange", () => {
    if (document.readyState === "complete") {
    }
});
