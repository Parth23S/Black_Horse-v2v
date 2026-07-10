# 🚀 Career Comeback AI

**Empowering professionals to return to the workforce with confidence.**

Career Comeback AI is an intelligent web application designed to help individuals successfully re-enter the job market after a career break. By analyzing a user's past experience, target industry, and career goals, the AI generates a highly personalized, actionable 3-step comeback roadmap. 

Built during a hackathon, this project focuses on seamless user experience, responsive glassmorphism UI, and robust backend error handling.

---

## ✨ Key Features

* **🧠 AI-Powered Career Roadmaps:** Leverages Google's Gemini 2.0 Flash model to generate tailored advice, identifying transferable strengths and immediate upskilling priorities.
* **🎨 Glassmorphism UI & Animations:** A modern, purely vanilla HTML/CSS frontend featuring scroll-triggered reveal animations, dynamic counters, and a beautiful frosted-glass results dashboard.
* **🛡️ Zero-Crash Hackathon Failsafe:** Built-in backend error handling ensures the app gracefully falls back to structured mock data if API limits or quota restrictions are hit, guaranteeing a flawless live demo.
* **⚡ Blazing Fast Backend:** Powered by Python and FastAPI for asynchronous, high-performance data handling.

---

## 🛠️ Tech Stack

**Frontend**
* HTML5 & CSS3 (Custom Glassmorphism Design)
* Vanilla JavaScript (DOM Manipulation, Async Fetch API, Intersection Observers)

**Backend**
* Python 3
* FastAPI (RESTful API, CORS Middleware)
* Uvicorn (ASGI Web Server)
* Pydantic (Data Validation)

**AI & Integration**
* Google GenAI SDK (`google-genai`)
* Gemini 2.0 Flash Model

---

## 💻 How to Run Locally

Follow these steps to run the project on your own machine. 

### 1. Clone the Repository
```bash
git clone (https://github.com/Parth23S/Black_Horse-v2v)
cd Black_horse-v2v

### 2. Set up the backend
# Install the required Python libraries
pip install -r requirements.txt

# Start the FastAPI server
uvicorn main:app --reload

### 3. Set up the frontend
Because the frontend is built with pure vanilla web technologies, there is no need for Node.js or npm run start.

Simply locate the comeback.html file in your project folder.

Double-click it to open it in your preferred web browser (Chrome, Safari, Edge).

Fill out the form, input your Gemini API Key (or leave it blank to test the Fallback Mode), and generate your plan!

├── main.py              # FastAPI backend and AI integration logic
├── requirements.txt     # Python dependencies 
├── index.html           # Landing page
├── comeback.html        # Main application form and results UI
├── style.css            # Styling and Glassmorphism CSS
├── script.js            # Frontend logic, animations, and API calls
└── README.md            # Project documentation