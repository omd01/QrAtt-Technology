import { useState } from "react";
import { TextInput } from "react-native-paper";
import { Color, Size } from "../constants/theme";

const Inputs = ({ icon, iserror, label, val, setval, secure }) => {
  const [secured, setSecured] = useState(secure);
  const [backColor, setBackColor] = useState(Color.Primary);
  const style = {
    backgroundColor: backColor,
    height: Size.ExtraLarge + 5,

    marginVertical: Size.Small,
  };

  return (
    <>
      {secure ? (
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
      ) : (
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
      )}
    </>
  );
};

export default Inputs;
