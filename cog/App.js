import React, { useState } from 'react';
import { View, Text, ScrollView, Button, StyleSheet, TextInput, Image } from 'react-native';

export default function App() {
  const [step, setStep] = useState(1);
  const [caregiverInfo, setCaregiverInfo] = useState({
    name: '',
    age: '',
    placeOfWork: '',
  });
  const [patientData, setPatientData] = useState({
    favoriteColor: '',
    mood: '',
  });

  const [schedule, setSchedule] = useState({});

  // Function to generate a personalized schedule for Day 1
  function generateDay1Schedule(patientData) {
    const day1Activities = ['10 am: Music Therapy'];
    
    if (patientData.mood === 'Good') {
      day1Activities.push('11 am - 1 pm: Reminiscence Therapy');
    } else if (patientData.mood === 'Bad') {
      day1Activities.push('11 am - 1 pm: Engage in a calming activity');
    } else {
      day1Activities.push('11 am - 1 pm: Offer a relaxing activity');
    }

    day1Activities.push('2 pm - 3 pm: Arts and Crafts');

    return day1Activities;
  }

  function handleNextStep() {
    if (step === 1) {
      setStep(2);
    } else if (step === 2) {
      const day1Schedule = generateDay1Schedule(patientData);
      setSchedule({ day1: day1Schedule });
      setStep(3);
    }
  }

  function goBack() {
    setStep(1);
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {step === 1 && (
        <View style={styles.form}>
        <Text style={styles.header}>Caregiver Information</Text>
          
          <TextInput
            style={styles.input}
            placeholder="Enter Name"
            onChangeText={(text) => setCaregiverInfo({ ...caregiverInfo, name: text })}
          />
          
          <TextInput
            style={styles.input}
            placeholder="Enter Age"
            onChangeText={(text) => setCaregiverInfo({ ...caregiverInfo, age: text })}
          />
        
          <TextInput
            style={styles.input}
            placeholder="Enter Place of Work"
            onChangeText={(text) => setCaregiverInfo({ ...caregiverInfo, placeOfWork: text })}
          />
          <Button title="Next" onPress={handleNextStep} />

          <View style={styles.brainContainer}>
            <Image
              source={require('./brain.png')}
              style={styles.brain}
            />
          </View>

        </View>
      )}

      {step === 2 && (
        <View style={styles.form}>
          <Text style={styles.header}>Patient Survey</Text>
          {/* Include input fields for patient survey data, including mood */}
          <TextInput
            style={styles.input}
            placeholder="Enter Favorite Color"
            onChangeText={(text) => setPatientData({ ...patientData, favoriteColor: text })}
          />
          <TextInput
            style={styles.input}
            placeholder="Favorite Song"
            onChangeText={(text) => setPatientData({ ...patientData, favoriteSong: text })}
          />
          <TextInput
            style={styles.input}
            placeholder="Favorite Sport"
            onChangeText={(text) => setPatientData({ ...patientData, favoriteSport: text })}
          />
          <TextInput
            style={styles.input}
            placeholder="Favorite Sport's Team"
            onChangeText={(text) => setPatientData({ ...patientData, favoriteSportTeam: text })}
          />
          <TextInput
            style={styles.input}
            placeholder="Occupation in earlier years"
            onChangeText={(text) => setPatientData({ ...patientData, occupation: text })}
          />
          <TextInput
            style={styles.input}
            placeholder="Favorite Movie"
            onChangeText={(text) => setPatientData({ ...patientData, favoriteMovie: text })}
          />
          <TextInput
            style={styles.input}
            placeholder="Favorite TV Show"
            onChangeText={(text) => setPatientData({ ...patientData, favoriteTVShow: text })}
          />
          <TextInput
            style={styles.input}
            placeholder="How do you feel today?"
            onChangeText={(text) => setPatientData({ ...patientData, mood: text })}
          />
          <Button title="Next" onPress={handleNextStep} />
        </View>
      )}

      {step === 3 && (
        <ScrollView style={styles.schedule}>
          <Text style={styles.scheduleHeader}>Sunday</Text>
            <Text style = {styles.activity}>10AM  Music Therapy, let's listen to {patientData.favoriteSong}</Text>
            <Text style = {styles.activity}>2PM - 3PM  Arts and crafts, let's paint a scene from {patientData.favoriteTVShow}</Text>

          <Text style={styles.scheduleHeader}>Monday</Text>
            <Text style = {styles.activity}>10AM  Music Therapy, let's listen to {patientData.favoriteTVShow} theme today</Text>
            <Text style = {styles.activity}>2PM - 3PM  Arts and crafts, let's draw the logo of the {patientData.favoriteSportTeam} team</Text>

          <Text style={styles.scheduleHeader}>Tuesday</Text>
            <Text style = {styles.activity}>10AM  Music Therapy, let's listen to some {patientData.mood} themed music today</Text>
            <Text style = {styles.activity}>2PM - 3PM  Arts and crafts, let's get creative today and make any art piece with the color {patientData.favoriteColor}</Text>

          <Text style={styles.scheduleHeader}>Wednesday</Text>
            <Text style = {styles.activity}>10AM - 12PM  Gardening, let's change things up and tend to the plants today</Text>
            <Text style = {styles.activity}>1PM - 3PM, Baking, make cookies</Text>
            <Text style = {styles.activity}>Reading, let's read the book behind {patientData.favoriteMovie} today</Text>

          <Text style={styles.scheduleHeader}>Thursday</Text>
            <Text style = {styles.activity}>10AM - 12PM  Reminiscence Therapy, let's listen to some music from {2025 - patientData.age}</Text>
            <Text style = {styles.activity}>1PM - 3PM, Go out for a walk today, search for your nearest nature trail</Text>

          <Text style={styles.scheduleHeader}>Friday</Text>
            <Text style = {styles.activity}>10AM - 12PM  Physical Therapy, do some yoga while listening to {patientData.favoriteSong}</Text>
            <Text style = {styles.activity}>Reading, let's read the book behind {patientData.favoriteMovie} today</Text>

          <Text style={styles.scheduleHeader}>Saturday</Text>
            <Text style = {styles.activity}>10AM - 12PM  Let's do a {patientData.favoriteSportTeam} themed crossword</Text>
            <Text style = {styles.activity}>1PM - 3PM, Go out for a walk today, search for your nearest nature trail</Text>
          <Button title="Back" onPress={goBack} />
        </ScrollView>
      )}

      
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#66ccff'
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  form: {
    width: '100%',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
  },
  schedule: {
    width: '100%',
  },
  scheduleHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center'

  },
  brainContainer: {
    bottom: -145,
    left: -17,
    width: 150,        // Adjust width as needed
    height: 150,       // Adjust height as needed
  },
  brain: {
    flex: 1,            // Allow image to take the available space within the container
    resizeMode: 'contain',  // Adjust the image's size to fit the container
    width: null,        // Set width to null for dynamic width based on flex
    height: null,       // Set height to null for dynamic height based on flex
  },
  activity: {
    textAlign: 'center',
    marginBottom: 20,
  }
  
  
});
