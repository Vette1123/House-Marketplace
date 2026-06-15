# 🏡 House Marketplace

> A full-stack property marketplace for renting and selling homes — powered by React and Firebase.

![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white)
![Firebase](https://img.shields.io/badge/Firebase-9-FFCA28?logo=firebase&logoColor=black)
![React Router](https://img.shields.io/badge/React%20Router-6-CA4245?logo=reactrouter&logoColor=white)
![Leaflet](https://img.shields.io/badge/Leaflet-Maps-199900?logo=leaflet&logoColor=white)

### 🚀 [Try it live →](https://house-marketplacee.vercel.app/)

A property listing platform where users can browse homes for rent or for sale, post their own listings with photos and a map pin, and sign in with the social provider of their choice. Backed by Firebase Auth and Firestore.

## ✨ Features

- **Browse by category** — separate views for properties **for rent** and **for sale**, plus a curated **offers** page for discounted listings.
- **Listing details** — full property pages with an image carousel (Swiper), location pin on an interactive **Leaflet** map, and contact-landlord flow.
- **Create / edit / delete listings** — authenticated users can post new listings with multiple images, manage their own from the profile page, and edit or remove them anytime.
- **Address → coordinates** — listing addresses are geocoded via the **Google Geocoding API** so every property shows up on the map.
- **Social sign-in** — OAuth with **Google, Facebook, GitHub, and Twitter** via Firebase Auth, alongside email/password.
- **Forgot password** — built-in password reset email flow.
- **Profile management** — update display name and view all of your active listings in one place.
- **Toasts everywhere** — friendly success and error feedback via `react-toastify`.

## 🛠️ Tech Stack

- **Framework** — React 18 (Create React App)
- **Backend** — Firebase (Authentication + Firestore + Storage)
- **Routing** — React Router v6
- **Maps** — Leaflet + React-Leaflet
- **Carousels** — Swiper & Splide
- **Geocoding** — Google Maps Geocoding API

## 📖 Getting Started

```bash
npm install
npm start
```

The app runs on [http://localhost:3000](http://localhost:3000).

### Environment variables

Copy `.env.sample` to `.env` and fill in the values from your Firebase project and a Google Cloud API key with the Geocoding API enabled:

```env
REACT_APP_GEOCODE_API_KEY=
REACT_APP_API_KEY=
REACT_APP_AUTH_DOMAIN=
REACT_APP_PROJECT_ID=
REACT_APP_STORAGE_BUCKET=
REACT_APP_MESSAGING_SENDER_ID=
REACT_APP_APP_ID=
```

## 🙌 Credits

Built by [Mohamed Gado](https://mohamedgado.com).
