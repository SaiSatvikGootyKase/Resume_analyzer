# Complete Deployment Guide

This guide will help you deploy your Resume Analyzer to both Render (backend) and Vercel (frontend).

## 🚀 Quick Start

### Step 1: Push Code to GitHub
```bash
git add .
git commit -m "Ready for deployment - Fixed build issues and optimized for Render/Vercel"
git push origin main
```

### Step 2: Deploy Backend (Render)
1. Go to [render.com](https://render.com)
2. Sign up/Login with GitHub
3. Click "New +" → "Web Service"
4. Connect your GitHub repository
5. Configure:
   - **Name**: `resume-analyzer-backend`
   - **Root Directory**: `backend`
   - **Environment**: `Python 3`
   - **Build Command**: `chmod +x build.sh && ./build.sh`
   - **Start Command**: `uvicorn main:app --host 0.0.0.0 --port $PORT`
6. Click "Create Web Service"

### Step 3: Deploy Frontend (Vercel)
1. Go to [vercel.com](https://vercel.com)
2. Sign up/Login with GitHub
3. Click "New Project"
4. Import your GitHub repository
5. Configure:
   - **Framework Preset**: `Create React App`
   - **Root Directory**: `frontend`
   - **Build Command**: `npm run build`
   - **Output Directory**: `build`
6. Add Environment Variable:
   - **Name**: `REACT_APP_API_URL`
   - **Value**: `https://your-backend-name.onrender.com` (use your actual Render URL)
7. Click "Deploy"

## 📋 Pre-Deployment Checklist

### Backend (Render) ✅
- [x] `requirements.txt` - Updated with setuptools and SpaCy model
- [x] `runtime.txt` - Python 3.9.18
- [x] `render.yaml` - Proper configuration
- [x] `build.sh` - Robust build script
- [x] `main.py` - CORS configured for Vercel domains
- [x] `Procfile` - Correct start command

### Frontend (Vercel) ✅
- [x] `package.json` - Updated with homepage and build script
- [x] `vercel.json` - Proper configuration
- [x] `index.html` - SEO optimized
- [x] API URL configuration - Environment variable ready
- [x] CORS handling - Configured for Render domains

## 🔧 Configuration Details

### Backend Configuration
```yaml
# render.yaml
services:
  - type: web
    name: resume-analyzer-backend
    env: python
    buildCommand: chmod +x build.sh && ./build.sh
    startCommand: uvicorn main:app --host 0.0.0.0 --port $PORT
    envVars:
      - key: PYTHON_VERSION
        value: 3.9.18
```

### Frontend Configuration
```json
// vercel.json
{
  "version": 2,
  "builds": [
    {
      "src": "package.json",
      "use": "@vercel/static-build",
      "config": {
        "distDir": "build"
      }
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "/index.html"
    }
  ]
}
```

## 🧪 Testing Your Deployment

### Backend Testing
1. **Health Check**: `https://your-backend.onrender.com/api/health`
2. **API Docs**: `https://your-backend.onrender.com/docs`
3. **Test Upload**: Use the frontend to upload a PDF

### Frontend Testing
1. **Homepage**: Visit your Vercel URL
2. **File Upload**: Test PDF upload functionality
3. **API Connection**: Verify it connects to your Render backend

## 🚨 Troubleshooting

### Common Issues

1. **Build Failures**
   - Check build logs in Render/Vercel dashboard
   - Verify all dependencies are correct
   - Ensure Python version compatibility

2. **CORS Errors**
   - Backend CORS includes: `https://*.vercel.app`
   - Frontend API URL points to correct Render URL

3. **Environment Variables**
   - Vercel: Set `REACT_APP_API_URL` to your Render backend URL
   - Render: `PORT` is automatically set

4. **SpaCy Model Issues**
   - Model is included in requirements.txt
   - Build script verifies installation

### Render Free Tier Limitations
- Services sleep after 15 minutes of inactivity
- First request may take 30-60 seconds to wake up
- Limited to 750 hours per month

## 📞 Support

If you encounter issues:
1. Check deployment logs in both platforms
2. Verify environment variables are set correctly
3. Test backend health endpoint
4. Check browser console for frontend errors

## 🎉 Success!

Once deployed, your Resume Analyzer will be available at:
- **Frontend**: `https://your-app.vercel.app`
- **Backend**: `https://your-backend.onrender.com`
- **API Docs**: `https://your-backend.onrender.com/docs` 