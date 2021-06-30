import React from 'react'
import {Text,StyleSheet,View,Image,TextInput,TouchableOpacity,KeyboardAvoidingView} from 'react-native'
import Header from '../componentes/Header'
export default props=>(
    <>
            <View style={{paddingTop:25}}>
                <Header />
            </View>
    <KeyboardAvoidingView style={styles.container}>
        <View style={styles.containerInput}>
        <TouchableOpacity style={styles.btnFacebook}>
        <Image source={require('../img/faceook.png')}
         style={{width:50, height:50, marginTop:20,marginBottom:20,marginRight:20}}
            />
           <Text style={styles.TextFacebook}>Entrar com o Facebook</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnGoogle}>
        <Image source={require('../img/google.png')}
         style={{width:40, height:40, marginTop:20,marginBottom:20,marginRight:30}}
            />
           <Text style={styles.TextGoogle}>Entrar com o Google</Text>
        </TouchableOpacity>
        <Text style={styles.textOu}>---------------------------------- OU ----------------------------------</Text>
        <Text style={styles.title}>
            Fazer Login
        </Text>
            <TextInput 
            style={styles.input}
            placeholder="Email"
            autoCorrect={false}
            onChangeText={()=>{}}
            />
           <TextInput 
           style={styles.input}
            placeholder="Senha"
            autoCorrect={false}
            onChangeText={()=>{}}
            
            />
         <TouchableOpacity style={styles.btnSubmit}>
            <Text style={styles.TextSubmit}>Entrar</Text>
        </TouchableOpacity>
        <TouchableOpacity
        style={styles.btnRegister}
        >
            <Text style={styles.TextRegister}>Cadastrar-se</Text>
        </TouchableOpacity>
        </View>
    </KeyboardAvoidingView>
    </>
)
const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#D3D3D3',
    },
    containerInput:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        width:"90%",
    },
    input:{
        backgroundColor:'#fff',
        width:"90%",
        marginBottom:15,
        color:'#222',
        fontSize:17,
        borderRadius:17,
        padding:10,
        marginTop:15,

    },
    btnSubmit:{
        backgroundColor:'#20E0EC',
        width:'90%',
        height:45,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:7,
    },
    TextSubmit:{
        fontSize:20,
        fontWeight:'bold'
    },
    btnRegister:{
    marginTop:10,

    },
    TextRegister:{
        fontSize:15,
        color:'blue'
    },
    btnFacebook:{
        backgroundColor:'#0000CD',
        width:'90%',
        height:50,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:7,
        marginTop:15,
        flexDirection:'row',
    },
    TextFacebook:{
        fontSize:20,
        fontWeight:'bold',
        color:'#fff',
        alignItems:'center',
        justifyContent:'center',
        textAlign:'center',
    },
    btnGoogle:{
        backgroundColor:'#4682B4',
        width:'90%',
        height:50,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:7,
        marginTop:15,
        flexDirection:'row'

    },
    TextGoogle:{
        fontSize:20,
        fontWeight:'bold',

    },
    textOu:{
      marginTop:20
    },
    title:{
        marginTop:20,
        fontWeight:'bold',
        fontSize:30,
    }


})