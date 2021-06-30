import React from 'react'
import {SafeAreaView,StatusBar} from 'react-native'
import {NavigationContainer } from  '@react-navigation/native'
import Drawer from './src/navegacao/Drawer'
export default props=>(
    <SafeAreaView style={{flex:1,}}>
        <NavigationContainer >
        <StatusBar hidden={true}/>
          <Drawer />
        </NavigationContainer>
    </SafeAreaView>
)