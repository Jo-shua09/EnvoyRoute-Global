# EnvoyRoute Global Transit

A modern React application for EnvoyRoute Global Courier & Logistics Service, built with Vite, TypeScript, and Tailwind CSS.

## Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn

### Installation

1. Clone the repository:

```sh
git clone <YOUR_GIT_URL>
cd <YOUR_PROJECT_NAME>
```

2. Install dependencies:

```sh
npm install
```

3. Start the development server:

```sh
npm run dev
```

The application will be available at `http://localhost:8080`.

## Technologies Used

- **Vite** - Fast build tool and development server
- **TypeScript** - Type-safe JavaScript
- **React** - UI library
- **shadcn/ui** - Modern UI components
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Client-side routing
- **React Hook Form** - Form handling
- **Zod** - Schema validation

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run build:dev` - Build for development
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── layout/         # Layout components (Header, Footer)
│   └── ui/             # shadcn/ui components
├── pages/              # Page components
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
└── assets/             # Static assets
```

## Deployment

This project can be deployed to any static hosting service like Vercel, Netlify, or GitHub Pages.

For production builds:

```sh
npm run build
```

The built files will be in the `dist/` directory.
