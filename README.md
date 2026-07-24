# 🤖 SJCIT Smart AI Assistant  
## Intelligent College Information System

<p align="center">
An AI-powered chatbot that provides instant college information through natural language conversations.
</p>

---

## 📌 Overview

**SJCIT Smart AI Assistant** is an AI-based college information chatbot developed for **SJC Institute of Technology (SJCIT)**.

The system helps students, faculty, and visitors quickly access information related to admissions, courses, departments, placements, hostel facilities, library services, transportation, and campus details.

The chatbot provides an interactive conversational experience using Artificial Intelligence and Web Technologies.

---

# ✨ Features

### 🤖 AI-Powered Chatbot
- Understands user queries in natural language.
- Provides intelligent responses for college-related questions.
- Reduces dependency on manual information support.
# ✨ Features

## 🤖 AI-Powered Chatbot
- Provides intelligent responses to user queries.
- Understands natural language questions.
- Acts as a virtual college assistant for students and visitors.

## 🎤 Voice Recognition
- Supports voice-based user interaction.
- Converts speech input into text queries.
- Provides a hands-free chatbot experience.

## 🌐 Multi-Language Support
- Allows users to interact with the chatbot in multiple languages.
- Improves accessibility for users from different backgrounds.

## 💬 Smart Answer Provider
- Provides accurate and relevant answers based on user queries.
- Retrieves college-related information instantly.
- Handles queries related to admissions, courses, placements, hostel, library, and campus facilities.

## 🌙 Dark Mode
- Provides a dark theme option for better user experience.
- Improves readability in low-light environments.

## 🏫 College Information System
Provides information about:

- 🎓 Admissions
- 📚 Courses and Departments
- 👨‍🏫 Faculty Details
- 💼 Placement Information
- 🏠 Hostel Facilities
- 📖 Library Services
- 🚌 Transportation
- 🏢 Campus Information

## ⚡ User Experience
- Responsive chatbot interface
- Quick access buttons
- Interactive design
- Fast response handling
- Interactive college information access

---

# 🏗️ System Architecture

```
              User
                |
                |
        React Chatbot Interface
                |
                |
        Node.js + Express Server
                |
                |
          AI Response Engine
                |
                |
       College Information Data
```

---

# 🛠️ Technology Stack

## Frontend

| Technology | Purpose |
|------------|---------|
| React.js | User Interface |
| JavaScript | Application Logic |
| HTML5 | Web Structure |
| CSS3 | Styling |
| Tailwind CSS | Responsive Design |

---

## Backend

| Technology | Purpose |
|------------|---------|
| Node.js | Server Environment |
| Express.js | Backend API Development |

---

## Artificial Intelligence

| Technology | Purpose |
|------------|---------|
| Google Gemini API | AI-powered responses |

---

## Data Management

| Technology | Purpose |
|------------|---------|
| JSON | College information storage |

---

# 📂 Project Structure

```
SJCIT-Smart-AI-Assistant
│
├── backend
│   ├── server.js
│   ├── config.js
│   └── sjcit.json
│
├── src
│   ├── components
│   ├── App.js
│   └── index.js
│
├── public
│
├── image
│
├── package.json
│
└── README.md
```
# ⚙️ How the System Works

The **SJCIT Smart AI Assistant** follows a client-server architecture where the user interacts with the chatbot interface, and the backend processes queries using Artificial Intelligence to generate accurate responses.

---

## 🔄 System Workflow

User Input
|
↓
React Frontend Interface
|
↓
Voice/Text Query Processing
|
↓
Node.js + Express Backend
|
↓
AI Response Generation (Google Gemini API)
|
↓
College Information Data (JSON)
|
↓
Response Displayed to User
---

## 📝 Working Process

### 1. User Interaction
- Users can enter queries through text input or voice recognition.
- The chatbot accepts questions related to college information.

### 2. Frontend Processing
- The React.js frontend provides an interactive chatbot interface.
- User queries are sent to the backend server through API requests.

### 3. Backend Processing
- Node.js and Express.js handle incoming requests.
- The backend processes the user query and manages communication between frontend and AI services.

### 4. AI Response Generation
- Google Gemini API analyzes the user's query.
- The AI generates meaningful responses based on the available college information.

### 5. Information Retrieval
- College details are stored in JSON format.
- The system uses stored information to provide relevant answers about admissions, courses, placements, hostel, library, and campus facilities.

### 6. Response Delivery
- The generated answer is sent back to the frontend.
- The chatbot displays the response to the user in real time.

---

## 🎯 Key System Capabilities

- 🎤 Voice-based query processing
- 🌐 Multi-language conversation support
- 🤖 AI-powered answer generation
- 🌙 Dark mode user interface
- ⚡ Fast response delivery
- 🏫 Automated college information assistance

---

# ⚙️ Installation & Setup

Follow these steps to run the project locally.

## 1. Clone Repository

```bash
git clone https://github.com/Pranjali-0712/SJCIT-Smart-AI-Assistant.git
```

## 2. Install Dependencies

```bash
npm install
```

## 3. Start Frontend

```bash
npm start
```

Frontend will run on:

```
http://localhost:3000
```

---

# 🔧 Backend Setup

Move into backend folder:

```bash
cd backend
```

Install dependencies:

```bash
npm install
```

Start backend server:

```bash
node server.js
```

Backend runs on:

```
http://localhost:5000
```

---

# 🔐 Environment Configuration

Create a `.env` file inside the backend folder.

Add:

```
GEMINI_API_KEY=your_api_key_here
```

⚠️ Never upload API keys to GitHub.

---

# 💡 How It Works

1. User enters a query through the chatbot interface.
2. React frontend sends the request to the backend server.
3. Backend processes the query.
4. AI model generates the response.
5. Response is displayed to the user.

---

# 🚀 Deployment

## Frontend Deployment

The frontend is deployed using:

**Vercel**

Live Demo:https://sjcit-smart-ai-assistant.vercel.app

```
Add your Vercel URL here
```

# 📸 Screenshots

The following screenshots demonstrate the user interface and working of the **SJCIT Smart AI Assistant**.

---

## 🏠 Home Page

The landing page provides quick access to different college information categories.

<img src="./image/homepage.png" width="800"/>

---

## 🤖 Chatbot Interface

The chatbot allows users to ask questions and interact with the AI assistant.

<img src="./image/chatbot.png" width="800"/>

---

## 💬 AI Response

The system generates intelligent responses based on user queries.

<img src="./image/response.png" width="800"/>

---

## 🏠 Hostel Information Response

The chatbot provides detailed hostel-related information.

<img src="./image/hostel%20response.png" width="800">

---


# 🎯 Project Objectives

- Develop an intelligent college virtual assistant.
- Provide 24/7 automated student support.
- Reduce manual effort in providing college information.
- Apply AI and full-stack development concepts.

---

# 🔮 Future Enhancements

The following features can be added in future versions to improve the system:

- 👤 **Student Login & Personalization**
  - Provide personalized information based on student profiles.

- 📊 **Admin Dashboard**
  - Allow administrators to update college information dynamically.

- 🗄️ **Database Integration**
  - Replace static data storage with a real-time database system.

- 📈 **User Analytics**
  - Track frequently asked queries and chatbot usage patterns.

- 🔔 **Notification System**
  - Provide updates about college events, announcements, and important notices.

- 🧠 **Advanced AI Improvements**
  - Enhance query understanding using advanced Natural Language Processing techniques.

---
# 📌 Uses

The SJCIT Smart AI Assistant can be used in various scenarios:

- 🎓 **Student Support**
  - Helps students quickly find information about admissions, courses, fees, departments, and campus facilities.

- 🏫 **College Information Access**
  - Provides instant access to college-related information without manual searching.

- 👨‍🎓 **Admission Assistance**
  - Guides prospective students with admission-related queries and course details.

- 💼 **Placement Support**
  - Provides information about placement activities, training programs, and career-related queries.

- 🏠 **Campus Facility Assistance**
  - Helps users get details about hostel, library, transportation, and other facilities.

- 🕒 **24/7 Virtual Assistance**
  - Provides automated support anytime without requiring human assistance.

- 🌐 **Visitor Guidance**
  - Helps visitors understand campus information and available services.
 
  --- ----

# 👩‍💻 Author

**Pranjali**

Computer Science and Engineering Student

GitHub:
https://github.com/Pranjali-0712

---

⭐ If you like this project, consider giving it a star!
