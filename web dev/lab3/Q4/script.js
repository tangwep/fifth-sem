function toggleLight() {
    const bulb = document.getElementById("bulb");
    const btn = document.getElementById("toggleBtn");
    const status = document.getElementById("status");

    // Check if the current image source contains the word 'bulboff'
    if (bulb.src.match("bulboff")) {
        // TURN IT ON
        bulb.src = "https://www.w3schools.com/js/pic_bulbon.gif";
        btn.innerText = "Turn OFF";
        status.innerText = "ON";
        status.style.color = "#ffcc00"; // Glow yellow when ON
    } else {
        // TURN IT OFF
        bulb.src = "https://www.w3schools.com/js/pic_bulboff.gif";
        btn.innerText = "Turn ON";
        status.innerText = "OFF";
        status.style.color = "#555";
    }
}