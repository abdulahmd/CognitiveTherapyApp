import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const Page2 = ({ onNext, setPatientSurvey }) => {
  const [formData, setFormData] = useState({
    favoriteColor: '',
    favoriteSong: '',
    favoriteSport: '',
    favoriteSportTeam: '',
    occupation: '',
    favoriteMovie: '',
    favoriteTVShow: '',
  });

  const handleNext = () => {
    // Validate the inputs if needed

    // Store the patient survey data
    setPatientSurvey(formData);

    // Proceed to the next page
    onNext();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Patient Survey</Text>
      <TextInput
        style={styles.input}
        placeholder="Favorite Color"
        value={formData.favoriteColor}
        onChangeText={(text) => setFormData({ ...formData, favoriteColor: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Favorite Song"
        value={formData.favoriteSong}
        onChangeText={(text) => setFormData({ ...formData, favoriteSong: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Favorite Sport"
        value={formData.favoriteSport}
        onChangeText={(text) => setFormData({ ...formData, favoriteSport: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Favorite Sport Team"
        value={formData.favoriteSportTeam}
        onChangeText={(text) => setFormData({ ...formData, favoriteSportTeam: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Occupation in Earlier Years"
        value={formData.occupation}
        onChangeText={(text) => setFormData({ ...formData, occupation: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Favorite Movie"
        value={formData.favoriteMovie}
        onChangeText={(text) => setFormData({ ...formData, favoriteMovie: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Favorite TV Show"
        value={formData.favoriteTVShow}
        onChangeText={(text) => setFormData({ ...formData, favoriteTVShow: text })}
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
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
  },
});

export default Page2;
