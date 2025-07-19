# Deployment Guide

This guide will help you deploy the Resume Analyzer project to Vercel (frontend) and Render (backend).

## Prerequisites

- GitHub account
- Vercel account (free tier available)
- Render account (free tier available)
- Git installed on your local machine

## Backend Deployment (Render)

### Step 1: Prepare Backend for Deployment

1. **Update CORS Settings** (Already done)
   - The backend has been configured to allow requests from Vercel and Render domains

2. **Environment Variables**
   - The backend will automatically use the `PORT` environment variable provided by Render

### Step 2: Deploy to Render

1. **Sign up/Login to Render**
   - Go to [render.com](https://render.com)
   - Sign up or login with your GitHub account

2. **Create New Web Service**
   - Click "New +" → "Web Service"
   - Connect your GitHub repository
   - Select the repository containing this project

3. **Configure the Service**
   - **Name**: `resume-analyzer-backend` (or any name you prefer)
   - **Root Directory**: `backend` (important!)
   - **Environment**: `Python 3`
   - **Build Command**: `pip install -r requirements.txt && python -m spacy download en_core_web_sm`
   - **Start Command**: `uvicorn main:app --host 0.0.0.0 --port $PORT`

4. **Deploy**
   - Click "Create Web Service"
   - Render will automatically build and deploy your backend
   - Wait for the deployment to complete (usually 5-10 minutes)

5. **Get Your Backend URL**
   - Once deployed, you'll get a URL like: `https://your-app-name.onrender.com`
   - Save this URL for the frontend configuration

## Frontend Deployment (Vercel)

### Step 1: Prepare Frontend for Deployment

1. **Update API URL** (Already done)
   - The frontend has been configured to use environment variables for the API URL

2. **Environment Variables**
   - You'll need to set the `REACT_APP_API_URL` environment variable in Vercel

### Step 2: Deploy to Vercel

1. **Sign up/Login to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign up or login with your GitHub account

2. **Import Project**
   - Click "New Project"
   - Import your GitHub repository
   - Select the repository containing this project

3. **Configure the Project**
   - **Framework Preset**: `Create React App`
   - **Root Directory**: `frontend` (important!)
   - **Build Command**: `npm run build`
   - **Output Directory**: `build`

4. **Set Environment Variables**
   - In the project settings, go to "Environment Variables"
   - Add a new variable:
     - **Name**: `REACT_APP_API_URL`
     - **Value**: `https://your-backend-app-name.onrender.com` (use your actual backend URL)
   - Save the environment variable

5. **Deploy**
   - Click "Deploy"
   - Vercel will automatically build and deploy your frontend
   - Wait for the deployment to complete (usually 2-5 minutes)

6. **Get Your Frontend URL**
   - Once deployed, you'll get a URL like: `https://your-app-name.vercel.app`
   - This is your live application!

## Testing the Deployment

1. **Test Backend Health**
   - Visit: `https://your-backend-app-name.onrender.com/api/health`
   - You should see: `{"status": "healthy", "timestamp": "..."}`

2. **Test Frontend**
   - Visit your Vercel URL
   - Try uploading a PDF resume
   - The analysis should work with your deployed backend

## Troubleshooting

### Common Issues

1. **CORS Errors**
   - Make sure your backend CORS settings include your Vercel domain
   - Check that the frontend is using the correct backend URL

2. **Build Failures**
   - Check that all dependencies are in `requirements.txt` (backend) and `package.json` (frontend)
   - Ensure the SpaCy model is being downloaded during build

3. **API Connection Issues**
   - Verify the `REACT_APP_API_URL` environment variable is set correctly in Vercel
   - Check that your backend is running and accessible

4. **Render Free Tier Limitations**
   - Free tier services may sleep after inactivity
   - First request after inactivity may take 30-60 seconds to wake up

### Environment Variables Reference

**Backend (Render)**
- `PORT`: Automatically set by Render

**Frontend (Vercel)**
- `REACT_APP_API_URL`: Your backend URL (e.g., `https://your-app-name.onrender.com`)

## Local Development

For local development, create a `.env` file in the frontend directory:

```
REACT_APP_API_URL=http://localhost:8000
```

## Support

If you encounter issues:
1. Check the deployment logs in both Vercel and Render dashboards
2. Verify all environment variables are set correctly
3. Test the backend health endpoint
4. Check browser console for any frontend errors 