import React, { useEffect, useRef } from 'react';
import { Animated, StyleSheet } from 'react-native';

const CounterDisplay = ({ count }) => {
  const scaleAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    // Trigger animation when count changes
    Animated.sequence([
      Animated.timing(scaleAnim, {
        toValue: 1.3,
        duration: 150,
        useNativeDriver: true,
      }),
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: 150,
        useNativeDriver: true,
      }),
    ]).start();
  }, [count]);

  return (
    <Animated.Text
      style={[
        styles.counterText,
        {
          transform: [{ scale: scaleAnim }],
        },
      ]}
    >
      {count}
    </Animated.Text>
  );
};

const styles = StyleSheet.create({
  counterText: {
    fontSize: 80,
    fontWeight: 'bold',
    color: '#2196F3',
  },
});

export default CounterDisplay;