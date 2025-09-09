# Vercel Deployment Guide for CookinWitKya

This project has been optimized for deployment on Vercel as a static website.

## 🚀 Quick Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=YOUR_REPO_URL)

## 📁 Project Structure

- `client/` - React frontend source code
- `attached_assets/` - Static assets (images, etc.)
- `vercel.json` - Vercel configuration
- `.vercelignore` - Files to exclude from deployment

## ⚙️ Configuration Details

### Build Settings
- **Build Command**: `vite build`
- **Output Directory**: `dist/public`
- **Framework**: Vite
- **Node Version**: 18.x (recommended)

### Optimizations Included
- ✅ Static asset caching with long-term cache headers
- ✅ SPA routing with proper rewrites
- ✅ Optimized build output
- ✅ Excluded unnecessary files via `.vercelignore`

## 🔧 Manual Deployment Steps

1. **Connect to Vercel**
   ```bash
   npm install -g vercel
   vercel login
   ```

2. **Deploy**
   ```bash
   vercel
   ```

3. **For Production**
   ```bash
   vercel --prod
   ```

## 🌐 Environment Variables

No environment variables are required for the static landing page deployment.

## 📊 Performance Features

- **Caching**: Static assets cached for 1 year
- **Compression**: Automatic Gzip/Brotli compression by Vercel
- **CDN**: Global CDN distribution
- **SPA Support**: Client-side routing properly handled

## 🔍 Troubleshooting

If you encounter issues:
1. Ensure all dependencies are in `package.json`
2. Check that build command produces files in `dist/public/`
3. Verify asset paths are relative
4. Review Vercel build logs for any errors

## 📝 Notes

- This configuration deploys only the frontend as a static site
- Server-side code is excluded from deployment
- Perfect for the CookinWitKya landing page use case