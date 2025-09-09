# QuickBill - Professional Invoice Management System

A modern, responsive invoice management application built with Next.js 15, React 19, and Tailwind CSS. Create, manage, and send professional invoices with ease.

## 🚀 Features

- **Modern Landing Page** - Beautiful, responsive design with hero section and feature highlights
- **User Authentication** - Clean login and signup forms with social authentication options
- **Professional UI** - Built with shadcn/ui components and Radix UI primitives
- **Responsive Design** - Optimized for all device sizes
- **TypeScript** - Full type safety throughout the application
- **Modern Styling** - Tailwind CSS v4 with OKLCH color space for better color consistency

## 🛠️ Tech Stack

- **Framework**: Next.js 15.5.2 with App Router
- **Frontend**: React 19.1.0
- **Language**: TypeScript 5.0
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui with Radix UI primitives
- **Icons**: Lucide React
- **Fonts**: Geist Sans & Geist Mono
- **Build Tool**: Turbopack

## 📁 Project Structure

```
in-voice/
├── src/
│   ├── app/
│   │   ├── login/           # Login page
│   │   ├── signup/          # Signup page
│   │   ├── globals.css      # Global styles
│   │   ├── layout.tsx       # Root layout
│   │   └── page.tsx         # Landing page
│   ├── components/
│   │   └── ui/              # Reusable UI components
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       ├── input.tsx
│   │       ├── label.tsx
│   │       └── ...
│   └── lib/
│       └── utils.ts         # Utility functions
├── public/                  # Static assets
├── components.json          # shadcn/ui configuration
├── tailwind.config.js       # Tailwind configuration
└── tsconfig.json           # TypeScript configuration
```

## 🎨 Design System

- **Color Palette**: Modern OKLCH color space for better color consistency
- **Typography**: Geist font family for clean, readable text
- **Components**: Consistent shadcn/ui component library
- **Spacing**: Tailwind's spacing scale for consistent layouts
- **Dark Mode**: Built-in dark mode support with CSS variables

## 🚀 Getting Started

### Prerequisites

- Node.js 18.0 or later
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:

```bash
git clone https://github.com/KlienGumapac/invoice.git
cd invoice
```

2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📄 Pages & Features

### Landing Page (`/`)

- Hero section with invoice preview
- Feature highlights
- Call-to-action sections
- Professional design with smooth animations

### Authentication

- **Login Page** (`/login`) - Clean login form with social authentication
- **Signup Page** (`/signup`) - Registration form with validation

## 🎯 Key Components

- **Button** - Variant-based button component with multiple styles
- **Card** - Flexible card component with header, content, and footer
- **Input** - Styled input fields with focus states
- **Label** - Accessible form labels
- **Badge** - Status and category indicators

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Code Style

- TypeScript strict mode enabled
- ESLint with Next.js configuration
- Consistent component patterns
- Proper TypeScript interfaces
- Accessible HTML semantics

## 🌟 Features in Development

- [ ] Invoice creation and management
- [ ] PDF export functionality
- [ ] Client management system
- [ ] Payment tracking
- [ ] Dashboard analytics
- [ ] Email notifications

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 💻 Author

**Klien Gumapac**

- GitHub: [@KlienGumapac](https://github.com/KlienGumapac)
- Email: Kliengumapac5@gmail.com
- Location: Polomolok, South Cotabato, Philippines

---

⭐ Star this repository if you found it helpful!
