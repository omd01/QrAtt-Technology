import { View, Text } from "react-native";
import React from "react";
import { Color, Size, Font } from "../constants/theme";
import { Avatar } from "react-native-paper";
import { InputNonEdit } from "../components/InputFields";
const Leave = () => {
  return (
    <>
      <View style={{ height: Size.Full }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: Color.Primary,
            paddingVertical: 5,
            margin:5,
            borderWidth:1,
            borderColor:Color.White,
            borderRadius:Size.Midum

          }}
        >
          
          <Avatar.Icon
            size={40}
            backgroundColor={null}
            icon="email-send"
          />
          <Text
            style={{
              color: Color.White,
              fontSize: Size.Midum + 2,
              fontFamily: Font.semiBold,
              marginHorizontal:2
            }}
          >
            Send Leave Request
          </Text>
        </View>
        <View style={{  paddingHorizontal: Size.Midum -5,}}>
            <View>
              <Text>Hi</Text>
        <InputNonEdit icon={"account"}
                // label={"From"}
                val={"Om Rajendra Dahale"}/>
                </View>
        </View>
      </View>
    </>
  );
};

export default Leave;
