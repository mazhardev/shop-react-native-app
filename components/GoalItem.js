import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

function GoalItem({ itemData }) {
    return (
        <View style={styles.listItem}>
            <Text>{itemData.item.value}</Text>
        </View>
    )
}

export default GoalItem

const styles = StyleSheet.create({
    listItem: {
        padding: 10,
        marginVertical: 10,
        backgroundColor: '#ccc',
        borderColor: 'black',
        borderWidth: 1
    }
});
