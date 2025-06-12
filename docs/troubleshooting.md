# Application Startup Troubleshooting Guide

## Application Overview
- **Type**: React Web Application (PWA)
- **Framework**: React 18 + TypeScript + Vite
- **Backend**: Firebase (Auth, Firestore, Analytics)
- **Styling**: Tailwind CSS
- **State Management**: React Context API

## Common Startup Issues & Solutions

### 1. Environment Variables Missing
**Symptoms**: Firebase errors, blank screen, console errors about undefined variables

**Check**: Verify your `.env` file contains all required variables:
```bash
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

**Solution**:
```bash
# Copy environment template
cp .env.example .env
# Edit with your Firebase credentials
nano .env
```

### 2. Node.js Version Compatibility
**Symptoms**: Build errors, dependency conflicts, "unsupported engine" warnings

**Check**: Ensure you're using Node.js 18+
```bash
node --version
npm --version
```

**Solution**:
```bash
# Update Node.js to latest LTS
nvm install --lts
nvm use --lts
```

### 3. Dependency Issues
**Symptoms**: Module not found errors, version conflicts

**Check**: Clear cache and reinstall dependencies
```bash
# Clear npm cache
npm cache clean --force

# Remove node_modules and package-lock.json
rm -rf node_modules package-lock.json

# Reinstall dependencies
npm install
```

### 4. Port Conflicts
**Symptoms**: "Port already in use" errors

**Check**: Default port 5173 might be occupied
```bash
# Check what's using port 5173
lsof -i :5173

# Kill process if needed
kill -9 <PID>
```

**Solution**: Use different port
```bash
npm run dev -- --port 3000
```

### 5. Firebase Configuration Issues
**Symptoms**: Firebase auth errors, "Firebase app not initialized"

**Check**: Verify Firebase project settings match your `.env` file

**Solution**: 
1. Go to Firebase Console
2. Project Settings > General
3. Copy the correct config values
4. Update your `.env` file

### 6. Build Tool Issues (Vite)
**Symptoms**: Vite build errors, HMR not working

**Solution**:
```bash
# Clear Vite cache
rm -rf node_modules/.vite

# Restart dev server
npm run dev
```

## Diagnostic Commands

### 1. Check Application Health
```bash
# Verify all dependencies are installed
npm list

# Check for security vulnerabilities
npm audit

# Run linting
npm run lint
```

### 2. Debug Mode Startup
```bash
# Start with verbose logging
DEBUG=* npm run dev

# Or with Vite debug
VITE_DEBUG=true npm run dev
```

### 3. Check Firebase Connection
```bash
# Test Firebase connection (if you have Firebase CLI)
firebase projects:list
firebase use your-project-id
```

## Step-by-Step Troubleshooting Process

### Step 1: Basic Checks
1. Verify Node.js version (18+)
2. Check if `.env` file exists and has correct values
3. Ensure you're in the correct directory
4. Check internet connection for Firebase

### Step 2: Clean Installation
```bash
# Complete clean install
rm -rf node_modules package-lock.json
npm cache clean --force
npm install
```

### Step 3: Start Development Server
```bash
# Try starting the dev server
npm run dev

# If that fails, try with different port
npm run dev -- --port 3001
```

### Step 4: Check Browser Console
1. Open browser developer tools (F12)
2. Check Console tab for JavaScript errors
3. Check Network tab for failed requests
4. Look for Firebase authentication errors

### Step 5: Verify Firebase Setup
1. Check Firebase Console for project status
2. Verify authentication methods are enabled
3. Check Firestore security rules
4. Ensure billing is set up if required

## Common Error Messages & Solutions

### "Firebase: Error (auth/invalid-api-key)"
**Cause**: Incorrect or missing Firebase API key
**Solution**: Update `VITE_FIREBASE_API_KEY` in `.env`

### "Module not found: Can't resolve 'firebase/app'"
**Cause**: Firebase dependency not installed
**Solution**: `npm install firebase`

### "Vite: Failed to resolve import"
**Cause**: Import path issues or missing dependencies
**Solution**: Check import statements and install missing packages

### "TypeError: Cannot read properties of undefined"
**Cause**: Component trying to access undefined state
**Solution**: Add proper null checks and loading states

### "CORS policy: No 'Access-Control-Allow-Origin' header"
**Cause**: Firebase configuration or network issues
**Solution**: Check Firebase project settings and network

## Emergency Recovery Steps

### If Nothing Works:
1. **Create New Branch**: `git checkout -b troubleshooting`
2. **Reset to Last Working Commit**: `git reset --hard <commit-hash>`
3. **Fresh Clone**: Clone repository to new directory
4. **Check Git Status**: `git status` for uncommitted changes

### Nuclear Option (Complete Reset):
```bash
# Backup current work
git stash

# Reset to clean state
git reset --hard HEAD
git clean -fd

# Reinstall everything
rm -rf node_modules package-lock.json
npm install
```

## Getting Help

### Information to Provide:
1. **Error Messages**: Copy exact error text
2. **Console Logs**: Browser console output
3. **Environment**: OS, Node version, npm version
4. **Recent Changes**: What was changed before issue started
5. **Steps Taken**: What troubleshooting steps you've tried

### Useful Commands for Diagnostics:
```bash
# System information
node --version
npm --version
git --version

# Project information
npm list --depth=0
npm run --silent

# Environment check
echo $NODE_ENV
cat .env | grep -v "^#" | grep -v "^$"
```

## Prevention Tips

1. **Use Version Control**: Commit working states frequently
2. **Environment Documentation**: Keep `.env.example` updated
3. **Dependency Locking**: Commit `package-lock.json`
4. **Regular Updates**: Keep dependencies updated gradually
5. **Testing**: Test after each major change

## Quick Start Checklist

- [ ] Node.js 18+ installed
- [ ] `.env` file configured with Firebase credentials
- [ ] Dependencies installed (`npm install`)
- [ ] Firebase project accessible
- [ ] Port 5173 available
- [ ] Internet connection stable
- [ ] Browser supports modern JavaScript

If you're still experiencing issues after following this guide, please provide:
1. Exact error messages
2. Console output
3. Your environment details
4. What specific step failed