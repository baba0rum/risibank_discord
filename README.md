# risibank pour discord

Installation:
Il faut un CSP (Content Security Policy) modifié uniquement pour les pages discord.
Pour firefox il existe CSP Laboratory disponnible ici:
https://addons.mozilla.org/en-US/firefox/addon/laboratory-by-mozilla/
L'installer, ensuite cliquez sur le logo du plugin, activez le Custom CSP, collez et validez ceci:

default-src *  data: blob: 'unsafe-inline' 'unsafe-eval';  script-src * 'unsafe-inline' 'unsafe-eval';  connect-src * 'unsafe-inline';  img-src * data: blob: 'unsafe-inline';  frame-src *;  style-src * data: blob: 'unsafe-inline'; font-src * data: blob: 'unsafe-inline';

Installer Tampermonkey ou Greasemonkey et le script fourni ici tout en haut "discordrisibank.js" (y'a suffisamment de tuto sur internet pour ajouter un script sur tampermonkey donc je passe)

Maintenant ouvrez un onglet discord, quand la page est bien chargée, tout en haut vous devrez voir apparaitre le logo risibank pour confirmer la bonne installation. Si la page est lente a charger, vous pouvez augmenter le temps d'attente avant l'activation du script en modifiant 2 paramètres: 

"    window.onload = function () {

        setTimeout(getText, 5000);

        setTimeout(update_messages, 5000);
};"

Augmentez "5000" (5000 = 5 secondes, 1 seconde=1000), sauvegardez et réessayez. 

Le tour est joué. Comme le script est en beta, pas de visualisation quand vous écrivez un message ou une boite avec tout les stickers compris dans le script (stickers manuellement ajouté). Vous pouvez consulter les stickers déjà ajouté dans le "sticker.list" tout en haut.

Le plugin devrait ce mettre a jour tout seul quand tampermonkey décide de le faire (aucune idée de quand il le fait car osef), vous pouvez quand même forcer une MAJ en cliquant sur la colone "dernière mise a jour" sur la ligne du script. En principe, pas besoin de maj le script pour ajouter des stickers, la page stickers.list prend le relais maintenant ce qui veux dire que ont a plus besoin de ce partager le script avec pastebin et tout ce que ça implique... :hap:

Voila
