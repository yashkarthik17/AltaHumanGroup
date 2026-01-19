# Join The Circle - Alta Humanitarian Group

## Overview
A React/TypeScript website for Alta Humanitarian Group, a civil rights and humanitarian organization. The site features a modern design with navigation, campaigns, and informational pages.

## Project Architecture
- **Framework**: React 19 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS (via CDN)
- **Routing**: React Router DOM (HashRouter)

## Project Structure
```
/
├── index.html          # Entry HTML with Tailwind CDN and custom styles
├── index.tsx           # React entry point
├── App.tsx             # Main App with routing
├── components/         # Reusable components (Navigation, Footer, etc.)
├── pages/              # Page components (Home, Campaign)
├── services/           # Service modules
├── vite.config.ts      # Vite configuration (port 5000)
├── package.json        # Dependencies
└── tsconfig.json       # TypeScript configuration
```

## Key Configuration
- Dev server runs on port 5000 with `allowedHosts: true` for Replit proxy compatibility
- Uses ESM imports for React dependencies
- Supports GEMINI_API_KEY environment variable for AI features

## Development
- Run `npm run dev` to start the development server
- Run `npm run build` to build for production (outputs to `dist/`)

## Recent Changes
- 2026-01-19: Initial import and Replit environment setup
  - Configured Vite to use port 5000
  - Added `allowedHosts: true` for proxy support
  - Added script entry point to index.html
