# Railway Deployment Guide

## 🚂 Deploy Backend to Railway

### Prerequisites
- Railway account (free at railway.app)
- GitHub repository with your code

### Step 1: Prepare Repository
1. Push your code to GitHub
2. Make sure `server/` folder contains:
   - `server.js`
   - `package.json`
   - `emailTemplates.js`
   - `Procfile`

### Step 2: Deploy to Railway
1. Go to [railway.app](https://railway.app)
2. Sign up/Login with GitHub
3. Click "New Project"
4. Select "Deploy from GitHub repo"
5. Choose your repository
6. Select the `server` folder as root directory

### Step 3: Set Environment Variables
In Railway dashboard, go to Variables tab and add:
```
EMAIL_USER=researcheditu@gmail.com
EMAIL_PASS=ffsibzywxrggcbrq
NODE_ENV=production
PORT=5000
```

### Step 4: Get Your Backend URL
Railway will provide a URL like: `https://your-app-name.railway.app`

### Step 5: Update Frontend
Update your frontend API URLs to use the Railway backend URL.

## Alternative: Render Deployment

### Step 1: Prepare for Render
1. Create `render.yaml` in server folder
2. Push to GitHub

### Step 2: Deploy to Render
1. Go to [render.com](https://render.com)
2. Connect GitHub
3. Create new Web Service
4. Select your repository
5. Set build command: `npm install`
6. Set start command: `npm start`
7. Set root directory: `server`

### Step 3: Environment Variables
Add in Render dashboard:
```
EMAIL_USER=researcheditu@gmail.com
EMAIL_PASS=ffsibzywxrggcbrq
NODE_ENV=production
```

## Alternative: DigitalOcean App Platform

### Step 1: Prepare for DigitalOcean
1. Create `.do/app.yaml` file
2. Push to GitHub

### Step 2: Deploy
1. Go to DigitalOcean App Platform
2. Create new app from GitHub
3. Select repository and server folder
4. Configure environment variables
5. Deploy

## Testing Your Backend
After deployment, test these endpoints:
- `GET /api/health` - Health check
- `POST /api/contact` - Contact form
- `POST /api/service-booking` - Service booking

## Update Frontend
Once backend is deployed, update frontend API URLs in:
- `src/assets/Pages/Contact.jsx`
- `src/assets/Pages/ServiceBookingForm.jsx`

Change the API URL from Vercel to your new backend URL.
