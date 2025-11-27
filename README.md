# Counter App with Animations

## Assignment C - React Native Class Assignment

A simple React Native counter application with smooth animations built using Expo.

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
   git clone https://github.com/YOUR_USERNAME/rn-assignment-YOUR_NAME.git
   cd rn-assignment-YOUR_NAME
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

## Assignment Requirements Met

✅ Display a numeric counter  
✅ Increment and decrement buttons  
✅ Animate number when it changes (scale effect)  
✅ Uses React Native Animated API  
✅ Clean folder structure with components and screens  
✅ Ready to run with `npx expo start`

## Assignment Details

**Assignment C**: Display a numeric counter with increment/decrement buttons. Animate the number (scale or fade) when it changes using React Native Animated or LayoutAnimation.

**Submission Format**: `rn-assignment-<your-name>`

## Author

Aditya Singh

## License

This project is created for educational purposes as part of a React Native class assignment.
