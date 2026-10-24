# Warehouse Admin UI

A starter Warehouse Admin frontend built with React, TypeScript, Vite, Tailwind CSS v4, React Router, and Lucide icons.

> Note: This is a starter interface based on the proposed page list, not a verified recreation of the linked Figma file. Replace the sample labels, colors, and illustrative data after comparing with your team's actual Figma screens.

## Requirements
- Node.js 20.19+ or 22.12+
- npm
- VS Code (recommended)

## Run locally
```bash
npm install
npm run dev
```
Open the local URL printed by Vite, usually `http://localhost:5173`.

## Check production build
```bash
npm run build
```

## Pages included
- Dashboard
- Warehouses
- Inventory
- Products
- Categories
- Suppliers
- Stock Movements
- Users
- Reports
- Settings

Pages other than Dashboard are currently starter placeholder screens; implement the exact Figma layouts and project-specific interactions in those pages.

## Suggested Git workflow
If you already cloned your team's repository, work in that repository and use your assigned branch. Do not initialize a nested repository.
```bash
git status
git fetch origin
git switch YOUR_BRANCH
# Make changes
git add .
git commit -m "Build warehouse admin UI"
git push origin YOUR_BRANCH
```

If your team project already has an established dependency setup or Tailwind version, coordinate with your teammates before replacing configuration files.
