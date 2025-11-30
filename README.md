# 🔢 Counter App with Animations

## Assignment C - React Native Class Assignment

A beautiful and interactive React Native counter application featuring smooth scale animations built with Expo. This app demonstrates the power of React Native's Animated API to create fluid user experiences.

![React Native](https://img.shields.io/badge/React_Native-0.81.5-61DAFB?style=flat&logo=react)
![Expo](https://img.shields.io/badge/Expo-SDK_54-000020?style=flat&logo=expo)
![License](https://img.shields.io/badge/License-Educational-green)

## Features

- ✨ **Animated Counter Display**: Number scales smoothly when incremented or decremented
- ➕ **Increment Button**: Increases the counter value by 1
- ➖ **Decrement Button**: Decreases the counter value by 1
- 🔄 **Reset Button**: Resets counter back to 0
- 🎨 **Clean UI**: Modern design with color-coded buttons

## Technologies Used

- **React Native** 0.81.5
- **Expo** SDK 54
- **React** 19.1.0
- **Animated API** for smooth scaling animations

## Project Structure

```
counter-app/
├── App.js                          # Main app entry point
├── src/
│   ├── components/
│   │   └── CounterDisplay.js       # Animated counter display component
│   └── screens/
│       └── Home.js                 # Home screen with counter logic
├── package.json
└── README.md
```

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/adityasingh-ops/rn-assignment-AdityaSingh10148.git
   cd rn-assignment-AdityaSingh10148
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Running the App

Start the development server:
```bash
npx expo start
```

Then choose your platform:
- Press `i` to open in iOS Simulator
- Press `a` to open in Android Emulator  
- Scan the QR code with Expo Go app on your physical device

## How It Works

### CounterDisplay Component (`src/components/CounterDisplay.js`)
- Uses React's `Animated.Value` to create smooth scale animations
- When the count changes, the number scales from 1 to 1.3 and back to 1
- Animation duration: 150ms for each phase (300ms total)
- Uses `useNativeDriver: true` for optimal performance

### Home Screen (`src/screens/Home.js`)
- Manages counter state using `useState` hook
- Three interactive buttons:
  - **Decrement (-)**: Red button, decreases count
  - **Reset**: Gray button, sets count to 0
  - **Increment (+)**: Green button, increases count
- Centered layout with modern styling and shadows

## 📸 Demo

> **Note**: When you run the app, you'll see:
> - A large blue counter number that scales up when changed
> - Three circular buttons with intuitive colors
> - Smooth 300ms animation on every count change
> - Clean, modern UI with shadows and proper spacing

## Assignment Requirements Met

✅ Display a numeric counter  
✅ Increment and decrement buttons  
✅ Animate number when it changes (scale effect)  
✅ Uses React Native Animated API  
✅ Clean folder structure with components and screens  
✅ Ready to run with `npx expo start`

## 📚 Assignment Details

**Assignment C**: Display a numeric counter with increment/decrement buttons. Animate the number (scale or fade) when it changes using React Native Animated or LayoutAnimation.

**Submission Format**: `rn-assignment-AdityaSingh10148`

## 👨‍💻 Author

**Aditya Singh**
- GitHub: [@adityasingh-ops](https://github.com/adityasingh-ops)
- Repository: [rn-assignment-AdityaSingh10148](https://github.com/adityasingh-ops/rn-assignment-AdityaSingh10148)

## 🎓 Course Information

This assignment is part of a React Native development course focused on:
- Component-based architecture
- React hooks (useState, useEffect, useRef)
- Animation techniques with React Native Animated API
- Mobile app development best practices

## 📝 License

This project is created for educational purposes as part of a React Native class assignment.

---

**Note**: This is a class assignment project. Feel free to fork and modify for learning purposes! 🚀
