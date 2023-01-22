import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar ,Platform} from "react-native"
import {useFonts} from 'expo-font'
import {Screens} from "./Screens/index"
import {Color} from './constants/theme';
const Stack = createNativeStackNavigator();

const Main = () => {
  const [loded] = useFonts({
    NunitoBold: require("./assets/Fonts/Nunito-Bold.ttf"),
    NunitoSemiBold: require("./assets/Fonts/Nunito-SemiBold.ttf"),
    NunitoExtraBold: require("./assets/Fonts/Nunito-ExtraBold.ttf"),
    NunitoExtraLight: require("./assets/Fonts/Nunito-ExtraLight.ttf"),
    NunitoLight: require("./assets/Fonts/Nunito-Light.ttf"),
    NunitoMedium: require("./assets/Fonts/Nunito-Medium.ttf"),
    NunitoRegular: require("./assets/Fonts/Nunito-Regular.ttf"),
  
  })
  
  if(!loded) return null ;
    const options ={headerShown:false}
  
  return (<>
    <StatusBar backgroundColor={Color.Primary} style={{flex: 1,paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0}}/>

    <NavigationContainer >
    <Stack.Navigator initialRouteName='signup' screenOptions={options}>
    <Stack.Screen name='home' component={Screens.Home} />
    <Stack.Screen name='login' component={Screens.Login}/>
    <Stack.Screen name='signup' component={Screens.Signup}/>
    <Stack.Screen name='signupSecond' component={Screens.SignupSecond}/>
    <Stack.Screen name='camera' component={Screens.Camera}/>
    <Stack.Screen name='splash' component={Screens.Splash}/>


    </Stack.Navigator>
  </NavigationContainer>

  </>
  )
}

export default Main