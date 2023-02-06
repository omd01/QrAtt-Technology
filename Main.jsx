import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar, Platform } from "react-native";
import { useFonts } from "expo-font";
import { Screens } from "./Screens/index";
import { Color } from "./constants/theme";
import Splash from "./Screens/Splash";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { loadUser } from "./redux/action";
import { loadTeachers } from "./redux/mainAction";


const Stack = createNativeStackNavigator();

const Main = () => {
  const dispatch = useDispatch();
  const { isAuthenticated, loadingHome } = useSelector((state) => state.auth);

  useEffect(() => {

    dispatch(loadUser());
    dispatch(loadTeachers());

  }, [dispatch])
  

  const [loded] = useFonts({
    NunitoBold: require("./assets/Fonts/Nunito-Bold.ttf"),
    NunitoSemiBold: require("./assets/Fonts/Nunito-SemiBold.ttf"),
    NunitoExtraBold: require("./assets/Fonts/Nunito-ExtraBold.ttf"),
    NunitoExtraLight: require("./assets/Fonts/Nunito-ExtraLight.ttf"),
    NunitoLight: require("./assets/Fonts/Nunito-Light.ttf"),
    NunitoMedium: require("./assets/Fonts/Nunito-Medium.ttf"),
    NunitoRegular: require("./assets/Fonts/Nunito-Regular.ttf"),
  });

  if (!loded) return null;

  
  const options = { headerShown: false };


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
{loadingHome ? <Splash/> :
      <NavigationContainer>
        <Stack.Navigator initialRouteName={isAuthenticated?"home":"login"} screenOptions={options}>
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


  </Stack.Navigator>
      </NavigationContainer>
      }
    </>
  );
};

export default Main;
