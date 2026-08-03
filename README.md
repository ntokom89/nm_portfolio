# Ntokozo Mweli - Full Stack Developer Portfolio

A modern, responsive portfolio website showcasing professional experience, projects, skills, and services. Built with Angular 17 and Tailwind CSS for a sleek, performant web presence.

![Portfolio Preview](https://img.shields.io/badge/Angular-17.0.0-red?style=for-the-badge) ![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-%231F2937-blue?style=for-the-badge) ![TypeScript](https://img.shields.io/badge/TypeScript-5.2.2-blue?style=for-the-badge)

---

## 📋 Table of Contents

- [Project Overview](#project-overview)
- [Tech Stack](#tech-stack)
- [Features](#features)
- [Project Structure](#project-structure)
- [Installation & Setup](#installation--setup)
- [Available Scripts](#available-scripts)
- [Components](#components)
- [Services](#services)
- [Styling & Design](#styling--design)

---

## 🎯 Project Overview

This is a professional portfolio website for **Ntokozo Mweli**, a Full Stack Software Developer based in Soweto, Gauteng. The portfolio displays:

- **Professional Experience** – Work history at freelance and corporate organizations
- **Projects** – Showcase of notable development projects with technologies used
- **Technical Skills** – Programming languages, frameworks, tools, and soft skills
- **Services Offered** – Full stack development, web apps, mobile apps, APIs, databases, and payments
- **Education & Certifications** – Academic background and professional credentials
- **Contact Information** – Direct links to phone, email, LinkedIn, and GitHub

The site is optimized for performance, accessibility, and user experience across all devices.

---

## 🛠 Tech Stack

### Frontend
- **Angular 17** – Modern web framework with standalone components and control flow syntax (@if, @for)
- **TypeScript 5.2.2** – Strongly-typed JavaScript for maintainability
- **Tailwind CSS** – Utility-first CSS framework for responsive, mobile-first design
- **RxJS 7.8** – Reactive programming library for asynchronous data handling

### Development Tools
- **Angular CLI 17** – Command-line interface for scaffolding and serving
- **Karma + Jasmine** – Testing framework for unit tests
- **Angular DevKit** – Build pipeline and development utilities

### Styling & Icons
- **Tailwind CSS** – Custom styling with utility classes
- **Google Material Icons** – High-quality, recognizable icon set
- **SCSS** – Component-scoped styling with variables and mixins

### Deployment
- **Angular Build** – Optimized production builds
- **GitHub Pages** – Static site hosting (via angular-cli-ghpages)

---

## ✨ Features

### ✅ Core Features
- **Fully Responsive Design** – Optimized for mobile, tablet, and desktop layouts
- **Standalone Angular Components** – Modern, performant component architecture
- **Smooth Animations** – Hover effects, transitions, and interactive elements
- **Dark Theme** – Professional dark color scheme with teal accents
- **Material Icons Integration** – Google's Material Design icons library
- **Fast Performance** – Optimized builds with Change Detection strategy

### 📱 Page Sections
1. **Header** – Name, title, bio, and social links (GitHub, LinkedIn, Email)
2. **About** – Professional summary and introduction
3. **Experience** – Work history with company details and achievements
4. **Projects** – Portfolio of completed projects with tech stacks and GitHub links
5. **Skills** – Languages, frameworks, tools, and soft skills
6. **Services Offered** – Detailed service offerings with descriptions and technologies
7. **Education** – University degree and professional certifications
8. **Contact** – Phone, email, and location with Material Icons
9. **Footer** – Copyright and footer links

---

## 📁 Project Structure

```
nm_portfolio/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── header/                 # Header with hero section
│   │   │   ├── about/                  # About section
│   │   │   ├── experience/             # Work experience section
│   │   │   ├── projects/               # Projects showcase
│   │   │   ├── skills/                 # Technical skills
│   │   │   ├── services-offered/       # Services and offerings
│   │   │   ├── education/              # Education & certifications
│   │   │   ├── contact/                # Contact information
│   │   │   └── footer/                 # Footer section
│   │   ├── services/
│   │   │   └── portfolio-data.service.ts  # Centralized data service
│   │   ├── app.component.ts            # Root component
│   │   ├── app.component.html          # Root template
│   │   ├── app.config.ts               # App configuration
│   │   └── app.routes.ts               # Route definitions
│   ├── index.html                      # HTML entry point
│   ├── main.ts                         # Bootstrap file
│   └── styles.scss                     # Global styles
├── angular.json                        # Angular CLI configuration
├── tsconfig.json                       # TypeScript configuration
├── tailwind.config.js                  # Tailwind CSS config
├── package.json                        # Dependencies
└── README.md                           # This file
```

---

## 🚀 Installation & Setup

### Prerequisites
- **Node.js** (v18 or higher)
- **npm** (v9 or higher) or **yarn**
- **Angular CLI** (installed globally or via npx)

### Steps

1. **Clone the Repository**
   ```bash
   git clone https://github.com/ntokom89/nlm_portfolio.git
   cd nm_portfolio
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Configure Environment** (optional)
   - Update personal details in `src/app/services/portfolio-data.service.ts` if needed

4. **Start Development Server**
   ```bash
   npm start
   ```
   Navigate to `http://localhost:4200/`

5. **Build for Production**
   ```bash
   npm run build
   ```
   Output will be in `dist/` directory

---

## 📝 Available Scripts

| Script | Description |
|--------|-------------|
| `npm start` | Start dev server at localhost:4200 |
| `npm run build` | Build optimized production bundle |
| `npm run watch` | Build with watch mode for development |
| `npm test` | Run unit tests via Karma |
| `ng generate component <name>` | Generate new component |

---

## 🧩 Components

### 1. **Header Component**
- Displays name, title, and professional bio
- Social media links (GitHub, LinkedIn, Email)
- Hero section with call-to-action

### 2. **About Component**
- Professional summary
- Key highlights and introduction

### 3. **Experience Component**
- Work history with company names and dates
- Role descriptions and achievements
- Technology stacks used

### 4. **Projects Component**
- Featured project cards
- Project descriptions
- Technologies and GitHub links
- Hover animations

### 5. **Skills Component**
- Languages (C#, TypeScript, Java, JavaScript, Python, etc.)
- Frameworks & Libraries
- Development Tools
- Soft Skills

### 6. **Services Offered Component**
- Full Stack Development
- Web Application Development
- Mobile App Development
- Backend API Development
- Database Design & Management
- Payment System Integration

### 7. **Education Component**
- University degree details
- Certifications and date earned

### 8. **Contact Component**
- Phone number with tel: link
- Email with mailto: link
- Location information
- Material Icons for each contact type

### 9. **Footer Component**
- Social links (GitHub, LinkedIn, Email)
- Copyright notice

---

## 🔗 Services

### PortfolioDataService
Central service that provides all portfolio data:

```typescript
getPersonalInfo()        // Name, title, contact details
getWorkExperience()      // Work history
getProjects()            // Project list
getSkills()              // Technical skills
getEducationAndCerts()   // Education & certifications
getServices()            // Services offered
```

This service uses Angular's dependency injection and ensures:
- Single source of truth for data
- Easy updates without touching components
- Efficient data sharing across the app

---

## 🎨 Styling & Design

### Color Scheme
- **Primary Dark** – `#0f172a` (Dark blue background)
- **Text Gray** – `#9ca3af` (Default text)
- **Accent Teal** – `#14b8a6` (Primary accent)
- **Bright Teal** – `#6ee7de` (Hover states)
- **Dark Gray** – `#1f2937`, `#374151` (Cards)

### Responsive Breakpoints
- **Mobile** – < 768px
- **Tablet** – 768px - 1024px
- **Desktop** – > 1024px

### Animations
- Smooth hover transitions on cards (`..-translate-y-2`)
- Icon scaling on hover (Material Icons)
- Color transitions (0.2s - 0.3s ease)
- Fade in effects for sections

---

## 🔧 Customization

### Updating Portfolio Data
Edit `src/app/services/portfolio-data.service.ts`:
```typescript
getPersonalInfo() {
  return {
    name: 'Your Name',
    email: 'your.email@example.com',
    phone: '+1234567890',
    profilePicture: 'assets/profile.jpg', // put your headshot in assets folder
    // ... other details
  };
}
```

Place a `profile.jpg` image in the `src/assets` directory (or update the path accordingly) so the header displays your photo.

### Adding New Sections
1. Generate component: `ng generate component components/new-section`
2. Add component to `app.component.html`
3. Import in `app.component.ts`
4. Add data method to `portfolio-data.service.ts`

### Tailwind Configuration
Customize `tailwind.config.js` for custom colors, fonts, or spacing.

---

## 🌐 Deployment

### GitHub Pages
Deploy using angular-cli-ghpages:
```bash
npm run build
npx angular-cli-ghpages --dir=dist/nm-portfolio
```

### Other Platforms
- **Netlify** – Connect repository, set build command to `ng build`
- **Vercel** – Similar setup, automatic deployments on push
- **AWS/Azure** – Deploy `dist/` folder to static hosting

---

## 📧 Contact

- **Email** – ntokozomweli001@gmail.com
- **Phone** – +27 72 985 3908
- **LinkedIn** – https://linkedin.com/in/ntokozo-mweli
- **GitHub** – https://github.com/ntokom89
- **Location** – Soweto, Gauteng

---

## 📄 License

This project is personal portfolio content. All work samples and project descriptions are the intellectual property of Ntokozo Mweli.

---

## 🙏 Acknowledgments

- [Angular](https://angular.io) – For the excellent framework
- [Tailwind CSS](https://tailwindcss.com) – For utility-first styling
- [Google Material Icons](https://fonts.google.com/icons) – For professional icons
- [Angular CLI](https://cli.angular.io) – For development tools

---

**Last Updated:** February 2026  
**Portfolio Version:** 1.0.0

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
