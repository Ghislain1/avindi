# 🌐 My Static Website

A fast and modern static website built with **HTML**, **CSS**, and **JavaScript**, bundled with **Parcel**, and automatically deployed to **[Surge](https://surge.sh)** using **GitHub Actions**.

---

## 🚀 Features

- ⚡️ **Parcel Bundler** – auto-minifies and optimizes JS, CSS, and HTML  
- 🔁 **Live Reload** – instant updates while developing  
- 🌍 **Automatic Deployment** to Surge via GitHub Actions  
- 🔒 Secure and tokenized CI/CD workflow  
- 📁 Clean project structure for easy maintenance  

---

## 🧩 Project Structure

```
my-repo/
├─ src/                  # Source files
│  ├─ index.html
│  ├─ css/
│  │   └─ style.css
│  └─ js/
│      └─ script.js
├─ dist/                 # Build output (auto-generated)
├─ package.json          # Node.js project config
├─ .gitignore
└─ .github/
    └─ workflows/
        └─ deploy-surge.yml
```

---

## 🧠 Requirements

- [Node.js](https://nodejs.org/) (v18+ recommended)
- [npm](https://www.npmjs.com/)
- [Surge CLI](https://surge.sh/help/getting-started-with-surge)
- [Netlify](https://app.netlify.com/teams/ghislain1/projects)

---

## ⚙️ Installation

```bash
# Clone the repository
git clone https://github.com/your-username/my-static-website.git
cd my-static-website

# Install dependencies
npm install
```

---

## 💻 Development

Run a live development server with hot reload:

```bash
npm start
```

Then open [http://localhost:1234](http://localhost:1234) in your browser.

---

## 🏗️ Build for Production

To build your optimized production version:

```bash
npm run build
```

The files will be output to the `dist/` directory.

---

## 🌍 Deploy to Surge (Manually)

Before deploying manually, log in to Surge once:

```bash
npx surge login
```

Then deploy:

```bash
export SURGE_DOMAIN=my-site.surge.sh
export SURGE_TOKEN=your-surge-token
npm run deploy
```

---

## 🤖 Automatic Deployment (GitHub Actions)

This project includes a workflow in `.github/workflows/deploy-surge.yml` that:

1. Builds your project with Parcel  
2. Deploys it automatically to your Surge domain  

### Setup

In your GitHub repository → **Settings → Secrets → Actions**, add:

| Name | Example Value |
|------|----------------|
| `SURGE_TOKEN` | (Run `surge token` locally to get it) |
| `SURGE_DOMAIN` | `my-project.surge.sh` |

Every push to the **main** branch will automatically build and deploy your site.

---

## 📦 Scripts

| Command | Description |
|----------|--------------|
| `npm start` | Start local dev server (auto reload) |
| `npm run build` | Build and minify files for production |
| `npm run deploy` | Build and deploy to Surge manually |

---

## 🧹 Useful Extras

- `.gitignore` → Keeps build artifacts and node modules out of Git  
- `.surgeignore` *(optional)* → Ignore files you don’t want deployed  
- `package.json` → Defines scripts and dependencies  

---

## 🪪 License

[MIT](LICENSE) © 2025 Your Name

---

> Made with ❤️ using HTML, CSS, JavaScript, Parcel, and Surge.
