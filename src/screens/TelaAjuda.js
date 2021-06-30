import React, { useRef, useState } from 'react'
import {
    Text, StyleSheet, View, Image, TextInput, TouchableOpacity, KeyboardAvoidingView,
    SafeAreaView, Picker, Alert
} from 'react-native'
import { Modalize } from 'react-native-modalize'
import { ScrollView, State } from 'react-native-gesture-handler'
import Header from '../componentes/Header'
export default function Ajuda() {
    const [emaild, setEmailD] = useState(null)
    const [ask, setAsk] = useState(null)
    const [errorEmaild, setErrorEmailD] = useState(null)
    const [errorAsk, setErrorAsk] = useState(null)
    const [selectedValue, setSelectedValue] = useState("Escolha um tema:");
    const modalizeRef = useRef(null)
    const modalizeRef2 = useRef(null)
    const modalizeRef3 = useRef(null)
    const modalizeRef7 = useRef(null)
    const validar = () => {
        let error = false
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!re.test(String(emaild).toLowerCase())) {
            setErrorEmailD("prencha seu email")
            error = true
        } if (ask == null) {
            setErrorAsk('')
            error = true
        }
        return !error
    }
    const enviar = () => {
        if (validar()) {
            Alert.alert(
                "",
                "Duvida enviada com sucesso",
                [{ text: "OK", onPress: () => console.log("OK") }]
            )
        } else {
            Alert.alert(
                "",
                "Duvida não enviada, Insira seu e-mail corretamente ou insira uma duvida",
                [{ text: "OK", onPress: () => console.log("OK") }])
        }

    }
    function onOpen() {
        modalizeRef.current?.open();
    }
    function onOpen2() {
        modalizeRef2.current?.open();
    }
    function onOpen3() {
        modalizeRef3.current?.open();
    }
    function onOpen7() {
        modalizeRef7.current?.open();
    }
    return (
        <ScrollView>
            <SafeAreaView>
                <View style={styles.header}>
                    <Header />
                </View>
                <View style={styles.container}>
                    <Text style={styles.title}>
                        Central de ajuda
                    </Text>
                </View>
                <View>
                    <Text style={styles.textDuvi}>Tema da duvida</Text>
                    <Picker
                        style={styles.Pickercompo}
                        selectedValue={selectedValue}
                        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                    >
                        <Picker.Item label="Escolha um tema" value="Escolha um tema:" />
                        <Picker.Item label="Pagamento" value="Pagamento" />
                        <Picker.Item label="Pedidos" value="Pedidos" />
                        <Picker.Item label="Perfil" value="Perfil" />
                        <Picker.Item label="Cadastro" value="Cadastro" />
                        <Picker.Item label="Login" value="Login" />
                        <Picker.Item label="Outro..." value="Outro..." />
                    </Picker>
                </View>
                <View>
                    <Text style={styles.textDuvi}>Digite seu email:</Text>
                    <TextInput
                        style={styles.inputEmail}
                        placeholder="EX: teste@gmail.com"
                        autoCorrect={false}
                        onChangeText={value => setEmailD(value)}
                        keyboardType="email-address"
                        errorMessage={errorEmaild}
                    />
                    <Text style={styles.textDuvi}>Como podemos ajudar ?</Text>
                    <TextInput
                        style={styles.inputAsk}
                        placeholder={"EX. Não entendi como funciona o \npagamento com cartão de credito."}
                        autoCorrect={false}
                        onChangeText={value => setAsk(value)}
                        errorMessage={errorAsk}
                    />
                    <TouchableOpacity style={styles.button}
                        onPress={enviar}
                    >
                        <Text>Enviar</Text>
                    </TouchableOpacity>
                    <Text style={styles.textPre}>
                        Dúvidas frequentes
                    </Text>
                    <TouchableOpacity style={styles.buttonList}
                        onPress={onOpen}
                    >
                        <Text style={styles.TextList}>Como fazer meu pedido?</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonList}
                        onPress={onOpen2}
                    >
                        <Text style={styles.TextList}>Quais pedidos são proibidos na plataforma?</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonList}
                        onPress={onOpen3}
                    >
                        <Text style={styles.TextList}>
                            Como atrair mais compradores?
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.buttonList}
                        onPress={onOpen7}
                    >
                        <Text style={styles.TextList}>
                            Como editar um pedido?
                        </Text>
                    </TouchableOpacity>
                    <Modalize
                        ref={modalizeRef}
                        snapPoint={500}
                        HeaderComponent={
                            <View>
                                <Text style={styles.headerModal}>
                                    Como fazer meu pedido?
                                </Text>
                            </View>
                        }
                    >
                        <View style={styles.modal}>
                            <Text style={styles.textModal}>
                                Acesse o menu, vá até a opção “fazer pedido”,
                                preencha todos os dados de acordo com o que você deseja comprar e clique com confirmar.
                            </Text>
                        </View>
                    </Modalize>
                    <Modalize
                        ref={modalizeRef2}
                        snapPoint={500}
                        HeaderComponent={
                            <View>
                                <Text style={styles.headerModal}>
                                    Quais pedidos são proibidos na plataforma?
                                </Text>
                            </View>
                        }
                    >
                        <View style={styles.modal}>
                            <Text style={styles.textModal}>
                                No Marked você está proibido de vender: armas de fogo e armas brancas, animais, carga roubada,
                                listas de e-mail e base de dados pessoais,
                                narcóticos e substâncias proibidas, máquinas sem equipamentos de segurança, entre outros…
                            </Text>
                        </View>
                    </Modalize>
                    <Modalize
                        ref={modalizeRef3}
                        snapPoint={500}
                        HeaderComponent={
                            <View>
                                <Text style={styles.headerModal}>
                                    Como atrair mais compradores?
                                </Text>
                            </View>
                        }
                    >
                        <View style={styles.modal}>
                            <Text style={styles.textModal}>
                                Um pedido bem estruturado, com foto de exemplo, uma boa descrição e oferecendo
                                um valor justo, irá atrair mais compradores e consequentemente mais propostas.
                            </Text>
                        </View>
                    </Modalize>
                    <Modalize
                        ref={modalizeRef7}
                        snapPoint={500}
                        HeaderComponent={
                            <View>
                                <Text style={styles.headerModal}>
                                    Como editar um pedido?
                                </Text>
                            </View>
                        }
                    >
                        <View style={styles.modal}>
                            <Text style={styles.textModal}>
                                Acesse o menu, vá até a opção “meus pedidos” e
                                clique em editar. Altere os dados que deseja mudar e confirme no final.
                            </Text>
                        </View>
                    </Modalize>
                </View>
            </SafeAreaView>
        </ScrollView>

    )
}


const styles = StyleSheet.create({
    header: {
        backgroundColor: '#20E0EC',
        flexDirection: 'row',

    },
    container: {
        backgroundColor: '#20E0EC',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
    },
    inputTema: {
        backgroundColor: '#fff',
        width: "90%",
        marginBottom: 15,
        color: '#222',
        fontSize: 17,
        borderRadius: 17,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 15,

    },
    textDuvi: {
        fontSize: 17,
        marginTop: 8,
        textAlign: 'center',
        fontWeight: 'bold',
        fontStyle: 'italic',

    },
    inputAsk: {
        backgroundColor: '#fff',
        width: 320,
        marginBottom: 15,
        height: 240,
        color: '#222',
        fontSize: 17,
        borderRadius: 17,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 20,

    },
    inputEmail: {
        backgroundColor: '#fff',
        width: 320,
        marginBottom: 5,
        height: 50,
        color: '#222',
        fontSize: 17,
        borderRadius: 17,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 20,
    },

    button: {
        backgroundColor: '#00BFFF',
        width: '70%',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 7,
        flexDirection: 'row',
        marginLeft: 50,
    },
    textPre: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 17,
    },
    TextList: {
        fontSize: 15,
        fontWeight: 'bold'
    },
    buttonList: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    modal: {
        flex: 1,
        height: 180,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'

    },
    headerModal: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        paddingTop: 5,
    },
    textModal: {
        textAlign: 'center',
        padding: 10,

    },
    Pickercompo: {
        width: 350
    }
})