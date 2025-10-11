#!/bin/bash

# Deploy script for Avag Grigoryan Portfolio
echo "🚀 Deploying Avag Grigoryan Portfolio..."

# Build the project
echo "📦 Building project..."
npm run build

# Check if build was successful
if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    echo "🌐 Ready for deployment to Vercel, Netlify, or any static hosting service"
    echo ""
    echo "📋 Next steps:"
    echo "1. Push to GitHub: git push origin main"
    echo "2. Deploy to Vercel: Connect your GitHub repo at vercel.com"
    echo "3. Or deploy to Netlify: Drag and drop the 'out' folder"
    echo ""
    echo "🎉 Your portfolio is ready to go live!"
else
    echo "❌ Build failed. Please check for errors and try again."
    exit 1
fi
