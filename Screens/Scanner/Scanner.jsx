import React, { useState, useEffect } from "react";
import { View } from "react-native";
import {  colors, Size } from "../../constants/theme";
import { Appbar } from "react-native-paper";
import AfterScan from "./AfterScan";
import BeforeScan from "./BeforeScan";
import { useDispatch, useSelector } from "react-redux";
import { makeAttendance } from "../../redux/mainAction";
import mime from "mime";
import { ThemeContext } from "../../constants/ThemeContext";
import { useContext } from "react";

const Scanner = ({ navigation, selfi }) => {
  const {theme} = useContext(ThemeContext);
  const Color = colors[theme.mode]

  const dispatch = useDispatch();
  const [screen, setScreen] = useState("BeforeScan");
  const [action, setAction] = useState(null);
  const [verifyImg, setVerifyImg] = useState(null);
  const [qrData, setQrData] = useState(null);

  useEffect(() => {
    if (selfi) {
      setVerifyImg(selfi);
    }
  }, [selfi]);

  useEffect(() => {
    if (verifyImg) {
      setScreen("BeforeScan");

      if (action && qrData && verifyImg) {
        const myForm = new FormData();
        myForm.append("gate", JSON.parse(qrData).gate);
        myForm.append("uniqueCode", JSON.parse(qrData).uniqueCode);
        myForm.append("action", action);
        myForm.append("avatar", {
          uri: verifyImg,
          type: mime.getType(verifyImg),
          name: verifyImg.split("/").pop(),
        });
        dispatch(makeAttendance(myForm));
      }
      if (qrData === null) {
        setScreen("BeforeScan");
      }
    }
  }, [verifyImg]);

  return (
    <View>
      <Appbar.Header
        style={{ backgroundColor: Color.Primary, position: "absolute" }}
      >
        <Appbar.BackAction
          color={Color.White}
          onPress={() => {
            setScreen("BeforeScan");
            setAction(null);
            setQrData(null);
            setVerifyImg(null);
          }}
        />
      </Appbar.Header>
      <View
        style={{
          height: Size.Full,
          justifyContent: "center",
        }}
      >
        {screen === "BeforeScan" ? (
          <BeforeScan
            screen={screen}
            setScreen={setScreen}
            setQrData={setQrData}
          />
        ) : screen === "AfterScan" ? (
          <AfterScan navigation={navigation} setAction={setAction} />
        ) : null}
      </View>
    </View>
  );
};

export default Scanner;
