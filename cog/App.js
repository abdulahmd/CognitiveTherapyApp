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
          <Button title="Next" onPress={() => setStep(2)} />

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

          <TextInput
            style={styles.input}
            placeholder="Enter Favorite Color"
            onChangeText={(text) => setPatientData({ ...patientData, favoriteColor: text })}
          />

          <TextInput
            style={styles.input}
            placeholder="How do you feel today?"
            onChangeText={(text) => setPatientData({ ...patientData, mood: text })}
          />
          <Button title="Next" onPress={() => setStep(3)} />
        </View>
      )}

      {step === 3 && (
        <ScrollView style={styles.schedule}>
          <Text style={styles.weekTitle}>Week 1</Text>
          <View style={styles.scheduleGrid}>
            <View style={styles.scheduleRow}>
              <View style={styles.scheduleDay}>
                <Text style={styles.scheduleHeader}>Sunday</Text>
                <Text style={styles.activity}>10AM Music Therapy, let's listen to {patientData.favoriteSong}</Text>
                <Text style={styles.activity}>2PM - 3PM Arts and crafts, let's paint a scene from {patientData.favoriteTVShow}</Text>
              </View>
              <View style={styles.scheduleDay}>
                <Text style={styles.scheduleHeader}>Monday</Text>
                <Text style={styles.activity}>10AM Music Therapy, let's listen to {patientData.favoriteTVShow} theme today</Text>
                <Text style={styles.activity}>2PM - 3PM Arts and crafts, let's draw the logo of the {patientData.favoriteSportTeam} team</Text>
              </View>
            </View>
            <View style={styles.scheduleRow}>
              <View style={styles.scheduleDay}>
                <Text style={styles.scheduleHeader}>Tuesday</Text>
                <Text style={styles.activity}>10AM Music Therapy, let's listen to some {patientData.mood} themed music today</Text>
                <Text style={styles.activity}>2PM - 3PM Arts and crafts, let's get creative today and make any art piece with the color {patientData.favoriteColor}</Text>
              </View>
              <View style={styles.scheduleDay}>
                <Text style={styles.scheduleHeader}>Wednesday</Text>
                <Text style={styles.activity}>10AM - 12PM Gardening, let's change things up and tend to the plants today</Text>
                <Text style={styles.activity}>1PM - 3PM, Baking, make cookies</Text>
                <Text style={styles.activity}>Reading, let's read the book behind {patientData.favoriteMovie} today</Text>
              </View>
            </View>
            <View style={styles.centeredScheduleDay}>
              <View style={styles.scheduleDay}>
                <Text style={styles.scheduleHeader}>Saturday</Text>
                <Text style={styles.activity}>10AM - 12PM Let's do a {patientData.favoriteSportTeam} themed crossword</Text>
                <Text style={styles.activity}>1PM - 3PM, Go out for a walk today, search for your nearest nature trail</Text>
              </View>
            </View>
          </View>
          <Button title="Back" onPress={() => setStep(2)} />
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
    width: 150,
    height: 150,
  },
  brain: {
    flex: 1,
    resizeMode: 'contain',
    width: null,
    height: null,
  },
  activity: {
    textAlign: 'center',
    marginBottom: 20,
  },
  scheduleGrid: {
    flexDirection: 'column',
  },
  centeredScheduleDay: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  scheduleDay: {
    marginBottom: 20,
    backgroundColor: '#3399ff',
    padding: 10,
    borderRadius: 40,
  },
  weekTitle: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 40,
    paddingBottom: 20,
  }
});
