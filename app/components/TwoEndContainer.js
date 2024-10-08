import React, { useState } from "react";
import {
  Image,
  KeyboardAvoidingView,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  ScrollView,
  View,
  Text,
  TextInput,
} from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";

//config
import Colors from "../config/Colors";
import { FontFamily } from "../config/font";

export default function TwoEndContainer({ title, subtitle }) {
  return (
    <View
      style={{
        width: "90%",
        backgroundColor: Colors.fieldcolor,
        borderRadius: RFPercentage(1),
        paddingVertical: RFPercentage(1.5),
        alignItems: "center",
        justifyContent: "center",
        borderWidth: RFPercentage(0.1),
        borderColor: Colors.stroke,
        marginTop: RFPercentage(1),
      }}
    >
      <View style={{ width: "90%", flexDirection: "row" }}>
        <Text
          style={{
            color: Colors.blacky,
            fontFamily: FontFamily.medium,
            fontSize: RFPercentage(1.5),
          }}
        >
          {title}
        </Text>
        <View style={{ position: "absolute", right: 0 }}>
          <Text
            style={{
              color: Colors.grey,
              fontFamily: FontFamily.medium,
              fontSize: RFPercentage(1.5),
            }}
          >
            {subtitle}
          </Text>
        </View>
      </View>
    </View>
  );
}
