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
```

---

## Screenshots

### Desktop

<p align="center">
  <img src="https://user-images.githubusercontent.com/101036458/213118655-65a04abd-bc2d-489b-9807-f7a31a878e29.png" alt="Hero desktop" width="400" />
  <img src="https://user-images.githubusercontent.com/101036458/213118825-b42ca931-4df1-4bce-afbb-90668a0f914a.png" alt="Cart desktop" width="400" />
</p>

### Tablet & Mobile

<p align="center">
  <img src="https://user-images.githubusercontent.com/101036458/213118901-efe72f34-4915-4496-bdd7-2e3aaa139d06.png" alt="Tablet view" width="300" />
  <img src="https://user-images.githubusercontent.com/101036458/213118986-6b41c391-5b9a-4184-a1ca-3e4de81c8dae.png" alt="Mobile view" width="200" />
</p>

---

## Getting Started

1. **Clone the repo**  
   ```bash
   git clone https://github.com/simbongile-mkhotheli/NikeStoreX.git
   cd NikeStoreX
   ```
2. **Install dependencies**  
   ```bash
   npm install
   ```
3. **Set up environment**  
   - Copy `src/config/env.example.ts` → `src/config/env.ts`  
   - Add any API URLs or feature flags as needed.
4. **Run locally**  
   ```bash
   npm run dev
   ```
5. **Build for production**  
   ```bash
   npm run build
   ```

---

## 🤝 Contributing

Contributions, issues, and feature requests are very welcome! To get started:

1. Fork the project  
2. Create a feature branch:  
   ```bash
   git checkout -b feat/awesome-new-ui
   ```
3. Commit your changes with clear, atomic commit messages  
4. Push to your fork and open a Pull Request against `main`  
5. Ensure all tests (if any) pass and add documentation where appropriate

---

## Show Your Support

If you find this project helpful or inspiring, please ⭐ this repo!
