import { View, Text, Image } from "react-native";
import React from "react";
import { Color, Font, Size } from "../constants/theme";
import { useDispatch } from "react-redux";
import { ButtonD } from "./Buttons";
import { clearError, clearMessage } from "../redux/messageReducer";
import { getMyLeaves, totalAttendance } from "../redux/mainAction";

export const LoadingView = () => {
  return (
    <View
      style={{
        position: "absolute",
        height: 3,
        width: Size.Full,
        top: 0,
        right: 0,
        backgroundColor: Color.White,
      }}
    >
      {/* <Text>Loading</Text> */}
    </View>
  );
};

export const PendingView = () => {
  return (
    <View
      style={{
        backgroundColor: Color.Opacity,
        height: Size.Full,
        width: Size.Full,
        position: "absolute",
        zIndex: 15,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View
        style={{
          height: 300,
          width: 300,
          backgroundColor: "redrgba(255, 255, 255, 0.6)",
          borderRadius: 30,
          // justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View
          style={{
            width: 90,
            height: 90,
            backgroundColor: "orange",
            marginTop: 40,
            borderRadius: 50,
            borderWidth: 1,
            borderColor: Color.White,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            source={require("../assets/Images/loading-pending.gif")}
            style={{ width: 110, height: 90, resizeMode: "contain" }}
          />
        </View>

        <Text
          style={{
            marginTop: 10,
            color: "orange",
            fontFamily: Font.bold,
            fontSize: 22,
            letterSpacing: 5,
          }}
        >
          PROCESSING
        </Text>
        <Text
          style={{
            marginTop: 10,
            color: Color.Dark,
            fontFamily: Font.bold,
            fontSize: 15,
            letterSpacing: 1,
          }}
        >
          {`Please wait while we process 
              your request`}
        </Text>
      </View>
    </View>
  );
};

export const SuccessView = ({ message }) => {
  const dispatch = useDispatch();
  return (
    <View
      style={{
        backgroundColor: Color.Opacity,
        height: Size.Full,
        width: Size.Full,
        position: "absolute",
        zIndex: 15,
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
      }}
    >
      <View
        style={{
          height: 300,
          width: 300,
          backgroundColor: "redrgba(255, 255, 255, 0.6)",
          borderRadius: 30,
          // justifyContent: "center",
          alignItems: "center",
          overflow: "hidden",
        }}
      >
        <View
          style={{
            width: 90,
            height: 90,
            backgroundColor: Color.White,
            marginTop: 40,
            borderRadius: 50,
            borderWidth: 1,
            borderColor: Color.White,
            justifyContent: "center",
            alignItems: "center",
          }}
        ></View>

        <Text
          style={{
            marginTop: 10,
            color: Color.Btn,
            fontFamily: Font.bold,
            fontSize: 22,
            letterSpacing: 5,
          }}
        >
          SUCCESS!
        </Text>
        <Text
          style={{
            marginTop: 10,
            color: Color.White,
            fontFamily: Font.bold,
            fontSize: 15,
            letterSpacing: 1,
          }}
        >
          {message}
        </Text>
        <ButtonD
          value={"DONE"}
          onPress={() => {dispatch(clearMessage()),dispatch(getMyLeaves()),dispatch(totalAttendance())}}
          textColor={Color.White}
          labelStyle={{ fontFamily: Font.bold, fontSize: 16, letterSpacing: 1 }}
          // contentStyle={{}}
          style={{
            width: 120,
            marginTop: 40,
            height: 38,
            backgroundColor: Color.Btn,
            justifyContent: "center",
          }}
        />
      </View>
      <Image
        source={require("../assets/Images/loading-success.gif")}
        style={{
          width: 440,
          height: 300,
          resizeMode: "contain",
          position: "absolute",
          top: 113,
        }}
      />
    </View>
  );
};

export const ErrorView = ({ error }) => {
  const dispatch = useDispatch();
  return (
    <View
      style={{
        backgroundColor: Color.Opacity,
        height: Size.Full,
        width: Size.Full,
        position: "absolute",
        zIndex: 15,
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
      }}
    >
      <View
        style={{
          height: 300,
          width: 300,
          backgroundColor: "redrgba(255, 255, 255, 0.6)",
          borderRadius: 30,
          // justifyContent: "center",
          alignItems: "center",
          overflow: "hidden",
        }}
      >
        <View
          style={{
            width: 90,
            height: 90,
            backgroundColor: Color.White,
            marginTop: 40,
            borderRadius: 50,
            borderWidth: 1,
            borderColor: Color.White,
            justifyContent: "center",
            alignItems: "center",
          }}
        ></View>

        <Text
          style={{
            marginTop: 10,
            color: "red",
            fontFamily: Font.bold,
            fontSize: 22,
            letterSpacing: 5,
          }}
        >
          TRY AGAIN !
        </Text>
        <Text
          style={{
            marginTop: 10,
            color: Color.White,
            fontFamily: Font.bold,
            fontSize: 15,
            letterSpacing: 1,
          }}
        >
          {error}
        </Text>
        <ButtonD
          value={"DONE"}
          onPress={() => {dispatch(clearError())}}
          textColor={Color.White}
          labelStyle={{ fontFamily: Font.bold, fontSize: 16, letterSpacing: 1 }}
          contentStyle={{}}
          style={{
            width: 120,
            marginTop: 40,
            height: 38,
            backgroundColor: "red",
            justifyContent: "center",
          }}
        />
         <Image
        source={require("../assets/Images/loading-error.gif")}
        style={{
          width: 215,
          height: 200,
          resizeMode: "contain",
          position: "absolute",
          top: -18,
          // alignSelf:'center'
        }}
      />
      </View>
     
    </View>
  );
};
