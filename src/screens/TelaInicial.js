import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5'
import {View, Text,
    StyleSheet, 
    SafeAreaView, 
    Image,
     TextInput,
     KeyboardAvoidingView, 
    TouchableOpacity,
    ScrollView,
    Dimensions,
    TouchableHighlight,
} from 'react-native'
import Search from '../componentes/Search'
const {width} = Dimensions.get("window")
const height = width *  0.6; //60%
const images =[
    'https://images.pexels.com/photos/752036/pexels-photo-752036.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    'https://images.pexels.com/photos/6144105/pexels-photo-6144105.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    'https://images.pexels.com/photos/1612353/pexels-photo-1612353.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    'https://images.pexels.com/photos/4173108/pexels-photo-4173108.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
]
export default props =>(
    <SafeAreaView >
    <>
    <ScrollView>
    <View style={{paddingTop:30}}>
            <Search />
        </View>
            <View style={styles.containerCarousel}>
                <ScrollView pagingEnabled horizontal style={styles.scroll}
                showsHorizontalScrollIndicator={false}
                >
                {
                    images.map((image, index)=> (
                        <Image 
                key={index}
                source={{uri: image}}
                style={styles.imageCaro} /> 
                    ))
                }
                </ScrollView>
                <View style={styles.paggination}>
                    {
                        images.map((i,k)=>(
                            <Text  key={k} style={styles.pagingText}> ⬤</Text>
                        ))
                    }
                </View>
            </View>
            <View style={styles.categoriaContainer}>
                <View style={styles.categoria} >
                    <Icon  name="mobile-alt" size={35} color="#000000"
                    style={{alignItems:'center',justifyContent:'center',marginLeft:20,marginTop:10, marginRight:5}}
                    />
                </View>
                <View style={styles.categoria}/>
                <View style={styles.categoria}/>
                <View style={styles.categoria}/>
            </View>
            <View  style={styles.fake_post}/>
            <View  style={styles.fake_post}/>
            <View  style={styles.fake_post} />
            <View  style={styles.fake_post}/>
            <View  style={styles.fake_post}/>
            <View  style={styles.fake_post} />
            <View  style={styles.fake_post}/>
        
        </ScrollView>
        </>
        </SafeAreaView>
        
    )
    const styles = StyleSheet.create({
        header:{
            backgroundColor: '#20E0EC',
            flexDirection:'row',
            alignItems:'center',
            justifyContent: 'center',
            paddingRight:10,
            paddingLeft:10,
        },
        fake_post:{
          backgroundColor:'#e4e6eb',
          height:200,
          margin:16,
          borderRadius:16
        },
        input: {
          backgroundColor: '#fff',
          height: 40,
          width:300,
          margin: 8,
          borderWidth: 1,
        },
        container:{
          backgroundColor: '#20E0EC',
          flexDirection:'row',

    
        },
        containerCarousel:{marginTop:10, width, height},
        scroll:{width, height},
        imageCaro:{width, height,resizeMode:'contain'},
        paggination:{flexDirection:'row', position:'absolute', bottom:0,alignSelf:'center'},
        pagingText:{color:'#888', margin:3},
        categoria:{
            width:60,
            height:60,
            borderRadius:28,
            backgroundColor:'#fff',
            marginLeft:5,
            marginRight:5,
            marginTop:5,
        },
        categoriaContainer:{
            flex:1,
            justifyContent:'center',
            alignItems:'center',
            flexDirection:'row'
        }

            
        

    })