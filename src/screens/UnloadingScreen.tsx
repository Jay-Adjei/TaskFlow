import { useNavigation, NavigationProp } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { RootStackParamList } from './NavigationTypes';

const UnloadingScreen: React.FC = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const [text, setText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  
  const fullText = 'Taskflow'; // The correct text
  const typingSpeed = 150; // Speed of typing effect

  useEffect(() => {
    let index = 0;

    // Typewriter effect: Use slice to avoid "undefined"
    const typingInterval = setInterval(() => {
      if (index < fullText.length) {
        setText(fullText.slice(0, index + 1)); // Slices from 0 to (index+1)
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, typingSpeed);

    // Blinking cursor effect
    const cursorBlinkInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    // Auto navigation after 10s
    const timer = setTimeout(() => {
      navigation.navigate('AuthenticationOptions');
    }, 5000);

    return () => {
      clearInterval(typingInterval);
      clearInterval(cursorBlinkInterval);
      clearTimeout(timer);
    };
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {text}
        <Text style={[styles.cursor, { opacity: showCursor ? 1 : 0 }]}>|</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  cursor: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
});

export default UnloadingScreen;
