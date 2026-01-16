<div align="center">
  <h1>🚀 OkDo's Portfolio</h1>
  <p>A modern, responsive personal portfolio built with Next.js 15 and Sanity CMS</p>
  
  [![Next.js](https://img.shields.io/badge/Next.js-15.5.7-black?style=flat-square&logo=next.js)](https://nextjs.org/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5.3.2-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.3.5-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
  [![Sanity](https://img.shields.io/badge/Sanity-4.6.1-F03E2F?style=flat-square&logo=sanity)](https://www.sanity.io/)
  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](https://opensource.org/licenses/MIT)
  [![pnpm](https://img.shields.io/badge/pnpm-10.15.0-F69220?style=flat-square&logo=pnpm)](https://pnpm.io/)
</div>

---

## 📸 Screenshot

![Portfolio Preview](https://github.com/OthyTenk/my-portfolio/assets/34827155/b6da77c6-cb83-43fd-a99e-788d4e0513d6)

---

## ✨ Features

- **🎨 Modern Design**: Clean, minimalist UI with dark mode support using `next-themes`
- **📱 Fully Responsive**: Optimized for all devices from mobile to desktop
- **⚡ Server-Side Rendering**: Built with Next.js 15 App Router for optimal performance
- **🗄️ Headless CMS**: Powered by Sanity for easy content management
- **🎯 Project Showcase**: Dynamic project portfolio with categorization
- **👤 Profile Management**: Editable bio, social links, and professional information
- **📊 Analytics**: Integrated with Vercel Analytics for visitor insights
- **🎭 Rich Content**: Support for Portable Text with custom components
- **🔍 SEO Optimized**: Meta tags and structured data for better search visibility
- **⚙️ Type Safety**: Fully typed with TypeScript for robust development
- **🎨 Tailwind CSS**: Utility-first styling with custom plugins for typography and forms

---

## 🛠️ Tech Stack

### Frontend

- **Framework**: [Next.js 15.5.7](https://nextjs.org/) with App Router
- **Language**: [TypeScript 5.3.2](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS 3.3.5](https://tailwindcss.com/)
- **UI Components**: [@headlessui/react 2.2.7](https://headlessui.com/)
- **Theme**: [next-themes 0.4.6](https://github.com/pacocoursey/next-themes)
- **Content Rendering**: [@portabletext/react 4.0.3](https://github.com/portabletext/react-portabletext)
- **Date Formatting**: [date-fns 4.1.0](https://date-fns.org/)

### Backend & CMS

- **CMS**: [Sanity 4.6.1](https://www.sanity.io/)
- **Sanity Client**: [next-sanity 10.0.16](https://github.com/sanity-io/next-sanity)
- **Content Management**: Sanity Studio (embedded at `/studio`)

### Analytics & Deployment

- **Analytics**: [@vercel/analytics 1.5.0](https://vercel.com/analytics)
- **Deployment**: Optimized for [Vercel](https://vercel.com)
- **Package Manager**: [pnpm 10.15.0](https://pnpm.io/)

---

## 📁 Project Structure

```
my-portfolio/
├── app/
│   ├── (site)/              # Main site routes
│   │   ├── components/      # Reusable UI components
│   │   ├── projects/        # Project showcase pages
│   │   ├── admin/           # Admin dashboard
│   │   ├── layout.tsx       # Site layout wrapper
│   │   └── page.tsx         # Homepage
│   ├── (studio)/            # Sanity Studio routes
│   │   └── studio/
│   │       └── [[...index]]/
│   ├── schemas/             # Sanity schemas
│   │   ├── profile.ts       # Profile content type
│   │   ├── project.ts       # Project content type
│   │   ├── category.ts      # Category content type
│   │   └── index.ts         # Schema exports
│   ├── types/               # TypeScript type definitions
│   ├── utils/               # Utility functions
│   │   ├── sanity.client.ts # Sanity client configuration
│   │   └── flatListHierarchical.ts
│   ├── layout.tsx           # Root layout
│   ├── globals.css          # Global styles
│   └── not-found.tsx        # 404 page
├── public/
│   └── images/
│       └── socials/         # Social media icons
├── sanity-project/          # Standalone Sanity studio
├── .github/
│   └── ISSUE_TEMPLATE/      # GitHub issue templates
├── sanity.config.ts         # Sanity configuration
├── next.config.js           # Next.js configuration
├── tailwind.config.ts       # Tailwind CSS configuration
├── tsconfig.json            # TypeScript configuration
└── package.json             # Project dependencies
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** 20.x or higher
- **pnpm** 10.15.0 (or npm/yarn)
- **Sanity Account** (free at [sanity.io](https://www.sanity.io))

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/OthyTenk/my-portfolio.git
   cd my-portfolio
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   # or
   npm install
   ```

3. **Set up Sanity CMS**

   Navigate to the sanity-project directory:

   ```bash
   cd sanity-project
   ```

   Login to Sanity and create a new project:

   ```bash
   npx sanity@latest login
   npx sanity@latest init
   ```

   Follow the prompts to:
   - Create a new project or select an existing one
   - Choose the "Clean" template
   - Set dataset to "production"

4. **Configure Sanity credentials**

   Update `sanity.config.ts` with your project credentials:

   ```typescript
   export default defineConfig({
     name: "sanity-project",
     title: "Your Portfolio",
     projectId: "YOUR_PROJECT_ID", // Get from sanity.io
     dataset: "production",
     // ... rest of config
   });
   ```

5. **Run the development server**

   In the main project directory:

   ```bash
   pnpm dev
   # or
   npm run dev
   ```

   In a separate terminal, run Sanity Studio:

   ```bash
   cd sanity-project
   pnpm dev
   # or
   npm run dev
   ```

6. **Access the application**
   - **Portfolio Site**: [http://localhost:3000](http://localhost:3000)
   - **Sanity Studio (embedded)**: [http://localhost:3000/studio](http://localhost:3000/studio)
   - **Sanity Studio (standalone)**: [http://localhost:3333](http://localhost:3333)

---

## 📝 Content Management

### Creating Content in Sanity Studio

1. **Profile Information**
   - Navigate to Studio → Profile
   - Add your personal information, bio, profile picture
   - Configure social media links (GitHub, LinkedIn, Twitter)
   - Upload your resume (optional)

2. **Projects**
   - Navigate to Studio → Projects
   - Click "Create" to add a new project
   - Fill in project details:
     - Title & Slug
     - Overview/Description
     - Project Image
     - Live Link
     - Categories
     - Date

3. **Categories**
   - Navigate to Studio → Categories
   - Create parent categories (e.g., "Frontend", "Backend")
   - Create child categories for specific technologies
   - Add category images/icons

---

## 🎨 Customization

### Styling

Customize the theme in `tailwind.config.ts`:

```typescript
const config: Config = {
  theme: {
    extend: {
      colors: {
        // Add your custom colors
      },
      // Add custom fonts, spacing, etc.
    },
  },
};
```

### Dark Mode

The portfolio includes a built-in dark mode toggle. Customize dark mode colors in:

- `app/layout.tsx` - Root theme setup
- `app/globals.css` - Global dark mode styles
- Component-level Tailwind classes using `dark:` prefix

---

## 🚢 Deployment

### Deploy to Vercel (Recommended)

1. **Push your code to GitHub**

   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Import to Vercel**
   - Visit [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Vercel will auto-detect Next.js settings
   - Add environment variables if needed
   - Deploy!

3. **Deploy Sanity Studio**
   ```bash
   cd sanity-project
   pnpm run deploy
   # or
   npm run deploy
   ```

### Environment Variables

If using external APIs or services, create a `.env.local` file:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your_api_token (for mutations)
```

---

## 📊 Analytics

This portfolio includes Vercel Analytics for tracking visitor metrics. To enable:

1. **Enable in Vercel Dashboard**
   - Navigate to your project in Vercel
   - Go to Analytics tab
   - Enable Analytics

2. **Already integrated** via `@vercel/analytics/react` in `app/layout.tsx`

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct and development process.

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Author

**OkDo**

- GitHub: [@OthyTenk](https://github.com/OthyTenk)
- Portfolio: [Live Demo](https://your-portfolio-url.vercel.app)

---

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing React framework
- [Sanity.io](https://www.sanity.io/) for the flexible headless CMS
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Vercel](https://vercel.com/) for seamless deployment and hosting

---

## 📞 Support

If you have any questions or run into issues, please:

- Open an [Issue](https://github.com/OthyTenk/my-portfolio/issues)
- Check existing [Discussions](https://github.com/OthyTenk/my-portfolio/discussions)
- Review the [Security Policy](SECURITY.md)

---

<div align="center">
  <p>Made with ❤️ by OkDo</p>
  <p>⭐ Star this repo if you found it helpful!</p>
</div>
