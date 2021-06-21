import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList } from 'react-native';
import GoalInput from './components/GoalInput'
import GoalItem from './components/GoalItem'

export default function App() {

  const [courseGoals, setCourseGoals] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const addGoalHandler = (enteredGoal) => {
    setCourseGoals(currentGoals => [
      ...currentGoals,
      { id: Math.random().toString(), value: enteredGoal }
    ])
    setIsModalVisible(false);
  }
  const handleDeleteListItem = (goalId) => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter((goal) => goal.id !== goalId)
    })
  }
  const handleModalVisible = () => {
    setIsModalVisible(false)
  }

  return (
    <View style={styles.screen}>
      <Button title="Add Goal" onPress={()=>setIsModalVisible(true)} />
      <GoalInput addGoalHandler={addGoalHandler} isModalVisible={isModalVisible} handleModalVisible={handleModalVisible} />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={courseGoals}
        renderItem={itemData => (
          <GoalItem itemData={itemData} handleDeleteListItem={handleDeleteListItem} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  }
});
