# Construire son propre site ChatGPT AI

## Introduction

DALL-E est un nouveau modèle de machine learning de génération d'image de l'entreprise OpenAI.
J'ai donc voulu créer un projet basé sur son API.

Projet basé sur un backend ExpressJS et une interface en React.

[Machina Image AI](https://machina-project-image-ai.vercel.app/)

## Installation

- Télécharger le projet : 
	```bash
	git clone git@github.com:MachinaDev/machina-project-image-ai.git && cd machina-project-image-ai
	```

### Démarrer la partie frontend

1. Créer un fichier `.env` dans le dossier frontend
	```
	VITE_APP_BACK_URL="http://localhost:5100"
	```
2. Lancer l'interface front
	```bash
	cd frontend && npm i && npm run dev
	```


### Démarrer la partie backend

1. Récupérer une clé API depuis votre compte OpenAI : [API d'OpenAI](https://beta.openai.com/account/api-keys)
2. Récupérer vos éléments pour vous connecter à l'API de Cloudinary: [ API Cloudinary](https://console.cloudinary.com/console/)
3. Créer un cluster sur MongoDB: [MongoDB Atlas](https://cloud.mongodb.com/)
4. Autoriser l'adresse de votre serveur dans l'onglet Networking de MongoDB Atlas
5. Créer un fichier `.env` que vous mettez dans le dossier backend
   - Créer les variables suivantes et rajouter vos clés ce qui ressemble à cela:
		```
		PORT=5100

		MONGODB_URL="mongodb+srv://yourUserName:yourPassword@cluster0.bu09ouj.mongodb.net/?retryWrites=true&w=majority"

		OPENAI_API_KEY="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"

		CLOUDINARY_CLOUD_NAME="dk5gbv2or"
		CLOUDINARY_API_KEY="413457998752935"
		CLOUDINARY_API_SECRET="URBY_gIvI2Vl3YvSBIK_vp9vJjE"
		```
  
6. Lancer l'interface back
	```bash
	cd backend && npm i && npm run start
	```