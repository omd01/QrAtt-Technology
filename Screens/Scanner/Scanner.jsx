import React, { useState, useEffect } from "react";
import { Image, Text, View } from "react-native";
import { Color, Font, Size } from "../../constants/theme";
import { Appbar } from "react-native-paper";
import AfterScan from "./AfterScan";
import BeforeScan from "./BeforeScan";
import { useDispatch, useSelector } from "react-redux";
import { clearError, clearMessage } from "../../redux/messageReducer";
import { makeAttendance } from "../../redux/mainAction";
import mime from "mime";

const Scanner = ({ navigation, selfi }) => {
  const dispatch = useDispatch();
  const { error, message, loading } = useSelector((state) => state.message);
  const [screen, setScreen] = useState("BeforeScan");
  const [action, setAction] = useState(null);
  const [verifyImg, setVerifyImg] = useState(null);
  const [qrData, setQrData] = useState(null);


  // useEffect(() => {
  //   if (error) {
  //     alert(error);
  //     dispatch(clearError());
  //   }
  //   if (message) {
  //     alert(message);
  //     dispatch(clearMessage());
  //   }
  // }, [message, error, dispatch, alert]);


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

        // makeAttendance
        // console.log(JSON.parse(qrData).gate);
        // console.log(JSON.parse(qrData).uniqueCode);
        // console.log(action);
        // console.log(verifyImg);
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
        ) : null 
        // (
        //   <View
        //     style={{ justifyContent: "center", flex: 1, alignItems: "center" }}
        //   >
        //     {/* '{loading ? <Image source={require("../../assets/Images/white.gif") }style={{width:Size.Full,resizeMode:"contain"} }/> : 
        //     <Image source={require("../../assets/Images/success.gif") }style={{width:Size.Full,resizeMode:"contain"} }/> }' */}
        //   </View>
        // )
        }
      </View>
    </View>
  );
};

export default Scanner;
