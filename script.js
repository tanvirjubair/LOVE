// Floating hearts animation
gsap.to(".floating-hearts", {
    duration: 10,
    y: -window.innerHeight,
    repeat: -1,
    ease: "linear"
});

// Search functionality
document.getElementById("search-btn").addEventListener("click", () => {
    const name = document.getElementById("search-bar").value.toLowerCase();
    if (name === "eva") {
        document.body.style.background = "pink";
        showRoseRain();
    }
});

function showRoseRain() {
    const roseContainer = document.getElementById("rose-rain");
    for (let i = 0; i < 50; i++) {
        const rose = document.createElement("div");
        rose.className = "rose";
        rose.innerText = "🌹";
        roseContainer.appendChild(rose);

        gsap.fromTo(rose, { x: Math.random() * window.innerWidth, y: -50 },
            { y: window.innerHeight + 50, duration: 5, repeat: -1 });
    }
}
