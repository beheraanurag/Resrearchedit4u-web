#!/bin/bash

# Vercel Deployment Script for ResearchEdit4U
echo "🚀 Starting Vercel deployment process..."

# Check if Vercel CLI is installed
if ! command -v vercel &> /dev/null; then
    echo "❌ Vercel CLI not found. Installing..."
    npm install -g vercel
fi

# Check if user is logged in
if ! vercel whoami &> /dev/null; then
    echo "🔑 Please login to Vercel first:"
    vercel login
fi

echo "📦 Installing dependencies..."
npm install

echo "🏗️ Building project..."
npm run build

echo "🚀 Deploying to Vercel..."
vercel --prod

echo "✅ Deployment complete!"
echo "📋 Next steps:"
echo "1. Set environment variables in Vercel dashboard"
echo "2. Test your API endpoints"
echo "3. Verify email functionality"
echo ""
echo "🔗 Environment variables to set:"
echo "EMAIL_USER=behera.anurag28@gmail.com"
echo "EMAIL_PASS=drirpllbzwkbjskl"
echo "NODE_ENV=production"
