import React from 'react'
import {View, SafeAreaView, Text, Image, StyleSheet,ScrollView } from 'react-native'


export default props=>(
    <SafeAreaView >
        <>
        <ScrollView>
        <View style={styles.header} >
        <Image style source={require('../img/pp.png')}
                style={{width:50, height:50, marginTop:20, paddingLeft:250, }}
                resizeMode='contain'/>
                <Text style={styles.title}>
                   Termos de uso
                </Text>
        </View>
        <View>
                <Text style={styles.termos}>
1. Termos Ao acessar ao site Marked.com.br, concorda em cumprir estes termos de serviço, todas as leis e regulamentos aplicáveis e concorda que é responsável pelo cumprimento de todas as leis locais aplicáveis. Se você não concordar com algum desses termos, está proibido de usar ou acessar este site. Os materiais contidos neste site são protegidos pelas leis de direitos autorais e marcas comerciais aplicáveis.
2.	Uso de Licença
É concedida permissão para baixar temporariamente uma cópia dos materiais (informações ou software) no site Marked.com.br , apenas para visualização transitória pessoal e não comercial. Esta é a concessão de uma licença, não uma transferência de título e, sob esta licença, você não pode: 
1.	modificar ou copiar os materiais; 
2.	usar os materiais para qualquer finalidade comercial ou para exibição pública (comercial ou não comercial); 
3.	tentar descompilar ou fazer engenharia reversa de qualquer software contido no site Marked.com.br; 
4.	remover quaisquer direitos autorais ou outras notações de propriedade dos materiais; ou 
5.	transferir os materiais para outra pessoa ou 'espelhe' os materiais em qualquer outro servidor.
Esta licença será automaticamente rescindida se você violar alguma dessas restrições e poderá ser rescindida por Marked.com.br a qualquer momento. Ao encerrar a visualização desses materiais ou após o término desta licença, você deve apagar todos os materiais baixados em sua posse, seja em formato eletrônico ou impresso.
3. Isenção de responsabilidade
1.	Os materiais no site da Marked.com.br são fornecidos 'como estão'. Marked.com.br não oferece garantias, expressas ou implícitas, e, por este meio, isenta e nega todas as outras garantias, incluindo, sem limitação, garantias implícitas ou condições de comercialização, adequação a um fim específico ou não violação de propriedade intelectual ou outra violação de direitos.       
2.	Além disso, o Marked.com.br não garante ou faz qualquer representação relativa à precisão, aos resultados prováveis ou à confiabilidade do uso dos materiais em seu site ou de outra forma relacionado a esses materiais ou em sites vinculados a este site.
4. Limitações
Em nenhum caso o Marked.com.br ou seus fornecedores serão responsáveis por quaisquer danos (incluindo, sem limitação, danos por perda de dados ou lucro ou devido a interrupção dos negócios) decorrentes do uso ou da incapacidade de usar os materiais em Marked.com.br, mesmo que Marked.com.br ou um representante autorizado da Marked.com.br tenha sido notificado oralmente ou por escrito da possibilidade de tais danos. Como algumas jurisdições não permitem limitações em garantias implícitas, ou limitações de responsabilidade por danos consequentes ou incidentais, essas limitações podem não se aplicar a você.
5. Precisão dos materiais
Os materiais exibidos no site da Marked.com.br podem incluir erros técnicos, tipográficos ou fotográficos. Marked.com.br não garante que qualquer material em seu site seja preciso, completo ou atual. Marked.com.br pode fazer alterações nos materiais contidos em seu site a qualquer momento, sem aviso prévio. No entanto, Marked.com.br não se compromete a atualizar os materiais.
6. Links
O Marked.com.br não analisou todos os sites vinculados ao seu site e não é responsável pelo conteúdo de nenhum site vinculado. A inclusão de qualquer link não implica endosso por Marked.com.br do site. O uso de qualquer site vinculado é por conta e risco do usuário.
Modificações
O Marked.com.br pode revisar estes termos de serviço do site a qualquer momento, sem aviso prévio. Ao usar este site, você concorda em ficar vinculado à versão atual desses termos de serviço.
Lei aplicável
Estes termos e condições são regidos e interpretados de acordo com as leis do Marked.com.br e você se submete irrevogavelmente à jurisdição exclusiva dos tribunais naquele estado ou localidade.
                </Text>
        </View>
        </ScrollView>
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
    },
    termos:{
        fontSize:10,
        textAlign:'center',
        justifyContent:'center'
    }

})