import React, { useState, useEffect } from "react";
import { Image, Text, View } from "react-native";

import { Color, Font, Size } from "../../constants/theme";

import { Appbar } from "react-native-paper";
import AfterScan from "./AfterScan";
import BeforeScan from "./BeforeScan";

const Scanner = ({ navigation, selfi }) => {
  const [screen, setScreen] = useState("BeforeScan");
  const [action, setAction] = useState(null);
  const [verifyImg, setVerifyImg] = useState(null);
  const [qrData, setQrData] = useState(null);

  useEffect(() => {
   if (selfi) {
    setVerifyImg(selfi)
  }

  }, [selfi]);

  useEffect(() => {
 
   if(verifyImg){
     setScreen("FinalScreen");
     console.log(qrData);
     console.log(action);
     console.log(verifyImg);
     if (qrData === null) {
      setScreen("BeforeScan");
     }
   }
  
   }, [verifyImg]);




  return (
    <>
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
        ) : (
          <View style={{justifyContent:'center',flex:1,alignItems:'center'}}>
            <Image source={require("../../assets/Images/success.gif") }style={{width:Size.Full,resizeMode:"contain"} }/>
          </View>
        )}
      </View>
    </>
  );
};

export default Scanner;
