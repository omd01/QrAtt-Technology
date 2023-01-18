import { Button } from "react-native-paper";
import { Color, Font, Size } from "../constants/theme";

export const ButtonD = ({ value, onPress, disabled ,style,bgColor ,textColor,contentStyle ,labelStyle }) => {
  return (
    <Button
      mode="contained"
      onPress={onPress}
      textColor={textColor || Color.Dark}
      buttonColor={bgColor || Color.Btn }
      contentStyle={{ height: Size.ExtraLarge ,...contentStyle,}}
      labelStyle={{ fontSize: Size.Midum, fontFamily: Font.semiBold ,...labelStyle}}
      style={{ opacity: 0.9 ,...style}}
      disabled={disabled}
    >
      {value}
    </Button>
  );
};
