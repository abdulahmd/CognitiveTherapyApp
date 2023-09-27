import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const Page3 = ({ onNext, setMood }) => {
  const [mood, setMoodText] = useState('');

  const handleNext = () => {
    setMood(mood);
    onNext();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Describe Mood Today</Text>
      <TextInput
        style={styles.input}
        placeholder="How do you feel today?"
        value={mood}
        onChangeText={(text) => setMoodText(text)}
        multiline={true}
        numberOfLines={4}
      />
      <Button title="Next" onPress={handleNext} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    height: 120,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    padding: 10,
  },
});

export default Page3;
