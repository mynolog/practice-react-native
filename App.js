import { useState } from 'react'
import { StyleSheet, Text, View, Button, TextInput, ScrollView } from 'react-native'

export default function App() {
  const [goalText, setGoalText] = useState('')
  const [goals, setGoals] = useState([])

  function handleGoalInput(enteredText) {
    setGoalText(enteredText)
  }

  function handleAddGoal() {
    setGoals((prevState) => [...prevState, goalText])
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="할 일을 입력하세요..!"
          onChangeText={handleGoalInput}
        />
        <Button title="Add" onPress={handleAddGoal} />
      </View>
      <View style={styles.goalsContainer}>
        <ScrollView>
          {goals.map((goal, index) => (
            <View style={styles.goalItem} key={goal + index} r>
              <Text style={styles.goalText}>{goal}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    width: '70%',
    marginRight: 8,
    padding: 8,
  },
  goalsContainer: {
    flex: 5,
  },
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
  },
  goalText: {
    color: '#fff',
  },
})
