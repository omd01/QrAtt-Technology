import { useContext } from "react";
import { useState } from "react";
import {  TextInput } from "react-native-paper";
import {  Size, Font, colors } from "../constants/theme";
import { ThemeContext } from "../constants/ThemeContext";


export const Input = ({ icon, iserror, label, value, onChangeText, cstyle,onBlur,keyboardType }) => {
  const {theme} = useContext(ThemeContext);
const Color = colors[theme.mode]
  const style = {
    backgroundColor: (value === '' ? Color.Primary :Color.Secondary),
    height: Size.ExtraLarge + 5,
    ...cstyle,
  };
  return (
    <TextInput
      label={label}
      keyboardType={keyboardType}
      mode="outlined"
      value={value}
      error={iserror}
      onChangeText={onChangeText}
      onBlur={onBlur}
      outlineStyle={{
        borderColor: Color.Secondary,
        borderRadius: 13,
        borderWidth: 1,
      }}
      style={style}
      textColor={Color.White}
      left={
        <TextInput.Icon
          style={{ paddingTop: Size.Small }}
          icon={icon}
          iconColor={Color.White}
        />
      }
    />
  );
};

export const InputSecure = ({ icon, iserror, label, value, onChangeText,onBlur }) => {
  const {theme} = useContext(ThemeContext);
const Color = colors[theme.mode]
  const [secured, setSecured] = useState(true);

  const style = {
    backgroundColor: (value === '' ? Color.Primary :Color.Secondary),
    height: Size.ExtraLarge + 5,

    // marginVertical: Size.Small,
  };
  return (
    <TextInput
      label={label}
      mode="outlined"
      value={value}
      error={iserror}
      secureTextEntry={secured}
      onChangeText={onChangeText}
      onBlur={onBlur}
      style={style}
      textColor={Color.White}
      outlineStyle={{
        borderColor: Color.Secondary,
        borderRadius: 13,
        borderWidth: 1,
      }}
      left={
        <TextInput.Icon
          style={{ paddingTop: Size.Small }}
          icon={icon}
          iconColor={Color.White}
        />
      }
      right={
        <TextInput.Icon
          onPress={() => setSecured(!secured)}
          style={{ paddingTop: Size.Small }}
          icon={"eye"}
          size={20}
          iconColor="#cccccc"
        />
      }
    />
  );
};

export const InputArea = ({ val,placeholder, setVal ,style,Lines}) => {
  const {theme} = useContext(ThemeContext);
const Color = colors[theme.mode]
  return (
    <TextInput
      multiline
      numberOfLines={Lines}
      onChangeText={(text) => setVal(text)}
      placeholder={placeholder}
      mode="outlined"
      placeholderTextColor={Color.White}
      outlineStyle={{
        borderColor: Color.Secondary,
        borderRadius: 13,
        borderWidth: 1,
      }}
      style={{
        backgroundColor: (val === '' ? Color.Primary :Color.Secondary),
        ...style
      }}
      textColor={Color.White}
    />
  );
};



