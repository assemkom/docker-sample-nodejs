#utiliser une image node.js

FROM node:18

#mettre le dossier de travail à /app

WORKDIR /app

# copier le package.json depuis et le package-lock.json
COPY package.json ./

#installer les dépendances 
RUN  npm installer

# copier le reste du fichier 
COPY . .

#Exposer le port 3000

EXPOSE 3000

#Démarrer l'application 
CMD [ "kpnpm"  ,"start"]


