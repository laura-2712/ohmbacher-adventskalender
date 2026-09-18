/* ========================================
   VERANSTALTUNGEN
   ======================================== */

const veranstaltungen = {

    1: {
        titel: "Adventliches Basteln",
        datum: "01. Dezember",
        uhrzeit: "18:00 Uhr",
        ort: "Bürgerhaus",
        beschreibung: "Gemeinsam basteln wir schöne Weihnachtsdekoration für die Adventszeit."
    },

    2: {
        titel: "Glühweinabend",
        datum: "02. Dezember",
        uhrzeit: "18:30 Uhr",
        ort: "Dorfplatz",
        beschreibung: "Bei Glühwein und Punsch gemütlich zusammenkommen und die Adventszeit genießen."
    },

    3: {
        titel: "Weihnachtsgeschichten",
        datum: "03. Dezember",
        uhrzeit: "17:00 Uhr",
        ort: "Bücherei",
        beschreibung: "Gemütlicher Abend mit schönen Weihnachtsgeschichten für Groß und Klein."
    },

    4: {
        titel: "Plätzchenbacken",
        datum: "04. Dezember",
        uhrzeit: "15:00 Uhr",
        ort: "Gemeindehaus",
        beschreibung: "Gemeinsam backen und verzieren wir leckere Weihnachtsplätzchen."
    },

    5: {
        titel: "Weihnachtsmarkt",
        datum: "05. Dezember",
        uhrzeit: "16:00 Uhr",
        ort: "Dorfplatz",
        beschreibung: "Kleiner Weihnachtsmarkt mit verschiedenen Ständen und weihnachtlicher Atmosphäre."
    },

    6: {
        titel: "Nikolausabend",
        datum: "06. Dezember",
        uhrzeit: "18:00 Uhr",
        ort: "Feuerwehrhaus",
        beschreibung: "Ein gemütlicher Nikolausabend für die ganze Familie."
    },

    7: {
        titel: "Laternenwanderung",
        datum: "07. Dezember",
        uhrzeit: "17:30 Uhr",
        ort: "Treffpunkt: Dorfplatz",
        beschreibung: "Gemeinsamer Spaziergang durch den Ort mit Laternen und Lichtern."
    },

    8: {
        titel: "Adventskaffee",
        datum: "08. Dezember",
        uhrzeit: "15:00 Uhr",
        ort: "Bürgerhaus",
        beschreibung: "Kaffee, Kuchen und gemütliches Beisammensein in der Adventszeit."
    },

    9: {
        titel: "Weihnachtskonzert",
        datum: "09. Dezember",
        uhrzeit: "19:00 Uhr",
        ort: "Kirche",
        beschreibung: "Stimmungsvolles Weihnachtskonzert mit weihnachtlicher Musik."
    },

    10: {
        titel: "Kinderkino",
        datum: "10. Dezember",
        uhrzeit: "16:30 Uhr",
        ort: "Gemeindehaus",
        beschreibung: "Ein gemütlicher Filmnachmittag für unsere kleinen Besucher."
    },

    11: {
        titel: "Winterwanderung",
        datum: "11. Dezember",
        uhrzeit: "14:00 Uhr",
        ort: "Treffpunkt: Dorfplatz",
        beschreibung: "Gemeinsam durch die winterliche Landschaft rund um Ohmbach."
    },

    12: {
        titel: "Weihnachtsbäckerei",
        datum: "12. Dezember",
        uhrzeit: "15:00 Uhr",
        ort: "Bürgerhaus",
        beschreibung: "Wir backen gemeinsam verschiedene Weihnachtsleckereien."
    },

    13: {
        titel: "Adventssingen",
        datum: "13. Dezember",
        uhrzeit: "18:00 Uhr",
        ort: "Kirche",
        beschreibung: "Gemeinsam bekannte und neue Weihnachtslieder singen."
    },

    14: {
        titel: "Handarbeitsabend",
        datum: "14. Dezember",
        uhrzeit: "18:30 Uhr",
        ort: "Vereinsheim",
        beschreibung: "Gemütlicher Abend zum gemeinsamen Handarbeiten und Austauschen."
    },

    15: {
        titel: "Weihnachtsbasteln für Kinder",
        datum: "15. Dezember",
        uhrzeit: "15:00 Uhr",
        ort: "Gemeindehaus",
        beschreibung: "Kreativer Nachmittag mit verschiedenen Weihnachtsbasteleien."
    },

    16: {
        titel: "Punsch & Plätzchen",
        datum: "16. Dezember",
        uhrzeit: "18:00 Uhr",
        ort: "Dorfplatz",
        beschreibung: "Warmer Punsch, leckere Plätzchen und gemütliches Beisammensein."
    },

    17: {
        titel: "Weihnachtsquiz",
        datum: "17. Dezember",
        uhrzeit: "19:00 Uhr",
        ort: "Bürgerhaus",
        beschreibung: "Wer kennt sich am besten mit Weihnachten aus? Macht mit beim großen Weihnachtsquiz!"
    },

    18: {
        titel: "Karaoke-Abend",
        datum: "18. Dezember",
        uhrzeit: "19:00 Uhr",
        ort: "Vereinsheim",
        beschreibung: "Gemeinsam singen, lachen und einen schönen Abend verbringen."
    },

    19: {
        titel: "Fackelwanderung",
        datum: "19. Dezember",
        uhrzeit: "18:00 Uhr",
        ort: "Treffpunkt: Dorfplatz",
        beschreibung: "Stimmungsvoller Spaziergang durch den Ort bei Fackelschein."
    },

    20: {
        titel: "Weihnachtliches Puppentheater",
        datum: "20. Dezember",
        uhrzeit: "16:00 Uhr",
        ort: "Gemeindehaus",
        beschreibung: "Ein weihnachtliches Puppentheater für Kinder und Familien."
    },

    21: {
        titel: "Adventsfrühstück",
        datum: "21. Dezember",
        uhrzeit: "10:00 Uhr",
        ort: "Bürgerhaus",
        beschreibung: "Gemeinsam gemütlich frühstücken und die Adventszeit genießen."
    },

    22: {
        titel: "Weihnachtsfilmabend",
        datum: "22. Dezember",
        uhrzeit: "19:00 Uhr",
        ort: "Vereinsheim",
        beschreibung: "Ein gemütlicher Abend mit einem beliebten Weihnachtsfilm."
    },

    23: {
        titel: "Weihnachtsliedersingen",
        datum: "23. Dezember",
        uhrzeit: "18:00 Uhr",
        ort: "Dorfplatz",
        beschreibung: "Gemeinsam stimmen wir uns mit Weihnachtsliedern auf Heiligabend ein."
    },

    24: {
        titel: "Heiligabend-Treffen",
        datum: "24. Dezember",
        uhrzeit: "11:00 Uhr",
        ort: "Dorfplatz",
        beschreibung: "Gemeinsam treffen wir uns an Heiligabend und wünschen uns frohe Weihnachten."
    }

};


/* ========================================
   ELEMENTE AUS HTML HOLEN
   ======================================== */

const tuerchen = document.querySelectorAll(".tuerchen");

const popup = document.getElementById("popup");

const popupInhalt = document.getElementById("popupInhalt");

const popupSchliessen = document.getElementById("popupSchliessen");


/* ========================================
   TÜ RCHEN KLICKBAR MACHEN
   ======================================== */

tuerchen.forEach(function(tuer) {

    tuer.addEventListener("click", function() {

        // Wenn die Tür bereits geöffnet wurde,
        // soll sie nicht erneut reagieren.
        if (tuer.classList.contains("geoeffnet")) {
            return;
        }

        // Nummer des Türchens herausfinden
        const nummer = tuer.dataset.tuer;

        // Passende Veranstaltung auswählen
        const veranstaltung = veranstaltungen[nummer];


        // Tür öffnen
        tuer.classList.add("geoeffnet");


        // Kurz warten, damit man die Türanimation sieht
        setTimeout(function() {

            // Inhalt des Popups erstellen
            popupInhalt.innerHTML = `
                <h2>${veranstaltung.titel}</h2>

                <p>
                    <strong>📅 ${veranstaltung.datum}</strong>
                </p>

                <p>
                    <strong>🕐 ${veranstaltung.uhrzeit}</strong>
                </p>

                <p>
                    <strong>📍 ${veranstaltung.ort}</strong>
                </p>

                <p>
                    ${veranstaltung.beschreibung}
                </p>
            `;


            // Popup anzeigen
            popup.style.display = "flex";

        }, 500);

    });

});

/* ========================================
   POPUP SCHLIESSEN
   ======================================== */

popupSchliessen.addEventListener("click", function() {

    popup.style.display = "none";

    tuerchen.forEach(function(tuer) {
        tuer.classList.remove("geoeffnet");
    });

});


/* ========================================
   POPUP SCHLIESSEN BEI KLICK AUF
   DEN HINTERGRUND
   ======================================== */

popup.addEventListener("click", function(event) {

    if (event.target === popup) {

        popup.style.display = "none";

    }

});

popup.addEventListener("click", function(event) {

    if (event.target === popup) {

        popup.style.display = "none";

        tuerchen.forEach(function(tuer) {
            tuer.classList.remove("geoeffnet");
        });

    }

});