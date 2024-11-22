function toggleDrawer() {
    const drawer = document.getElementById("drawer");
    const isOpen = drawer.style.bottom === "0px";

    if (isOpen) {
        drawer.style.bottom = "-100%";
    } else {
        drawer.style.bottom = "0";
        triggerConfetti()
    }
}

function triggerConfetti() {
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { x: 0.5, y: 0.5 }, // Center the confetti
        colors: ['#ff9bd2', '#ff80c2', '#ff4f9d'],
    });
}