# Email Service Integration Setup

This guide will help you set up the email service integration for your ResearchEdit4U project.

## Backend Setup

### 1. Install Dependencies
Navigate to the server directory and install dependencies:
```bash
cd server
npm install
```

### 2. Environment Configuration
1. Copy the example environment file:
   ```bash
   cp env.example .env
   ```

2. Update the `.env` file with your email credentials:
   ```
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-app-password
   PORT=5000
   ```

### 3. Gmail App Password Setup
1. Enable 2-Factor Authentication on your Gmail account
2. Go to Google Account settings > Security > App passwords
3. Generate an app password for "Mail"
4. Use this app password in the `EMAIL_PASS` field

### 4. Start the Server
```bash
npm start
# or for development with auto-restart
npm run dev
```

## Frontend Setup

### 1. Install Dependencies
The frontend dependencies are already installed. If you need to reinstall:
```bash
npm install
```

### 2. Start the Frontend
```bash
npm run dev
```

## Features Implemented

### 1. Contact Form (`/contact`)
- Updated to use the new email service instead of EmailJS
- Added phone number field
- Added file attachment support
- Improved error handling and user feedback

### 2. Service Booking Form
- Modal-based booking form accessible from service cards
- Comprehensive form with:
  - Personal information (name, email, phone)
  - Service details (category, specific service)
  - Budget and timeline selection
  - Requirements description
  - File attachment support
- Integrated into the Services page

### 3. Email Templates
- Contact form emails include all form data
- Service booking emails include detailed service information
- Professional HTML formatting
- File attachments support

## API Endpoints

### Contact Form
- **POST** `/api/contact`
- Accepts: name, email, phone, message, file (optional)
- Returns: success/error message

### Service Booking
- **POST** `/api/service-booking`
- Accepts: name, email, phone, service, serviceCategory, budget, timeline, requirements, message, file (optional)
- Returns: success/error message

### Health Check
- **GET** `/api/health`
- Returns: server status

## Usage

1. **Contact Form**: Users can fill out the contact form with their information and attach files if needed.

2. **Service Booking**: 
   - Click "Book Now" on any service card
   - Fill out the comprehensive booking form
   - Submit to send a detailed booking request

3. **Email Notifications**: All form submissions are sent to the configured email address with detailed information.

## Troubleshooting

### Common Issues

1. **Email not sending**:
   - Check Gmail app password is correct
   - Ensure 2FA is enabled on Gmail account
   - Verify EMAIL_USER and EMAIL_PASS in .env file

2. **CORS errors**:
   - Ensure the backend server is running on port 5000
   - Check that the frontend is making requests to the correct API URL

3. **File upload issues**:
   - Check file size limits (currently 10MB)
   - Verify file types are accepted

### Testing

1. Start both frontend and backend servers
2. Navigate to the contact page and test the contact form
3. Go to services page and test the booking form
4. Check your email for the notifications

## Security Notes

- Never commit the `.env` file to version control
- Use app passwords instead of your main Gmail password
- Consider implementing rate limiting for production use
- Add input validation and sanitization for production

## Production Deployment

For production deployment:
1. Update API URLs to use your production domain
2. Set up proper environment variables on your hosting platform
3. Consider using a professional email service like SendGrid or AWS SES
4. Implement proper error logging and monitoring
