<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>Time</title>
        <!-- Import d'une police depuis Google Fonts pour l'esthétique du texte -->
        <link href="https://fonts.googleapis.com/css?family=Aldrich" rel="stylesheet"> 
        <!-- Feuille de styles principale (chemin relatif à partir de ce fichier) -->
        <link rel="stylesheet" href="assets/css/style.css">
    </head>
    <body>
        <!-- Conteneur principal centré à l'écran -->
        <div id="wrapper">
            <!-- Boîte interne contenant le minuteur et les contrôles -->
            <div class="inside">
                <!-- Zone d'affichage du timer : heures / minutes / secondes -->
                <div class="timer">
                    <!-- Chaque span possède un id utilisé par le script pour mettre à jour la valeur -->
                    <span id="hours">00</span>
                    <span id="minutes">00</span>
                    <span id="seconds">00</span>
                </div>
                <!-- Zone des contrôles (boutons) -->
                <div class="controls">
                    <!-- Bouton de pause / lecture.
                         La classe 'button' sert à cibler l'élément en CSS/JS.
                         La classe 'pause' modifie l'apparence (via CSS) pour indiquer l'état. -->
                    <button class="button pause" aria-label="Play / Pause">
                    </button>
                </div>
            </div>
        </div>

        <!-- Chargement du script JavaScript après le DOM pour éviter les erreurs d'éléments non trouvés -->
        <script src="assets/js/script.js"></script>
    </body>
</html>