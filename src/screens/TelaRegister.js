import React, { useRef, useState, useEffect, Component } from 'react'
import { Text, StyleSheet, View, Image, TextInput, TouchableOpacity, KeyboardAvoidingView, Alert } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import Header from '../componentes/Header'
import axios from 'axios'
export default class Register extends Component {
    constructor(props) {
        super(props)
        this.state={
            name_user:'',
            email_user:'',
            username_user:'',
            password_user:'',
            cpf_user:''
        }
    }
    userRegister = ()=>{
        const {name_user} = this.state;
        const {email_user} = this.state;
        const {username_user} = this.state;
        const {password_user} = this.state;
        const {cpf_user} = this.state;

        fetch('http://localhost:8000/src/apiReact/insert.php',{
            method: 'POST',
            header:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({
                name_user:name_user,
                username_user:username_user,
                email_user:email_user,
                password_user:password_user,
                cpf_user:cpf_user,
            })
        })
        .then((response) => response.json())
        .then((responseJson) => {
            alert(responseJson);

        })
        .catch((error)=>{
            console.error(error);  
        })
    }
    render(){
        const validar = () => {
            let error = false
            const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if (!re.test(String(email_user).toLowerCase())) {
                error = true
            } if (cpf_user == null) {
                error = true
            }
            return !error
        }
        salvar = () => {
          if (validar()) {
              Alert.alert(
                  "",
                  "Cadastro efetuado com sucesso",
                  [{ text: "OK", onPress: () => console.log("OK") }]
              )
          } else {
              Alert.alert(
                  "",
                  "Cadastro não realizado faltam informações",
                  [{ text: "OK", onPress: () => console.log("OK") }])
          }
  
      }
      function Combine(){
          this.salvar();
          this.userRegister(); 
      }
        return (
        <ScrollView style={{ backgroundColor: '#D3D3D3' }}>
            <View style={{}}>
                <Header />
            </View>
            <KeyboardAvoidingView style={styles.container}>

                <View style={styles.containerInput}>
                    <Text style={styles.title}>
                        Fazer Cadastro
                    </Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Nome"
                        autoCorrect={false}
                        onChangeText={name_user => this.setState({name_user})}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Usúario"
                        autoCorrect={false}
                        onChangeText={username_user => this.setState({username_user})}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="E-mail"
                        autoCorrect={false}
                        onChangeText={email_user => this.setState({email_user})}
                        keyboardType="email-address"
                    />
                    <TextInput
                        secureTextEntry={true}
                        password={true}
                        textContentType={'password'}
                        multiline={false}
                        style={styles.input}
                        placeholder="Senha"
                        autoCorrect={false}
                        onChangeText={password_user => this.setState({password_user})}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Cpf"
                        autoCorrect={false}
                        onChangeText={cpf_user => this.setState({cpf_user})}
                        keyboardType="number-pad"
                        maxLength={11}
                
                    />
                    <TouchableOpacity style={styles.btnSubmit}
                     onPress={this.Combine}>
                        <Text style={styles.TextSubmit}>Cadastrar</Text>
                    </TouchableOpacity>
                </View>

            </KeyboardAvoidingView>
        </ScrollView>

    )
}}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        height: "100%",
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#D3D3D3',
    },
    containerInput: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: "90%",
    },
    btnFacebook: {
        backgroundColor: '#0000CD',
        width: '90%',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 7,
        marginTop: 30,
        flexDirection: 'row',
    },
    TextFacebook: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
    },
    btnGoogle: {
        backgroundColor: '#4682B4',
        width: '90%',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 7,
        marginTop: 15,
        flexDirection: 'row'

    },
    TextGoogle: {
        fontSize: 20,
        fontWeight: 'bold',

    },
    textOu: {
        marginTop: 20
    },
    title: {
        marginTop: 60,
        fontWeight: 'bold',
        fontSize: 30,
    },
    input: {
        backgroundColor: '#fff',
        width: "90%",
        marginBottom: 15,
        color: '#222',
        fontSize: 17,
        borderRadius: 17,
        padding: 10,
        marginTop: 15,

    },
    btnSubmit: {
        backgroundColor: '#20E0EC',
        width: '90%',
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 7,
        paddingBottom: 8,
        marginTop: 30
    },
    TextSubmit: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    btnRegister: {

    },
    TextRegister: {
        fontSize: 15,
        color: 'blue'
    },


})