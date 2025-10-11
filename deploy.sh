#!/bin/bash

echo "🚀 Deploying Avag Grigoryan Portfolio to GitHub and Vercel..."
echo

echo "📦 Building project..."
npm run build
if [ $? -ne 0 ]; then
    echo "❌ Build failed. Please check for errors."
    exit 1
fi

echo "✅ Build successful!"
echo

echo "📤 Pushing to GitHub..."
git add .
git commit -m "Update portfolio: $(date)"
git push origin main
if [ $? -ne 0 ]; then
    echo "❌ Git push failed. Please check your Git setup."
    exit 1
fi

echo "✅ Pushed to GitHub successfully!"
echo
echo "🌐 Vercel will automatically deploy your changes in a few minutes."
echo "📋 Check your Vercel dashboard for deployment status."
echo
echo "🎉 Your portfolio is being deployed!"
