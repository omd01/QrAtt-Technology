import { View, Image ,Text} from 'react-native'
import React  from 'react'
import {Color,Size} from '../constants/theme';


const Splash = () => {
  return (
    <View style={{
        backgroundColor: Color.Primary,
        height:Size.Full,
        justifyContent:"center",
        alignItems:"center"
      }}>
     <Image source={require("../assets/Images/splash.gif")} style={{width:Size.Full,resizeMode:"contain"}}/>
     <Text style={{fontSize:Size.Midum,color:Color.White}}>Welcome to</Text>
     <Text style={{fontSize:Size.Large -2,color:Color.Btn}}>{`Q r A t t`}</Text>
  

    </View>
  
  )
}

export default Splash