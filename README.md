# MIllI - AI Beyond Human Limits

## Project Overview

MIllI is a cutting-edge AI technology platform built with React, TypeScript, and Firebase, designed to deliver advanced AI solutions beyond conventional boundaries. The project implements a modern, cyberpunk-inspired design with a focus on performance and user experience.

### Tech Stack
- **Frontend**: React 18, TypeScript, Tailwind CSS
- **Authentication**: Firebase Auth
- **Database**: Firebase Firestore
- **State Management**: React Context API
- **Animations**: Framer Motion
- **PWA Support**: Workbox
- **Icons**: Lucide React

### Project Structure
```
├── src/
│   ├── components/         # Reusable UI components
│   ├── contexts/          # React Context providers
│   ├── firebase/          # Firebase configuration
│   ├── styles/           # Global styles and Tailwind config
│   └── types/            # TypeScript type definitions
├── public/               # Static assets
└── vite.config.ts       # Vite configuration
```

## Installation & Setup

### Prerequisites
- Node.js 18+
- npm or yarn
- Firebase account

### Installation Steps
1. Clone the repository
```bash
git clone <repository-url>
cd milli
```

2. Install dependencies
```bash
npm install
```

3. Configure environment variables
Create a `.env` file with your Firebase configuration:
```env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

4. Start development server
```bash
npm run dev
```

## Authentication Flow

### Implementation
The authentication system uses Firebase Authentication with Google sign-in provider. The flow is managed through the `AuthContext` which provides:

- User state management
- Sign in/out functionality
- Protected route handling
- Automatic user data synchronization with Firestore

### Authentication State Management
```typescript
interface AuthContextType {
  currentUser: User | null;
  signInWithGoogle: () => Promise<void>;
  signOut: () => Promise<void>;
  loading: boolean;
}
```

### Protected Routes
Routes requiring authentication are wrapped with the `AuthProvider` component:
```typescript
<AuthProvider>
  <ProtectedRoute>
    <Component />
  </ProtectedRoute>
</AuthProvider>
```

## Component Documentation

### Key Components

#### Auth Component
Handles user authentication UI and logic.

Props: None

Usage:
```typescript
<Auth />
```

#### Pricing Component
Displays service pricing tiers with interactive features.

Props: None

Usage:
```typescript
<Pricing />
```

#### UserProfile Component
Displays user information and settings.

Props: None

Usage:
```typescript
<UserProfile />
```

## State Management

The application uses React Context API for state management through multiple contexts:

### AuthContext
Manages authentication state and user data.

### ThemeContext
Handles theme preferences and customization.

## Testing

The project uses Vitest for unit testing.

### Running Tests
```bash
npm run test
```

### Test Coverage
```bash
npm run test:coverage
```

## Deployment

The application is configured for deployment to Firebase Hosting.

### Deployment Steps
1. Build the application:
```bash
npm run build
```

2. Deploy to Firebase:
```bash
npm run deploy
```

## Best Practices

### Code Style
- Consistent use of TypeScript for type safety
- Component-based architecture
- Responsive design with Tailwind CSS
- Progressive enhancement with PWA support

### Performance Optimization
- Code splitting with React.lazy()
- Image optimization
- Service Worker for offline support
- Efficient state management

### Security
- Environment variable protection
- Firebase Security Rules
- Protected routes implementation
- Input validation and sanitization