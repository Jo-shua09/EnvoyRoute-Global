# EnvoyRoute Global Transit

A comprehensive, modern React-based web application for EnvoyRoute Global Courier & Logistics Service. This platform provides a seamless user experience for customers to explore services, request quotes, track shipments, and manage logistics needs. Built with cutting-edge technologies to ensure fast performance, accessibility, and scalability.

## 🚀 Features

- **Homepage**: Engaging landing page with hero sections, service highlights, and call-to-action buttons.
- **Services**: Detailed overview of logistics services including express delivery, freight forwarding, warehousing, and customs clearance.
- **Quote Request**: Interactive form for customers to request shipping quotes with real-time validation.
- **Tracking**: Real-time shipment tracking with status updates and delivery timelines.
- **About Us**: Company information, mission, vision, and team details.
- **Contact**: Contact form and information for customer support.
- **Authentication**: User login/signup for personalized services and account management.
- **Responsive Design**: Fully responsive layout optimized for desktop, tablet, and mobile devices.
- **Dark/Light Mode**: Theme switching capability for better user experience.
- **Form Validation**: Robust form handling with Zod schema validation and React Hook Form.

## 🛠️ Technologies Used

- **Vite** - Next-generation frontend tooling for fast development and optimized builds.
- **TypeScript** - Strongly typed programming language that builds on JavaScript.
- **React** - A JavaScript library for building user interfaces.
- **shadcn/ui** - Beautifully designed components built on Radix UI and Tailwind CSS.
- **Tailwind CSS** - A utility-first CSS framework for rapid UI development.
- **React Router** - Declarative routing for React applications.
- **React Hook Form** - Performant, flexible forms with easy validation.
- **Zod** - TypeScript-first schema declaration and validation library.
- **Lucide React** - Beautiful & consistent icon toolkit.
- **React Query** - Powerful data synchronization for React.
- **Next Themes** - Perfect themes for Next.js with TypeScript support.

## 📋 Prerequisites

Before running this project, ensure you have the following installed:

- **Node.js** (version 18 or higher) - [Download here](https://nodejs.org/)
- **npm** or **yarn** - Package managers (npm comes with Node.js)
- **Git** - Version control system

## 🚀 Getting Started

### Installation

1. **Clone the repository**:

   ```sh
   git clone https://github.com/Jo-shua09/EnvoyRoute-Global.git
   cd EnvoyRoute-Global
   ```

2. **Install dependencies**:

   ```sh
   npm install
   # or
   yarn install
   ```

3. **Start the development server**:

   ```sh
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser** and navigate to `http://localhost:8080` to view the application.

### Build for Production

To create an optimized production build:

```sh
npm run build
# or
yarn build
```

The built files will be in the `dist/` directory, ready for deployment.

### Preview Production Build

To preview the production build locally:

```sh
npm run preview
# or
yarn preview
```

## 📁 Project Structure

```
envoyroute-global-transit/
├── public/                      # Static assets served directly
│   ├── favicon.ico
│   ├── placeholder.svg
│   └── robots.txt
├── src/
│   ├── assets/                  # Images and media files
│   │   ├── global-network.jpg
│   │   └── hero-logistics.jpg
│   ├── components/              # Reusable UI components
│   │   ├── layout/             # Layout components (Header, Footer)
│   │   └── ui/                 # shadcn/ui components (buttons, forms, etc.)
│   ├── hooks/                  # Custom React hooks
│   │   ├── use-mobile.tsx      # Mobile detection hook
│   │   └── use-toast.ts        # Toast notification hook
│   ├── lib/                    # Utility functions and configurations
│   │   └── utils.ts            # General utility functions
│   ├── pages/                  # Page components (routes)
│   │   ├── Index.tsx           # Homepage
│   │   ├── About.tsx           # About page
│   │   ├── Services.tsx        # Services page
│   │   ├── Contact.tsx         # Contact page
│   │   ├── Auth.tsx            # Authentication page
│   │   ├── Quote.tsx           # Quote request page
│   │   ├── Tracking.tsx        # Shipment tracking page
│   │   └── NotFound.tsx        # 404 page
│   ├── App.tsx                 # Main app component
│   ├── main.tsx                # Application entry point
│   └── index.css               # Global styles
├── index.html                  # HTML template
├── package.json                # Project dependencies and scripts
├── vite.config.ts              # Vite configuration
├── tailwind.config.ts          # Tailwind CSS configuration
├── tsconfig.json               # TypeScript configuration
└── README.md                   # Project documentation
```

## 📜 Available Scripts

- `npm run dev` - Start the development server with hot reload
- `npm run build` - Build the project for production
- `npm run build:dev` - Build the project in development mode
- `npm run lint` - Run ESLint to check code quality
- `npm run preview` - Preview the production build locally

## 🚀 Deployment

This project can be deployed to various static hosting services:

### Vercel (Recommended)

1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect the Vite configuration
3. Deploy with zero configuration

### Netlify

1. Build command: `npm run build`
2. Publish directory: `dist`
3. Deploy via Git integration or manual upload

### GitHub Pages

1. Build the project: `npm run build`
2. Use `gh-pages` package to deploy to GitHub Pages
3. Set up GitHub Actions for automated deployment

### Other Platforms

The `dist/` folder contains all necessary files for deployment to any static hosting service.

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature-name`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature/your-feature-name`
5. Open a Pull Request

### Development Guidelines

- Follow the existing code style and conventions
- Write clear, concise commit messages
- Test your changes thoroughly
- Update documentation as needed

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

For questions, support, or business inquiries:

- **Email**: info@envoyroute.com
- **Phone**: +1 (555) 123-4567
- **Website**: [www.envoyroute.com](https://www.envoyroute.com)
- **Twitter**: [@envoyroute](https://twitter.com/envoyroute)

## 🙏 Acknowledgments

- Icons provided by [Lucide](https://lucide.dev/)
- UI components powered by [shadcn/ui](https://ui.shadcn.com/)
- Fonts from [Google Fonts](https://fonts.google.com/)
