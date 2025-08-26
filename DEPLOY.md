# 🚀 Deploy StreamFlix to GitHub

Follow these steps to deploy your StreamFlix platform to GitHub and GitHub Pages.

## 📋 Prerequisites

- Git installed on your computer
- GitHub account
- Node.js 18+ installed

## 🛠 Step 1: Initialize Git Repository

Open your terminal in the project directory and run:

```bash
# Navigate to your project directory
cd "C:\Users\Windows 10\Downloads\Streaming"

# Initialize Git repository
git init

# Add all files to staging
git add .

# Create initial commit
git commit -m "Initial commit: StreamFlix streaming platform"
```

## 🌐 Step 2: Create GitHub Repository

1. **Go to GitHub.com** and sign in to your account
2. **Click the "+" icon** in the top right corner
3. **Select "New repository"**
4. **Repository settings:**
   - Repository name: `streaming-platform`
   - Description: `Modern streaming platform built with Next.js and TypeScript`
   - Set to **Public** (required for free GitHub Pages)
   - **Do NOT** initialize with README (we already have one)
5. **Click "Create repository"**

## 🔗 Step 3: Connect Local Repository to GitHub

Replace `YOUR_USERNAME` with your actual GitHub username:

```bash
# Add remote origin
git remote add origin https://github.com/YOUR_USERNAME/streaming-platform.git

# Push to GitHub
git branch -M main
git push -u origin main
```

## 🚀 Step 4: Enable GitHub Pages

1. **Go to your repository** on GitHub.com
2. **Click on "Settings"** tab
3. **Scroll down to "Pages"** in the left sidebar
4. **Source settings:**
   - Source: `Deploy from a branch`
   - Branch: `gh-pages`
   - Folder: `/ (root)`
5. **Click "Save"**

## ⚙️ Step 5: Configure Repository Settings

### Enable Actions (if not already enabled)
1. Go to **"Actions"** tab in your repository
2. If prompted, click **"I understand my workflows, go ahead and enable them"**

### Configure Pages (Alternative Method)
If you prefer to use GitHub Actions for deployment:
1. In **"Settings" → "Pages"**
2. **Source**: Select `GitHub Actions`
3. The workflow will automatically deploy on every push to main

## 🎯 Step 6: Automatic Deployment

The GitHub Actions workflow will automatically:
- Install dependencies
- Build the Next.js application
- Export static files
- Deploy to GitHub Pages

**Your site will be available at:**
`https://YOUR_USERNAME.github.io/streaming-platform/`

## 🔄 Step 7: Making Updates

To update your deployed site:

```bash
# Make your changes
# ... edit files ...

# Stage changes
git add .

# Commit changes
git commit -m "Description of your changes"

# Push to GitHub (triggers automatic deployment)
git push origin main
```

## 🛠 Local Development

To continue developing locally:

```bash
# Install dependencies (if not already done)
npm install

# Start development server
npm run dev

# Open http://localhost:3000 in your browser
```

## 🎨 Customization for GitHub Pages

The configuration is already set up for GitHub Pages deployment with:

- **Static export** enabled
- **Image optimization** disabled for compatibility
- **Base path** configured for GitHub Pages subdirectory
- **Trailing slashes** enabled for proper routing

## 📁 Repository Structure

```
streaming-platform/
├── .github/
│   └── workflows/
│       └── deploy.yml      # GitHub Actions deployment
├── src/                    # Source code
├── public/                 # Static assets
├── .gitignore             # Git ignore rules
├── README.md              # Project documentation
├── DEPLOY.md              # This deployment guide
└── package.json           # Dependencies and scripts
```

## 🐛 Troubleshooting

### Common Issues:

1. **Build fails**: Check that all dependencies are in package.json
2. **Images not loading**: Ensure image domains are configured in next.config.js
3. **404 errors**: Verify basePath and assetPrefix settings
4. **Actions not running**: Check that Actions are enabled in repository settings

### Build Commands:
```bash
# Test production build locally
npm run build

# Test static export
npm run export

# Check for TypeScript errors
npm run lint
```

## 🎉 Success!

Once deployed, your StreamFlix platform will be live at:
**`https://YOUR_USERNAME.github.io/streaming-platform/`**

The deployment includes:
- ✅ Responsive design for all devices
- ✅ Fast static site generation
- ✅ Automatic deployments on code changes
- ✅ Custom domain support (optional)
- ✅ SSL certificate (automatic)

## 🌟 Next Steps

Consider these enhancements:
- **Custom Domain**: Point your own domain to GitHub Pages
- **Analytics**: Add Google Analytics or similar
- **Content API**: Integrate with real movie/TV databases
- **User Authentication**: Add backend services
- **Performance Monitoring**: Track site performance

---

**Happy Streaming! 🎬✨**