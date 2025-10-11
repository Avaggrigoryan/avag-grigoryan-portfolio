@echo off
echo 🔧 Fixing Git repository issues...
echo.

echo 📋 Checking Git installation...
git --version
if %errorlevel% neq 0 (
    echo ❌ Git is not installed. Please install Git first:
    echo    https://git-scm.com/download/win
    pause
    exit /b 1
)

echo ✅ Git is installed!
echo.

echo 🗑️ Removing old remote...
git remote remove origin 2>nul

echo ➕ Adding correct remote...
git remote add origin https://github.com/avaggrigoryan/avag-grigoryan-portfolio.git

echo 📦 Adding all files...
git add .

echo 💾 Creating commit...
git commit -m "Initial commit: Professional portfolio website"

echo 🚀 Pushing to GitHub...
git push -u origin main

if %errorlevel% equ 0 (
    echo ✅ Successfully pushed to GitHub!
    echo 🌐 Your repository: https://github.com/avaggrigoryan/avag-grigoryan-portfolio
    echo.
    echo 📋 Next steps:
    echo 1. Go to https://vercel.com/new
    echo 2. Import your GitHub repository
    echo 3. Deploy your portfolio!
) else (
    echo ❌ Push failed. Please check your GitHub repository exists.
    echo 📋 Make sure you created: https://github.com/avaggrigoryan/avag-grigoryan-portfolio
)

pause
