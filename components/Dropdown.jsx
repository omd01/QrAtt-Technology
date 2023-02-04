import { useState } from "react";
import {
  View,
  TouchableOpacity,
  FlatList,
  Text,
  ScrollView,
  Linking,
} from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { IconButton, TextInput } from "react-native-paper";
import { Color, Size, Font } from "../constants/theme";
import { ButtonD } from "./Buttons";
import { Avatar } from "react-native-paper";

export const Dropdown = ({
  data,
  setSelected,
  label,
  micon,
  cstyle,
  iserror,
}) => {
  const [value, setValue] = useState(null);
  const animation = useSharedValue({ height: 0, borderWidth: 0 });
  const [icon, setIcon] = useState("chevron-down");

  const renderItem = ({ item }) => (
    <ButtonD
    
      value={item.value}
      onPress={() => {
        setValue(item.value);
        setSelected(item.value);
        animation.value = { height: 0 };
        setIcon("chevron-down");
      }}
      bgColor={Color.Secondary}
      textColor={Color.White}
      contentStyle={{ alignSelf: "flex-start" }}
      style={{ marginVertical: 1, height: 45, borderRadius: 0 }}
      labelStyle={{ fontSize: Size.Midum - 1 }}
    />
  );

  const style = {
    backgroundColor: value === null ? Color.Primary : Color.Secondary,
    height: Size.ExtraLarge + 5,
    // marginVertical: Size.Small,
    ...cstyle,
  };

  const animationStyle = useAnimatedStyle(() => {
    return {
      height: withTiming(animation.value.height, { duration: 500 }),
      borderWidth: withTiming(animation.value.borderWidth, { duration: 500 }),
    };
  });

  const onPress = () => {
    animation.value.height === 200 ?
    [animation.value = { height: 0, borderWidth: 0 },setIcon("chevron-down")]:
    [animation.value = { height: 200, borderWidth: 0.5 },setIcon("close")];

    
  };
  return (
    <View>
      <TouchableOpacity onPress={onPress} activeOpacity={1}>
        <TextInput
          // onPressIn={onPress}
          label={label}
          mode="outlined"
          value={value}
          error={iserror}
          style={style}
          editable={false}
          textColor={Color.White}
          outlineStyle={{
            borderColor: Color.Secondary,
            borderRadius: 13,
            borderWidth: 1,
          }}
          left={
            <TextInput.Icon
              style={{ paddingTop: Size.Small }}
              icon={micon}
              iconColor={Color.White}
            />
          }
          right={
            <TextInput.Icon
              onPress={() =>
                icon === "chevron-down"
                  ? ((animation.value = { height: 200, borderWidth: 0.5 }),
                    setIcon("close"))
                  : ((animation.value = { height: 0 }), setIcon("chevron-down"))
              }
              style={{ paddingTop: Size.Small }}
              icon={icon}
              size={20}
              iconColor={Color.White}
            />
          }
        />
      </TouchableOpacity>

      <Animated.View
        style={[
          {
            borderColor: Color.White,
            borderRadius: 10,
            overflow: "hidden",
          },
          animationStyle,
        ]}
      >
        <FlatList
          style={{ marginVertical: 5 }}
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.key}
        />
      </Animated.View>
    </View>
  );
};

export const DropdownImg = ({ data, setSelected, label, micon, cstyle }) => {
 
  const [value, setValue] = useState(null);
  const animation = useSharedValue({ height: 0, borderWidth: 0 });
  const [icon, setIcon] = useState("chevron-down");
  const [newlabel, setNewLabel] = useState(label);

  const animationStyle = useAnimatedStyle(() => {
    return {
      height: withTiming(animation.value.height, { duration: 500 }),
      borderWidth: withTiming(animation.value.borderWidth, { duration: 500 }),
    };
  });

  const onPress = () => {
    animation.value.height === 200 ?
    [animation.value = { height: 0, borderWidth: 0 },setIcon("chevron-down")]:
    [animation.value = { height: 200, borderWidth: 0.5 },setIcon("close")];

  
    setIcon("close");
  };

  return (
    <View>
      <TouchableOpacity onPress={onPress} activeOpacity={1}>
        <TextInput
          onPressIn={onPress}
          label={newlabel}
          mode="outlined"
          value={value}
          // error={iserror}
          style={{
            backgroundColor: value === null ? Color.Primary : Color.Secondary,
            height: Size.ExtraLarge + 5,
            marginVertical: Size.Small,
            ...cstyle,
          }}
          editable={false}
          textColor={Color.White}
          outlineStyle={{
            borderColor: Color.Secondary,
            borderRadius: 13,
            borderWidth: 1,
          }}
          left={
            <TextInput.Icon
              style={{ paddingTop: Size.Small }}
              icon={micon}
              iconColor={Color.White}
            />
          }
          right={
            <TextInput.Icon
              onPress={() =>
                icon === "chevron-down"
                  ? ((animation.value = { height: 200 ,borderWidth:0.5}), setIcon("close"))
                  : ((animation.value = { height: 0 }), setIcon("chevron-down"))
              }
              style={{ paddingTop: Size.Small }}
              icon={icon}
              size={20}
              iconColor={Color.White}
            />
          }
        />
      </TouchableOpacity>

      <Animated.View
        style={[
          {
            borderColor: Color.White,
            borderRadius: 10,
            overflow: "hidden",
          },
          animationStyle,
        ]}
      >
        <ScrollView nestedScrollEnabled={true} showsVerticalScrollIndicator={false}>
          {data.map((item) => {
            return (
              <View
              key={item._id}
                style={{
                  height: 50,
                  backgroundColor: Color.Secondary,
                  marginVertical: 1,
                  justifyContent: "space-between",
                  alignItems: "center",
                  flexDirection: "row",
                }}
              >
                <Avatar.Image
                  size={40}
                  source={{ uri: item.avatar.url }}
                  style={{ marginHorizontal: 10 }}
                />
                <TouchableOpacity
                  onPress={() => {
                    setValue(item.name);
                    setSelected(item._id);
                    animation.value = { height: 0 };
                    setIcon("chevron-down");
                    setNewLabel(null);
                  }}
                  style={{
                    flex: 1,
                    height: "100%",
                    justifyContent: "center",
                  }}
                >
                  <Text
                    style={{
                      fontFamily: Font.light,
                      fontSize: Size.Midum,
                      color: Color.White,
                    }}
                  >
                    {item.name}
                  </Text>
                </TouchableOpacity>
                <IconButton
                  icon="phone"
                  iconColor={Color.White}
                  size={23}
                  onPress={()=>{
                    Linking.openURL(`tel:${item.mobile}`)
                  }}
                />
              </View>
            );
          })}
        </ScrollView>
      </Animated.View>
    </View>
  );
};

