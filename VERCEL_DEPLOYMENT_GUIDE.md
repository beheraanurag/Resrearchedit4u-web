# 🚀 Vercel Deployment Guide for ResearchEdit4U

This guide will help you deploy your full-stack React + Node.js application to Vercel using serverless functions.

## 📋 Prerequisites

- GitHub account
- Vercel account (free tier available)
- Node.js installed locally
- Git repository pushed to GitHub

## 🏗️ Project Structure

```
researchedit4u-web/
├── api/                          # Vercel serverless functions
│   ├── contact.js               # Contact form API
│   ├── service-booking.js       # Service booking API
│   ├── health.js                # Health check API
│   └── package.json             # API dependencies
├── src/                         # React frontend
├── public/                      # Static assets
├── vercel.json                  # Vercel configuration
├── package.json                 # Frontend dependencies
└── vercel-env.example          # Environment variables template
```

## 🔧 Step 1: Install Vercel CLI

```bash
npm install -g vercel
```

## 🔑 Step 2: Login to Vercel

```bash
vercel login
```

## 🌐 Step 3: Deploy to Vercel

From your project root directory:

```bash
vercel
```

Follow the prompts:
- Set up and deploy? **Yes**
- Which scope? **Your account**
- Link to existing project? **No** (for first deployment)
- What's your project's name? **researchedit4u-web**
- In which directory is your code located? **./** (current directory)

## ⚙️ Step 4: Set Environment Variables

In your Vercel dashboard:

1. Go to your project
2. Click **Settings** → **Environment Variables**
3. Add the following variables:

### Required Variables:
```
EMAIL_USER = behera.anurag28@gmail.com
EMAIL_PASS = drirpllbzwkbjskl
NODE_ENV = production
```

### Optional Variables:
```
VITE_API_URL = https://your-project.vercel.app
```

## 🔄 Step 5: Redeploy with Environment Variables

After setting environment variables:

```bash
vercel --prod
```

## 🧪 Step 6: Test Your Deployment

### Test Health Check:
```
GET https://your-project.vercel.app/api/health
```

### Test Contact Form:
```
POST https://your-project.vercel.app/api/contact
```

### Test Service Booking:
```
POST https://your-project.vercel.app/api/service-booking
```

## 📱 Step 7: Update Frontend URLs

The frontend will automatically use the correct API URLs based on the environment:

- **Development**: `http://localhost:5000`
- **Production**: `https://your-project.vercel.app`

## 🔍 Step 8: Monitor and Debug

### View Logs:
```bash
vercel logs
```

### View Function Logs:
```bash
vercel logs --follow
```

## 🚨 Troubleshooting

### Common Issues:

1. **Environment Variables Not Working**
   - Ensure variables are set in Vercel dashboard
   - Redeploy after setting variables
   - Check variable names match exactly

2. **CORS Errors**
   - The API functions include CORS headers
   - Check if your domain is allowed

3. **Email Not Sending**
   - Verify EMAIL_USER and EMAIL_PASS are correct
   - Check Gmail app password is valid
   - Check Vercel function logs

4. **File Upload Issues**
   - Vercel has a 4.5MB limit for serverless functions
   - Large files may timeout

### Debug Commands:

```bash
# Check deployment status
vercel ls

# View specific deployment
vercel inspect [deployment-url]

# Check environment variables
vercel env ls

# View function logs
vercel logs [function-name]
```

## 📊 Performance Optimization

### For Better Performance:

1. **Enable Edge Functions** (if needed)
2. **Use CDN** for static assets
3. **Optimize images** before upload
4. **Minimize bundle size**

### Vercel Limits:
- **Serverless Functions**: 10 seconds execution time
- **File Upload**: 4.5MB per request
- **Memory**: 1024MB per function
- **Bandwidth**: 100GB/month (free tier)

## 🔄 Continuous Deployment

Once connected to GitHub:
- Every push to main branch triggers deployment
- Preview deployments for pull requests
- Automatic environment variable inheritance

## 📈 Monitoring

### Vercel Analytics:
- Page views and performance
- Function execution metrics
- Error tracking

### Custom Monitoring:
- Add logging to your functions
- Use external monitoring services
- Set up alerts for errors

## 🎯 Production Checklist

- [ ] Environment variables set
- [ ] Email service working
- [ ] Contact form functional
- [ ] Service booking working
- [ ] File uploads working
- [ ] CORS configured
- [ ] Error handling in place
- [ ] Logging implemented
- [ ] Performance optimized
- [ ] Security reviewed

## 🆘 Support

If you encounter issues:

1. Check Vercel documentation
2. Review function logs
3. Test locally first
4. Check environment variables
5. Verify API endpoints

## 🎉 Success!

Your full-stack application is now deployed on Vercel with:
- ✅ React frontend
- ✅ Node.js serverless functions
- ✅ Email service
- ✅ File upload support
- ✅ Form validation
- ✅ Beautiful email templates

**Your app URL**: `https://your-project.vercel.app`
