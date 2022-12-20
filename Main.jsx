import { NavigationContainer ,DarkTheme} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View ,StatusBar ,Platform} from "react-native"
import Home from "./Screens/Home"
import Login from "./Screens/Login"
import Signup from './Screens/Signup';
import Leav from './Screens/Leav';
import History from "./Screens/History"
import Profile from "./Screens/Profile"
import Camera from './Screens/Camera'
import Color from "./Theme/Color"

const Stack = createNativeStackNavigator();

const Main = () => {
    const options ={headerShown:false}
  
  return (<>
    <StatusBar backgroundColor={Color.Secondary} style={{flex: 1,paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0}}></StatusBar>
    <NavigationContainer >
    <Stack.Navigator initialRouteName='signup' screenOptions={options}>
    <Stack.Screen name='home' component={Home} />
    <Stack.Screen name='login' component={Login}/>
    <Stack.Screen name='signup' component={Signup}/>
    <Stack.Screen name='leav' component={Leav}/>
    <Stack.Screen name='history' component={History}/>
    <Stack.Screen name='profile' component={Profile}/>
    <Stack.Screen name='camera' component={Camera}/>

    </Stack.Navigator>
  </NavigationContainer>

  </>
  )
}

export default Main