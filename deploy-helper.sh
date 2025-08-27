#!/bin/bash
# StreamDZD GitHub Deployment Script
# Replace YOUR_USERNAME with your actual GitHub username

echo "🚀 StreamDZD GitHub Deployment Helper"
echo "======================================"
echo ""

# Check if git is initialized
if [ ! -d ".git" ]; then
    echo "❌ Git repository not found. Please run 'git init' first."
    exit 1
fi

# Instructions
echo "📋 Follow these steps to deploy to GitHub:"
echo ""
echo "1. Create repository on GitHub.com:"
echo "   - Repository name: streaming-platform"
echo "   - Visibility: Public"
echo "   - Don't initialize with README"
echo ""
echo "2. Run these commands (replace YOUR_USERNAME):"
echo "   git remote add origin https://github.com/YOUR_USERNAME/streaming-platform.git"
echo "   git branch -M main"
echo "   git push -u origin main"
echo ""
echo "3. Enable GitHub Pages:"
echo "   - Go to Settings → Pages"
echo "   - Source: Deploy from a branch"
echo "   - Branch: gh-pages"
echo "   - Folder: / (root)"
echo ""
echo "4. Your site will be live at:"
echo "   https://YOUR_USERNAME.github.io/streaming-platform/"
echo ""
echo "✅ All deployment files are ready!"
echo "✅ GitHub Actions workflow configured"
echo "✅ Next.js export settings configured"
echo "✅ Static site generation enabled"