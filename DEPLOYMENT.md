# Deployment Guide

This guide will help you deploy your portfolio website to various platforms.

## 🚀 Quick Start - Vercel (Recommended)

1. **Create GitHub Repository**
   - Go to [GitHub.com](https://github.com)
   - Create a new repository named "portfolio" or "personal-portfolio"
   - Make it public

2. **Push to GitHub**
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/REPOSITORY_NAME.git
   git push -u origin main
   ```

3. **Deploy with Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign up with your GitHub account
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Vite settings
   - Click "Deploy"

## 🌐 Alternative Deployment Options

### Netlify
1. Go to [netlify.com](https://netlify.com)
2. Sign up and click "New site from Git"
3. Connect your GitHub repository
4. Set build command: `npm run build`
5. Set publish directory: `dist`
6. Click "Deploy site"

### GitHub Pages
1. Update `package.json` homepage field with your actual GitHub username and repo name
2. Run these commands:
   ```bash
   npm run build
   npm run deploy
   ```
3. Go to repository Settings > Pages
4. Set source to "Deploy from a branch"
5. Select "gh-pages" branch
6. Save

### Firebase Hosting
1. Install Firebase CLI: `npm install -g firebase-tools`
2. Login: `firebase login`
3. Initialize: `firebase init hosting`
4. Set public directory to `dist`
5. Build and deploy:
   ```bash
   npm run build
   firebase deploy
   ```

## 🔧 Configuration Files

### For GitHub Pages
Update the `homepage` field in `package.json`:
```json
"homepage": "https://yourusername.github.io/your-repo-name"
```

### For Custom Domain
1. Add a `CNAME` file in the `public` folder
2. Add your domain name to the file
3. Configure DNS settings with your domain provider

## 📝 Environment Variables

If you need environment variables:
1. Create a `.env` file (already in .gitignore)
2. Add variables like:
   ```
   VITE_API_URL=your_api_url
   VITE_ANALYTICS_ID=your_analytics_id
   ```

## 🔄 Continuous Deployment

All platforms above support automatic deployment:
- **Vercel**: Deploys on every push to main branch
- **Netlify**: Deploys on every push to main branch
- **GitHub Pages**: Deploys when you run `npm run deploy`

## 🎯 Next Steps

1. **Customize your portfolio** with your personal information
2. **Add your projects** to the Projects section
3. **Update contact information** with your real details
4. **Add analytics** (Google Analytics, etc.)
5. **Optimize for SEO** with meta tags and descriptions

## 🆘 Troubleshooting

### Build Errors
- Check that all dependencies are installed: `npm install`
- Verify Node.js version compatibility
- Check console for specific error messages

### Deployment Issues
- Ensure repository is public (for free tiers)
- Check build logs in deployment platform
- Verify build command and output directory

### Custom Domain Issues
- Wait 24-48 hours for DNS propagation
- Verify DNS settings with your domain provider
- Check SSL certificate status

## 📞 Support

If you encounter issues:
1. Check the platform's documentation
2. Review build logs
3. Test locally with `npm run build`
4. Check GitHub Issues for similar problems