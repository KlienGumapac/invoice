# QuickBill - Professional Invoice Management System

A modern, responsive invoice management application built with Next.js 15, React 19, and Tailwind CSS. Create, manage, and send professional invoices with ease.

## 🚀 Features

### **Core Application Features**

- ✅ **Professional Dashboard** - Complete overview with revenue metrics and invoice summaries
- ✅ **Invoice Management** - Create, view, and manage invoices with comprehensive modal interface
- ✅ **Client Management** - Dedicated clients page with contact information and invoice history
- ✅ **Reports & Analytics** - Detailed financial reports with revenue trends and statistics
- ✅ **Responsive Sidebar Navigation** - Mobile-friendly navigation with professional logo
- ✅ **User Authentication** - Functional login and signup with dashboard redirection

### **UI/UX Features**

- ✅ **Modern Landing Page** - Beautiful hero section with feature highlights
- ✅ **Professional Design System** - Built with shadcn/ui components and consistent styling
- ✅ **Mobile-First Responsive** - Optimized layouts for all device sizes
- ✅ **Dark Mode Support** - Built-in theme switching capabilities
- ✅ **Professional Logo Integration** - Custom logo implementation with proper asset management

### **Technical Features**

- ✅ **TypeScript** - Full type safety throughout the application
- ✅ **Modern Styling** - Tailwind CSS v4 with OKLCH color space
- ✅ **Component Architecture** - Modular, reusable components with proper separation
- ✅ **Professional File Structure** - Organized codebase for maintainability

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
│   │   ├── dashboard/           # Main dashboard
│   │   │   ├── modals/          # Invoice creation modal
│   │   │   │   └── create-invoice-modal.tsx
│   │   │   └── page.tsx
│   │   ├── clients/             # Client management
│   │   │   └── page.tsx
│   │   ├── reports/             # Analytics & reports
│   │   │   └── page.tsx
│   │   ├── login/               # Authentication
│   │   │   └── page.tsx
│   │   ├── signup/              # User registration
│   │   │   └── page.tsx
│   │   ├── globals.css          # Global styles
│   │   ├── layout.tsx           # Root layout
│   │   └── page.tsx             # Landing page
│   ├── components/
│   │   ├── common/              # Reusable components
│   │   │   ├── index.ts         # Barrel exports
│   │   │   └── logo.tsx         # Professional logo component
│   │   ├── layout/              # Layout components
│   │   │   └── app-header.tsx   # Shared header component
│   │   ├── sidebar/             # Navigation sidebar
│   │   │   ├── index.tsx        # Main sidebar component
│   │   │   ├── sidebar-nav.tsx  # Navigation items
│   │   │   └── sidebar-toggle.tsx # Mobile toggle
│   │   └── ui/                  # shadcn/ui components
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       ├── input.tsx
│   │       ├── scroll-area.tsx
│   │       └── ...
│   └── lib/
│       └── utils.ts             # Utility functions
├── public/
│   └── assets/
│       └── images/
│           └── logo.png         # QuickBill logo
├── components.json              # shadcn/ui configuration
├── tailwind.config.js           # Tailwind configuration
└── tsconfig.json               # TypeScript configuration
```

## 🎨 Design System

- **Color Palette**: Modern OKLCH color space for better color consistency
- **Typography**: Geist font family for clean, readable text
- **Components**: Consistent shadcn/ui component library with custom extensions
- **Spacing**: Tailwind's spacing scale for consistent layouts
- **Dark Mode**: Built-in dark mode support with CSS variables
- **Professional Logo**: Custom logo component with multiple size variants

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

## 📄 Application Pages & Features

### Landing Page (`/`)

- Professional hero section with call-to-action
- Feature highlights and benefits
- Clean navigation with logo integration
- Responsive design for all devices

### Authentication

- **Login Page** (`/login`) - Functional login with dashboard redirection
- **Signup Page** (`/signup`) - Registration form with validation

### Dashboard (`/dashboard`)

- **Revenue Overview** - Total revenue, invoices, and payment status
- **Quick Actions** - Create new invoices with one click
- **Recent Invoices** - Mobile-responsive invoice history
- **Summary Cards** - Key metrics at a glance

### Client Management (`/clients`)

- **Client Overview** - Total clients and active relationships
- **Client Directory** - Contact information and details
- **Mobile-Responsive** - Optimized table layout for all screens
- **Quick Actions** - Add new clients and export data

### Reports & Analytics (`/reports`)

- **Financial Overview** - Revenue trends and growth metrics
- **Invoice Analytics** - Payment status and overdue tracking
- **Period Comparisons** - Month-over-month and year-over-year analysis
- **Export Capabilities** - Download reports for external use

### Invoice Creation Modal

- **Client Selection** - Choose from existing clients
- **Item Management** - Add multiple items with pricing, quantity, and tax
- **Payment Options** - Configure payment methods and terms
- **Summary Calculations** - Real-time totals with discounts and taxes
- **Mobile-Responsive** - Full functionality on mobile devices

## 🧭 Navigation System

### Professional Sidebar

- **Dashboard** - Main overview and metrics
- **Clients** - Client management and contacts
- **Reports** - Analytics and financial insights
- **Settings** - Application configuration
- **Logout** - Secure session termination (highlighted in red)

### Mobile-First Design

- Collapsible sidebar for mobile devices
- Touch-friendly navigation elements
- Responsive content adaptation

## 🎯 Key Components

### Core UI Components

- **Button** - Multiple variants with consistent styling
- **Card** - Flexible containers with headers and content areas
- **Input** - Form inputs with validation states
- **Badge** - Status indicators with color coding
- **ScrollArea** - Custom scrollbars for better UX

### Custom Components

- **Logo** - Professional logo with multiple size variants
- **AppHeader** - Shared header with consistent actions
- **Sidebar** - Navigation with mobile support
- **Invoice Modal** - Comprehensive invoice creation interface

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Code Standards

- **TypeScript Strict Mode** - Full type safety enforcement
- **Professional Architecture** - Modular component structure
- **Clean Code Practices** - Readable and maintainable codebase
- **Consistent Patterns** - Unified development approach
- **Accessible Design** - WCAG compliant components

### Component Architecture

- **Barrel Exports** - Clean import statements
- **Interface Definitions** - Comprehensive TypeScript interfaces
- **Reusable Components** - DRY principles throughout
- **Professional Documentation** - JSDoc comments and README files

## ✅ Completed Features

- [x] **Landing Page** - Professional homepage with hero section
- [x] **Authentication System** - Login/signup with dashboard integration
- [x] **Dashboard Interface** - Complete overview with metrics
- [x] **Invoice Management** - Creation modal with comprehensive features
- [x] **Client Management** - Dedicated client pages and directory
- [x] **Reports System** - Analytics and financial insights
- [x] **Responsive Navigation** - Professional sidebar with mobile support
- [x] **Logo Integration** - Custom logo with proper asset management
- [x] **Mobile Optimization** - Full responsive design implementation

## 🌟 Future Enhancements

- [ ] **PDF Export** - Generate professional invoice PDFs
- [ ] **Email Integration** - Send invoices directly to clients
- [ ] **Payment Processing** - Integrate with payment gateways
- [ ] **Advanced Analytics** - More detailed reporting features
- [ ] **User Settings** - Customizable preferences and themes
- [ ] **Database Integration** - Persistent data storage
- [ ] **API Development** - RESTful API for data management

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
