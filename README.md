# ⚛️ React Utility Dashboard

A simple and responsive React application built to practice fundamental React concepts such as **state management, event handling, conditional rendering, and component-based development**.

The project contains two useful utilities:

- 🔢 Counter
- 🎲 Random Number Generator

The application provides a clean and user-friendly interface where the UI updates automatically whenever the state changes.

---

## ✨ Features

### 🔢 Counter

- ➕ Increment the counter value.
- ➖ Decrement the counter value.
- 🔄 Reset the counter to zero.
- 🚫 Prevents the counter from going below zero.
- ⚠️ Displays **"Minimum limit reached"** when the counter value is zero.
- 🔄 Automatically updates the UI whenever the counter value changes.

### 🎲 Random Number Generator

- 🎲 Generates a random number between **1 and 100**.
- 🔄 Generates a new random number on every button click.
- 🔁 Resets the generated number to its initial state.
- ℹ️ Displays **"No number generated yet"** before the first number is generated.
- 🔄 Automatically updates the UI whenever the generated number changes.

---

## 🛠️ Technologies Used

- React.js
- JavaScript
- HTML5
- CSS3
- Vite
- Git
- GitHub
- Vercel

---

## 📂 Project Structure

```text
React-Utility-Dashboard/
│
├── public/
│
├── src/
│   │
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
```

---

## ⚛️ React Concepts Practiced

### 1. Functional Components

The application is divided into reusable functional components:

- `Counter`
- `RandomNumber`

This makes the application easier to understand, maintain, and reuse.

### 2. State Management with useState

The `useState` Hook is used to manage the counter value:

```jsx
const [count, setCount] = useState(0);
```

The Random Number Generator also uses state:

```jsx
const [randomNumber, setRandomNumber] = useState(null);
```

### 3. Event Handling

React event handlers are used to respond to user interactions.

Example:

```jsx
<button onClick={increment}>+</button>
```

Event handlers are used for:

- Incrementing the counter
- Decrementing the counter
- Resetting the counter
- Generating a random number
- Resetting the random number

### 4. Conditional Rendering

The Counter displays a message when its value reaches zero:

```jsx
{count === 0 && (
  <p>Minimum limit reached</p>
)}
```

The Random Number Generator displays a different message before a number is generated:

```jsx
{randomNumber === null
  ? "No number generated yet"
  : randomNumber}
```

### 5. Preventing Negative Values

The Counter is prevented from going below zero using a condition:

```jsx
function decrement() {
  if (count > 0) {
    setCount(count - 1);
  }
}
```

Therefore, the counter can go from:

```text
3 → 2 → 1 → 0
```

but never:

```text
0 → -1
```

### 6. Random Number Generation

A random number between 1 and 100 is generated using:

```jsx
Math.floor(Math.random() * 100) + 1
```

Every time the Generate Random Number button is clicked, a new number is generated.

---

## 🎨 Styling

CSS is used to create a clean, simple, and responsive user interface.

The Counter and Random Number Generator are displayed as separate cards.

The layout automatically adjusts according to the screen size, making the application suitable for:

- 💻 Desktop
- 📱 Mobile
- 📲 Tablet

---

## 🚀 Getting Started

Follow these steps to run the project locally.

### 1. Clone the Repository

```bash
git clone https://github.com/Vaithees-V/React-Utility-Dashboard.git
```

### 2. Navigate to the Project Folder

```bash
cd React-Utility-Dashboard
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Start the Development Server

```bash
npm run dev
```

Open the local URL provided by Vite in your browser.

---

## 📦 Production Build

To create an optimized production build:

```bash
npm run build
```

The production files will be generated inside the `dist` folder.

To preview the production build locally:

```bash
npm run preview
```

---

## 🌐 Live Demo

The project is deployed using Vercel.

**Live Website:**

https://react-utility-dashboard-rouge.vercel.app/

---

## 🐙 GitHub Repository

**GitHub Repository:**

https://github.com/Vaithees-V/React-Utility-Dashboard

---

## 🎯 Project Objective

The main objective of this project is to understand and practice the fundamentals of React by developing a simple utility dashboard.

The project demonstrates how React manages application state and automatically updates the user interface whenever the state changes.

The project focuses on:

- React functional components
- State management using `useState`
- Event handling
- Conditional rendering
- Component separation
- Dynamic UI updates
- Random number generation
- Responsive CSS styling

---

## 📚 Learning Outcomes

Through this project, the following concepts were practiced:

1. Creating React functional components.
2. Using the `useState` Hook.
3. Managing component state.
4. Handling button click events.
5. Implementing conditional rendering.
6. Automatically updating the UI when state changes.
7. Separating functionality into reusable components.
8. Creating responsive layouts using CSS.
9. Building a production-ready React application.
10. Using Git and GitHub for version control.
11. Deploying a React application using Vercel.

---

## 🔄 Application Flow

```text
User Interaction
       ↓
Button Click
       ↓
Event Handler
       ↓
State Update
       ↓
React Re-renders Component
       ↓
Updated UI
```

### Counter Flow

```text
Click Increment
      ↓
setCount(count + 1)
      ↓
Counter State Updated
      ↓
UI Displays New Value
```

### Random Number Flow

```text
Click Generate
      ↓
Generate Number from 1–100
      ↓
setRandomNumber(number)
      ↓
State Updated
      ↓
New Number Displayed
```

---

## 👨‍💻 Author

**Vaithees**

React practice project focused on learning state management, event handling, conditional rendering, and component-based development.

---

## 📌 Project Status

**Completed ✅**

The application has been successfully built using React and Vite, uploaded to GitHub, and deployed using Vercel.
