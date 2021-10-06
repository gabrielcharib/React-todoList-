import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Task from './components/Task';


export default function App() {
  return (
    <View style={styles.container}>

      {/*today task */}
      <View style={styles.taskWrapper}>
        <Text style={styles.sectionTitre } >Today's task</Text>

        <View style={styles.items}>
        {/* the task will go !  */}
        <Task text={'Task 1 '}>   </Task>
        <Task text={'Task 2 '}>   </Task>
        </View>

      </View>



     </View>
  );
} 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED', 
  },
  taskWrapper:{
    paddingTop:80,
    paddingHorizontal:20,
  },
  sectionTitre: {
    fontSize: 24,
    fontWeight: 'bold'

  },
  items: {
     marginTop: 30,
  },
});
