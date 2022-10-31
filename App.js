import React, { useState } from 'react';

import { Text } from 'react-native';

import { useFonts } from 'expo-font';

import OnBoard from './components/OnBoard';
import Home from "./components/Home"

export default function App() {

  const [loaded] = useFonts ({
    'regular': require("./assets/fonts/OpenSans-Regular.ttf"),
    'medium': require("./assets/fonts/OpenSans-Medium.ttf"),
    'semi-bold': require("./assets/fonts/OpenSans-SemiBold.ttf"),
    'bold': require("./assets/fonts/OpenSans-Bold.ttf"),
  });

  const [showOnBoard, setShowOnBoard] = useState(true);

  if (!loaded) return <Text>Loading...</Text>;

  const handleOnBoardFinish = () => {
    setShowOnBoard(false);
  }

  return (
    <>
      {showOnBoard && <OnBoard handleDone={handleOnBoardFinish} />} 
      {!showOnBoard && <Home />} 
    </>
  );
}
