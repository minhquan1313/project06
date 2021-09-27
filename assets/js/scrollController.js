let __supportsPassive = false;
try {
    window.addEventListener(
        "test",
        null,
        Object.defineProperty({}, "passive", {
            get: function () {
                __supportsPassive = true;
            },
        })
    );
} catch (e) {}
let __wheelOpt = __supportsPassive ? { passive: false } : false;
const plScroll = {
    keys: { 37: 1, 38: 1, 39: 1, 40: 1 },
    wheelOpt: __wheelOpt,
    wheelEvent: "onwheel" in document.createElement("div") ? "wheel" : "mousewheel",
    preventDefault: function (e) {
        e.preventDefault();
    },
    preventDefaultForScrollKeys: function (e) {
        if (keys[e.keyCode]) {
            preventDefault(e);
            return false;
        }
    },
    disable: function () {
        window.addEventListener("DOMMouseScroll", this.preventDefault, false); // older FF
        window.addEventListener(this.wheelEvent, this.preventDefault, this.wheelOpt); // modern desktop
        window.addEventListener("touchmove", this.preventDefault, this.wheelOpt); // mobile
        window.addEventListener("keydown", this.preventDefaultForScrollKeys, false);
    },
    enable: function () {
        window.removeEventListener("DOMMouseScroll", this.preventDefault, false);
        window.removeEventListener(this.wheelEvent, this.preventDefault, this.wheelOpt);
        window.removeEventListener("touchmove", this.preventDefault, this.wheelOpt);
        window.removeEventListener("keydown", this.preventDefaultForScrollKeys, false);
    },
};
