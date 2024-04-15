import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Vars from "./Vars";

const Bird = ({ body }) => {
  return (
    <View
      style={{
        position: "absolute",
        width: 50,
        height: 50,

        backgroundColor: "black",
        top: Vars.HEIGHT / 2,
        left: Vars.WIDTH / 3,
      }}
    ></View>
  );
};

export default Bird;

const styles = StyleSheet.create({});
