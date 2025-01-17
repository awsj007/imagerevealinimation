const elementsWorks = document.querySelectorAll(".item-work");
const slidePicWorks = document.querySelector("#gallery-work");
const slidePicsWorks = document.querySelector("#work-images");

gsap.set(slidePicWorks, { autoAlpha: 0 });

elementsWorks.forEach((element, index) => {
    element.addEventListener("mouseenter", function () {
        gsap.to(slidePicsWorks, {
            marginTop: `-${280 * index}px`,
            duration: 0.2,
            ease: "power1",
        });
    });

    element.addEventListener("mouseleave", function () {
        gsap.to(element, { color: "initial", duration: 0.2, ease: "power1" });
    });
});

window.addEventListener("mousemove", function (e) {
    gsap.to(slidePicWorks, {
        top: `${e.clientY}px`,
        left: `${e.clientX}px`,
        xPercent: -20,
        yPercent: -45,
        duration: 0.2,
        ease: "power1",
    });
});

document
    .querySelector(".items-works")
    .addEventListener("mouseenter", function () {
        gsap.to(slidePicWorks, {
            autoAlpha: 1,
            duration: 0.2,
            ease: "power1",
        });
    });

document
    .querySelector(".items-works")
    .addEventListener("mouseleave", function () {
        gsap.to(slidePicWorks, {
            autoAlpha: 0,
            duration: 0.2,
            ease: "power1",
        });
    });
