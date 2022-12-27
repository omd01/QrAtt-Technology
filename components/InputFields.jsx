import { useState } from "react";
import { View } from "react-native";
import { TextInput } from "react-native-paper";
import { Color, Size, Font } from "../constants/theme";

export const Input = ({ icon, iserror, label, val, setval }) => {
  const [backColor, setBackColor] = useState(Color.Primary);
  const style = {
    backgroundColor: backColor,
    height: Size.ExtraLarge + 5,

    marginVertical: Size.Small,
  };
  return (
    <TextInput
      label={label}
      mode="outlined"
      value={val}
      error={iserror}
      onChangeText={(text) => setval(text)}
      outlineStyle={{
        borderColor: Color.Secondary,
        borderRadius: 13,
        borderWidth: 1,
      }}
      style={style}
      textColor={Color.White}
      onFocus={() => setBackColor(Color.Secondary)}
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

export const InputSecure = ({ icon, iserror, label, val, setval }) => {
  const [backColor, setBackColor] = useState(Color.Primary);
  const [secured, setSecured] = useState(true);

  const style = {
    backgroundColor: backColor,
    height: Size.ExtraLarge + 5,

    marginVertical: Size.Small,
  };
  return (
    <TextInput
      label={label}
      mode="outlined"
      value={val}
      error={iserror}
      secureTextEntry={secured}
      onChangeText={(text) => setval(text)}
      style={style}
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
          icon={icon}
          iconColor={Color.White}
        />
      }
      right={
        <TextInput.Icon
          onPress={() => setSecured((previousState) => !previousState)}
          style={{ paddingTop: Size.Small }}
          icon={"eye"}
          size={20}
          iconColor="#cccccc"
        />
      }
    />
  );
};

export const InputNonEdit = ({ icon, label, val }) => {
  return (
    <TextInput
      label={label}
      mode="outlined"
      value={val}
      editable={false}
      outlineStyle={{
        borderColor: Color.Secondary,
        borderRadius: 13,
        borderWidth: 1,
      }}
      style={{
        backgroundColor: Color.Secondary,
        height: Size.ExtraLarge + 5,
        marginVertical: Size.Small,
      }}
      textColor={Color.White}
      left={
        <TextInput.Icon
          style={{ marginTop: Size.Small +1}}
          icon={icon}
          iconColor={Color.White}
        />
      }
    />
  );
};

export const SelectList =({data}) =>{
  
}