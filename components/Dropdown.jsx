import { useState } from "react";
import { View, TouchableOpacity, FlatList, } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import {  TextInput } from "react-native-paper";
import { Color, Size, Font } from "../constants/theme";
import { ButtonD } from "./Buttons";
import { Avatar } from "react-native-paper";


export const Dropdown = ({ data, setSelected, label ,micon ,cstyle ,image}) => {
    const [value, setValue] = useState(null);
    const animation = useSharedValue({ height: 0 , borderWidth :0 });
    const [backColor, setBackColor] = useState(Color.Primary);
    const [icon, setIcon] = useState("chevron-down");
  
    const renderItem = ({ item }) => (
      <ButtonD
        value={item.value}
        onPress={() => {
          setValue(item.value);
          setSelected(item.value)
          animation.value = { height: 0 };
          setIcon("chevron-down");
        }}
        bgColor={Color.Secondary}
        textColor={Color.White}
        contentStyle={{ alignSelf: "flex-start" }}
        style={{ marginVertical: 1, height: 45, borderRadius: 0  }}
        labelStyle={{ fontSize: Size.Midum - 1 }}
      />
    );
  
    const style = {
      backgroundColor: backColor,
      height: Size.ExtraLarge + 5,
      marginVertical: Size.Small
      ,...cstyle
    };
  
    const animationStyle = useAnimatedStyle(() => {
      return {
        height: withTiming(animation.value.height, { duration: 500 }),
        borderWidth: withTiming(animation.value.borderWidth, { duration: 500 }), 
      };
    });
  
    const onPress = () => {
      animation.value = { height: 200,borderWidth: 0.5  }
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
            style={{marginVertical:5}}
            data={data}
            renderItem={renderItem}
            keyExtractor={(item) => item.key}
          />
        </Animated.View>
      </View>
    );
  };

  export const DropdownImg = ({ data, setSelected, label ,micon ,cstyle}) => {
    const [value, setValue] = useState(null);
    const animation = useSharedValue({ height: 0 , borderWidth :0 });
    const [backColor, setBackColor] = useState(Color.Primary);
    const [icon, setIcon] = useState("chevron-down");
  
    const renderItem = ({ item }) => (
      <ButtonD
        value={item.value}
        onPress={() => {
          setValue(item.value);
          setSelected(item.value)
          animation.value = { height: 0 };
          setIcon("chevron-down");
        }}
        bgColor={Color.Secondary}
        textColor={Color.White}
        contentStyle={{ alignSelf: "flex-start" }}
        style={{ marginVertical: 1, height: 45, borderRadius: 0  }}
        labelStyle={{ fontSize: Size.Midum - 1 }}
      />
    );
  
    const style = {
      backgroundColor: backColor,
      height: Size.ExtraLarge + 5,
      marginVertical: Size.Small
      ,...cstyle
    };
  
    const animationStyle = useAnimatedStyle(() => {
      return {
        height: withTiming(animation.value.height, { duration: 500 }),
        borderWidth: withTiming(animation.value.borderWidth, { duration: 500 }), 
      };
    });
  
    const onPress = () => {
      animation.value = { height: 200,borderWidth: 0.5  }
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
            style={{marginVertical:5}}
            data={data}
            renderItem={renderItem}
            keyExtractor={(item) => item.key}
          />
        </Animated.View>
      </View>
    );
  };