import React from 'react'
import {createDrawerNavigator} from '@react-navigation/drawer'
import TelaInicial from '../screens/TelaInicial'
import TelaSobre from '../screens/TelaSobre'
import TelaTermos from '../screens/TelaTermos'
import TelaLogin from '../screens/TelaLogin'
import TelaRegister from '../screens/TelaRegister'
import TelaAjuda from '../screens/TelaAjuda'
const Drawer =   createDrawerNavigator()

export default props=>(
    <Drawer.Navigator initialRouteName="Inicio">
        <Drawer.Screen name="Inicio" component={TelaInicial} />
        <Drawer.Screen name="Login" component={TelaLogin} />
        <Drawer.Screen name="Cadastro" component={TelaRegister} />
        <Drawer.Screen name="Sobre nós" component={TelaSobre} />
        <Drawer.Screen name="Termos de uso" component={TelaTermos} />
        <Drawer.Screen name="Central de ajuda" component={TelaAjuda} />



    </Drawer.Navigator>
)