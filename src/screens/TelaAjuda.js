import React from 'react'
import {Text,StyleSheet,View,Image,TextInput,TouchableOpacity,KeyboardAvoidingView,
    SafeAreaView, } from 'react-native'
    import { ScrollView } from 'react-native-gesture-handler'
export default props=>(
    <SafeAreaView>
        <View style={styles.header}>
        <Image style source={require('../img/pp.png')}
            style={{width:40, height:40, marginTop:20, paddingLeft:250,alignItems:'center',justifyContent:'center'}}
            resizeMode='contain'/>
            <TouchableOpacity>
            <Image style source={require('../img/search.jpg')}
            style={{width:40, height:30,marginTop:20,}}
                resizeMode='contain'/>
                </TouchableOpacity>
        </View>
        <View style={styles.container}>
            <Text style={styles.title}>
                Central de ajuda
            </Text>
        </View>
        <View>
            <Text style={styles.textDuvi}>Tema da duvida</Text>
            <TextInput
            style={styles.inputTema}
            placeholder="EX. Forma de pagamento                         >"
            autoCorrect={false}
            onChangeText={()=>{}}
            />
        </View>
        <View>
        <Text style={styles.textDuvi}>Como podemos ajudar ?</Text>
            <TextInput
            style={styles.inputAsk}
            placeholder={"EX. Não entendi como funciona o \npagamento com cartão de credito."}
            autoCorrect={false}
            onChangeText={()=>{}}
            />
            <TouchableOpacity style={styles.button}>
                <Text>Enviar</Text>
            </TouchableOpacity>
            <Text style={styles.textPre}>
                Dúvidas frequentes
            </Text>
            <TouchableOpacity style={styles.buttonList}>
                <Text style={styles.TextList}>Como fazer meu pedido?</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonList} >
                <Text style={styles.TextList}>Quais pedidos são proibidos na plataforma?</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonList}>
                <Text style={styles.TextList}>
                    Como atrair mais compradores?
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonList}>
                <Text style={styles.TextList}>
                    Como cancelar uma compra?
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonList}>
                <Text style={styles.TextList}>
                    Como apagar meu perfil?
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonList}>
                <Text style={styles.TextList}> 
                    Como editar um perfil?
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonList}>
                <Text style={styles.TextList}> 
                    Como editar um pedido?
                </Text>
            </TouchableOpacity>
        </View>
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
    container:{
        backgroundColor: '#20E0EC',
    },
    title:{
        fontSize:25,
        fontWeight:'bold',
        alignItems:'center',
        justifyContent:'center',
        textAlign:'center',
    },
    inputTema:{
        backgroundColor:'#fff',
        width:"90%",
        marginBottom:15,
        color:'#222',
        fontSize:17,
        borderRadius:17,
        padding:10,
        alignItems:'center',
        justifyContent:'center',
        marginLeft:15,
  
    },
    textDuvi:{
        marginTop:8,
        textAlign:'center',
    },
    inputAsk:{
        backgroundColor:'#fff',
        width:"90%",
        marginBottom:15,
        height:"40%",
        color:'#222',
        fontSize:17,
        borderRadius:17,
        padding:10,
        alignItems:'center',
        justifyContent:'center',
        marginLeft:20,

    },
    button:{
        backgroundColor:'#00BFFF',
        width:'70%',
        height:50,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:7,
        flexDirection:'row',
        marginLeft:50,
    },
    textPre:{
        fontWeight:'bold',
        textAlign:'center',
        fontSize:20,
        marginTop:5
    },
    TextList:{
        fontSize:15,
        fontWeight:'bold'
    },
    buttonList:{
        alignItems:'center',
        justifyContent:'center',
    }
})