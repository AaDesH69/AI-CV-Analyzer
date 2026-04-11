<div align="center">

# 🧠 AI CV Analyzer

### *Intelligent Resume Analysis Powered by Claude AI*

[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.0-38BDF8?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![React Router](https://img.shields.io/badge/React_Router-v7-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white)](https://reactrouter.com/)
[![Puter.js](https://img.shields.io/badge/Puter.js-AI_Powered-181758?style=for-the-badge)](https://puter.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)](https://opensource.org/licenses/MIT)

**Stop guessing. Start improving.**  
AI CV Analyzer gives you a deep, multi-dimensional AI-powered breakdown of your resume — so you know exactly what to fix before you apply.

[🚀 Get Started](#-quick-start) · [✨ Features](#-features) · [🛠 Tech Stack](#-tech-stack) · [📸 Screenshots](#-screenshots)

</div>

---

## 📌 What Is It?

Most candidates never know *why* their resume gets rejected. Recruiters use **ATS (Applicant Tracking Systems)** that automatically filter resumes before a human ever sees them — and most resumes fail silently.

**AI CV Analyzer** uses **Claude AI** to analyze your resume the same way an expert recruiter would, evaluating:

| Dimension | What It Checks |
|-----------|---------------|
| 🤖 **ATS Compatibility** | Keyword density, parse-ability, ATS-friendly formatting |
| 🎨 **Tone & Style** | Professionalism, consistency, and writing voice |
| 📝 **Content Quality** | Achievement clarity, quantifiable impact, relevance |
| 🏗 **Structure** | Section organization, logical flow, readability |
| 💡 **Skills** | Skill relevance, presentation, and completeness |

You get a **score out of 100** for each dimension, an **overall score**, and **detailed, actionable tips** — all tailored to the specific job you're applying for.

---

## ✨ Features

- 🔐 **Seamless Authentication** — Browser-based login via Puter.js, no signup hassle
- 📤 **Drag & Drop Upload** — Upload your PDF resume in seconds
- 🎯 **Job-Specific Analysis** — Provide a job title & description for targeted feedback
- 📊 **5-Dimension Scoring** — ATS, Tone, Content, Structure, and Skills
- 💬 **Detailed Recommendations** — Good points highlighted + specific improvements suggested
- 👁 **Live Resume Preview** — See your CV side-by-side with your feedback
- 📁 **Resume History** — All your past analyses saved and accessible anytime
- 📱 **Fully Responsive** — Works beautifully on desktop, tablet, and mobile
- 🐳 **Docker Ready** — One command to deploy anywhere

---

## 🛠 Tech Stack

| Technology | Purpose |
|-----------|---------|
| **React 19** | UI Framework |
| **React Router v7** | File-based routing + SSR |
| **TypeScript** | Type safety and developer experience |
| **TailwindCSS** | Utility-first styling |
| **Zustand** | Lightweight global state management |
| **Puter.js** | Auth, cloud storage, and Claude AI access |
| **pdf.js** | PDF rendering and preview generation |
| **Vite** | Lightning-fast build tooling |

---

## 🚀 Quick Start

### Prerequisites

Make sure you have the following installed:
- [Node.js](https://nodejs.org/) (v18 or above)
- [npm](https://www.npmjs.com/)
- [Git](https://git-scm.com/)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/AaDesH69/AI-CV-Analyzer.git

# 2. Navigate into the project
cd AI-CV-Analyzer

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser. That's it — no `.env` file or API keys required. Puter.js handles everything.

---

## 🐳 Docker Deployment

```bash
# Build the Docker image
docker build -t ai-cv-analyzer .

# Run the container
docker run -p 3000:3000 ai-cv-analyzer
```

The app will be available at `http://localhost:3000`.

Deploy to any Docker-compatible platform:
- AWS ECS / App Runner
- Google Cloud Run
- Azure Container Apps
- Fly.io
- Railway
- Digital Ocean App Platform

---

## 📁 Project Structure

```
AI-CV-Analyzer/
├── app/
│   ├── components/          # Reusable UI components
│   │   ├── ATS.tsx          # ATS score panel
│   │   ├── Details.tsx      # Accordion feedback sections
│   │   ├── Summary.tsx      # Overall score summary
│   │   ├── ScoreGauge.tsx   # Circular score visualization
│   │   ├── ScoreBadge.tsx   # Color-coded score badge
│   │   └── FileUploader.tsx # Drag-and-drop uploader
│   ├── lib/
│   │   ├── puter.ts         # Puter.js integration & Zustand store
│   │   ├── pdf2img.ts       # PDF → image conversion
│   │   └── utils.ts         # Shared utilities
│   └── routes/
│       ├── auth.tsx         # Authentication page
│       ├── home.tsx         # Resume dashboard
│       ├── upload.tsx       # Resume upload page
│       └── resume.tsx       # CV review & feedback page
├── constants/
│   └── index.ts             # AI prompt template & response format
├── types/
│   └── index.d.ts           # TypeScript type definitions
├── Dockerfile
└── package.json
```

---

## 🤖 How the AI Works

The application uses a carefully engineered prompt to instruct Claude AI to evaluate your resume:

1. **You upload** your PDF resume and provide a job title + description
2. **The app extracts** your resume content and builds a structured prompt
3. **Claude AI analyzes** the resume across 5 dimensions simultaneously
4. **The response** is returned as a strict JSON object with scores and tips
5. **The UI renders** your personalized feedback instantly

The AI prompt instructs Claude to be thorough, honest, and critical — it won't inflate your scores. The goal is genuine, useful feedback that actually helps you improve.

---

## 📊 Sample Output

```json
{
  "overallScore": 72,
  "ATS": {
    "score": 68,
    "tips": [
      { "type": "improve", "tip": "Add more industry-specific keywords from the job description" },
      { "type": "good", "tip": "Clean formatting with no tables or graphics — ATS friendly" }
    ]
  },
  "toneAndStyle": {
    "score": 80,
    "tips": [...]
  },
  "content": { "score": 75, "tips": [...] },
  "structure": { "score": 70, "tips": [...] },
  "skills": { "score": 65, "tips": [...] }
}
```

---

## 📸 Screenshots

> *Add your screenshots here once the UI is polished*

| Home Dashboard | Upload Page | CV Review |
|:-:|:-:|:-:|
| `screenshot` | `screenshot` | `screenshot` |

---

## 🗺 Roadmap

- [ ] Support for `.docx` file format
- [ ] In-app resume editor with live re-scoring
- [ ] Compare one resume against multiple job descriptions
- [ ] Score history & improvement tracking dashboard
- [ ] Multilingual support
- [ ] Choice of AI model (GPT-4, Gemini, Claude)

---

## 🤝 Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

```bash
# Fork the repo, then:
git checkout -b feature/your-feature-name
git commit -m "Add: your feature description"
git push origin feature/your-feature-name
# Open a Pull Request
```

---

## 👨‍💻 Author

**Aadesh Pokharel**  
Bachelor of Information Technology (Hons) — Lincoln University College  
📁 [GitHub](https://github.com/AaDesH69) · Final Year Project 2026

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

<div align="center">

**Made with ❤️ and a lot of debugging**

*If this helped you, give it a ⭐ on GitHub!*

</div>
