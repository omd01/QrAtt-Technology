import { View, Text, ScrollView, Image } from "react-native";
import React, { useState, useEffect } from "react";
import {  Size, Font, colors } from "../constants/theme";
import { Avatar } from "react-native-paper";
import { InputArea } from "../components/InputFields";
import { DropdownImg } from "../components/Dropdown";
import { ButtonD } from "../components/Buttons";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useDispatch, useSelector } from "react-redux";
import { leaveRequeste } from "../redux/mainAction";
import { ThemeContext } from "../constants/ThemeContext";
import { useContext } from "react";

const Leave = ({setScreen}) => {
  const {theme} = useContext(ThemeContext);
  const Color = colors[theme.mode]
  const dispatch = useDispatch();
  const { teachers} = useSelector(
    (state) => state.message
  );

  const [teacher, setTeacher] = useState(null);
  const [reason, setReason] = useState("");

  const [showFromDate, setshowFromDate] = useState(false);
  const [showToDate, setshowToDate] = useState(false);

  const [from, setFrom] = useState(null);
  const [to, setTo] = useState(null);

  const [formatedFromDate, setFormatedFromDate] = useState(undefined);
  const [formatedToDate, setFormatedToDate] = useState(undefined);

  const [localError, setLocalError] = useState([false, false, false, false]);

  const onChangeFrom = (event, selectedDate) => {
    if (event.type === "dismissed") {
      setshowFromDate(false);
    } else {
      if (selectedDate) {
        setFrom(selectedDate);
        setshowFromDate(false);
      }
    }
  };

  const onChangeTo = (event, selectedDate) => {
    if (event.type === "dismissed") {
      setshowToDate(false);
    } else {
      if (selectedDate) {
        setTo(selectedDate);
        setshowToDate(false);
      }
    }
  };

  useEffect(() => {
    if (from) {
      var tempDate = new Date(from).toLocaleString().split(" ");
      tempDate = `${tempDate[1]} ${new Date(from).getDate()}, ${new Date(
        from
      ).getFullYear()}`;
      setFormatedFromDate(tempDate);
    }
  }, [from]);

  useEffect(() => {
    if (to) {
      var tempDate = new Date(to).toLocaleString().split(" ");
      tempDate = `${tempDate[1]} ${new Date(to).getDate()}, ${new Date(
        from
      ).getFullYear()}`;
      setFormatedToDate(tempDate);
    }
  }, [to]);

  const handelSubmit = async () => {
    teacher === null
      ? setLocalError([true, false, false, false])
      : from === null
      ? setLocalError([false, true, false, false])
      : to === null
      ? setLocalError([false, false, true, false])
      : reason === ""
      ? setLocalError([false, false, false, true])
      : setLocalError([false, false, false, false]);
    if (teacher !== null && from !== null && to !== null && reason !== "") {
     await dispatch(leaveRequeste(teacher, reason, from, to));
      setScreen("history")
    }
  };

  return (
    
    <View style={{ height: Size.Full, paddingHorizontal: Size.Small }}>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: Color.Primary,
          marginVertical: Size.Small,
        }}
      >
        <Avatar.Icon
          size={40}
          backgroundColor={null}
          color={Color.White}
          icon="email-send"
        />
        <Text
          style={{
            color: Color.White,
            fontSize: Size.Midum + 4,

            fontFamily: Font.semiBold,
          }}
        >
          {`Send Leave Request`}
        </Text>
      </View>
      <ScrollView>
        <View style={{ marginVertical: 5 }}>
          <Text
            style={{
              marginHorizontal: 2,
              color: Color.White,
              fontFamily: Font.medium,
            }}
          >
            {`To Teacher`}
          </Text>
          <DropdownImg
            data={teachers}
            micon={"human-male-board"}
            label={"Teacher's List"}
            value={"Teacher's"}
            onIconPress={{}}
            setSelected={setTeacher}
            cstyle={{ marginVertical: Size.Small - 8 }}
          />
          {localError[0] && (
            <Text
              style={{
                marginLeft: 12,
                color: "red",
                fontFamily: Font.light,
              }}
            >
              {`Please select a teacher from dropdown`}
            </Text>
          )}
        </View>

        <View style={{ marginVertical: 5 }}>
          <Text
            style={{
              color: Color.White,
              marginHorizontal: 2,
              fontFamily: Font.medium,
            }}
          >
            {`From`}
          </Text>
          <ButtonD
            value={formatedFromDate ? formatedFromDate : "Start Date"}
            onPress={() => setshowFromDate(true)}
            bgColor={from === null ? Color.Primary : Color.Secondary}
            contentStyle={{ alignSelf: "flex-start" }}
            textColor={Color.White}
            labelStyle={{ fontSize: 15 }}
            style={{
              marginVertical: 5,
              borderRadius: 13,
              height: Size.ExtraLarge + 5,
              justifyContent: "center",
              borderWidth: 1,
              borderColor: Color.Secondary,
            }}
          />
          {localError[1] && (
            <Text
              style={{
                marginLeft: 12,
                color: "red",
                fontFamily: Font.light,
              }}
            >
              {`From date must be required`}
            </Text>
          )}

          {showFromDate && (
            <DateTimePicker
              value={new Date()}
              mode={"date"}
              minimumDate={new Date()}
              onChange={onChangeFrom}
            />
          )}
        </View>

        <View style={{ marginVertical: 5 }}>
          <Text
            style={{
              color: Color.White,
              marginHorizontal: 2,
              fontFamily: Font.medium,
            }}
          >
            {`To`}
          </Text>
          <ButtonD
            value={formatedToDate ? formatedToDate : "End Date"}
            onPress={() => setshowToDate(true)}
            bgColor={to === null ? Color.Primary : Color.Secondary}
            contentStyle={{ alignSelf: "flex-start" }}
            textColor={Color.White}
            labelStyle={{ fontSize: 15 }}
            style={{
              marginVertical: 5,
              borderRadius: 13,
              height: Size.ExtraLarge + 5,
              justifyContent: "center",
              borderWidth: 1,
              borderColor: Color.Secondary,
            }}
          />
          {localError[2] && (
            <Text
              style={{
                marginLeft: 12,
                color: "red",
                fontFamily: Font.light,
              }}
            >
              {`To date must be required`}
            </Text>
          )}
          {showToDate && (
            <DateTimePicker
              value={new Date()}
              mode={"date"}
              minimumDate={from}
              onChange={onChangeTo}
            />
          )}
        </View>

        <View style={{ marginVertical: 5 }}>
          <Text
            style={{
              color: Color.White,
              marginHorizontal: 2,
              fontFamily: Font.medium,
            }}
          >
            {`Valid Reason`}
          </Text>
          <InputArea
            val={reason}
            setVal={setReason}
            Lines={10}
            placeholder={"Write a valid reason for leave request"}
          />
          {localError[3] && (
            <Text
              style={{
                marginLeft: 12,
                color: "red",
                fontFamily: Font.light,
              }}
            >
              {`Please give the valid reason`}
            </Text>
          )}
        </View>

        <View style={{ marginVertical: 15 }}>
          <ButtonD
            value={"Send Request"}
            onPress={handelSubmit}
            disabled={false}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default Leave;
