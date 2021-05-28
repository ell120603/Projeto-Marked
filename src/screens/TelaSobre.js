import React from 'react'
import {View, SafeAreaView, Text, Image, StyleSheet } from 'react-native'


export default props=>(
    <SafeAreaView >
        <>
        <View style={styles.header} >
        <Image style source={require('../img/pp.png')}
                style={{width:50, height:50, marginTop:20, paddingLeft:250, }}
                resizeMode='contain'/>
                <Text style={styles.title}>
                    Sobre Nós
                </Text>
        </View>
        <View>
        <Image style source={require('../img/sobre-nos.png')}
                style={{width:350, height:350, alignItems:'center',justifyContent:'center' }}
                resizeMode='contain'/>
                <Text>
                    Somos uma startup que veio para revolucionar o mundo de compras online
                </Text>
        </View>
        </>
    </SafeAreaView>


)

const styles = StyleSheet.create({
    header:{
        backgroundColor: '#20E0EC',
        flexDirection:'column',
        alignItems:'center',
        justifyContent: 'center',
        paddingRight:55,
        paddingLeft:55,

    },
    container:{
        backgroundColor: '#20E0EC',
        flexDirection:'column'
  
    },
    title:{
        textAlign:'center',
        color:'black',
        fontSize:30,
        fontWeight:'bold',
    }

})