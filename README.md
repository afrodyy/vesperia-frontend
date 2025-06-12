# 🧪 Software Engineer Test – React Frontend

This is the frontend implementation of the Software Engineer Test using **React**, **TypeScript**, and **TailwindCSS**. It connects to the Laravel backend to dynamically render a form from API data and allows form submission and viewing of submitted data.

---

## ⚙️ Requirements

- Node.js 18+
- npm or yarn

---

## 🚀 Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/afrodyy/vesperia-frontend.git
cd vesperia-frontend
```

### 2. Install dependencies

```bash
npm install
```

or

```bash
yarn
```

### 3. Start the development server

```bash
npm run dev
```

The app will be available at:

```
http://localhost:5173
```

---

## 🔌 API Integration

Make sure the Laravel backend is running and accessible at:

```
http://localhost:8000
```

---

## 📂 Folder Structure

```
src/
├── components/         # UI components like FormRenderer, Navbar
├── pages/              # FormPage, SubmissionsPage, SubmissionDetailPage
├── types/              # TypeScript interfaces
├── App.tsx             # Main app container with routes
└── main.tsx            # Entry point
```

---

## ✨ Features

- 🔄 Dynamic form rendering from backend JSON structure
- 📜 View submission detail in read-only mode
- ⚡ Styled with TailwindCSS for rapid UI development
- ✅ Built with React + TypeScript + Vite

---

## 📌 Available Routes

| Route              | Description            |
| ------------------ | ---------------------- |
| `/form/:formId`    | Show form based on ID  |
| `/submissions`     | List all submissions   |
| `/submissions/:id` | Show submission detail |

---

## 🧪 What's to be improved?

- Authentication and Authorization
- Input validation
- Form validation messages
- Error handling
- Submission filtering or export
- Unit tests

---

## ✅ Done

Once the backend is seeded and running, the frontend will automatically fetch the form and display it for user interaction.

Want to test backend? Jump to the [Laravel backend repository](https://github.com/afrodyy/vesperia-backend) 🚀
