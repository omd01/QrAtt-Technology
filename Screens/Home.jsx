import { View, Text, Keyboard } from "react-native";
import React, { useEffect, useState } from "react";
import { Color, Size, Font } from "../constants/theme";
 import Profile from "./Profile";
import History from "./History";
import Footer from "../components/Footer";
import Scanner from "./Scanner/Scanner";
import Leave from "./Leave";

const Home = ({navigation,route} ) => {
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
  setSelfi(route.params.image)
 
 }
  
}, [ route])

  return (
    <View
      style={{
        height: Size.Full,
        backgroundColor: Color.Primary,
      }}
    >
      <View style={{ flex: 1}}>
        {screen === "leave" ? (
          <Leave/>
        ) : screen === "history" ? (
          <History />
        ) : screen === "profile" ? (
          <Profile />
        ) : <Scanner navigation={navigation} selfi={selfi}/>}
      </View>
      {keyboardStatus==="KeyboardHidden"? <Footer screen={screen} setScreen={setScreen}/> : null}
     
    </View>
  );
};

export default Home;
