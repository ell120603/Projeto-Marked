import React from 'react'
import {Feather} from '@expo/vector-icons'
import {useNavigation} from '@react-navigation/native'
import {View, Text,
    StyleSheet, 
    SafeAreaView, 
    Image,
    TouchableOpacity
} from 'react-native'
import Menu from '../componentes/Menu/Menu';

class Header extends React.Component{
      render(){
        return (
          <>
            <SafeAreaView style={styles.header_safe_area}>
              <View style={styles.header}>
                <View style={styles.header_inner}>
                  <View style={{flexDirection:"row"}}>
                    <Menu/>
                    <Image 
                      source={require('../img/pp.png')} 
                      style={{width: 152, height: 30, }}
                    />
                  </View>
                </View>
              </View>
            </SafeAreaView>
          </>
        )
      }
    }
    
    export default Header
    
    const styles = StyleSheet.create({
      header_safe_area: {
      zIndex: 1000
      },
      header: {
        height: 50,
        paddingHorizontal: 16,
        backgroundColor:'#20E0EC',
      },
      header_inner: {
        flex:1,
        overflow: 'hidden',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'relative'
      }
    })