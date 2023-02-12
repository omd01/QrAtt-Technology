import { View, TouchableOpacity, Text } from "react-native";
import React, { useState } from "react";
import { Appbar, Switch } from "react-native-paper";
import { colors, Font, Size } from "../../constants/theme";
import { ThemeContext } from "../../constants/ThemeContext";
import { useContext } from "react";

const Notification = ({ navigation }) => {
  const { theme } = useContext(ThemeContext);
  const Color = colors[theme.mode];

  const [allNotifications, setAllNotifications] = useState(true);
  const [muteNotification, setMuteNotification] = useState(false);

  return (
    <View style={{ height: Size.Full }}>
      <Appbar.Header
        style={{
          height: 45,
          backgroundColor: Color.Primary,
          marginVertical: 5,
        }}
      >
        <Appbar.BackAction
          onPress={() => navigation.goBack()}
          iconColor={Color.White}
        />
        <Appbar.Content
          title="Notification"
          titleStyle={{ color: Color.White, fontFamily: Font.semiBold }}
        />
      </Appbar.Header>

      <View
        style={{
          flex: 1,
          backgroundColor: Color.Primary,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            height: 50,
            paddingHorizontal: 5,
            marginVertical: 10,
            justifyContent: "space-between",
            paddingLeft: 25,
          }}
        >
          <Text
            style={{
              fontSize: Size.Midum + 2,
              color: Color.White,
              fontFamily: Font.medium,
            }}
          >
            All notification
          </Text>
          <Switch
            value={allNotifications}
            onValueChange={() => setAllNotifications(!allNotifications)}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            height: 50,
            paddingHorizontal: 5,
            justifyContent: "space-between",
            paddingLeft: 25,
          }}
        >
          <Text
            style={{
              fontSize: Size.Midum + 2,
              color: Color.White,
              fontFamily: Font.medium,
            }}
          >
            Mute notification
          </Text>
          <Switch
            value={muteNotification}
            onValueChange={() => setMuteNotification(!muteNotification)}
          />
        </View>
      </View>
    </View>
  );
};

export default Notification;
