import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { Color, Size, Font } from "../constants/theme";
import { Avatar, IconButton } from "react-native-paper";
import { useSelector } from "react-redux";



const Profile = ({ navigation }) => {
  const {user} = useSelector((state) => state.auth);
  const {myLeaves ,totalAttendance} = useSelector((state)=>state.message)
  const ProfileData = user;

  const [checkIn, setCheckIn] = useState(0);
  const [checkOut, setCheckOut] = useState(0);

  useEffect(() => {

    var checkIn = 0;
    var checkOut = 0;


    totalAttendance.map((item) => {
      if (item.action == "check-in") {
        ++checkIn;
      } else {
        ++checkOut;
      }
    });

    setCheckIn(checkIn);
    setCheckOut(checkOut);
  }, []);

  return (
    <View style={{ height: Size.Full, position: "relative" }}>
      <View
        style={{
          flexDirection: "row",
          width: Size.Full,
          justifyContent: "space-between",
        }}
      >
        <IconButton />
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: Color.Primary,
            marginVertical: Size.Small,
          }}
        >
          <Text
            style={{
              color: Color.White,
              fontSize: Size.Midum + 4,
              fontFamily: Font.semiBold,
            }}
          >
            {`Profile`}
          </Text>
        </View>
        <IconButton
          icon={"cog-outline"}
          iconColor={Color.White}
          size={25}
          onPress={() => navigation.navigate("settings")}
        />
      </View>

      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          marginTop: 25,
        }}
      >
        <Avatar.Image
          source={{ uri: ProfileData.avatar.url }}
          style={{ backgroundColor: Color.Secondary }}
          size={120}
        />


        <Text
          style={{
            color: Color.White,
            fontFamily: Font.semiBold,
            fontSize: Size.Large - 1,
            marginVertical: 5,
          }}
        >
          {ProfileData.name}
        </Text>
        <Text
          style={{
            color: Color.White,
            fontFamily: Font.light,
            fontSize: Size.Midum + 3,
            marginVertical: 4,
          }}
        >
          {ProfileData.branch}
        </Text>
        <Text
          style={{
            color: Color.White,
            fontFamily: Font.light,
            fontSize: Size.Midum,
            marginVertical: 4,
          }}
        >
          {`Room : ` + ProfileData.roomNo}
        </Text>

      </View>

      <View style={{ flex: 1, width: "80%", alignSelf: "center" }}>
        <View
          style={{
            backgroundColor: Color.Secondary,
            height: Size.ExtraLarge,
            borderRadius: 8,
            alignItems: "center",
            flexDirection: "row",
            marginVertical: 5,
          }}
        >
          <View
            style={{
              flex: 1,
              alignItems: "center",
            }}
          >
            <Text
              style={{
                marginLeft: 8,
                color: Color.White,
                fontFamily: Font.regular,
                fontSize: Size.Midum + 2,
              }}
            >
              {`Total Check In`}
            </Text>
          </View>

          <View
            style={{
              height: "70%",
              width: "16%",
              alignItems: "center",
              justifyContent: "center",
              borderLeftWidth: 1,
              borderColor: Color.White,
            }}
          >
            <Text
              style={{
                fontSize: Size.Midum + 2,
                fontFamily: Font.semiBold,
                color: Color.White,
              }}
            >
              {checkIn}
            </Text>
          </View>
        </View>

        <View
          style={{
            backgroundColor: Color.Secondary,
            height: Size.ExtraLarge,
            borderRadius: 8,
            // overflow: "hidden",
            alignItems: "center",
            flexDirection: "row",
            marginVertical: 5,
          }}
        >
          <View
            style={{
              flex: 1,
              alignItems: "center",
            }}
          >
            <Text
              style={{
                marginLeft: 8,
                color: Color.White,
                fontFamily: Font.regular,
                fontSize: Size.Midum + 2,
              }}
            >
              {`Total Check Out`}
            </Text>
          </View>

          <View
            style={{
              height: "70%",
              width: "16%",
              alignItems: "center",
              justifyContent: "center",
              borderLeftWidth: 1,
              borderColor: Color.White,
            }}
          >
            <Text
              style={{
                fontSize: Size.Midum + 2,
                fontFamily: Font.semiBold,
                color: Color.White,
              }}
            >
              {checkOut}
            </Text>
          </View>
        </View>

        <View
          style={{
            backgroundColor: Color.Secondary,
            height: Size.ExtraLarge,
            borderRadius: 8,
            // overflow: "hidden",
            alignItems: "center",
            flexDirection: "row",
            marginVertical: 5,
          }}
        >
          <View
            style={{
              flex: 1,
              alignItems: "center",
            }}
          >
            <Text
              style={{
                marginLeft: 8,
                color: Color.White,
                fontFamily: Font.regular,
                fontSize: Size.Midum + 2,
              }}
            >
              {`Total Leave Request`}
            </Text>
          </View>

          <View
            style={{
              height: "70%",
              width: "16%",
              alignItems: "center",
              justifyContent: "center",
              borderLeftWidth: 1,
              borderColor: Color.White,
            }}
          >
            <Text
              style={{
                fontSize: Size.Midum + 2,
                fontFamily: Font.semiBold,
                color: Color.White,
              }}
            >
              {myLeaves === undefined ? `0` :myLeaves.length}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Profile;
