# NikeStoreX: Modern E-commerce Experience

A fully-featured e-commerce platform built with React, TypeScript, and modern web technologies. Browse products, manage your cart, and explore Nike's latest offerings with a seamless user experience.

---

## 🚀 Recent Updates (February 2024)

### TypeScript Migration
- Converted core components to TypeScript for improved type safety.
- Added comprehensive type definitions for cart and product features.
- Enforced strict type checking across the application.

### Component Architecture Enhancements
- Reorganized component directory structure for maintainability.
- Refactored cart logic with typed Redux actions and reducers.
- Streamlined codebase for clearer separation of concerns.

### New Features & Improvements
- Integrated product filtering and search capabilities.
- Enhanced cart interactions with dynamic, TypeScript-powered updates.
- Optimized responsive design and accessibility across all devices.

---

## 🛠 Tech Stack

- **Frontend:** React 18+, TypeScript  
- **State Management:** Redux Toolkit, RTK Query  
- **Styling:** Tailwind CSS  
- **Build Tool:** Vite  
- **API Integration:** RTK Query  
- **Type Safety:** TypeScript (strict mode)  
- **UI Components:** Heroicons  
- **Deployment:** Vercel  

---

## 🎯 Key Features

- **Modern Shopping Experience**  
  - Responsive product catalog with smooth animations.  
  - Real-time cart updates with persistent storage.  
  - Seamless checkout flow (coming soon).

- **Type-Safe Development**  
  - End-to-end TypeScript coverage.  
  - Zero runtime type errors with strict linting.  
  - Enhanced developer productivity and maintainability.

- **Performance Optimized**  
  - Code splitting and lazy loading.  
  - Image optimization with responsive sources.  
  - Minimised bundle sizes and fast cold starts.

---

## 📁 Project Structure

```
src/
├── config/                  # Environment setups (env.ts)
├── features/                # Redux slices & RTK Query services
│   ├── cart/                # cartSlice, types
│   └── product/             # productService, types
├── services/                # API client (Axios)
│   └── api/
│       └── client.ts
├── shared/                  # Reusable components, hooks, utils
│   ├── components/          # Atoms & molecules
│   ├── constants/           # Route definitions
│   ├── hooks/               # Custom React hooks
│   └── utils/               # Utility functions
├── store/                   # Redux store configuration
├── Styles/                  # Tailwind CSS theming
├── index.html
├── tsconfig.json
└── vite.config.ts
```

---

## 📥 Getting Started

1. **Clone the repository**  
   ```bash
   git clone https://github.com/simbongile-mkhotheli/NikeStoreX.git
   cd NikeStoreX
   ```

2. **Install dependencies**  
   ```bash
   npm install
   ```

3. **Configure environment variables**  
   ```bash
   cp src/config/env.example.ts src/config/env.ts
   ```

4. **Run in development**  
   ```bash
   npm run dev
   ```

5. **Build for production**  
   ```bash
   npm run build
   ```

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Please follow these steps:
1. Fork the repository.
2. Create a feature branch: `git checkout -b feat/your-feature-name`.
3. Commit your changes with descriptive, atomic commit messages.
4. Push to your fork and open a pull request against `main`.
5. Ensure tests pass and update documentation as needed.

---

## ⭐ Support

If you find this project helpful, please ⭐ the repo and share it with the community!

---

*Generated and maintained by Simbongile Mkhotheli*  
