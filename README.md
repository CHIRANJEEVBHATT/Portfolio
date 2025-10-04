# Portfolio Website - MERN Stack

A modern, responsive portfolio website built with the MERN stack (MongoDB, Express.js, React, Node.js).

## Features

### Frontend (React + Tailwind CSS)
-  Responsive design with dark/light mode toggle
-  Smooth animations using Framer Motion
-  Sections: Home, About, Projects, Contact, Resume Download
-  Interactive navbar with smooth scroll navigation
-  Hero section with call-to-action buttons
-  About section with animated skill progress bars
-  Projects section with responsive cards
-  Contact form with validation
-  Resume download functionality

### Backend (Node.js + Express.js)
-  Express server setup
-  Contact form API with Nodemailer integration
-  CORS configuration
-  MongoDB connection setup

## Setup Instructions

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local or cloud)
- Gmail account for email functionality

### Backend Setup

1. Navigate to the server directory:
```bash
cd server
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the server directory with the following variables:
```env
# Database
MONGODB_URI=mongodb://localhost:27017/portfolio

# Server
PORT=5000
CLIENT_URL=http://localhost:5173

# Email Configuration (for contact form)
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
CONTACT_EMAIL=your-email@gmail.com
```

4. For Gmail setup:
   - Enable 2-factor authentication on your Gmail account
   - Generate an App Password: Google Account → Security → App passwords
   - Use the App Password in EMAIL_PASS

5. Start the server:
```bash
npm run dev
```

### Frontend Setup

1. Navigate to the frontend directory:
```bash
cd client/frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

## Customization

### Personal Information
Update the following files with your information:

1. **Hero Section** (`client/frontend/src/components/Hero.jsx`):
   - Change "Your Name" to your actual name
   - Update the tagline

2. **About Section** (`client/frontend/src/components/About.jsx`):
   - Update the about text
   - Modify skills arrays with your technologies
   - Adjust skill levels (percentages)

3. **Projects Section** (`client/frontend/src/components/Projects.jsx`):
   - Replace sample projects with your actual projects
   - Update GitHub and live demo links
   - Modify project descriptions and tech stacks

4. **Contact Section** (`client/frontend/src/components/Contact.jsx`):
   - Update contact information (email, phone, location)
   - Replace social media links

5. **Footer** (`client/frontend/src/components/Footer.jsx`):
   - Update social media links
   - Change copyright information

6. **Resume**:
   - Replace `client/frontend/public/resume.pdf` with your actual resume

### Styling
- Colors can be customized in `client/frontend/tailwind.config.js`
- Component styles are in individual component files
- Global styles are in `client/frontend/src/index.css`

## Deployment

### Frontend (Vercel/Netlify)
1. Build the project:
```bash
cd client/frontend
npm run build
```

2. Deploy the `dist` folder to your hosting platform

### Backend (Heroku/Railway/DigitalOcean)
1. Set environment variables in your hosting platform
2. Deploy the server directory

## API Endpoints

### POST /api/contact
Sends contact form data via email.

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "Hello, I'd like to work with you!"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Message sent successfully!"
}
```

## Technologies Used

- **Frontend**: React, Tailwind CSS, Framer Motion, React Router, Axios
- **Backend**: Node.js, Express.js, Nodemailer, MongoDB, Mongoose
- **Tools**: Git, VS Code, npm

## License

This project is open source and available under the [MIT License](LICENSE).
