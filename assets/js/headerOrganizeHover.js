function organizeProcess() {
    const items = document.querySelectorAll(".header__nav .header__nav_item--hasSub");

    // console.log("items", items);

    items.forEach((r) => {
        r.addEventListener("mouseenter", enterM);
    });

    function enterM(e) {
        let ele = this;
        let ul = ele.querySelector(".nav_item__subItems");
        let trans = parseFloat(window.getComputedStyle(ul).transitionDuration);
        // let isOver = false;

        // let to =
        ele.removeEventListener("mouseenter", enterM);
        // document.removeEventListener("mouseenter", enterM);
        setTimeout(() => {
            let bound = ul.getBoundingClientRect();
            let x = bound.x;
            // console.log("x", x);

            if (x < 0) {
                // isOver = true;
                // console.log("ul.style.cssText", "'" + ul.style.cssText + "'");

                if (!ul.style.cssText) {
                    ul.style.cssText = `--trx:${-x - bound.width / 2}px`;
                }
                // else {
                //     ul.style.cssText = `--trx:${-x}px`;
                // }

                // ul.style.cssText = `--trx:${-bound.width / 2}px`;
                // console.log(x, bound.width / 2);
            }

            // setTimeout(() => {
            //     if (isOver) {
            //         bound = ul.getBoundingClientRect();
            //         x = bound.x;
            //         if (x < 0) {
            //             ul.style.cssText = `--trx:${-x - bound.width / 2}px`;
            //         }
            //     }
            // }, trans * 1000);
        }, trans * 1000);

        // ele.onmouseleave = () => {
        //     leaveM(to);
        // };
    }
    // function leaveM(tout) {
    //     clearTimeout(tout);
    // }
}

organizeProcess();
