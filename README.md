
This is an open-source project. If you’d like to contribute, your support is always welcome!



# GitHub Project - Modern Login/Signup Page

A beautiful, modern login and signup page built with React and Vite, featuring a glassmorphism design with backdrop blur effects, animated elements, and a responsive layout.

## 🚀 Features

- **Modern Glassmorphism UI**: Beautiful frosted glass effect with backdrop blur
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Interactive Navigation**: Smooth hover effects with animated underlines
- **Login/Signup Form**: 
  - Email and password input fields
  - Password visibility toggle
  - Form validation
  - Social login options (Google, Apple, Facebook)
- **Animated Elements**: Floating animation for the cartoon character image
- **Modern Styling**: Gradient backgrounds, smooth transitions, and modern UI components

## 🛠️ Tech Stack

- **React 19.2.0** - UI library
- **Vite 7.2.4** - Build tool and dev server
- **CSS3** - Styling with modern features (backdrop-filter, animations)
- **ESLint** - Code linting

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd github-project
```

2. Install dependencies:
```bash
npm install
```

## 🎯 Usage

### Development

Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173` (or the port shown in the terminal).

### Build

Build for production:
```bash
npm run build
```

### Preview Production Build

Preview the production build:
```bash
npm run preview
```

### Lint

Run ESLint to check for code issues:
```bash
npm run lint
```

## 📁 Project Structure

```
github-project/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   │   ├── nature.jpg          # Background image
│   │   ├── panda.png           # Cartoon character image
│   │   └── react.svg
│   ├── Components/
│   │   └── Navbar/
│   │       ├── Navbar.jsx      # Navigation bar component
│   │       ├── Navbar.css      # Navbar styles
│   │       └── Form-page/
│   │           ├── Form.jsx    # Login/Signup form component
│   │           └── Form.css    # Form styles
│   ├── App.jsx                  # Main App component
│   ├── App.css                  # Main application styles
│   ├── index.css                # Global styles
│   └── main.jsx                 # Application entry point
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## 🎨 Components

### Navbar Component
- Navigation links (Home, About, Services, Contact)
- Action buttons (Sign Up, English, Register)
- Hover effects with animated underlines
- Glassmorphism styling

### Form Component
- Email input field
- Password input with visibility toggle
- "Forgot Password?" link
- Sign Up button
- Social login buttons (Google, Apple, Facebook)
- "Create Account" link

## 🎭 Styling Features

- **Glassmorphism**: Frosted glass effect using `backdrop-filter: blur()`
- **Gradient Backgrounds**: Beautiful gradient overlays
- **Smooth Animations**: 
  - Floating animation for the cartoon character
  - Hover transitions on buttons and links
  - Underline animation on navigation links
- **Responsive Design**: Mobile-friendly with media queries
- **Modern Color Scheme**: White/transparent theme with subtle shadows

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🔧 Configuration

### Vite Configuration
The project uses Vite with React plugin. Configuration can be found in `vite.config.js`.

### ESLint Configuration
ESLint is configured with React-specific rules. Configuration can be found in `eslint.config.js`.

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🎯 Future Enhancements

- [ ] Add form validation logic
- [ ] Implement actual authentication
- [ ] Add routing with React Router
- [ ] Add more pages and features
- [ ] Implement dark mode toggle
- [ ] Add internationalization (i18n)

## 📄 License

This project is private and not licensed for public use.

## 👤 Author

Created as part of a GitHub project.

---

**Note**: This is a frontend-only project. Backend integration and authentication logic need to be implemented separately.
