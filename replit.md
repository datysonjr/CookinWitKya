# Overview

This is a full-stack web application for a meme coin called $KYA, inspired by "Cooking With Kya," an online cooking creator. The application serves as a marketing and community platform for the cryptocurrency, featuring a modern React frontend with shadcn/ui components and an Express.js backend. The project includes countdown timers for special events, community features, roadmap information, and integration points for cryptocurrency trading.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript, built using Vite for fast development and bundling
- **UI Components**: shadcn/ui component library built on top of Radix UI primitives for accessibility
- **Styling**: Tailwind CSS with custom design tokens and CSS variables for theming
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack React Query for server state management and data fetching
- **Icons**: Lucide React icons with additional React Icons for social platforms

## Backend Architecture
- **Runtime**: Node.js with Express.js framework using ES modules
- **Language**: TypeScript with strict type checking
- **Development**: tsx for running TypeScript directly in development
- **Production Build**: esbuild for fast bundling of server code
- **Storage Interface**: Modular storage system with in-memory implementation (MemStorage class)

## Database & ORM
- **ORM**: Drizzle ORM configured for PostgreSQL
- **Database**: PostgreSQL with Neon serverless driver for production
- **Schema**: User management with username/password authentication
- **Migrations**: Drizzle Kit for database schema management
- **Type Safety**: Full TypeScript integration with Drizzle Zod for schema validation

## Development Workflow
- **Monorepo Structure**: Shared schema and types between client and server
- **Path Aliases**: TypeScript path mapping for clean imports (@/, @shared/)
- **Hot Reload**: Vite HMR integration with Express middleware in development
- **Type Checking**: Comprehensive TypeScript configuration across all packages

## Styling System
- **Design System**: Custom CSS variables for colors, shadows, and spacing
- **Typography**: Inter and Poppins font families with custom font weights
- **Color Scheme**: Warm color palette with primary orange, secondary yellow, and accent green
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints
- **Component Variants**: Class Variance Authority for component styling variants

## External Dependencies

- **Database**: Neon PostgreSQL serverless database
- **UI Components**: Radix UI primitives for accessibility-compliant components
- **Development Tools**: Replit-specific plugins for development environment integration
- **Session Management**: PostgreSQL session store (connect-pg-simple) for user sessions
- **Date Handling**: date-fns library for date manipulation and formatting
- **Form Handling**: React Hook Form with Hookform resolvers for form validation