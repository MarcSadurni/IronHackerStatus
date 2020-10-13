// ANIMACIÓN PARA EL TEXTO DE LA GALLETA

const text = baffle(".random-quote");
text.set({
    characters: "█▓█ ▒░/▒░ █░▒▓/ █▒▒ ▓▒▓/█ ░█▒/ ▒▓░ █<░▒ ▓/░>",
    speed: 120
});
text.start();
text.reveal(4000);
