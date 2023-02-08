import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { Color, Size, Font } from "../constants/theme";
import { Avatar,  IconButton } from "react-native-paper";
import { RenderItem } from "../components/RenderItem";
import {useSelector } from "react-redux";


const History = () => {
  
  const {myLeaves} = useSelector((state) => state.message);

  const [screen, setScreen] = useState("pending");



  const activeStyle = [
    {
      backgroundColor: Color.Secondary,
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      paddingVertical: 2,
      paddingHorizontal: 7,
      opacity: 1,
      borderRadius: 10,
    },
    {
      backgroundColor: Color.Secondary,
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      paddingHorizontal: 7,
      opacity: 0.5,
      borderRadius: 10,
    },
  ];

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
          color={Color.White}
          icon="clipboard-text-clock"
        />
        <Text
          style={{
            color: Color.White,
            // fontSize: Size.Midum + 2,
            fontSize: Size.Midum + 4, //change in size { 2 } /4

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
        <TouchableOpacity
          onPress={() => setScreen("pending")}
          style={screen === "pending" ? activeStyle[0] : activeStyle[1]}
        >
          <IconButton
            icon={"timer-sand"}
            iconColor={Color.White}
            size={20}
            style={{ margin: 0 }}
            // onPress={onPress}
          />
          <Text
            style={{
              fontSize: Size.Midum,
              fontFamily: Font.semiBold,
              color: Color.White,
              marginRight: 6,
            }}
          >
            Pending
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setScreen("approved")}
          style={screen === "approved" ? activeStyle[0] : activeStyle[1]}
        >
          <IconButton
            icon={"file-check-outline"}
            iconColor={Color.White}
            size={20}
            style={{ margin: 0 }}
            // onPress={onPress}
          />
          <Text
            style={{
              fontSize: Size.Midum,
              fontFamily: Font.semiBold,
              color: Color.White,
              marginRight: 6,
            }}
          >
            Approved
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setScreen("rejected")}
          style={screen === "rejected" ? activeStyle[0] : activeStyle[1]}
        >
          <IconButton
            icon={"file-remove-outline"}
            iconColor={Color.White}
            size={20}
            style={{ margin: 0 }}
            // onPress={onPress}
          />
          <Text
            style={{
              fontSize: Size.Midum,
              fontFamily: Font.semiBold,
              color: Color.White,
              marginRight: 6,
            }}
          >
            Rejected
          </Text>
        </TouchableOpacity>
      </View>
      <SafeAreaView style={{ flex: 1, marginVertical: 5 }}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={myLeaves}
          renderItem={renderItem}
          keyExtractor={(item) => item._id}
        />
      </SafeAreaView>
      
    </View>

  );
};

export default History;
