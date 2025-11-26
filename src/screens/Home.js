import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import CounterDisplay from '../components/CounterDisplay';

const Home = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Counter App</Text>
      
      <View style={styles.counterContainer}>
        <CounterDisplay count={count} />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity 
          style={[styles.button, styles.decrementButton]} 
          onPress={decrement}
        >
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.button, styles.resetButton]} 
          onPress={reset}
        >
          <Text style={styles.buttonTextSmall}>Reset</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.button, styles.incrementButton]} 
          onPress={increment}
        >
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 50,
    color: '#333',
  },
  counterContainer: {
    marginVertical: 40,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 30,
    gap: 15,
  },
  button: {
    width: 80,
    height: 80,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  decrementButton: {
    backgroundColor: '#f44336',
  },
  incrementButton: {
    backgroundColor: '#4CAF50',
  },
  resetButton: {
    backgroundColor: '#9E9E9E',
  },
  buttonText: {
    fontSize: 40,
    color: '#fff',
    fontWeight: 'bold',
  },
  buttonTextSmall: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default Home;