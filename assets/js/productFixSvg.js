function fixSvgRun() {
    const breakPoint = 1280;

    const svg = document.querySelector("#fixSvg");
    const parent = svg.parentElement;

    // console.log("parent", parent);
    // console.log(window.getComputedStyle(parent).height);

    fix();
    window.addEventListener("resize", fix);

    function fix() {
        if (window.innerWidth >= breakPoint) {
            svg.style.height = window.getComputedStyle(parent).height;
        } else {
            svg.style.height = "";
        }
    }
    // console.log('svg',svg);
}
fixSvgRun();
// document.addEventListener("readystatechange", () => {
//     if (document.readyState === "complete") {
//     }
// });
