import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

function GoalItem({ itemData }) {
    return (
        <TouchableOpacity>
            <View style={styles.listItem}>
                <Text>{itemData.item.value}</Text>
            </View>
        </TouchableOpacity>
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
