import React from 'react'
import {SafeAreaView} from 'react-native'
import {NavigationContainer } from  '@react-navigation/native'
import Drawer from './src/navegacao/Drawer'
export default props=>(
    <SafeAreaView style={{flex:1,}}>
        <NavigationContainer >
          <Drawer />
        </NavigationContainer>
    </SafeAreaView>
)