import React, { useState } from 'react'
import { View, TextInput, Button, StyleSheet } from 'react-native'

const GoalInput = ({ addGoalHandler }) => {

    const [enteredGoal, setEnteredGoal] = useState('');

    const goalInputHandler = (inputTxt) => {
        setEnteredGoal(inputTxt);
    }
    return (
        <View style={styles.inputPlusBtn}>
            <TextInput
                placeholder="Course Goal"
                style={styles.inputField}
                onChangeText={goalInputHandler}
                value={enteredGoal}
            />
            <Button title="ADD" onPress={()=>addGoalHandler(enteredGoal)} />
        </View>
    )
}

export default GoalInput

const styles = StyleSheet.create({
    inputPlusBtn: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    inputField: {
        width: '80%',
        borderColor: 'black',
        borderWidth: 1,
        padding: 10
    },
});

