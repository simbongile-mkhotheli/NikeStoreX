## NikeStoreX: E‑commerce Clone

A modern, single‑page e‑commerce clone built with React, TypeScript, and Tailwind CSS.  
Browse stories, explore products, and manage a fully‑functional cart with global state management via Redux Toolkit and RTK Query.

### 🚀 Live Demo

[https://nike-store-ecommerce-eight.vercel.app](https://nike-store-ecommerce-eight.vercel.app)

---

## Features

- **Animated Hero & Sticky Navbar**  
  Engaging top‑of‑page hero section with scroll‑aware sticky navigation.
- **Product Exploration**  
  Browse product catalog cards, with responsive layouts for desktop, tablet, and mobile.
- **Stories Section**  
  Read featured brand stories directly in the UI.
- **Cart Functionality**  
  Add, remove, and update item quantities in a global cart slice—persistent across page reloads.
- **Type‑safe API Client**  
  Fetch products via a shared Axios instance and RTK Query service.
- **End‑to‑end Type Safety**  
  All components, slices, and services written in TypeScript.

---

## Built With

- **React** (v18+)  
- **TypeScript**  
- **Vite**  
- **Tailwind CSS**  
- **Redux Toolkit** (incl. RTK Query)  
- **Axios** (via a centralized API client)  
- **Heroicons**  
- **React Router**  
- **Vercel** (for deployment)

---

## Architecture & Folder Structure

```text
src/
├── config/                # Environment variables & setup (env.ts)
├── features/
│   ├── cart/              # cartSlice + types
│   └── product/           # RTK Query service + types
├── services/
│   └── api/
│       └── client.ts      # Axios instance
├── shared/
│   ├── components/        # Reusable UI atoms & molecules
│   ├── constants/         # Route paths, etc.
│   ├── hooks/             # Custom hooks (e.g. useAppDispatch)
│   └── utils/             # classNames, formatters
├── store/                 # Redux store setup & slices
├── Styles/                # Tailwind theme overrides
├── index.html
├── tsconfig.json
└── vite.config.ts
