import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar, Platform } from "react-native";
import { useFonts } from "expo-font";
import { Screens } from "./Screens/index";
import { Color } from "./constants/theme";
import Splash from "./Screens/Splash";
import { useEffect } from "react";
import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useSelector ,useDispatch} from "react-redux";
import { loadUser, logOut } from "./redux/action";
import { LoadingUser } from "./components/CustomeView";
import Verify from "./Screens/Verify";


const Stack = createNativeStackNavigator();

const Main = () => {
  const dispatch = useDispatch()
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const { user ,loadingUser } = useSelector(
    (state) => state.auth
  );


  const checkAuth = async () => {
    setIsAuthenticated(JSON.parse(await AsyncStorage.getItem("isAuthenticated")))
  }

  useEffect(() => {
  dispatch(loadUser())
    checkAuth()
  }, [])
  

  const [loded] = useFonts({
    NunitoBold: require("./assets/Fonts/Nunito-Bold.ttf"),
    NunitoSemiBold: require("./assets/Fonts/Nunito-SemiBold.ttf"),
    NunitoExtraBold: require("./assets/Fonts/Nunito-ExtraBold.ttf"),
    NunitoExtraLight: require("./assets/Fonts/Nunito-ExtraLight.ttf"),
    NunitoLight: require("./assets/Fonts/Nunito-Light.ttf"),
    NunitoMedium: require("./assets/Fonts/Nunito-Medium.ttf"),
    NunitoRegular: require("./assets/Fonts/Nunito-Regular.ttf"),
  });

  if (!loded) return <Splash/>;

  if(loadingUser){
    return <LoadingUser/>
  }
  
if(isAuthenticated && user === undefined){
  dispatch(logOut())
}
  
  if(user !== undefined){
  if(user !== null){
    if(user.verified === false ){
      return <Verify/>
    }
  }
  }

  return (
    <>
      <StatusBar
        barStyle={"light-content"}
        backgroundColor={Color.Primary}
        style={{
          flex: 1,
          paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        }}
      />


      <NavigationContainer>
        <Stack.Navigator initialRouteName={isAuthenticated?'home':'login'} screenOptions={{headerShown:false}}>
          <Stack.Screen name="home" component={Screens.Home} />
          <Stack.Screen name="login" component={Screens.Login} />
          <Stack.Screen name="signup" component={Screens.Signup} />
          <Stack.Screen name="signupSecond" component={Screens.SignupSecond} />
          <Stack.Screen name="camera" component={Screens.Camera} />
          <Stack.Screen name="settings" component={Screens.Settings} />
          <Stack.Screen name="account" component={Screens.Account} />
          <Stack.Screen name="editProfile" component={Screens.EditProfile} />
          <Stack.Screen name="changePassword" component={Screens.ChangePassword} />
          <Stack.Screen name="notification" component={Screens.Notification} />
          <Stack.Screen name="theme" component={Screens.Theme} />
          <Stack.Screen name="forgetPassword" component={Screens.ForgetPassword} />
          <Stack.Screen name="resetPassword" component={Screens.ResetPassword} />
          <Stack.Screen name="verify" component={Screens.Verify} />
        </Stack.Navigator>
      </NavigationContainer>

    </>
  );
};

export default Main;
