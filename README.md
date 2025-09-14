# SaaS Contracts Dashboard

A modern, scalable single-page application (SPA) built with React and Tailwind CSS to simulate a SaaS Contracts Management Dashboard.

---

## 🚀 Live Demo
[👉 View the Live Demo](https://your-dashboard-app.vercel.app)

---

## ⚡ Features

1. ✅ **Login Page**  
   - Simple username + password form  
   - Mock authentication (password must be `test123`)  
   - Mock JWT saved in localStorage  

2. ✅ **Upload Files (Mocked)**  
   - Drag & drop or browse to select files  
   - Displays list of uploaded files with simulated status (Uploading → Success)  

3. ✅ **Contracts Dashboard**  
   - Sidebar: Contracts, Insights, Reports, Settings  
   - Search & filter contracts by name, parties, status, risk  
   - Pagination (10 rows per page)  
   - Responsive table layout  

4. ✅ **Contract Insights Detail**  
   - View detailed metadata  
   - Display clauses, AI risk insights, and evidence in organized cards  

---

## 📸 Screenshots

### Login Page  
![Login Page](./screenshots/login.png)

### Dashboard (Contracts List + Filters)  
![Dashboard Page](./screenshots/dashboard.png)

### Upload Files Modal  
![Upload Modal](./screenshots/upload-modal.png)

### Contract Detail Page (Clauses + Insights + Evidence)  
![Contract Detail](./screenshots/contract-detail.png)

---

## ⚙️ Tech Stack

- ✅ React (Functional components + Hooks)  
- ✅ Tailwind CSS (Utility-first CSS framework)  
- ✅ Vite (Build Tool)  
- ✅ React Context API (State Management)  
- ✅ Axios / Fetch API for data fetching  
- ✅ Mock API: Stored in `/public/contracts.json`  

---

## ✅ Setup Instructions

1️⃣ Clone the repository  
```bash
git clone https://github.com/khaseem9392/SaaS-dashboard-Assignment
cd saas-contracts-dashboard
2️⃣ Install dependencies

bash
Copy code
npm install
3️⃣ Start development server

bash
Copy code
npm run dev
4️⃣ Open browser at:

text
Copy code
http://localhost:5173
✅ Assumptions Made
No backend; all data is fetched from mock files in /public/contracts.json

Authentication is mocked → Accepts any username(admin) + password test123

Upload is simulated with timeouts (no real file storage)

Designed to be fully responsive (mobile + desktop)

📂 Folder Structure
pgsql
Copy code
public/
├── contracts.json               

src/
├── assets/
│   ├── sample-document.txt
│   ├── sample-data.csv
│   └── sample-config.json
├── components/
│   └── UploadModal.jsx
├── context/
│   └── AuthContext.jsx
├── hooks/
│   └── useFetch.js
├── pages/
│   ├── LoginPage.jsx
│   ├── DashboardPage.jsx
│   └── ContractDetailPage.jsx
├── App.jsx
├── index.jsx
└── tailwind.css
📄 License
MIT License

💬 Contact
For questions or support, contact: khaseemvali070@gmail.com
