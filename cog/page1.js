import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const Page1 = ({ caregiverInfo, setCaregiverInfo, onNext }) => {
  return (
    <View style={styles.container}>

      <TextInput
        style={styles.input}
        placeholder="Enter Name"
        value={caregiverInfo.name}
        onChangeText={(text) => setCaregiverInfo({ ...caregiverInfo, name: text })}
      />

      <TextInput
        style={styles.input}
        placeholder="Enter Age"
        value={caregiverInfo.age}
        onChangeText={(text) => setCaregiverInfo({ ...caregiverInfo, age: text })}
      />
      
      <TextInput
        style={styles.input}
        placeholder="Enter Place of Work"
        value={caregiverInfo.placeOfWork}
        onChangeText={(text) => setCaregiverInfo({ ...caregiverInfo, placeOfWork: text })}
      />
      <Button title="Next" onPress={onNext} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
  },
});

export default Page1;
