import { View, Text, } from 'react-native'
import { IconButton } from 'react-native-paper';
import React, { useEffect, useState } from 'react'
import { Color, Size, Font } from "../constants/theme";



const Footer = ({navigation,screens}) => {
    const [screen, setScreen] = useState('home')
    useEffect(() => {
      setScreen(screens)
    
    }, [screens])
    
  return (
    <View
    style={{
      backgroundColor: Color.Secondary,
      height: "7%",
      flexDirection:'row',
      justifyContent:'space-around'
      
    }}>
          <IconButton
    icon={screen==='home'?'home':'home-outline'}
    iconColor={screen==='home'?Color.Btn:Color.White}
    size={30}
    onPress={() => {navigation.navigate('home')}}
  />
    <IconButton
    icon={screen === 'leav'?'send':'send-outline'}
    iconColor={screen==='leav'?Color.Btn:Color.White}
    size={30}
    onPress={() => {navigation.navigate('leav')}}
  />
    <IconButton
    icon={screen === 'history'?'history':'history'}
    iconColor={screen==='history'?Color.Btn:Color.White}
    size={30}
    onPress={() => {navigation.navigate('history')}}
  />
    <IconButton
    icon={screen === 'profile'?'account-eye':'account-eye-outline'}
    iconColor={screen==='profile'?Color.Btn:Color.White}
    size={30}
    onPress={() => {navigation.navigate('profile')}}
  />
  

   </View>
  )
}

export default Footer