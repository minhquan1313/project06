function __loaderRemove() {
    const loader = document.querySelector(".loader3ThreeDots");

    const delayTimeout = 700,
        animeDura = 300;

    setTimeout(() => {
        anime({
            targets: loader,

            opacity: [1, 0],
            easing: "easeOutSine",
            duration: animeDura,
        });

        setTimeout(() => {
            loader.remove();
            document.body.classList.remove("modal--active");
        }, animeDura);
    }, delayTimeout);
}

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
document.addEventListener("readystatechange", () => {
    if (document.readyState === "complete") {
        __loaderRemove();
    }
});
