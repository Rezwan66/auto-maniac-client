# 🏎️ Auto Maniac

> A responsive online car marketplace built with React, where users can browse premium automotive brands, explore products, manage their cart, and perform full CRUD operations — powered by Firebase Auth and a MongoDB backend.

<p align="center">
  <a href="https://auto-maniac.web.app/" target="_blank">
    <img src="https://img.shields.io/badge/Live%20Demo-auto--maniac.web.app-E63946?style=for-the-badge&logo=firebase&logoColor=white" alt="Live Demo" />
  </a>&nbsp;
  <a href="https://github.com/Rezwan66/auto-maniac-server" target="_blank">
    <img src="https://img.shields.io/badge/Server%20Repo-auto--maniac--server-181717?style=for-the-badge&logo=github&logoColor=white" alt="Server Repo" />
  </a>
</p>

---

## 📸 Preview

<!-- 
  📌 To add a screenshot: Edit this README on GitHub, drag & drop a screenshot 
  of the homepage into the editor, and it will auto-generate an image URL.
  Then uncomment and update the img tag below.
-->
<!-- <p align="center">
  <img src="YOUR_SCREENSHOT_URL_HERE" alt="Auto Maniac Homepage" width="100%" />
</p> -->

---

## ✨ Key Features

- 🚗 **Brand-Based Browsing** — Explore vehicles by featured brands (Toyota, Ford, BMW, Mercedes, Tesla, Honda)
- 🔍 **Product Details** — View detailed specifications, pricing, and descriptions for each vehicle
- 🛒 **Shopping Cart** — Add products to your cart and manage selected items before checkout
- ➕ **Add & Edit Products** — Full CRUD operations to add new products or update existing ones in the database
- 🔐 **Authentication** — Register/Login via email-password or Google Sign-In using Firebase
- 🌗 **Dark Mode** — Toggle between light and dark themes for comfortable browsing
- 🎠 **Image Carousel** — Swiper-powered hero slider showcasing featured products
- 📊 **Statistics Dashboard** — Visual stats section displaying cars sold, subscribers, and inventory metrics

---

## 🛠️ Tech Stack

[![Tech](https://skillicons.dev/icons?i=react,js,tailwind,firebase,nodejs,express,mongodb,vite&theme=dark)](https://skillicons.dev)

| Layer | Technologies |
|:------|:-------------|
| **Frontend** | React 18, React Router, TanStack Query, Tailwind CSS, DaisyUI |
| **Auth** | Firebase SDK (Email/Password + Google) |
| **Backend** | Node.js, Express.js |
| **Database** | MongoDB |
| **UI/UX** | Swiper.js, SweetAlert2, React Icons, Dark Mode Toggle |
| **Build** | Vite |
| **Hosting** | Firebase (Client) · Vercel (Server) |

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v16+)
- npm or yarn
- Firebase project with Authentication enabled

### Installation

```bash
# Clone the repository
git clone https://github.com/Rezwan66/auto-maniac-client.git

# Navigate to the project
cd auto-maniac-client

# Install dependencies
npm install
```

### Environment Variables

Create a `.env.local` file in the root directory with your Firebase configuration:

```env
VITE_apiKey=your_firebase_api_key
VITE_authDomain=your_project.firebaseapp.com
VITE_projectId=your_project_id
VITE_storageBucket=your_project.appspot.com
VITE_messagingSenderId=your_sender_id
VITE_appId=your_app_id
```

### Run Locally

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

---

## 📁 Project Structure

```
src/
├── assets/          # Static assets (images, icons)
├── components/      # Reusable UI components
├── firebase/        # Firebase configuration
├── hooks/           # Custom React hooks
├── pages/           # Route-level page components
├── providers/       # Context providers (Auth, Theme)
├── routes/          # Route definitions & protected routes
└── utilities/       # Helper functions
```

---

## 🔗 Related

- **Server Repository:** [auto-maniac-server](https://github.com/Rezwan66/auto-maniac-server)
- **Live Site:** [auto-maniac.web.app](https://auto-maniac.web.app/)
