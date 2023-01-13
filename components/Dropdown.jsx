import { useState } from "react";
import { View, TouchableOpacity, FlatList, Image, Text  } from "react-native";
import Animated, {
  log,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { useNavigation } from '@react-navigation/native';
import { Button, IconButton, TextInput } from "react-native-paper";
import { Color, Size, Font } from "../constants/theme";
import { ButtonD } from "./Buttons";
import { Avatar } from "react-native-paper";

export const Dropdown = ({ data, setSelected, label, micon, cstyle }) => {
  const [value, setValue] = useState(null);
  const animation = useSharedValue({ height: 0, borderWidth: 0 });
  const [backColor, setBackColor] = useState(Color.Primary);
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
    backgroundColor: backColor,
    height: Size.ExtraLarge + 5,
    marginVertical: Size.Small,
    ...cstyle,
  };

  const animationStyle = useAnimatedStyle(() => {
    return {
      height: withTiming(animation.value.height, { duration: 500 }),
      borderWidth: withTiming(animation.value.borderWidth, { duration: 500 }),
    };
  });

  const onPress = () => {
    animation.value = { height: 200, borderWidth: 0.5 };
    setIcon("close");
    setBackColor(Color.Secondary);
  };
  return (
    <View>
      <TouchableOpacity onPress={onPress} activeOpacity={1}>
        <TextInput
          onPressIn={onPress}
          label={label}
          mode="outlined"
          value={value}
          // error={iserror}
          style={style}
          editable={false}
          textColor={Color.White}
          onFocus={() => setBackColor(Color.Secondary)}
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
              onPress={() => (animation.value = { height: 0 })}
              style={{ paddingTop: Size.Small }}
              icon={icon}
              size={20}
              iconColor="#cccccc"
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

export const DropdownImg = ({
  data,
  setSelected,
  label,
  micon,
  cstyle,
}) => {
  const navigation = useNavigation()
  const [value, setValue] = useState(null);
  const animation = useSharedValue({ height: 0, borderWidth: 0 });
  const [backColor, setBackColor] = useState(Color.Primary);
  const [icon, setIcon] = useState("chevron-down");

  const renderItem = ({ item }) => (
    <View
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
        setSelected(item.name)
        animation.value = { height: 0 };
        setIcon("chevron-down");
      }}
        style={{
          flex: 1,
          height: "100%",
          justifyContent: "center",
        }}
      >
        <Text style={{ fontFamily: Font.light, fontSize: Size.Midum ,color:Color.White }}>
          {item.name}
        </Text>
      </TouchableOpacity>
      <IconButton
        icon="eye"
        iconColor={Color.White}
        size={23}
        onPress={() => navigation.navigate('profiles', { data: item })}
      />
    </View>
    //   <ButtonD

    //     value={item.value}
        // onPress={() => {
        //   setValue(item.value);
        //   setSelected(item.value)
        //   animation.value = { height: 0 };
        //   setIcon("chevron-down");
        // }}

    //     bgColor={Color.Secondary}
    //     textColor={Color.White}
    //     contentStyle={{ alignSelf: "flex-start" }}
    //     style={{ marginVertical: 1, height: 45, borderRadius: 0  }}
    //     labelStyle={{ fontSize: Size.Midum - 1 }}
    //   />

    //   <Button
    //   icon={({ size, color }) => (
    //     <Image
    //       source={{ uri: 'https://res.cloudinary.com/dqbwa8i3y/image/upload/v1667825520/QrAtt/Admin/eiqcevloi4aktr2pprpo.png'}}
    //       style={{ width: 25, height: 25, marginHorizontal:2}}
    //     />
    //     )}
    //   mode="contained"
    //   onPress={() => {
    //           setValue(item.value);
    //           setSelected(item.value)
    //           animation.value = { height: 0 };
    //           setIcon("chevron-down");
    //         }}
    //   textColor={Color.White}
    //   buttonColor={Color.Secondary}
    //   contentStyle={{ height: Size.ExtraLarge , alignSelf: "flex-start" }}
    //   labelStyle={{  fontFamily: Font.semiBold ,fontSize: Size.Midum - 1}}
    //   style={{ opacity: 0.9 , marginVertical: 1, height: 45, borderRadius: 0 ,justifyContent:'center' }}

    // >
    //   {item.value}
    // </Button>
  );

  const style = {
    backgroundColor: backColor,
    height: Size.ExtraLarge + 5,
    marginVertical: Size.Small,
    ...cstyle,
  };

  const animationStyle = useAnimatedStyle(() => {
    return {
      height: withTiming(animation.value.height, { duration: 500 }),
      borderWidth: withTiming(animation.value.borderWidth, { duration: 500 }),
    };
  });

  const onPress = () => {
    animation.value = { height: 200, borderWidth: 0.5 };
    setIcon("close");
    setBackColor(Color.Secondary);
  };
  return (
    <View>
      <TouchableOpacity onPress={onPress} activeOpacity={1}>
        <TextInput
          onPressIn={onPress}
          label={label}
          mode="outlined"
          value={value}
          // error={iserror}
          style={style}
          editable={false}
          textColor={Color.White}
          onFocus={() => setBackColor(Color.Secondary)}
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
              onPress={() => (animation.value = { height: 0 })}
              style={{ paddingTop: Size.Small }}
              icon={icon}
              size={20}
              iconColor="#cccccc"
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
          keyExtractor={(item) => item._id}
        />
      </Animated.View>
    </View>
  );
};
