# Orchard Test Front

This project is a front-end implementation for a component test powered by Drupal 11. It uses a modern frontend toolchain and is structured for CMS-driven dynamic content.

## 🌐 Live Preview

[https://orchard.escena.dev/](https://orchard.escena.dev/)

## 🧰 Technologies Used

- **Drupal 11** (CMS)
- **MariaDB**
- **Docker + DDEV** (Local development)
- **Kubernetes** (Production deployment: separate services for PHP and DB)
- **Vite** (Build tool)
- **Tailwind CSS** (Utility-first styling)
- **Alpine.js** (Lightweight reactivity)
- **AOS** (Animate on scroll)

## 🚀 Local Development Setup

> Prerequisite: [DDEV installed](https://ddev.readthedocs.io/)

```bash
# Start the development container
ddev start

# Navigate to theme directory
ddev theme npm install

# Build assets
ddev theme npm run build
```

## 📦 Project Structure

All frontend components are built inside a custom Drupal theme using Vite. Layouts are fully responsive and content is dynamically loaded from Drupal views and blocks.

- A **custom content type** called **"Taste the Colours"** is used for the "Answer your body's needs" section.
- A **custom block** backed by a **Drupal View** is used for the "All the latest" section.

## 💡 Technical Decisions

- **Docker/DDEV** ensures development/production parity and reproducibility.
- **Vite** provides fast builds and HMR.
- **Tailwind CSS** enables rapid and responsive UI development.
- **Alpine.js** allows reactive behavior directly in HTML without heavy frameworks.
- **AOS** adds lightweight scroll-based animations.
- The current frontend stack has been battle-tested and refined since 2020 for efficiency and scalability.

## ✨ Interactivity & JavaScript Behavior

- **Click tracking**: All `<a>` elements are intercepted using Alpine.js and logged to `console.log()`.
- **Modal functionality**: Built using **Alpine’s `x-teleport`** directive for accessibility and reactivity. The modal component:
  - Is globally injected and only rendered once per page.
  - Supports ARIA roles and `aria-label` attributes for screen readers.
  - Uses `x-trap` for focus locking and escape key support.
  - Has clean transition animations and supports slotted content injection via teleport.
- **Animations**: Sections and elements use AOS (Animate on Scroll) for declarative transition effects.

## 📱 Responsiveness

- Mobile-first design with support down to **320px width**.
- Fully tested on latest **Chrome**, **Firefox**, and **Edge**.
- Proper `<meta>` tags included for responsive behavior.

## 🧪 Build & Tooling

- Vite is used as the bundler and build step.
- All scripts and styles are compiled and optimized via Vite.
- Commands are managed via `package.json` inside the theme folder.

## 🧾 Git & Deployment
<<<<<<< HEAD
=======

- This project is version-controlled with Git.
>>>>>>> 88cda3e16342cb57bdeb0d06b06d6eb065a0145a
- The code is structured in multiple commits to reflect development progress.
- Deployed via Kubernetes with isolated services for PHP and database.

---

> All content is loaded dynamically from Drupal. The entire system is CMS-driven, ensuring flexible content editing and reuse.


