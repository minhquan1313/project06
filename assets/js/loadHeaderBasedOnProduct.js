function loadHeader() {
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
    // _+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+

    const __productUrl = "/project06/products/index.html";
    const headerNav = document.querySelector(".main .header__nav_items");
    const headerNavMb = document.querySelector(".main .navMobile__side-items");
    // console.log('headerNavMb',headerNavMb);

    headerNav.innerHTML = ``;
    if (headerNavMb) {
        headerNavMb.innerHTML = ``;
    }

    const __icon = {
        Specialty: `<i class="icofont-coffee-alt"></i>`,
        Coffee: `<i class="icofont-coffee-cup"></i>`,
        "Blended Non-caffein": `<i class="icofont-beans"></i>`,
        "Blended Beverage": `<i class="icofont-coffee-pot"></i>`,
        Smoothie: `<i class="icofont-juice"></i>`,
        Unknown: ``,
    };

    const categories = new Set(_product_items.map((r) => r.category));
    const itemInCategory = separateItem();

    let time = 0;

    for (let i of categories) {
        let hasSub = !!itemInCategory[i].find((r) => r.category_sub);

        // console.log(i, hasSub);

        // console.log("itemInCategory[i]", itemInCategory[i]);

        let li = document.createElement("li");

        if (hasSub) {
            let subs = new Set(itemInCategory[i].map((r) => r.category_sub));

            // console.log("subs", [...subs]);

            // for (let j of subs) {
            //     console.log(j);
            // }

            // let subHtml = [...subs]
            //     .map(
            //         (r) => `
            //         <li class="nav_item__subItem">
            //             <a href="${__productUrl}?cate=${i}&cate_sub=${r}" class="a--mask"></a>
            //             ${r}
            //         </li>
            // `
            //     )
            //     .join("");
            let subHtml = [...subs].map((r) => `<li class="nav_item__subItem"><a href="${__productUrl}?cate=${i}&cate_sub=${r}" class="a--mask"></a><p>${r}</p></li>`).join("");
            // console.log(subHtml);

            li.classList.add("header__nav_item", "header__nav_item--hasSub");
            li.style.cssText = `--d:0.${time++}s`;
            //     li.innerHTML = `
            // <div class="nav_item__wrapper">
            //     <div class="nav_item__icon">${__icon[i]}</div>
            //     <div class="nav_item__name">
            //         <a href="${__productUrl}?cate=${i}" class="a--mask"></a>
            //         <p>${i}</p>
            //         <div class="navMobile__Arr"><i class="icofont-long-arrow-right"></i></div>
            //         <ul class="nav_item__subItems">
            //             ${subHtml}
            //         </ul>
            //     </div>
            // </div>
            //     `;

            li.innerHTML = `<div class="nav_item__wrapper"><div class="nav_item__icon">${__icon[i]}</div><div class="nav_item__name"><a href="${__productUrl}?cate=${i}" class="a--mask"></a><p>${i}</p><button class="navMobile__Arr"><i class="icofont-long-arrow-right"></i></button><ul class="nav_item__subItems">${subHtml}</ul></div></div>`;

            // let an = li.querySelectorAll("a");
            // [...an].forEach((r) => (r.href = "javascript:;"));

            // console.log("li", li);
            headerNav.appendChild(li);
            if (headerNavMb) {
                headerNavMb.appendChild(li.cloneNode(true));
                // headerNavMb.appendChild(li.cloneNode(true));
                // headerNavMb.appendChild(li.cloneNode(true));
                // headerNavMb.appendChild(li.cloneNode(true));
            }
        } else {
            // <li class="header__nav_item">
            // <a href="/products/index.html?cate=" class="nav_item__wrapper">
            //     <div class="nav_item__icon"><i class="icofont-juice"></i></div>
            //     <div class="nav_item__name"><p>Smoothie</p></div>
            // </a>
            // </li>

            li.classList.add("header__nav_item");
            li.innerHTML = `<a href="${__productUrl}?cate=${i}" class="nav_item__wrapper"><div class="nav_item__icon">${__icon[i]}</div><div class="nav_item__name"><p>${i}</p></div></a>`;
            li.style.cssText = `--d:0.${time++}s`;
            //     li.innerHTML = `
            //     <a href="${__productUrl}?cate=${i}" class="nav_item__wrapper">
            //         <div class="nav_item__icon">${__icon[i]}</div>
            //         <div class="nav_item__name"><p>${i}</p></div>
            //     </a>
            // `;

            // let an = li.querySelectorAll("a");
            // [...an].forEach((r) => (r.href = "javascript:;"));

            headerNav.appendChild(li);
            if (headerNavMb) {
                headerNavMb.appendChild(li.cloneNode(true));
                // headerNavMb.appendChild(li.cloneNode(true));
                // headerNavMb.appendChild(li.cloneNode(true));
                // headerNavMb.appendChild(li.cloneNode(true));
            }
        }

        // console.log(itemInCategory[i]);
    }

    // let ______i = document.querySelector('script[src$="loadHeaderBasedOnProduct.js"]');
    // if (______i) {
    //     ______i.remove();
    // }
    // ______i = document.querySelector('script[src$="loadHeaderBasedOnProduct.min.js"]');
    // if (______i) {
    //     ______i.remove();
    // }
}
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

loadHeader();
