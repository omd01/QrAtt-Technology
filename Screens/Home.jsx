import { View, Keyboard } from "react-native";
import React, { useState, useEffect, useRef } from "react";
import { colors, Size } from "../constants/theme";
import Profile from "./Profile";
import History from "./History";
import Footer from "../components/Footer";
import Scanner from "./Scanner/Scanner";
import Leave from "./Leave";
import Attendance from "./Attendance";
import {
  ErrorView,
  LoadingView,
  PendingView,
  SplashView,
  SuccessView,
} from "../components/CustomeView";
import { useDispatch, useSelector } from "react-redux";
import {
  getMyLeaves,
  loadTeachers,
  getMyAttendance,
} from "../redux/mainAction";
import { ThemeContext } from "../constants/ThemeContext";
import { useContext } from "react";
import * as Device from "expo-device";
import * as Notifications from "expo-notifications";
import { setToken } from "../redux/notification";
import Verify from "./Verify";
import { logOut } from "../redux/action";


Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});

const Home = ({ navigation, route }) => {
  const { theme } = useContext(ThemeContext);
  const Color = colors[theme.mode];
  const dispatch = useDispatch();
  const [screen, setScreen] = useState("home");
  const [selfi, setSelfi] = useState(null);
  const [keyboardStatus, setKeyboardStatus] = useState("KeyboardHidden");
  const { loading, pending, error, message } = useSelector(
    (state) => state.message
  );
  const { user, loadingUser } = useSelector((state) => state.auth);


/***************  Notification settings  **************/

  const [expoPushToken, setExpoPushToken] = useState("");
  const [notification, setNotification] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();

  useEffect(() => {
    registerForPushNotificationsAsync().then((token) => {
      dispatch(setToken(token));
      setExpoPushToken(token);
    });


    notificationListener.current =
      Notifications.addNotificationReceivedListener((notification) => {
        setNotification(notification);
     
      });

    responseListener.current =
      Notifications.addNotificationResponseReceivedListener((response) => {
        navigation.navigate("home");
        setScreen("leave");
      });

    return () => {
      Notifications.removeNotificationSubscription(
        notificationListener.current
      );
      Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);

  async function registerForPushNotificationsAsync() {

    let token;

    if (Platform.OS === "android") {
      await Notifications.setNotificationChannelAsync("default", {
        name: "default",
        importance: Notifications.AndroidImportance.MAX,
        vibrationPattern: [0, 250, 250, 250],
        lightColor: "#FF231F7C",
        showBadge: false,
      });
      
    }

    if (Device.isDevice) {
      const { status: existingStatus } =
        await Notifications.getPermissionsAsync();

      let finalStatus = existingStatus;

      if (existingStatus !== "granted") {
        const { status } = await Notifications.requestPermissionsAsync();
        finalStatus = status;
      }
      if (finalStatus !== "granted") {
        alert("Failed to get push token for push notification!");
        return;
      }
      token = (await Notifications.getExpoPushTokenAsync()).data;
      const deviceToken = await Notifications.getDevicePushTokenAsync();
      alert(deviceToken.data)
    } else {
      alert("Must use physical device for Push Notifications");
    }

    return token;
  }

  /*******************************************************/



  useEffect(() => {
    dispatch(loadTeachers());
    dispatch(getMyLeaves());
    dispatch(getMyAttendance());
  }, [dispatch]);

  useEffect(() => {
    const showSubscription = Keyboard.addListener("keyboardDidShow", () => {
      setKeyboardStatus("KeyboardShown");
    });
    const hideSubscription = Keyboard.addListener("keyboardDidHide", () => {
      setKeyboardStatus("KeyboardHidden");
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);


  useEffect(() => {
    if (route.params) {
      setSelfi(route.params.image);
    }
  }, [route]);


  if (loadingUser) {
    return <SplashView />;
  }

  if (user === undefined) {
    dispatch(logOut());
  }

  else{
if (user !== undefined) {
    if (user !== null) {
      if (user.verified === false) {
        return <Verify/>;
      }
      else{
        return (
          <>
            <View
              style={{
                height: Size.Full,
                backgroundColor: Color.Primary,
                position: "relative",
              }}
            >
              <View style={{ flex: 1, zIndex: 10 }}>
                {loading && <LoadingView />}
                {pending && <PendingView />}
                {error && <ErrorView error={error} />}
                {message && <SuccessView message={message} />}
      
                {screen === "leave" ? (
                 
                    <Leave setScreen={setScreen} />
                    
                  
                ) : screen === "history" ? (
                
                    <History />
                    
                  
                ) : screen === "profile" ? (
                 
                    <Profile navigation={navigation} setScreen={setScreen} />
                    
                  
                ) : screen === "attendance" ? (
                 
                    <Attendance />
                    
                  
                ) : (
               
                    <Scanner navigation={navigation} selfi={selfi} />
                    
                  
                )}
              </View>
              {keyboardStatus === "KeyboardHidden" ? (
                <Footer screen={screen} setScreen={setScreen} />
              ) : null}
            </View>
          </>
        );
      }
    }
}
  }
};

export default Home;
