import React, { useRef, useState, useEffect, Component } from 'react'
import { Text, StyleSheet, View, Image, TextInput, TouchableOpacity, KeyboardAvoidingView, Alert } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import Header from '../componentes/Header'
import axios from 'axios'
export default function Register() {
    const [email, setEmail] = useState(null)
    const [nome, setNome] = useState(null)
    const [usuario, setUsuario] = useState(null)
    const [cpf, setCpf] = useState(null)
    const [senha, setSenha] = useState(null)
    const [errorEmail, setErrorEmail] = useState(null)
    const [errorNome, setErrorNome] = useState(null)
    const [errorCpf, setErrorCpf] = useState(null)
    const [errorSenha, setErrorSenha] = useState(null)
    const validar = () => {
        let error = false
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!re.test(String(email).toLowerCase())) {
            setErrorEmail("prencha seu email")
            error = true
        } if (cpf == null) {
            setErrorCpf('')
            error = true
        }
        if (senha == null) {
            setErrorSenha('')
            error = true
        }
        if (nome == null) {
            setErrorNome('')
            error = true
        }
        return !error
    }
    const salvar = () => {
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
                        onChangeText={value => setNome(value)}
                        errorMessage={errorNome}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Usúario"
                        autoCorrect={false}
                        onChangeText={value => setUsuario(value)}

                    />
                    <TextInput
                        style={styles.input}
                        placeholder="E-mail"
                        autoCorrect={false}
                        onChangeText={value => setEmail(value)}
                        keyboardType="email-address"
                        errorMessage={errorEmail}
                    />
                    <TextInput
                        secureTextEntry={true}
                        onChangeText={value => setSenha(value)}
                        password={true}
                        textContentType={'password'}
                        multiline={false}
                        style={styles.input}
                        placeholder="Senha"
                        autoCorrect={false}
                        errorMessage={errorSenha}

                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Cpf"
                        autoCorrect={false}
                        onChangeText={value => setCpf(value)}
                        keyboardType="number-pad"
                        maxLength={11}
                        errorMessage={errorCpf}
                    />
                    <TouchableOpacity style={styles.btnSubmit}
                        onPress={salvar}
                    >
                        <Text style={styles.TextSubmit}>Cadastrar</Text>
                    </TouchableOpacity>
                </View>

            </KeyboardAvoidingView>
        </ScrollView>

    )
}
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