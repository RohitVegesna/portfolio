# Rohit Vegesna - Portfolio Website

A modern, responsive portfolio website showcasing my journey as a Senior QA Automation Developer with 11+ years of experience in enterprise-grade test automation.

🌐 **Live Site:** [rohitvegesna.com](https://rohitvegesna.com)

## 🚀 Tech Stack

- **Frontend Framework:** React 18 with TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS v4
- **UI Components:** Radix UI primitives with shadcn/ui
- **Animations:** Framer Motion
- **Routing:** Wouter (lightweight React router)
- **Icons:** Lucide React
- **Backend:** Express.js (for local development)

## ✨ Features

- **Modern UI/UX:** Glassmorphism design with dark mode cyber aesthetic
- **Smooth Animations:** Page transitions and scroll-based animations using Framer Motion
- **Responsive Design:** Fully optimized for desktop, tablet, and mobile devices
- **Section Navigation:** Fixed navbar with dropdown menu and smooth scroll
- **Performance Optimized:** Static site deployment for fast loading times

## 📦 Project Structure

```
portfolio/
├── client/               # Frontend React application
│   ├── src/
│   │   ├── components/  # Reusable UI components
│   │   ├── pages/       # Main pages (Home, etc.)
│   │   ├── hooks/       # Custom React hooks
│   │   └── lib/         # Utility functions
│   └── public/          # Static assets
├── server/              # Express server (development only)
├── script/              # Build scripts
└── shared/              # Shared types/schemas
```

## 🛠️ Local Development

### Prerequisites
- Node.js (v18 or higher)
- npm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/RohitVegesna/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The site will be available at `http://localhost:5000`

## 🏗️ Build

To build the project for production:

```bash
npm run build
```

This creates optimized static files in the `dist/public` directory.

## 🌐 Deployment

### Hosting Platform
This portfolio is deployed using **[Vercel](https://vercel.com)** with automatic deployments from GitHub.

**Deployment Configuration:**
- Static site deployment with SPA routing support
- Automatic builds triggered on Git push
- Custom domain configured with SSL certificate

### Domain
Domain **rohitvegesna.com** purchased from **[Porkbun](https://porkbun.com)**

**DNS Configuration:**
- Nameservers pointed to Vercel DNS (`ns1.vercel-dns.com`, `ns2.vercel-dns.com`)
- Automatic SSL certificate management by Vercel
- Both root domain and www subdomain configured

### Deployment Process
1. Push changes to GitHub main branch
2. Vercel automatically detects changes
3. Builds the project using `npm run build`
4. Deploys static files from `dist/public`
5. Site updates live in ~30 seconds

## 📝 Key Sections

- **Hero:** Introduction and professional tagline
- **Stats:** Key metrics and achievements
- **Core Expertise:** Primary testing skills
- **AI Testing:** Integration of AI in test automation
- **Foundation:** Technical skills and frameworks
- **Advanced:** 
  - Microservices Testing
  - Shift-Left Testing
  - Test Strategy & Process Excellence
- **Tools & Technologies:** Complete tech stack
- **Experience:** Professional journey
- **Contact:** Get in touch section

## 🤝 Contributing

This is a personal portfolio project, but feedback and suggestions are welcome! Feel free to open an issue if you notice any bugs or have suggestions for improvements.

## 📄 License

MIT License - feel free to use this as inspiration for your own portfolio!

## 👨‍💻 About Me

Senior QA Automation Developer with expertise in building enterprise-grade test automation frameworks across UI, API, and backend layers. Specializing in C#, .NET, TypeScript, and modern testing frameworks.

**Connect with me:**
- 🌐 Website: [rohitvegesna.com](https://rohitvegesna.com)
- 💼 LinkedIn: [Rohit Vegesna](https://linkedin.com/in/rohitvegesna)
- 📧 Email: rohitvegesna@outlook.com

---

*Crafted with human creativity & vision, powered by GitHub Copilot for flawless execution*