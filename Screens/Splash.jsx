import { View, Text,Image ,StatusBar} from 'react-native'
import React ,{useEffect} from 'react'
import {Color,Size} from '../constants/theme';

import assets from "../constants/assets.js"
const Splash = ({navigation}) => {

setTimeout(() => {
        
        navigation.navigate("signup")
    }, 7* 1000);
 
  return (<>
   
    <View style={{
        backgroundColor: Color.Primary,
        height:Size.Full,
        justifyContent:"center",
        alignItems:"center"
      }}>
     <Image source={assets.splashGif} style={{width:Size.Full,resizeMode:"contain"}}/>
    </View>
    </>
  )
}

export default Splash