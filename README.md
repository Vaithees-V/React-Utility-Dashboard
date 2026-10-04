# ⚛️ React Utility Dashboard

A simple and responsive React application built to practice fundamental React concepts such as **state management, event handling, conditional rendering, and component-based development**.

The dashboard contains two utilities:

- 🔢 Counter
- 🎲 Random Number Generator

## ✨ Features

### 🔢 Counter

- Increment the counter value.
- Decrement the counter value.
- Prevents the counter from going below zero.
- Reset the counter to zero.
- Displays **"Minimum limit reached"** when the counter reaches zero.

### 🎲 Random Number Generator

- Generates a random number between **1 and 100**.
- Displays **"No number generated yet"** before generating the first number.
- Generates a new random number on every button click.
- Reset the generated number to its initial state.

## 🛠️ Technologies Used

- React.js
- JavaScript
- HTML5
- CSS3
- Vite
- Git & GitHub
- Vercel

## 📂 Project Structure

```text
React-Utility-Dashboard/
│
├── public/
│
├── src/
│   ├── components/
│   │   ├── Counter.jsx
│   │   ├── Counter.css
│   │   ├── RandomNumber.jsx
│   │   └── RandomNumber.css
│   │
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
│
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── README.md
└── vite.config.js

⚛️ React Concepts Practiced
useState
The useState Hook is used to manage the state of both utilities.
const [count, setCount] = useState(0);

The Random Number Generator also uses state:
const [randomNumber, setRandomNumber] = useState(null);

Event Handling
Button click events are handled using React event handlers.
<button onClick={increment}>+</button>

Conditional Rendering
The Counter displays a message when its value reaches zero:
{count === 0 && (
  <p>Minimum limit reached</p>
)}

The Random Number Generator displays a different message before a number is generated:
{randomNumber === null
  ? "No number generated yet"
  : randomNumber}

🚀 Getting Started
1. Clone the repository
git clone https://github.com/Vaithees-V/React-Utility-Dashboard.git

2. Navigate to the project folder
cd React-Utility-Dashboard

3. Install dependencies
npm install

4. Start the development server
npm run dev

Open the local URL provided by Vite in your browser.
📦 Production Build
To create a production build:
npm run build

The optimized production files will be generated inside the dist folder.
🌐 Live Demo
The project is deployed using Vercel:
https://react-utility-dashboard-rouge.vercel.app/
🐙 GitHub Repository
https://github.com/Vaithees-V/React-Utility-Dashboard
🎯 Project Objective
The main objective of this project is to understand the fundamentals of React by building a small utility dashboard.
Through this project, the following concepts are practiced:
- React functional components
- State management using useState
- Event handling
- Conditional rendering
- Component separation
- Dynamic UI updates
- Responsive CSS styling
👨‍💻 Author
Vaithees
Built as a React practice project to strengthen fundamental React development skills.
