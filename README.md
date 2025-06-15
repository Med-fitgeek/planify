# 🗂️ Planify – Application de gestion de tâches

**Planify** est une application web _to-do list_ fullstack développée pour la pratique des technologies **Angular** (frontend) et **.NET C#** (backend). Elle permet aux utilisateurs de gérer efficacement leurs tâches quotidiennes avec authentification, persistance de données et interface moderne.

---

## 🛠️ Technologies utilisées

### Frontend

- Angular 17+
- TypeScript
- RxJS
- Angular Router
- CSS3

### Backend

- .NET 7 / ASP.NET Core Web API
- Entity Framework Core
- C#
- RESTful API
- JWT (authentification)

---

## 📦 Structure du projet

/planify

|-frontend/ # Projet Angular (UI, services, routes)

|- backend/ # Projet .NET (API, modèles, contrôleurs)

|-README.md

---

## 🚀 Lancer le projet localement

### 🔧 Prérequis

- Node.js 18+ et npm
- .NET SDK 7+
- Angular CLI

---

### 🖥️ Démarrer le frontend (Angular)

````bash
cd frontend
npm install
ng serve
Accès via http://localhost:4200
````

---
### 🧩 Démarrer le backend (.NET API)
```bash
cd backend
dotnet restore
dotnet build
dotnet run
API disponible sur http://localhost:5000 (ou selon configuration)
`````

### ✅ Fonctionnalités
📝 Création, édition et suppression de tâches

🧑 Authentification utilisateur (inscription / connexion)

📋 Liste personnalisée par utilisateur

🔒 Sécurisation par JWT

🔄 Communication frontend-backend via HTTP

🌐 Interface responsive et moderne


### 💡 Objectif pédagogique
Ce projet a été conçu pour :

Apprendre l’intégration Angular ↔️ .NET

Structurer un monorepo frontend/backend

Pratiquer les concepts REST, composants Angular, services et architecture API sécurisée


### 📄 Licence
Ce projet est libre pour usage éducatif. À personnaliser selon tes besoins.



