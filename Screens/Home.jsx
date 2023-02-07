import { View, Text, Keyboard } from "react-native";
import React, { useEffect, useState } from "react";
import { Color, Size, Font } from "../constants/theme";
import Profile from "./Profile";
import History from "./History";
import Footer from "../components/Footer";
import Scanner from "./Scanner/Scanner";
import Leave from "./Leave";
import Attendance from "./Attendance";
import Settings from "./Settings/Settings";
import {
  ErrorView,
  LoadingView,
  PendingView,
  SuccessView,
} from "../components/CustomeView";
import { useDispatch, useSelector } from "react-redux";

const Home = ({ navigation, route }) => {
  // const { error, loading } = useSelector((state) => state.auth);
  const { loading, pending, error, message } = useSelector(
    (state) => state.message
  );
  // console.log(loading);pending
  // const dispatch = useDispatch();

  // useEffect(() => {
  //     // dispatch(changeTheme())
  //   // console.log(theme);
  // }, [])

  const [screen, setScreen] = useState("home");
  const [selfi, setSelfi] = useState(null);
  const [keyboardStatus, setKeyboardStatus] = useState("KeyboardHidden");

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

  return (
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
        {error && <ErrorView error={error}/>}
        {message && <SuccessView message={message} />}

        {screen === "leave" ? (
          <Leave />
        ) : screen === "history" ? (
          <History />
        ) : screen === "profile" ? (
          <Profile setScreen={setScreen} navigation={navigation} />
        ) : screen === "settings" ? (
          <Settings setScreen={setScreen} />
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
  );
};

export default Home;
