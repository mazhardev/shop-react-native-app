import React, { useState } from 'react'
import { View, TextInput, Button, StyleSheet, Modal } from 'react-native'

const GoalInput = ({ addGoalHandler, isModalVisible, handleModalVisible }) => {

    const [enteredGoal, setEnteredGoal] = useState('');

    const goalInputHandler = (inputTxt) => {
        setEnteredGoal(inputTxt);
    }
    const handleAddGoal = () => {
        addGoalHandler(enteredGoal);
        setEnteredGoal('');
    }

    return (
        <Modal visible={isModalVisible} animationType='slide'>
            <View style={styles.inputPlusBtnContainer}>
                <TextInput
                    placeholder="Course Goal"
                    style={styles.inputField}
                    onChangeText={goalInputHandler}
                    value={enteredGoal}
                />
                <View style={styles.ButtonsContainer}>
                    <View style={styles.button}>
                        <Button title='CANCEL' color='red' onPress={handleModalVisible} />
                    </View>
                    <View style={styles.button}>
                        <Button title="ADD" onPress={handleAddGoal} />
                    </View>
                </View>
            </View>
        </Modal>
    )
}

export default GoalInput

const styles = StyleSheet.create({
    inputPlusBtnContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    inputField: {
        width: '80%',
        borderColor: 'black',
        borderWidth: 1,
        padding: 10,
        marginBottom: 10
    },
    ButtonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '60%'
    },
    button: {
        width: '40%'
    }
});

