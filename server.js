Codeshare logo
 ShareSign UpLog In
1
const express = require('express');
2
const path = require('path');
3
​
4
const app = express();
5
const PORT = 3000;
6
​
7
// Définir le dossier des fichiers statiques
8
app.use(express.static(path.join(__dirname, 'public')));
9
​
10
// Route pour la page principale
11
app.get('/', (req, res) => {
12
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
13
});
14
​
15
// Lancement du serveur
16
app.listen(PORT, () => {
17
    console.log(`Serveur démarré sur http://localhost:${PORT}`);
18
});
19
​



Please don't block our ads :( － Ad sponsors allow us to make Codeshare free.
Hide Ads
