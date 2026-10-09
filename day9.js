document.addEventListener("DOMContentLoaded", () => {

    // ========================================
    // ELEMENTS
    // ========================================

    const stars = document.getElementById("stars");
    const hearts = document.getElementById("hearts");

    const envelope = document.getElementById("envelope");
    const openLetterBtn = document.getElementById("openLetterBtn");

    const intro = document.getElementById("intro");
    const finalSurprise = document.getElementById("finalSurprise");

    const finalBtn = document.getElementById("finalBtn");
    const lastMessage = document.getElementById("lastMessage");

    const daysElement = document.getElementById("days");


    // ========================================
    // CREATE STARS
    // ========================================

    for (let i = 0; i < 100; i++) {

        const star = document.createElement("span");

        star.className = "star";

        star.style.left = Math.random() * 100 + "%";
        star.style.top = Math.random() * 100 + "%";

        star.style.animationDelay = Math.random() * 3 + "s";
        star.style.animationDuration =
            (1.5 + Math.random() * 3) + "s";

        stars.appendChild(star);
    }


    // ========================================
    // FLOATING HEARTS
    // ========================================

    function createHeart() {

        const heart = document.createElement("span");

        heart.className = "floating-heart";
        heart.textContent = Math.random() > 0.5 ? "♥" : "♡";

        heart.style.left = Math.random() * 100 + "%";
        heart.style.fontSize = (12 + Math.random() * 20) + "px";

        heart.style.animationDuration =
            (7 + Math.random() * 7) + "s";

        hearts.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 15000);
    }

    setInterval(createHeart, 700);


    // ========================================
    // OPEN THE LETTER
    // ========================================

    let letterOpened = false;

    openLetterBtn.addEventListener("click", () => {

        if (letterOpened) return;

        letterOpened = true;

        envelope.classList.add("open");

        openLetterBtn.textContent = "❤️ LETTER OPENED";
        openLetterBtn.disabled = true;

        // Reveal the final surprise after the
        // letter-opening animation has started.
        setTimeout(() => {

            finalSurprise.classList.add("visible");

            finalSurprise.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }, 1800);

    });


    // ========================================
    // FINAL MESSAGE
    // ========================================

    let finalMessageOpened = false;

    finalBtn.addEventListener("click", () => {

        if (finalMessageOpened) return;

        finalMessageOpened = true;

        lastMessage.classList.remove("hidden");

        finalBtn.textContent = "💖 YOUR MESSAGE IS OPEN";
        finalBtn.disabled = true;

        createHeartBurst();

        setTimeout(() => {
            lastMessage.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });
        }, 150);
    });


    // ========================================
    // HEART BURST
    // ========================================

    function createHeartBurst() {

        for (let i = 0; i < 25; i++) {

            const heart = document.createElement("span");

            heart.className = "floating-heart";
            heart.textContent = "❤️";

            heart.style.left = (35 + Math.random() * 30) + "%";
            heart.style.bottom = "10%";
            heart.style.fontSize = (15 + Math.random() * 20) + "px";
            heart.style.animationDuration = (3 + Math.random() * 3) + "s";

            hearts.appendChild(heart);

            setTimeout(() => {
                heart.remove();
            }, 6500);
        }
    }


    // ========================================
    // BIRTHDAY COUNTDOWN
    // Birthday: 14 October 2026
    // ========================================

    function updateCountdown() {

        const now = new Date();

        // Local midnight at the beginning of October 14.
        let birthday = new Date(
            now.getFullYear(),
            9,
            14,
            0, 0, 0
        );

        // If this year's birthday has passed, use next year.
        if (now >= birthday) {
            birthday = new Date(
                now.getFullYear() + 1,
                9,
                14,
                0, 0, 0
            );
        }

        const difference = birthday.getTime() - now.getTime();

        const daysLeft = Math.ceil(
            difference / (1000 * 60 * 60 * 24)
        );

        daysElement.textContent = daysLeft;
    }

    updateCountdown();

    // Refresh the countdown every minute.
    setInterval(updateCountdown, 60000);

});