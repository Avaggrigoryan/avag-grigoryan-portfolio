@echo off
echo 🚀 Deploying Avag Grigoryan Portfolio to GitHub and Vercel...
echo.

echo 📦 Building project...
call npm run build
if %errorlevel% neq 0 (
    echo ❌ Build failed. Please check for errors.
    pause
    exit /b 1
)

echo ✅ Build successful!
echo.

echo 📤 Pushing to GitHub...
git add .
git commit -m "Update portfolio: %date% %time%"
git push origin main
if %errorlevel% neq 0 (
    echo ❌ Git push failed. Please check your Git setup.
    pause
    exit /b 1
)

echo ✅ Pushed to GitHub successfully!
echo.
echo 🌐 Vercel will automatically deploy your changes in a few minutes.
echo 📋 Check your Vercel dashboard for deployment status.
echo.
echo 🎉 Your portfolio is being deployed!
pause
