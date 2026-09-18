
/* =========================================================
   OPEN MY HEART
========================================================= */

function startSurprise() {

    const opening =
        document.getElementById("opening");

    const music =
        document.getElementById("birthdayMusic");


    /*
       Start music because the user has
       interacted with the page.
    */

    if (music) {

        music.volume = 0.7;

        music.play()
            .then(function () {

                console.log("Love music started ❤️");

            })
            .catch(function (error) {

                console.log(
                    "Music could not start:",
                    error
                );

            });

    }


    /*
       Hide opening screen.
       We DO NOT open another page.
    */

    opening.classList.add(
        "opening-hidden"
    );


    /*
       Reveal birthday content.
    */

    document.body.classList.add(
        "surprise-opened"
    );


    /*
       Start floating hearts.
    */

    startFloatingHearts();

}



/* =========================================================
   MUSIC ON / OFF
========================================================= */

function toggleMusic() {

    const music =
        document.getElementById("birthdayMusic");

    const button =
        document.getElementById("musicButton");


    if (!music) {
        return;
    }


    if (music.paused) {

        music.play();

        button.innerHTML = "🎵";

    }

    else {

        music.pause();

        button.innerHTML = "🔇";

    }

}



/* =========================================================
   PHOTO LIGHTBOX
========================================================= */

function openPhoto(card) {

    const image =
        card.querySelector("img");

    if (!image) {
        return;
    }


    const lightbox =
        document.getElementById(
            "photoLightbox"
        );

    const lightboxImage =
        document.getElementById(
            "lightboxImage"
        );


    lightboxImage.src =
        image.src;


    lightboxImage.alt =
        image.alt;


    lightbox.classList.add(
        "active"
    );


    document.body.style.overflow =
        "hidden";

}



function closePhoto() {

    const lightbox =
        document.getElementById(
            "photoLightbox"
        );


    lightbox.classList.remove(
        "active"
    );


    document.body.style.overflow =
        "";

}



/* =========================================================
   ESC KEY CLOSE PHOTO
========================================================= */

document.addEventListener(
    "keydown",
    function(event) {

        if (event.key === "Escape") {

            closePhoto();

        }

    }
);



/* =========================================================
   FLOATING HEARTS
========================================================= */

function startFloatingHearts() {

    setInterval(
        createFloatingHeart,
        700
    );

}



function createFloatingHeart() {

    const heart =
        document.createElement("div");


    heart.className =
        "floating-heart";


    const hearts = [
        "❤️",
        "💕",
        "💗",
        "💖",
        "💓",
        "💞"
    ];


    heart.innerHTML =
        hearts[
            Math.floor(
                Math.random() *
                hearts.length
            )
        ];


    heart.style.left =
        Math.random() * 100 + "%";


    heart.style.fontSize =
        (15 + Math.random() * 25) + "px";


    heart.style.animationDuration =
        (4 + Math.random() * 4) + "s";


    document.body.appendChild(
        heart
    );


    setTimeout(
        function() {

            heart.remove();

        },
        8000
    );

}



/* =========================================================
   FADE-IN OBSERVER
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        const elements =
            document.querySelectorAll(
                ".photo-card, .reason-card, .letter-card"
            );


        const observer =
            new IntersectionObserver(
                function(entries) {

                    entries.forEach(
                        function(entry) {

                            if (
                                entry.isIntersecting
                            ) {

                                entry.target.style.opacity =
                                    "1";

                                entry.target.style.transform =
                                    "translateY(0)";

                            }

                        }
                    );

                },
                {
                    threshold: 0.15
                }
            );


        elements.forEach(
            function(element) {

                element.style.opacity =
                    "0";

                element.style.transform =
                    "translateY(30px)";

                element.style.transition =
                    "opacity 0.8s ease, transform 0.8s ease";


                observer.observe(
                    element
                );

            }
        );

    }
);
