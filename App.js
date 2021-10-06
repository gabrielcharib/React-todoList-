import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { KeyboardAvoidingView, Platform, StyleSheet, Text, TouchableOpacity, View,TextInput } from 'react-native';
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

      {/* write a tasks */}
    <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      style={styles.writeTaskWrapper}>
     
    <TextInput style={styles.input} placeholder={'Write a task'} />

      <TouchableOpacity>
        <View style={styles.addWrapper}>
          <Text style={styles.addText}>+</Text>
        </View>


      </TouchableOpacity>
    </KeyboardAvoidingView>
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
  writeTaskWrapper:{
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  input:{
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderColor :'#C0C0C0',
    borderWidth: 1,
    width: 250,
  },
  addWrapper:{
    width: 60,
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 60,
    alignItems: 'center',
    justifyContent: 'center',
    alignItems: 'center',

    
  },
});
