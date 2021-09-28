function header_searchHandler() {
    // _+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+

    const fakeDelaySearch = 600;
    const minIndex = 2;
    const url = "/project06/products/index.html";
    const resultLimit = 10;

    // _+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+
    const pcSearch = document.querySelector(".header__search_input"),
        pcResultBox = document.querySelector(".result__body_items");

    const mobileSearch = document.querySelector(".navMobile__side .header__search_input"),
        mobileResultBox = document.querySelector(".navMobile__side  .result__body_items"),
        mobileReset = document.querySelector(".header__search_reset");

    // console.log("mobileReset", mobileReset);

    // console.log("mobileResultBox", mobileResultBox);
    // let eleTrigger;

    let keyWord, lastKeyWord;
    let condition;
    let result;
    let failing = false,
        waiting = true,
        looking = false;
    let timeOut;

    const defaultType = {
        fail: {
            icon: '<div class="icon--error"></div>',
            msg: "Sorry, found nothing",
        },
        wait: {
            icon: '<div class="result_item_loader"></div>',
            msg: `Type at least ${minIndex} letter${minIndex > 1 ? "s" : ""}...`,
        },
        looking: {
            icon: '<div class="result_item_loader"></div>',
            msg: "Searching...",
        },
    };

    // console.log(_product_items[0]);

    resetSearchResult();
    resultToWeb(htmlDefault("wait"));

    // window.addEventListener("keypress", (e) => {
    //   console.log("keypress", e);
    // });

    pcSearch.addEventListener("keydown", keydownFunc);
    pcSearch.addEventListener("keyup", searchFunc);

    if (mobileSearch) {
        mobileSearch.addEventListener("keydown", keydownFunc);
        mobileSearch.addEventListener("keyup", searchFunc);

        mobileReset.addEventListener("click", (e) => {
            resetSearchResult();
            resultToWeb(htmlDefault("wait"));
        });
    }
    // _+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+
    function keydownFunc(e) {
        lastKeyWord = this.value;
        // eleTrigger = this;
    }
    function searchFunc(e) {
        // console.log("keyup", e);

        keyWord = this.value;

        // console.log("keyWord    ", keyWord, "\nlastKeyWord", lastKeyWord);

        condition = !!keyWord && keyWord.trim().length >= minIndex;
        // console.log("condition", condition);
        // console.log("condition", condition);

        // console.log(keyWord, condition);

        if (timeOut) clearTimeout(timeOut);

        if (!condition) {
            // console.log("in !condition");
            if (!waiting) {
                waiting = true;
                resetSearchResult();
                resultToWeb(htmlDefault("wait"));

                failing = false;
            }
            return;
        } else {
            // console.log("failing", failing, "e.keyCode", e.keyCode);
            // if ((!failing && e.keyCode != 8) || e.keyCode == 8) {
            // console.log("if ((!failing && e.keyCode != 8) || e.keyCode == 8) {");
            // console.log("keyWord    ", keyWord);
            // console.log("lastKeyWord", lastKeyWord);
            if (keyWord != lastKeyWord) {
                // console.log("ok");
                beforeSearch(keyWord);
                // }
            }
            // else if (e.keyCode == 8) {
            //   beforeSearch(keyWord);
            // }
        }
    }

    function beforeSearch(keyWord) {
        if (!looking) {
            looking = true;

            if (!failing) {
                resetSearchResult();
                resultToWeb(htmlDefault("looking"));
            }
        }

        timeOut = setTimeout(() => {
            looking = false;

            // console.log("ok search");
            search(keyWord);
        }, fakeDelaySearch);
    }

    function search(keyWord) {
        waiting = false;

        keyWord = keyWord.toLowerCase();
        result = _product_items.filter((r) => {
            return r.name.toLowerCase().includes(keyWord);
        });

        // console.log(result);

        if (result && result[0]) {
            failing = false;

            resetSearchResult();

            result.forEach((r, i) => {
                // console.log(r);
                if (typeof resultLimit != "undefined") {
                    if (i < resultLimit) {
                        resultToWeb(htmlProduct(r), true);
                    }
                } else {
                    resultToWeb(htmlProduct(r), true);
                }
            });
        } else {
            if (!failing) {
                failing = true;

                resetSearchResult();
                resultToWeb(htmlDefault("fail"));
            }

            // }
        }
        // console.log("result", result);
    }

    function htmlProduct(obj) {
        let types = obj.type.map((r) => `<li class="item_info__size">${r.short}</li>`).join("");

        let prices = obj.type.map((r) => r.price);
        let price = "";

        if (prices.length < 2) {
            price = obj.currency + prices[0];
        } else {
            let maxP = Math.max(...prices),
                minP = Math.min(...prices);
            price = obj.currency + minP + " - " + obj.currency + maxP;
        }

        let t = document.createElement("li");
        t.classList.add("result__body_item");
        t.classList.add("result__body_item--loading");
        // t.classList.add("result__body_item--loaded");

        t.innerHTML = `
  <a href="${url + "?id=" + obj.id}" class="result__body_item_wrapper"><div class="result_item_cover"><img src="${obj.cover}" alt="" /></div><div class="result_item_info"><p class="item_info__name">${
            obj.name
        }</p><ul class="item_info__sizes">${types}</ul><p class="item_info__price">${price}</p></div></a>`;
        // t.innerHTML = `
        // <a href="${url + "?id=" + obj.id}" class="result__body_item_wrapper">
        //   <div class="result_item_cover">
        //     <img src="${obj.cover}" alt="" />
        //   </div>
        //   <div class="result_item_info">
        //     <p class="item_info__name">${obj.name}</p>

        //     <ul class="item_info__sizes">
        //       ${types}
        //     </ul>

        //     <p class="item_info__price">${price}</p>
        //   </div>
        // </a>
        //   `;
        return t;
    }
    function htmlDefault(type) {
        let t = document.createElement("li");
        t.classList.add("result__body_item");
        t.classList.add("result__body_item--noClick");

        t.innerHTML = `<div class="result__body_item_wrapper"><div class="result_item_cover">${defaultType[type].icon}</div><div class="result_item_info"><p class="item_info__name item_info__name--error">${defaultType[type].msg}</p></div></div>`;
        // t.innerHTML = `
        // <li class="result__body_item result__body_item--noClick">
        //   <div class="result__body_item_wrapper">
        //     <div class="result_item_cover">
        //       ${defaultType[type].icon}
        //     </div>
        //     <div class="result_item_info">
        //       <p class="item_info__name item_info__name--error">${defaultType[type].msg}</p>
        //     </div>
        //   </div>
        // </li>
        //   `;
        return t;
    }
    function resetSearchResult() {
        pcResultBox.innerHTML = "";
        if (mobileResultBox) {
            mobileResultBox.innerHTML = "";
        }
    }
    function resultToWeb(html, hasImg) {
        // console.log("eleTrigger", eleTrigger);

        // mobileResultBox.parentElement

        // eleTrigger.parentElement.querySelector

        pcResultBox.appendChild(html);
        let cl = html.cloneNode(true);
        if (mobileResultBox) {
            // document.body.cloneNode(true);

            mobileResultBox.appendChild(cl);
        }

        if (hasImg) {
            let img = html.querySelector("img");
            let imgCl = cl.querySelector("img");

            // console.log(img);

            if (img.complete) {
                // console.log();
                html.classList.add("result__body_item--loaded");
            } else {
                img.onload = (e) => {
                    html.classList.add("result__body_item--loaded");
                };
            }

            if (imgCl.complete) {
                cl.classList.add("result__body_item--loaded");
            } else {
                imgCl.onload = (e) => {
                    cl.classList.add("result__body_item--loaded");
                };
            }
        }
    }
}
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
document.addEventListener("readystatechange", () => {
    if (document.readyState === "complete") {
        // let inter = setInterval(() => {
        // if (typeof _product_items) {
        // clearInterval(inter);

        header_searchHandler();

        // let ______i = document.querySelector('script[src$="header_search.js"]');
        // if (______i) {
        //     ______i.remove();
        // }
        // ______i = document.querySelector('script[src$="header_search.min.js"]');
        // if (______i) {
        //     ______i.remove();
        // }
        // }
        // }, 100);
    }
});
