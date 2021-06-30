import React from 'react'
import { View, SafeAreaView, Text, Image, StyleSheet, ScrollView } from 'react-native'
import Header from '../componentes/Header'

export default props => (
    <ScrollView >
        <>
            <View style={styles.header} >
                <Header />
                <Text style={styles.title}>
                    Sobre Nós
                </Text>
            </View>
            <View>
                <Image style source={require('../img/sobre-nos.png')}
                    style={{ width: 330, height: 330, alignItems: 'center', justifyContent: 'center', marginLeft: 15 }}
                    resizeMode='contain' />
                <Text style={styles.TextTitle}>
                    História
                </Text>
                <Text style={styles.TextItens}>
                    Criado em 2020, no segmento de comércio e varejo, o Marked surgiu no desenvolvimento de um projeto de TCC,
                    onde passou pelas mãos de 8 estudantes até chegar em seu estado final. O Trabalho de Conclusão de Curso
                    tinha como objetivo exercitar
                    e testar os conhecimentos passados durante todo o curso técnico, na Etec.
                </Text>
                <Text style={styles.TextTitle}>
                    Diferenciais
                </Text>
                <Text style={styles.TextItens}>
                    O Marked oferece a oportunidade de negociação nos preços de produtos e
                    facilita na hora de comprar produtos que normalmente não estão no mercado.
                </Text>
                <Text style={styles.TextTitle}>
                    Missão
                </Text>
                <Text style={styles.TextItens}>
                    Criar uma rede de clientes que possam comprar produtos mais baratos e aguçar as técnicas
                    de marketing dos vendedores, sempre pensando no lucro de ambas as partes.
                </Text>
                <Text style={styles.TextTitle}>
                    Visão
                </Text>
                <Text style={styles.TextItens}>
                    Aumentar nossos negócios e gerar um impacto social positivo.
                </Text>
                <Text style={styles.TextTitle}>
                    Valores
                </Text>
                <Text style={styles.TextItens}>
                    Inovação, Segurança, Comprometimento, Respeito, Comunidade e Honestidade.
                </Text>
                <Text style={styles.TextTitle}>
                    O Marked apóia essas causas:
                </Text>
                <Text style={styles.TextList}>
                    ●	Responsabilidade Social
                    {"\n"}●	Diversidade
                    {"\n"}●	Legalidade
                    {"\n"}●	Sustentabilidade
                </Text>
            </View>
        </>
    </ScrollView>


)

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#20E0EC',
        flexDirection: 'column',

    },
    container: {
        backgroundColor: '#20E0EC',
        flexDirection: 'column'

    },
    title: {
        textAlign: 'center',
        color: 'black',
        fontSize: 22,
        fontWeight: 'bold',
    },
    TextTitle: {
        textAlign: 'center',
        justifyContent: 'center',
        fontWeight: 'bold',
        fontSize: 17,
    },
    TextItens: {
        justifyContent: 'center',
        textAlign: 'center',
        marginStart: 3,
        marginEnd: 3,
        fontSize: 15,
    },
    TextList: {
        flexDirection: 'column',
        justifyContent: 'center',
        textAlign: 'center',
        fontSize: 15
    }

})