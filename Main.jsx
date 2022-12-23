import { NavigationContainer ,DarkTheme} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar ,Platform} from "react-native"
import {useFonts} from 'expo-font'
import Home from "./Screens/Home"
import Login from "./Screens/Login"
import Signup from './Screens/Signup';
import Leav from './Screens/Leav';
import History from "./Screens/History"
import Profile from "./Screens/Profile"
import Camera from './Screens/Camera'
import Splash from './Screens/Splash';
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
    <StatusBar backgroundColor={Color.Secondary} style={{flex: 1,paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0}}></StatusBar>
    <NavigationContainer >
    <Stack.Navigator initialRouteName='splash' screenOptions={options}>
    <Stack.Screen name='home' component={Home} />
    <Stack.Screen name='login' component={Login}/>
    <Stack.Screen name='signup' component={Signup}/>
    <Stack.Screen name='leav' component={Leav}/>
    <Stack.Screen name='history' component={History}/>
    <Stack.Screen name='profile' component={Profile}/>
    <Stack.Screen name='camera' component={Camera}/>
    <Stack.Screen name='splash' component={Splash}/>


    </Stack.Navigator>
  </NavigationContainer>

  </>
  )
}

export default Main