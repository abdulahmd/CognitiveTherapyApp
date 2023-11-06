import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

const Page4 = ({ patientData, setStep, setSchedule }) => {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    
    const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const week1Activities = [
      {
        day: 'Sunday',
        activities: [
          '10 am: Music Therapy - Play their favorite songs or music from their era. Encourage them to sing along or play simple instruments like a tambourine or maracas.',
          '11 am - 1 pm: Reminiscence Therapy - Create a memory box filled with items related to their past, such as old photographs, letters, or mementos. Discuss these items to stimulate memory recall.',
          '2 pm - 3 pm: Art and Craft - Offer painting, drawing, or crafting activities. Provide supplies for them to create art or crafts that align with their interests.',
        ],
      },
      {
        day: 'Wednesday',
        activities: [
          '10 am - 12 pm: Gardening - If they have a green thumb or used to enjoy gardening, provide potted plants or a small garden space for them to tend to. It can be therapeutic and engaging.',
          '1 pm - 3 pm: Cooking or Baking - Simple cooking or baking tasks that they used to enjoy, like making cookies or sandwiches, can engage their senses and memories. Have them cook their favorite foods.',
        ],
      },
      {
        day: 'Friday',
        activities: [
          'Reading - Read aloud from a book, magazine, or newspaper based on their interests. Even if they cant read independently, listening to a familiar topic can be comforting.',
          'Puzzles and Games - Offer puzzles, Sudoku, crossword puzzles, or other brain games that match their cognitive abilities. Choose puzzles related to their interests, such as nature or history.',
        ],
      },
    ];

    setActivities(week1Activities);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Weekly Schedule</Text>
      <ScrollView contentContainerStyle={styles.scheduleContainer}>
        {activities.map((day, index) => (
          <View key={index} style={styles.scheduleItem}>
            <Text style={styles.day}>{day.day}</Text>
            {day.activities.map((activity, activityIndex) => (
              <Text key={activityIndex} style={styles.activity}>{activity}</Text>
            ))}
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    background: URL('./assets/background.png')
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
  },
  scheduleContainer: {
    flexGrow: 1,
    width: '90%',
    padding: 16,
    marginBottom: 20,
  },
  scheduleItem: {
    marginBottom: 20,
  },
  day: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  activity: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: 'center',
  },
});

export default Page4;
