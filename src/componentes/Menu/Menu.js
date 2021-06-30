import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

export default function Menu() {
    const navigation = useNavigation();

    return (
        <TouchableOpacity style={{ marginRight: 20, justifyContent: 'flex-start' }} onPress={() => navigation.openDrawer()}>
            <Feather
                name="menu"
                size={33}
                color="#373737"
            />
        </TouchableOpacity>
    )
}