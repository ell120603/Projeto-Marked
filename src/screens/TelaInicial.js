import React, { useRef, useState } from "react"
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    Image,
    TextInput,
    KeyboardAvoidingView,
    TouchableOpacity,
    ScrollView,
    Dimensions,
    TouchableHighlight,
    ImageBackground
} from "react-native"
import { Modalize } from "react-native-modalize"
import { useNavigation } from "@react-navigation/native"
import { AntDesign } from "@expo/vector-icons"
import Header from "../componentes/Header"

const { width } = Dimensions.get("window");
const height = width * 0.6;
const images = [
    "https://i.pinimg.com/originals/78/a3/45/78a34550a7a3d44905a1eb38f8c3cabf.jpg",
    "https://i.pinimg.com/originals/bc/e6/bf/bce6bfedb36b13c375e37d3bad538258.jpg",
    "https://i.pinimg.com/originals/29/79/9f/29799f6e9478c29ee7aaa4fe9b592b2b.jpg",
];
export default function Home() {
    const navigation = useNavigation();
    const modalizeRefe1 = useRef(null);
    const modalizeRefe2 = useRef(null);
    const modalizeRefe3 = useRef(null);
    const modalizeRefe4 = useRef(null);
    function onOpen1() {
        modalizeRefe1.current?.open();
    }
    function onClose1() {
        modalizeRefe1.current?.close();
    }
    function onOpen2() {
        modalizeRefe2.current?.open();
    }
    function onClose2() {
        modalizeRefe2.current?.close();
    }
    function onOpen3() {
        modalizeRefe3.current?.open();
    }
    function onClose3() {
        modalizeRefe3.current?.close();
    }
    function onOpen4() {
        modalizeRefe4.current?.open();
    }
    function onClose4() {
        modalizeRefe4.current?.close();
    }
    return (
        <SafeAreaView>
            <>
                <ScrollView>
                    <>
                        <View style={{}}>
                            <Header />
                        </View>
                        <View style={styles.containerCarousel}>
                            <ScrollView
                                pagingEnabled
                                horizontal
                                style={styles.scroll}
                                showsHorizontalScrollIndicator={false}
                            >
                                {images.map((image, index) => (
                                    <Image
                                        key={index}
                                        source={{ uri: image }}
                                        style={styles.imageCaro}
                                    />
                                ))}
                            </ScrollView>
                            <View style={styles.paggination}>
                                {images.map((i, k) => (
                                    <Text key={k} style={styles.pagingText}>
                                        ⬤
                                    </Text>
                                ))}
                            </View>
                        </View>

                        <ImageBackground
                            source={require("../img/cadas.jpg")}
                            style={styles.fundo}
                        >
                            <TouchableOpacity style={styles.button} onPress={onOpen1}>
                                <Text>Saiba mais</Text>
                            </TouchableOpacity>
                            <Modalize
                                ref={modalizeRefe1}
                                snapPoint={200}
                                HeaderComponent={
                                    <View>
                                        <TouchableOpacity
                                            style={styles.buttonModal}
                                            onPress={onClose1}
                                        >
                                            <AntDesign name="closecircleo" size={28} color="black" />
                                        </TouchableOpacity>
                                        <Text style={styles.headerModal}>
                                            Crie seu cadastro e anuncie já em nosso site.
                                        </Text>
                                    </View>
                                }
                            >
                                <View style={styles.modal}>
                                    <TouchableOpacity
                                        style={styles.btnRegister}
                                        onPress={() => navigation.navigate("Cadastro")}
                                    >
                                        <Text style={styles.TextRegister}>
                                            Crie seu cadastro clicando aqui
                                        </Text>
                                    </TouchableOpacity>
                                    <Text style={styles.textModal}>
                                        Faça seu pré-cadastro aqui no nosso app e anuncie seus
                                        produtos agora em nosso site.
                                    </Text>
                                </View>
                            </Modalize>
                        </ImageBackground>
                        <ImageBackground
                            source={require("../img/segura.jpg")}
                            style={styles.fundo}
                        >
                            <TouchableOpacity style={styles.button} onPress={onOpen2}>
                                <Text>Saiba mais</Text>
                            </TouchableOpacity>
                            <Modalize
                                ref={modalizeRefe2}
                                snapPoint={200}
                                HeaderComponent={
                                    <View>
                                        <TouchableOpacity
                                            style={styles.buttonModal}
                                            onPress={onClose2}
                                        >
                                            <AntDesign name="closecircleo" size={28} color="black" />
                                        </TouchableOpacity>
                                        <Text style={styles.headerModal}>Segurança</Text>
                                    </View>
                                }
                            >
                                <View style={styles.modal}>
                                    <Text style={styles.textModal}>
                                        Nós usaremos no nosso site a tecnologia https para garantir
                                        que todos os dados dos úsuarios estejam seguros em nosso
                                        site.
                                    </Text>
                                </View>
                            </Modalize>
                        </ImageBackground>
                        <ImageBackground
                            source={require("../img/forma.jpg")}
                            style={styles.fundo}
                        >
                            <TouchableOpacity style={styles.button} onPress={onOpen3}>
                                <Text>Saiba mais</Text>
                            </TouchableOpacity>
                            <Modalize
                                ref={modalizeRefe3}
                                snapPoint={200}
                                HeaderComponent={
                                    <View>
                                        <TouchableOpacity
                                            style={styles.buttonModal}
                                            onPress={onClose3}
                                        >
                                            <AntDesign name="closecircleo" size={28} color="black" />
                                        </TouchableOpacity>
                                        <Text style={styles.headerModal}>Formas de pagamento</Text>
                                    </View>
                                }
                            >
                                <View style={styles.modal}>
                                    <Text style={styles.textModal}>
                                        A forma de pagamento que nosso site aceita é por meio do
                                        cartão de crédito, garatindo assim que se o produto não for
                                        correto poderemos estornar a compra sem maiores problemas.
                                    </Text>
                                </View>
                            </Modalize>
                        </ImageBackground>
                        <ImageBackground
                            source={require("../img/envio.jpg")}
                            style={styles.fundo}
                        >
                            <TouchableOpacity style={styles.button} onPress={onOpen4}>
                                <Text>Saiba mais</Text>
                            </TouchableOpacity>
                            <Modalize
                                ref={modalizeRefe4}
                                snapPoint={200}
                                HeaderComponent={
                                    <View>
                                        <TouchableOpacity
                                            style={styles.buttonModal}
                                            onPress={onClose4}
                                        >
                                            <AntDesign name="closecircleo" size={28} color="black" />
                                        </TouchableOpacity>
                                        <Text style={styles.headerModal}>
                                            Como Enviamos os produtos
                                        </Text>
                                    </View>
                                }
                            >
                                <View style={styles.modal}>
                                    <Text style={styles.textModal}>
                                        A nossa forma de envio de produtos é pelo correio a forma
                                        mais segura que tem hoje no Brasil, e pra compras de grande
                                        porte como carros,motos, eletrodomésticos entre outros de
                                        grande porte fica a combinar entre o vendedor e o cliente.
                                    </Text>
                                </View>
                            </Modalize>
                        </ImageBackground>
                    </>
                </ScrollView>
            </>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    header: {
        backgroundColor: "#20E0EC",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        paddingRight: 10,
        paddingLeft: 10,
    },
    fake_post: {
        backgroundColor: "#e4e6eb",
        height: 200,
        margin: 16,
        borderRadius: 16,
        width: "90%",
    },
    input: {
        backgroundColor: "#fff",
        height: 40,
        width: 300,
        margin: 8,
        borderWidth: 1,
    },
    container: {
        backgroundColor: "#20E0EC",
        flexDirection: "row",
    },
    containerCarousel: {
        marginTop: 10,
        width,
        height
    },
    scroll: {
        width,
        height
    },
    imageCaro: {
        width,
        height,
        resizeMode: "contain"
    },
    paggination: {
        flexDirection: "row",
        position: "absolute",
        bottom: 0,
        alignSelf: "center",
    },
    pagingText: {
        color: "#888",
        margin: 3
    },
    categoria: {
        width: 60,
        height: 60,
        borderRadius: 28,
        backgroundColor: "#fff",
        marginLeft: 5,
        marginRight: 5,
        marginTop: 5,
    },
    categoriaContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
    },
    button: {
        backgroundColor: "#00BFFF",
        width: "50%",
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 7,
        flexDirection: "row",
        marginLeft: 150,
        marginTop: 125,
    },
    headerModal: {
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
        paddingTop: 5,
    },
    modal: {
        flex: 1,
        height: 150,
        justifyContent: "center",
        alignItems: "center",
    },
    textModal: {
        textAlign: "center",
        padding: 10,
        marginBottom: 8,
    },
    buttonModal: {
        alignItems: "flex-end",
        justifyContent: "flex-end",
    },
    fundo: {
        height: 200,
        margin: 16,
        borderRadius: 16,
        width: "95%",
    },
    TextRegister: {
        fontSize: 15,
        color: "blue",
    },
    btnRegister: {
        marginTop: 10,
    },
});
