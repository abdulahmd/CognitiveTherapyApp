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
      {step == 1 && (
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
              source={require('./assets/ai.png')}
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
            placeholder="Favorite Sports Team"
            onChangeText={(text) => setPatientData({ ...patientData, favoriteSportTeam: text })}
          />

          <TextInput
            style={styles.input}
            placeholder="Previous Occupation"
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
                <Text style={styles.activity}>11 am - 1 pm: Reminiscence Therapy: Create a memory box filled with items related to their past, such as old photographs, letters, or mementos. Discuss these items to stimulate memory recall.</Text>
                <Text style={styles.activity}>2PM - 3PM Arts and crafts, let's paint a scene from {patientData.favoriteTVShow}</Text>
              </View>
              <View style={styles.scheduleDay}>
                <Text style={styles.scheduleHeader}>Monday</Text>
                <Text style={styles.activity}>10AM Music Therapy, let's listen to {patientData.favoriteTVShow} theme today</Text>
                <Text style={styles.activity}>11 am - 1 pm: Reminiscence Therapy: Create a memory box filled with items related to their past, such as old photographs, letters, or mementos. Discuss these items to stimulate memory recall.</Text>
                <Text style={styles.activity}>2PM - 3PM Arts and crafts, let's draw the logo of the {patientData.favoriteSportTeam} team</Text>
              </View>
            </View>
            <View style={styles.scheduleRow}>
              <View style={styles.scheduleDay}>
                <Text style={styles.scheduleHeader}>Tuesday</Text>
                <Text style={styles.activity}>10AM Music Therapy, let's listen to some {patientData.mood} themed music today</Text>
                <Text style={styles.activity}>11 am - 1 pm: Reminiscence Therapy: Create a memory box filled with items related to their past, such as old photographs, letters, or mementos. Discuss these items to stimulate memory recall.</Text>
                <Text style={styles.activity}>2PM - 3PM Arts and crafts, let's get creative today and make any art piece with the color {patientData.favoriteColor}</Text>
              </View>
              <View style={styles.scheduleDay}>
              <Text style={styles.scheduleHeader}>Wednesday</Text>
                <Text style = {styles.activity}>10 am - 12 pm: Gardening: If they have a green thumb or used to enjoy gardening, provide potted plants or a small garden space for them to tend to. It can be therapeutic and engaging</Text>
                <Text style = {styles.activity}>1 pm - 3 pm Cooking or Baking: Simple cooking or baking tasks that they used to enjoy, like making cookies or sandwiches, can engage their senses and memories. Have them cook their favorite foods </Text>
              </View>
            </View>
            <View style={styles.scheduleRow}>
              <View style={styles.scheduleDay}>
                <Text style={styles.scheduleHeader}>Thursday</Text>
                <Text style={styles.activity}>Reading: Read aloud from a book, magazine, or newspaper based on their interests. Even if they can't read independently, listening to a familiar topic can be comforting</Text>
                <Text style={styles.activity}>Puzzles and Games: Offer puzzles, Sudoku, crossword puzzles, or other brain games that match their cognitive abilities. Choose puzzles related to their interests, such as nature or history</Text>
                <Text style={styles.activity}>Physical Activities: Gentle exercises like chair yoga or stretching can help maintain mobility and reduce restlessness. Ensure they're safe during physical activities</Text>
                <Text style={styles.activity}>Nature Walks: If possible, take them for short walks in a garden, park, or around the neighborhood to connect with nature and get fresh air.</Text>
              </View>
              <View style={styles.scheduleDay}>
                <Text style={styles.scheduleHeader}>Friday</Text>
                <Text style={styles.activity}>Reading: Read aloud from a book, magazine, or newspaper based on their interests. Even if they can't read independently, listening to a familiar topic can be comforting</Text>
                <Text style={styles.activity}>Puzzles and Games: Offer puzzles, Sudoku, crossword puzzles, or other brain games that match their cognitive abilities. Choose puzzles related to their interests, such as nature or history</Text>
                <Text style={styles.activity}>Physical Activities: Gentle exercises like chair yoga or stretching can help maintain mobility and reduce restlessness. Ensure they're safe during physical activities</Text>
                <Text style={styles.activity}>Nature Walks: If possible, take them for short walks in a garden, park, or around the neighborhood to connect with nature and get fresh air.</Text>
              </View>
            </View>
            <View style={styles.centeredScheduleDay}>
              <View style={styles.scheduleDay}>
                <Text style={styles.scheduleHeader}>Saturday</Text>
                <Text style={styles.activity}>Reading: Read aloud from a book, magazine, or newspaper based on their interests. Even if they can't read independently, listening to a familiar topic can be comforting</Text>
                <Text style={styles.activity}>Puzzles and Games: Offer puzzles, Sudoku, crossword puzzles, or other brain games that match their cognitive abilities. Choose puzzles related to their interests, such as nature or history</Text>
                <Text style={styles.activity}>Physical Activities: Gentle exercises like chair yoga or stretching can help maintain mobility and reduce restlessness. Ensure they're safe during physical activities</Text>
                <Text style={styles.activity}>Nature Walks: If possible, take them for short walks in a garden, park, or around the neighborhood to connect with nature and get fresh air.</Text>
              </View>
            </View>
          </View>
          <Button title="Next Week" onPress={() => setStep(4)} />
          <View style={styles.spaceBetButts} />
          <Button title="Back" onPress={() => setStep(1)} />
        </ScrollView>
      )}

      {step === 4 && (
        <ScrollView style={styles.schedule}>
          <Text style={styles.weekTitle}>Week 2</Text>
          <View style={styles.scheduleGrid}>
            <View style={styles.scheduleRow}>
              <View style={styles.scheduleDay}>
                <Text style={styles.scheduleHeader}>Sunday</Text>
                <Text style={styles.activity}>Today, we'll get a visit from a therapy animal. Interaction with pets can have a calming effect.</Text>
                <Text style={styles.activity}>Provide a simple camera or smartphone with a camera app and encourage them to take pictures of things they find interesting, like flowers, birds, or family members.</Text>
              </View>
              <View style={styles.scheduleDay}>
                <Text style={styles.scheduleHeader}>Monday</Text>
                <Text style={styles.activity}>Offer sensory activities like scented oils, textured objects, or soft fabrics to engage their sense of touch and smell.</Text>
                <Text style={styles.activity}>Facilitate social interaction with peers in a supportive group setting. Engage in discussions or group activities based on common interests.</Text>
              </View>
            </View>
            <View style={styles.scheduleRow}>
              <View style={styles.scheduleDay}>
                <Text style={styles.scheduleHeader}>Tuesday</Text>
                <Text style={styles.activity}>Encourage them to share stories from their past or create fictional stories together. This can stimulate creativity and memory.</Text>
                <Text style={styles.activity}>Use tablets or computers for simple games, interactive apps, or video calls with loved ones. Ensure the technology is user-friendly and matches their capabilities.</Text>
              </View>
              <View style={styles.scheduleDay}>
                <Text style={styles.scheduleHeader}>Wednesday</Text>
                <Text style={styles.activity}>Create personalized memory books with pictures and stories from their life to trigger memories and provide comfort.</Text>
                <Text style={styles.activity}>Let's listen to {patientData.favoriteSong}</Text>
                <Text style={styles.activity}>Reading, let's read the book behind {patientData.favoriteMovie} today</Text>
              </View>
            </View>
            <View style={styles.scheduleRow}>
              <View style={styles.scheduleDay}>
                <Text style={styles.scheduleHeader}>Thursday</Text>
                <Text style={styles.activity}>Reading: Read aloud from a book, magazine, or newspaper based on their interests. Even if they can't read independently, listening to a familiar topic can be comforting</Text>
                <Text style={styles.activity}>Puzzles and Games: Offer puzzles, Sudoku, crossword puzzles, or other brain games that match their cognitive abilities. Choose puzzles related to their interests, such as nature or history</Text>
                <Text style={styles.activity}>Physical Activities: Gentle exercises like chair yoga or stretching can help maintain mobility and reduce restlessness. Ensure they're safe during physical activities</Text>
                <Text style={styles.activity}>Nature Walks: If possible, take them for short walks in a garden, park, or around the neighborhood to connect with nature and get fresh air.</Text>
              </View>
              <View style={styles.scheduleDay}>
                <Text style={styles.scheduleHeader}>Friday</Text>
                <Text style={styles.activity}>Reading: Read aloud from a book, magazine, or newspaper based on their interests. Even if they can't read independently, listening to a familiar topic can be comforting</Text>
                <Text style={styles.activity}>Puzzles and Games: Offer puzzles, Sudoku, crossword puzzles, or other brain games that match their cognitive abilities. Choose puzzles related to their interests, such as nature or history</Text>
                <Text style={styles.activity}>Physical Activities: Gentle exercises like chair yoga or stretching can help maintain mobility and reduce restlessness. Ensure they're safe during physical activities</Text>
                <Text style={styles.activity}>Nature Walks: If possible, take them for short walks in a garden, park, or around the neighborhood to connect with nature and get fresh air.</Text>
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
          <View style={styles.spaceBetButts} />
          <Button title="Back" onPress={() => setStep(3)} />
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
    backgroundColor: '#66ccff',
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
    width: 150,
    height: 150,
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
  },
  spaceBetButts: {
    marginBottom: 10,
  }
});
