import { View, Keyboard } from "react-native";
import React, { useEffect, useState } from "react";
import { Color, Size } from "../constants/theme";
import Profile from "./Profile";
import History from "./History";
import Footer from "../components/Footer";
import Scanner from "./Scanner/Scanner";
import Leave from "./Leave";
import Attendance from "./Attendance";
import Settings from "./Settings/Settings";

import {
  CustomMessage,
  ErrorView,
  LoadingView,
  PendingView,
  SuccessView,
} from "../components/CustomeView";
import { useDispatch, useSelector } from "react-redux";
import { getMyLeaves, loadTeachers, getMyAttendance } from "../redux/mainAction";

const Home = ({ navigation, route }) => {
  const dispatch = useDispatch();

  const { loading, pending, error, message  } = useSelector(
    (state) => state.message
  );

  const Usermessage = useSelector((state) => state.auth).message


  useEffect(() => {
      dispatch(loadTeachers());
      dispatch(getMyLeaves())
      dispatch(getMyAttendance())
      
  }, [dispatch])

  

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
        {Usermessage && <CustomMessage message={Usermessage} />}
        

        {screen === "leave" ? (
          <Leave  setScreen={setScreen}/>
        ) : screen === "history" ? (
          <History  />
        ) : screen === "profile" ? (
          <Profile  navigation={navigation} />
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
