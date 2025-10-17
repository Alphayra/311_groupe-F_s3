// Attendre que le DOM soit entièrement chargé avant d'exécuter le script
window.addEventListener("DOMContentLoaded", (event) => {
    // Etat du minuteur : true = en marche, false = stoppé/pause
    let is_run = true;

    // Initialisation des listeners et du timer
    init();

    function init() {
        // Ajoute un gestionnaire de clic sur le bouton pour basculer play/pause
        document.querySelector('.button').addEventListener('click', (event) => {
            // Inverse l'état du minuteur
            is_run = !is_run;
            // Basculer la classe 'pause' pour modifier l'apparence via le CSS
            document.querySelector('.button').classList.toggle('pause');
        });

        // Met à jour l'affichage toutes les secondes
        setInterval(function() {
            if (is_run) {
                // Récupère l'heure actuelle
                let oDate = new Date();
                // Formate les valeurs sur 2 chiffres (ex: 09)
                let hours = adjustTimer(oDate.getHours());
                let minutes = adjustTimer(oDate.getMinutes());
                let seconds = adjustTimer(oDate.getSeconds());

                // Met à jour le DOM avec les valeurs formatées
                document.querySelector('#hours').innerHTML   = hours;
                document.querySelector('#minutes').innerHTML = minutes;
                document.querySelector('#seconds').innerHTML = seconds;

                // Change la couleur de fond en fonction de l'heure/minute/seconde
                // La couleur est calculée par randomHexColor (même si le nom n'est pas exact)
                document.querySelector('body').style.background = randomHexColor(hours, minutes, seconds);
            }
        }, 1000);
    }

    // Ajoute un zéro devant les nombres < 10 (padding à 2 chiffres)
    function adjustTimer(timer) {
        return (timer < 10 ? '0' + timer : timer);
    }

    // Convertit trois valeurs (heures, minutes, secondes) en une couleur RGB.
    // Les dénominateurs (23, 59) sont choisis pour normaliser la plage des valeurs vers 0-255.
    function randomHexColor(x, y, z) {
        return "rgb(" + Math.floor(x / 23 * 255) + "," + Math.floor(y / 59 * 255) + "," + Math.floor(z / 59 * 255) + ")";
    }
});