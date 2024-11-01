
import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, TouchableOpacity, Text, Image } from 'react-native';
import axios from 'axios';
import { Ionicons } from '@expo/vector-icons';

const AddTaskScreen = ({ navigation }) => {
  const [taskName, setTaskName] = useState('');

  const addTask = () => {
    if (taskName.trim() !== '') {
      axios.post('https://66ff37092b9aac9c997e8a42.mockapi.io/tasks', { name: taskName, completed: false })
        .then(() => {
          setTaskName('');
          navigation.goBack();
        })
        .catch(error => console.error(error));
    } else {
      alert('Please enter a task name');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('./sw.png')} // Replace with actual image URL
          style={styles.avatar}
        />
         <View style={{flex:1,alignItems:'flex-start', justifyContent:'center', marginBottom:48,marginLeft:10}}>
             <Text style={styles.greeting}>Hi Twinkle</Text>
              <Text style={styles.subGreeting}>Have a great day ahead</Text>
              <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
         </View>
        
      </View>
      <Text style={styles.title}>ADD YOUR JOB</Text>
      <TextInput
        style={styles.input}
        placeholder="Input your job"
        value={taskName}
        onChangeText={setTaskName}
        placeholderTextColor="gray"
      />
      <TouchableOpacity style={styles.button} onPress={addTask}>
        <Text style={styles.buttonText}>FINISH ➔</Text>
      </TouchableOpacity>
      <Image
        source={require('./note.png')}
        style={styles.noteImage}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f9f9f9',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 50,
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginBottom: 50,
  },
  greeting: {
    fontSize: 18,
    fontWeight: 'bold',
    justifyContent:'flex-start',
    alignItems:'flex-start',
  },
  subGreeting: {
    fontSize: 14,
    color: 'gray',
    justifyContent:'flex-start',
    alignItems:'flex-start',
  },
  backButton: {
    position: 'absolute',
    right: 0,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    width: '80%',
    padding: 10,
    marginBottom: 20,
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#00b4d8',
    borderRadius: 5,
    padding: 10,
    width: '80%',
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  noteImage: {
    width: 156,
    height: 156,
  },
});

export default AddTaskScreen;
