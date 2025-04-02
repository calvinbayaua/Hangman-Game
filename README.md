# 🔠 Hangman: Programming Languages Edition  

Hangman is a word-guessing game with a programming twist! Try to guess the word before all programming languages are eliminated. Each incorrect guess removes a language from the list, and the game ends when either the word is fully guessed or **only "Assembly" remains**.  

## 📖 Learning Journey  
This project was built while following [Scrimba's Learn React Course](https://scrimba.com/learn-react-c0e).  

## 🎮 Features  
- **Random word generation** for each game.  
- **Track correct and incorrect guesses** dynamically.  
- **Programming language elimination** with each wrong guess.  
- **Win** by guessing the word before running out of guesses!  

## 🛠️ Tech Stack  
- **Frontend:** React, HTML, CSS, JavaScript  
- **State Management:** React Hooks (`useState`, `useEffect`)
- **Packages:** clsx, React Confetti

## 🎯 How It Works  
1. A **random word** is selected at the start.  
2. Players **guess letters** by clicking on the virtual keyboard.  
3. **Correct letters** are revealed in the word.  
4. **Wrong guesses** remove programming languages from the list.  
5. The game ends when:  
   - The word is **fully guessed** → 🎉 You Win!  
   - Only **Assembly remains** → ❌ You Lose!  

## 📦 Installation & Setup  
1. **Clone the repository:**  
   ```sh
   git clone https://github.com/calvinbayaua/Hangman-Game.git  
   cd Hangman-Game
2. **Install dependencies:**  
   ```sh
   npm install
   ```
3. **Start the development server:**  
   ```sh
   npm run dev
   ```
