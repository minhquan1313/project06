function loader_run() {
    // console.log("loader_run");
    // console.log(anime);
    const loader = document.querySelector(".loader"),
        loader_bg_wrapper = loader.querySelector(".loader__bg_wrapper"),
        loader_tl = loader_bg_wrapper.querySelector(".loader__bg--tl"),
        loader_tr = loader_bg_wrapper.querySelector(".loader__bg--tr");

    const loading_text = loader.querySelector(".loader__logo_loading");

    const svg = loader.querySelector("svg"),
        cup = svg.querySelector("#loader__logo_cup"),
        coffeeText = svg.querySelector("#loader__logo_coffee"),
        name = svg.querySelector("#loader__logo_name"),
        since = svg.querySelector("#loader__logo_since");

    splitText();

    // console.log("Inter val");
    let inter = setInterval(() => {
        // console.log(readyToPlay);
        if (readyToPlay) {
            // console.log("ready to play");
            clearInterval(inter);

            setTimeout(() => {
                playAnimateLogo();
                setTimeout(() => {
                    playAnimateBg();
                }, 600);
            }, 500);
        }
    }, 100);
    // _+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+
    function splitText() {
        let chars = loading_text.innerText.split("");
        loading_text.innerHTML = chars.map((c, i) => `<span style="--delay:0.${i}s">${c}</span>`).join("");
    }
    function playAnimateLogo() {
        // Stop jumping of loading text
        for (let i of loading_text.querySelectorAll("span")) {
            i.style.animation = "none";
            // i.style.animationPlayState = "paused";
        }

        // Scale 0 loading text
        setTimeout(() => {
            anime({
                targets: loading_text.querySelectorAll("span"),
                scaleY: [1, 0],
                opacity: [1, 0],
                easing: "easeOutQuad",
                delay: anime.stagger(50),
                duration: 300,
            });

            // Show coffee and tea text
            anime({
                targets: coffeeText.querySelectorAll("path"),
                opacity: [0, 1],
                translateY: ["-5px", 0],
                easing: "easeOutElastic",
                delay: anime.stagger(50),
                duration: 800,
            });

            setTimeout(() => {
                // Move cup to its origin pos
                anime({
                    targets: cup,
                    translateY: ["16%", 0],
                    easing: "easeOutQuad",
                    duration: 500,
                });

                anime({
                    // Show name
                    targets: name.querySelectorAll("path"),
                    translateY: ["-10%", 0],
                    opacity: [0, 1],
                    // easing: "easeOutQuad",
                    easing: "easeOutBack",
                    delay: 100,
                    duration: 400,
                });
                anime({
                    // Show since
                    targets: since.querySelectorAll("path"),
                    translateY: ["10%", 0],
                    opacity: [0, 1],
                    // easing: "easeOutQuad",
                    easing: "easeOutBack",
                    delay: 100,
                    duration: 400,
                });
            }, 100);
        }, 10);
    }
    function playAnimateBg() {
        let tl = anime.timeline({
            targets: svg,
        });
        tl.add(
            {
                scale: [1.2, 1],
                duration: 1100,
                easing: "easeOutBounce",
            },
            0
        ).add(
            {
                translateY: [0, "400%"],
                easing: "easeInQuad",
                duration: 800,
            },
            1100
        );

        // background to right side
        anime({
            targets: loader_tl,
            translateX: [0, "-50%"],
            easing: "easeOutExpo",
            duration: 1200,
        });
        anime({
            targets: loader_tr,
            translateX: [0, "150%"],
            easing: "easeOutExpo",
            duration: 1200,
        });

        // show text Phuc Long + coffe and tea on background
        setTimeout(() => {
            loader.classList.add("active");
        }, 300);

        // side up all loader
        anime({
            targets: loader,
            translateY: [0, "-200%"],
            easing: "easeInCubic",
            delay: 1000,
            duration: 800,
        });

        setTimeout(() => {
            document.body.classList.remove("modal--active");
            loader_loaded = true;

            loader.remove();
            // console.log("loader_loaded = true");
        }, 1900);
    }
}

// function checkImgs() {
//   let imgs = document.images;
//   if (imgs && imgs[0]) {
//     let currentLength = 0;
//     let imgsLoaded = 0;

//     let msg = document.querySelector(".msg");

//     let interval = setInterval(() => {
//       if (currentLength != imgs.length) {
//         currentLength = imgs.length;

//         imgsLoaded = 0;
//         for (let i of imgs) {
//           let ele = i;

//           // console.log(i);
//           if (ele.complete) {
//             // console.log("i loaded", i);
//             let div = document.createElement("div");
//             div.innerHTML = ele.src.substr(ele.src.lastIndexOf("/"));

//             let br = document.createElement("br");
//             msg.appendChild(div);
//             msg.appendChild(br);

//             imgsLoaded++;
//           } else {
//             ele.onload = (e) => {
//               let div = document.createElement("div");
//               div.innerHTML = "ONLOAD " + ele.src.substr(ele.src.lastIndexOf("/"));

//               let br = document.createElement("br");
//               msg.appendChild(div);
//               msg.appendChild(br);

//               imgsLoaded++;
//             };

//             ele.onerror = (e) => {
//               let div = document.createElement("div");
//               div.innerHTML = "ONERROR" + ele.src.substr(ele.src.lastIndexOf("/"));

//               let br = document.createElement("br");
//               msg.appendChild(div);
//               msg.appendChild(br);

//               imgsLoaded++;
//             };
//           }
//         }
//       }
//     }, 100);

//     let inter = setInterval(() => {
//       // console.log(imgsLoaded, imgs.length);

//       // msg.innerText = `${imgsLoaded}/${imgs.length}`;

//       if (imgsLoaded == imgs.length) {
//         clearInterval(inter);
//         clearInterval(interval);

//         readyToPlay = true;
//       }
//     }, 100);
//   } else {
//     readyToPlay = true;
//   }
// }
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
var loader_loaded = false,
    readyToPlay = false;
loader_run();

document.addEventListener("readystatechange", () => {
    if (document.readyState === "complete") {
        anime.suspendWhenDocumentHidden = false;

        readyToPlay = true;

        // checkImgs();
    }
});
