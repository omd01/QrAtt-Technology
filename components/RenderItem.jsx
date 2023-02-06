import { useEffect, useState } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  Linking,
  ScrollView,
} from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { IconButton } from "react-native-paper";
import { Color, Font, Size } from "../constants/theme";
// import Teachers from "../Dumy/Teachers.json";
import { ButtonD } from "./Buttons";
import { useDispatch, useSelector } from "react-redux";
import { cancelLeave } from "../redux/mainAction";

export const RenderItem = ({ data }) => {
  const dispatch = useDispatch();
  const animation = useSharedValue({ height: 0 });
  const [border, setBorder] = useState({});
  const [teacher, setTeacher] = useState("");
  const [show, setShow] = useState(true);

  const { teachers} = useSelector(
    (state) => state.message
  );

  useEffect(() => {
    {
      animation.value.height === 0
        ? setBorder({})
        : setBorder({
            borderBottomLeftRadius: 0,
            borderBottomRightRadius: 0,
          });
    }
  }, [animation.value]);

  const animationStyle = useAnimatedStyle(() => {
    return {
      height: withTiming(animation.value.height, { duration: 500 }),
    };
  });

  const onPress = () => {
    setShow(!show);

    animation.value.height === 0
      ? (animation.value = { height: 200 })
      : (animation.value = { height: 0 });

      teachers.map((item) => {
      if (item.id === data.teacher) {
        setTeacher(item);
      }
    });
  };

  function getTimeAgoFromUTC(utcDate) {
    const date = new Date(utcDate);
    const now = new Date();
    const seconds = (now - date) / 1000;

    let interval = Math.floor(seconds / 31536000);
    if (interval > 1) {
      return interval + " years ago";
    }
    interval = Math.floor(seconds / 2592000);
    if (interval > 1) {
      return interval + " months ago";
    }

    interval = Math.floor(seconds / 86400);
    if (interval > 1) {
      if (interval > 30) {
        return "1 month ago";
      } else {
        return interval + " days ago";
      }
    }
    interval = Math.floor(seconds / 3600);
    if (interval > 1) {
      return interval + " hours ago";
    }
    interval = Math.floor(seconds / 60);
    if (interval > 1) {
      return interval + " minutes ago";
    }
    return Math.floor(seconds) + " seconds ago";
  }

  function getFromTo(from, to) {
    var from_d = new Date(from).toLocaleString().split(" ");
    var from = `${from_d[1]} ${new Date(from).getDate()}, ${new Date(
      from
    ).getFullYear()}`;
    var to_d = new Date(to).toLocaleString().split(" ");
    var to = `${to_d[1]} ${new Date(to).getDate()}, ${new Date(
      to
    ).getFullYear()}`;
    return `${from} - To - ${to}`;
  }

  const handerCancel = (leaveId) => {
    dispatch(cancelLeave(leaveId));
  };

  return (
    <View>
      <TouchableOpacity
        onPress={onPress}
        activeOpacity={1}
        style={{
          backgroundColor: Color.Secondary,
          height: Size.ExtraLarge,
          borderRadius: 8,
          overflow: "hidden",
          alignItems: "center",
          flexDirection: "row",
          marginTop: 3,
          ...border,
        }}
      >
        {show ? (
          <>
            <View
              style={{
                height: "70%",
                width: "18%",
                alignItems: "center",
                justifyContent: "center",
                borderRightWidth: 1,
                borderColor: Color.White,
              }}
            >
              <Text
                style={{
                  fontSize: Size.Midum + 2,
                  fontFamily: Font.semiBold,
                  color: Color.Btn,
                }}
              >
                {new Date(data.createdAt).getDate()}
              </Text>
              <Text
                style={{
                  fontFamily: Font.regular,
                  color: Color.White,
                  fontSize: Size.Midum - 2,
                }}
              >
                {new Date(data.createdAt).toLocaleString().split(" ")[1]}
              </Text>
            </View>
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Text
                style={{
                  marginLeft: 8,
                  color: Color.White,
                  fontFamily: Font.semiBold,
                  fontSize: Size.Midum + 2,
                  maxWidth: 230,
                }}
              >
                {data.reason
                  .toLowerCase()
                  .replace(/^\w/, (c) => c.toUpperCase())
                  .match(/.{0,25}/g)[0]
                  .concat("...")}
              </Text>
              <IconButton
                icon="chevron-double-down"
                iconColor={Color.White}
                size={20}
                onPress={onPress}
              />
            </View>
          </>
        ) : (
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text
              style={{
                marginLeft: 15,
                color: Color.Btn,
                fontFamily: Font.medium,
                fontSize: Size.Midum + 1,
              }}
            >
              {getTimeAgoFromUTC(data.createdAt)}
            </Text>
            <IconButton
              icon="chevron-double-up"
              iconColor={Color.White}
              size={20}
              onPress={onPress}
            />
          </View>
        )}
      </TouchableOpacity>

      <Animated.View
        style={[
          {
            overflow: "hidden",
            backgroundColor: Color.Secondary,
            borderBottomRightRadius: 8,
            borderBottomLeftRadius: 8,
          },
          animationStyle,
        ]}
      >
        <ScrollView
          nestedScrollEnabled={true}
          showsVerticalScrollIndicator={false}
        >
          <View style={{ flex: 1, paddingHorizontal: 15 }}>
            <View
              style={{
                borderTopWidth: 1,
                borderBottomWidth: 1,
                borderBottomColor: Color.Dark,
                flexDirection: "row",
                height: 45,
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  color: Color.Btn,
                  fontFamily: Font.medium,
                  fontSize: Size.Midum + 1,
                }}
              >
                {`Duration: `}
              </Text>
              <Text
                style={{
                  color: Color.White,
                  fontFamily: Font.regular,
                  fontSize: Size.Midum + 1,
                }}
              >
                {getFromTo(data.from, data.to)}
              </Text>
            </View>
            <View
              style={{
                borderBottomWidth: 1,
                borderBottomColor: Color.Dark,
                flexDirection: "row",
                height: 45,
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  color: Color.Btn,
                  fontFamily: Font.medium,
                  fontSize: Size.Midum + 1,
                }}
              >
                {`Teacher: `}
              </Text>
              <View
                style={{
                  flex: 1,
                  alignItems: "center",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text
                  style={{
                    color: Color.White,
                    fontFamily: Font.regular,
                    fontSize: Size.Midum + 1,
                  }}
                >
                  {teacher.name}
                </Text>
                <IconButton
                  icon="phone-plus"
                  iconColor={Color.White}
                  size={20}
                  onPress={() => Linking.openURL(`tel:${teacher.mobile}`)}
                />
              </View>
            </View>
            <View
              style={{
                borderBottomColor: Color.Dark,
                flexDirection: "row",
                minHeight: 45,
                width: "85%",
                paddingVertical: 10,
              }}
            >
              <Text
                style={{
                  color: Color.Btn,
                  fontFamily: Font.medium,
                  fontSize: Size.Midum + 1,
                }}
              >
                {`Reason: `}
              </Text>
              <Text
                style={{
                  color: Color.White,
                  fontFamily: Font.regular,
                  fontSize: Size.Midum + 1,
                }}
              >
                {data.reason}
              </Text>
            </View>
          </View>
        </ScrollView>
        {data.status === "pending" && (
          <View
            style={{
              backgroundColor: Color.White,
              alignSelf: "flex-end",
              borderTopLeftRadius: 10,
            }}
          >
            <ButtonD
              value={"Cnacel Request"}
              onPress={() => handerCancel(data._id)}
              contentStyle={{ height: 40 }}
              icon={"trash-can-outline"}
              bgColor={"#FF1B1B"}
              style={{ borderRadius: 0, borderTopLeftRadius: 10 }}
              textColor={Color.White}
            />
          </View>
        )}
      </Animated.View>
    </View>
  );
};
