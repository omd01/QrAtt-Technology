import { View, Text, SafeAreaView, FlatList } from "react-native";
import React, { useState } from "react";
import { Color, Size, Font } from "../constants/theme";
import { Avatar, Button } from "react-native-paper";
import { ButtonD } from "../components/Buttons";
import Leaves from "../Dumy/Leaves.json";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { RenderItem } from "../components/RenderItem";

const History = ({ navigation }) => {
  const [screen, setScreen] = useState("pending");

  const Item = ({ item }) => (
    <View style={{ marginVertical: 3 }}>
      <RenderItem data={item} />
    </View>
  );

  const renderItem = ({ item }) => {
    return screen === item.status && <Item item={item} />;
  };

  return (
    <View style={{ height: Size.Full }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          // backgroundColor: Color.Primary,
          marginVertical: Size.Small,
        }}
      >
        <Avatar.Icon
          size={40}
          backgroundColor={null}
          icon="clipboard-text-clock"
        />
        <Text
          style={{
            color: Color.White,
            fontSize: Size.Midum + 2,
            fontFamily: Font.semiBold,
          }}
        >
          {`Leave Request History`}
        </Text>
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
          marginVertical: 5,
        }}
      >

        <ButtonD
          value={"Pending"}
          onPress={() => setScreen("pending")}
          contentStyle={{ height :42}}
          icon={"timer-sand"}
          bgColor={Color.Secondary}
          style={screen === "pending"?{ opacity:1} : {opacity:0.5} }
          textColor={Color.White }
        />
        <ButtonD
          value={"Approved"}
          onPress={() => setScreen("approved")}
          contentStyle={{ height :42}}
          icon={"file-check-outline"}
          bgColor={Color.Secondary}
          style={screen === "approved"?{ opacity:1} : {opacity:0.5} }
          textColor={Color.White }
        />
        <ButtonD
          value={"Rejected"}
          onPress={() => setScreen("rejected")}
          contentStyle={{ height :42}}
          icon={"file-remove-outline"}
          bgColor={Color.Secondary}
          style={screen === "rejected"?{ opacity:1} : {opacity:0.5} }
          textColor={Color.White }
        />

        {/* <Button
          icon={"timer-sand"}
          onPress={() => setScreen("pending")}
          contentStyle={{
            backgroundColor: Color.Secondary,
            paddingVertical: 3,
          }}
          style={screen === "pending"?{ opacity:1} : {opacity:0.5} }
          labelStyle={{ color: Color.White, fontSize: Size.Midum + 1 ,fontFamily:Font.medium }}
        >
          Pending
        </Button> */}

        {/* <Button
          icon={"file-check-outline"}
          onPress={() => setScreen("approved")}
          contentStyle={{
            backgroundColor: Color.Secondary,
            paddingVertical: 3,
          }}
          labelStyle={{ color: Color.White, fontSize: Size.Midum + 2 }}
        >
          Approved
        </Button>
        <Button
          icon={"file-remove-outline"}
          onPress={() => setScreen("rejected")}
          contentStyle={{
            backgroundColor: Color.Secondary,
            paddingVertical: 3,
          }}
          labelStyle={{ color: Color.White, fontSize: Size.Midum + 2 }}
        >
          Rejected
        </Button> */}

        {/* <ButtonD
          value={"Approved"}
          onPress={() => setScreen("approved")}
          disabled={false}
          style={{ borderRadius: 0, flex: 1 }}
          bgColor={Color.Primary}
          textColor={screen === "approved" ? Color.Btn : Color.White}
          border={
            screen === "approved" && {
              borderBottomWidth: 3,
              borderColor: Color.Secondary,
            }
          }
        />

        <ButtonD
          value={"Rejected"}
          onPress={() => setScreen("rejected")}
          style={{ borderRadius: 0, flex: 1 }}
          bgColor={Color.Primary}
          textColor={screen === "rejected" ? "#ff0000" : Color.White}
          border={
            screen === "rejected" && {
              borderBottomWidth: 3,
              borderColor: Color.Secondary,
            }
          }
        /> */}
      </View>

      <SafeAreaView style={{ flex: 1, marginVertical:5 }}>
        <FlatList
        showsVerticalScrollIndicator={false}
          data={Leaves}
          renderItem={renderItem}
          keyExtractor={(item) => item._id}
        />
      </SafeAreaView>
    </View>
  );
};

export default History;
