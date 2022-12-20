import { View, Text,SafeAreaView,Platform,StatusBar } from 'react-native'
import React from 'react'

const Home = ({navigation}) => {
  return (
    <View style={{backgroundColor:"#fff",flex:1,paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0}}>
      <SafeAreaView>
      <Text onPress={ () => navigation.navigate("login")}>Home</Text>
      </SafeAreaView>
    </View>
  )
}

export default Home