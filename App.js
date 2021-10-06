import { StatusBar } from 'expo-status-bar';
import React,{useState } from 'react';
import { KeyboardAvoidingView, Platform, StyleSheet, Text, TouchableOpacity, View,TextInput } from 'react-native';
import Task from './components/Task';


export default function App() {
  const [task,setTask] = useState();
  const[taskItems,setTaskItems] = useState([]);

  const handledAddTask = () => {
    setTaskItems([...taskItems,task])
    setTask(null);
  }
  return (
    <View style={styles.container}>

      {/*today task */}
      <View style={styles.taskWrapper}>
        <Text style={styles.sectionTitre } >Today's task</Text>

        <View style={styles.items}>
        {/* the task will go !  */}
        {
          taskItems.map((item, index) => {
            return <Task key={index} text={item} /> 

             
          })

        }
        
        </View>

      </View>

      {/* write a tasks */}
    <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      style={styles.writeTaskWrapper}>
     
    <TextInput style={styles.input} placeholder={'Write a task'}  value={task} onChangeText={text => setTask(text)} />

      <TouchableOpacity onPress={() => handledAddTask()} >
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
