#!/bin/bash

echo "🚀 Resume Analyzer Deployment Setup"
echo "=================================="

# Check if git is installed
if ! command -v git &> /dev/null; then
    echo "❌ Git is not installed. Please install Git first."
    exit 1
fi

# Check if the repository is a git repository
if [ ! -d ".git" ]; then
    echo "📁 Initializing Git repository..."
    git init
    git add .
    git commit -m "Initial commit for deployment"
fi

echo "✅ Git repository ready"

# Check backend dependencies
echo "🔍 Checking backend dependencies..."
if [ -f "backend/requirements.txt" ]; then
    echo "✅ Backend requirements.txt found"
else
    echo "❌ Backend requirements.txt not found"
fi

# Check frontend dependencies
echo "🔍 Checking frontend dependencies..."
if [ -f "frontend/package.json" ]; then
    echo "✅ Frontend package.json found"
else
    echo "❌ Frontend package.json not found"
fi

echo ""
echo "📋 Next Steps:"
echo "1. Push your code to GitHub:"
echo "   git remote add origin <your-github-repo-url>"
echo "   git push -u origin main"
echo ""
echo "2. Deploy Backend to Render:"
echo "   - Go to render.com"
echo "   - Create new Web Service"
echo "   - Connect your GitHub repo"
echo "   - Set root directory to 'backend'"
echo "   - Use build command: pip install -r requirements.txt && python -m spacy download en_core_web_sm"
echo "   - Use start command: uvicorn main:app --host 0.0.0.0 --port \$PORT"
echo ""
echo "3. Deploy Frontend to Vercel:"
echo "   - Go to vercel.com"
echo "   - Import your GitHub repo"
echo "   - Set root directory to 'frontend'"
echo "   - Add environment variable REACT_APP_API_URL with your Render backend URL"
echo ""
echo "📖 See DEPLOYMENT.md for detailed instructions" 