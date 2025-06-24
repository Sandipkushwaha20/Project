# 🛍️ ShopEase (E-Commerce React Application)

A modern, responsive e-commerce web application built with React, TypeScript, and Tailwind CSS. This project demonstrates a complete online shopping experience with product browsing, cart management, user authentication, and checkout functionality.

## 📋 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Architecture](#-project-architecture)
- [Folder Structure](#-folder-structure)
- [Getting Started](#-getting-started)
- [Available Scripts](#-available-scripts)
- [Data Flow](#-data-flow)
- [Component Architecture](#-component-architecture)
- [State Management](#-state-management)
- [Routing](#-routing)
- [Styling](#-styling)
- [TypeScript Integration](#-typescript-integration)
- [Development Guidelines](#-development-guidelines)
- [Contributing](#-contributing)
- [License](#-license)

## ✨ Features

- **Product Catalog**: Browse products with search and category filtering
- **Product Details**: Detailed product view with images, specifications, and reviews
- **Shopping Cart**: Add, remove, and update cart items with real-time total calculation
- **User Authentication**: Login and registration with modal-based interface
- **Checkout Process**: Complete checkout flow with address and payment information
- **Responsive Design**: Mobile-first design that works on all devices
- **Modern UI/UX**: Clean, intuitive interface with smooth animations
- **Type Safety**: Full TypeScript integration for better development experience

## 🛠️ Tech Stack

### Frontend Framework
- **React 18.3.1** - Modern React with hooks and functional components
- **TypeScript 5.5.3** - Type-safe JavaScript development
- **Vite 5.4.2** - Fast build tool and development server

### Styling & UI
- **Tailwind CSS 3.4.1** - Utility-first CSS framework
- **PostCSS 8.4.35** - CSS processing
- **Autoprefixer 10.4.18** - CSS vendor prefixing

### Routing & Navigation
- **React Router DOM 7.6.2** - Client-side routing

### Icons & UI Components
- **Lucide React 0.344.0** - Beautiful, customizable icons

### Development Tools
- **ESLint 9.9.1** - Code linting and formatting
- **TypeScript ESLint 8.3.0** - TypeScript-specific linting rules

## 🏗️ Project Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                    E-Commerce Application                   │
├─────────────────────────────────────────────────────────────┤
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐        │
│  │   Pages     │  │ Components  │  │  Contexts   │        │
│  │             │  │             │  │             │        │
│  │ • Home      │  │ • Header    │  │ • Auth      │        │
│  │ • About     │  │ • Footer    │  │ • Cart      │        │
│  │ • Contact   │  │ • Product   │  │             │        │
│  │ • FAQ       │  │ • Modal     │  │             │        │
│  │ • Privacy   │  │ • Filter    │  │             │        │
│  └─────────────┘  └─────────────┘  └─────────────┘        │
├─────────────────────────────────────────────────────────────┤
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐        │
│  │    Data     │  │   Types     │  │   Utils     │        │
│  │             │  │             │  │             │        │
│  │ • Products  │  │ • Product   │  │ • Helpers   │        │
│  │ • Categories│  │ • User      │  │ • Constants │        │
│  │             │  │ • Cart      │  │             │        │
│  └─────────────┘  └─────────────┘  └─────────────┘        │
└─────────────────────────────────────────────────────────────┘
```

## 📁 Folder Structure

```
project/
├── 📄 README.md                    # Project documentation
├── 📄 package.json                 # Dependencies and scripts
├── 📄 package-lock.json            # Locked dependency versions
├── 📄 index.html                   # HTML entry point
├── 📄 vite.config.ts              # Vite configuration
├── 📄 tailwind.config.js          # Tailwind CSS configuration
├── 📄 postcss.config.js           # PostCSS configuration
├── 📄 tsconfig.json               # TypeScript configuration
├── 📄 tsconfig.app.json           # App-specific TS config
├── 📄 tsconfig.node.json          # Node-specific TS config
├── 📄 eslint.config.js            # ESLint configuration
│
├── 📁 src/                        # Source code directory
│   ├── 📄 main.tsx                # Application entry point
│   ├── 📄 App.tsx                 # Root component
│   ├── 📄 index.css               # Global styles
│   ├── 📄 vite-env.d.ts           # Vite type definitions
│   │
│   ├── 📁 components/             # Reusable UI components
│   │   ├── 📄 Header.tsx          # Navigation header
│   │   ├── 📄 Footer.tsx          # Site footer
│   │   ├── 📄 ProductCard.tsx     # Product display card
│   │   ├── 📄 ProductModal.tsx    # Product detail modal
│   │   ├── 📄 AuthModal.tsx       # Authentication modal
│   │   ├── 📄 CartModal.tsx       # Shopping cart modal
│   │   ├── 📄 CheckoutModal.tsx   # Checkout process modal
│   │   └── 📄 CategoryFilter.tsx  # Category filtering component
│   │
│   ├── 📁 pages/                  # Page components
│   │   ├── 📄 Home.tsx            # Homepage with product catalog
│   │   ├── 📄 AboutUs.tsx         # About us page
│   │   ├── 📄 ContactUs.tsx       # Contact information page
│   │   ├── 📄 FAQ.tsx             # Frequently asked questions
│   │   └── 📄 PrivacyPolicy.tsx   # Privacy policy page
│   │
│   ├── 📁 contexts/               # React Context providers
│   │   ├── 📄 AuthContext.tsx     # User authentication state
│   │   └── 📄 CartContext.tsx     # Shopping cart state
│   │
│   ├── 📁 data/                   # Static data and assets
│   │   ├── 📄 products.ts         # Product catalog data
│   │   ├── 📄 LOGO.png            # Application logo
│   │   └── 📄 download.png        # Additional assets
│   │
│   └── 📁 types/                  # TypeScript type definitions
│       └── 📄 index.ts            # Application type interfaces
│
└── 📁 node_modules/               # Dependencies (generated)
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** (version 16 or higher)
- **npm** or **yarn** package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd project
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application

## 📜 Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Starts the development server with hot reload |
| `npm run build` | Creates a production build in the `dist` folder |
| `npm run preview` | Serves the production build locally |
| `npm run lint` | Runs ESLint to check code quality |

## 🔄 Data Flow

```
┌─────────────┐    ┌─────────────┐    ┌─────────────┐
│   User      │───▶│  Component  │───▶│   Context   │
│  Interaction│    │             │    │             │
└─────────────┘    └─────────────┘    └─────────────┘
                           │                   │
                           ▼                   ▼
                   ┌─────────────┐    ┌─────────────┐
                   │   State     │    │   Data      │
                   │  Update     │    │  Storage    │
                   └─────────────┘    └─────────────┘
```

### State Management Flow

1. **User Action**: User interacts with UI components
2. **Component Handler**: Component calls context methods
3. **Context Update**: Context updates state and triggers re-renders
4. **UI Update**: Components re-render with new state

## 🧩 Component Architecture

### Component Hierarchy

```
App
├── Router
│   ├── AuthProvider
│   │   └── CartProvider
│   │       ├── Header
│   │       │   ├── SearchBar
│   │       │   ├── AuthButton
│   │       │   └── CartButton
│   │       │
│   │       ├── Routes
│   │       │   ├── Home
│   │       │   │   ├── CategoryFilter
│   │       │   │   └── ProductGrid
│   │       │   │       └── ProductCard
│   │       │   ├── AboutUs
│   │       │   ├── ContactUs
│   │       │   ├── FAQ
│   │       │   └── PrivacyPolicy
│   │       │
│   │       ├── Footer
│   │       │
│   │       └── Modals
│   │           ├── ProductModal
│   │           ├── AuthModal
│   │           ├── CartModal
│   │           └── CheckoutModal
```

### Component Types

- **Layout Components**: Header, Footer
- **Page Components**: Home, AboutUs, ContactUs, FAQ, PrivacyPolicy
- **Feature Components**: ProductCard, CategoryFilter
- **Modal Components**: ProductModal, AuthModal, CartModal, CheckoutModal

## 🔧 State Management

### Context Providers

#### AuthContext
- **Purpose**: Manages user authentication state
- **State**: User data, login status, loading state
- **Methods**: login, register, logout

#### CartContext
- **Purpose**: Manages shopping cart functionality
- **State**: Cart items, total, item count
- **Methods**: addToCart, removeFromCart, updateQuantity, clearCart

### State Structure

```typescript
// Auth State
interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  register: (name: string, email: string, password: string) => Promise<boolean>;
  logout: () => void;
  isLoading: boolean;
}

// Cart State
interface CartContextType {
  items: CartItem[];
  addToCart: (product: Product, quantity?: number) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  total: number;
  itemCount: number;
}
```

## 🛣️ Routing

### Route Configuration

```typescript
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<AboutUs />} />
  <Route path="/contact" element={<ContactUs />} />
  <Route path="/faq" element={<FAQ />} />
  <Route path="/privacy" element={<PrivacyPolicy />} />
</Routes>
```

### Navigation Features

- **Client-side routing** with React Router DOM
- **Programmatic navigation** for modal interactions
- **URL-based state** for deep linking
- **404 handling** for invalid routes

## 🎨 Styling

### Design System

- **Framework**: Tailwind CSS 3.4.1
- **Approach**: Utility-first CSS
- **Responsive**: Mobile-first design
- **Customization**: Extended theme configuration

### Color Palette

```css
/* Primary Colors */
--primary: #3B82F6 (blue-500)
--secondary: #6B7280 (gray-500)
--accent: #10B981 (emerald-500)

/* Background Colors */
--bg-primary: #F9FAFB (gray-50)
--bg-secondary: #FFFFFF (white)
--bg-accent: #F3F4F6 (gray-100)
```

### Component Styling

- **Consistent spacing** using Tailwind's spacing scale
- **Responsive breakpoints** for mobile, tablet, and desktop
- **Interactive states** with hover, focus, and active styles
- **Accessibility** with proper contrast ratios and focus indicators

## 🔷 TypeScript Integration

### Type Safety

- **Strict mode** enabled for better type checking
- **Interface definitions** for all data structures
- **Generic types** for reusable components
- **Type guards** for runtime type checking

### Key Type Definitions

```typescript
interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  images: string[];
  description: string;
  category: string;
  rating: number;
  reviews: number;
  inStock: boolean;
  features: string[];
  specifications: Record<string, string>;
}

interface CartItem {
  id: string;
  product: Product;
  quantity: number;
}

interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}
```

## 📋 Development Guidelines

### Code Style

- **ESLint** configuration for consistent code style
- **Prettier** integration for automatic formatting
- **TypeScript strict mode** for type safety
- **Component naming** using PascalCase
- **File naming** using kebab-case

### Best Practices

1. **Component Structure**
   - Use functional components with hooks
   - Keep components small and focused
   - Extract reusable logic into custom hooks

2. **State Management**
   - Use Context API for global state
   - Keep local state minimal
   - Avoid prop drilling

3. **Performance**
   - Use React.memo for expensive components
   - Implement proper dependency arrays in useEffect
   - Optimize re-renders with useCallback and useMemo

4. **Accessibility**
   - Use semantic HTML elements
   - Provide proper ARIA labels
   - Ensure keyboard navigation support

### File Organization

- **Group related files** in feature folders
- **Separate concerns** between components, pages, and utilities
- **Use index files** for clean imports
- **Keep components close** to where they're used

## 🤝 Contributing

### Development Workflow

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. **Make your changes**
4. **Run tests and linting**
   ```bash
   npm run lint
   ```
5. **Commit your changes**
   ```bash
   git commit -m "feat: add new feature"
   ```
6. **Push to your branch**
   ```bash
   git push origin feature/your-feature-name
   ```
7. **Create a pull request**

### Commit Message Convention

- **feat**: New feature
- **fix**: Bug fix
- **docs**: Documentation changes
- **style**: Code style changes
- **refactor**: Code refactoring
- **test**: Test additions or changes
- **chore**: Build process or auxiliary tool changes

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Authors

- **Kajal Singh** - Initial work

