import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Vars from "./Vars";

const Bird = ({ body }) => {
  const width = body.bounds.max.x - body.bounds.min.x;
  const height = body.bounds.max.y - body.bounds.min.y;
  const x = body.position.x - width / 2;
  const y = body.position.y - height / 2;
  return (
    <View
      style={{
        position: "absolute",
        top: y,
        left: x,
        width: width,
        height: height,
        backgroundColor: "black",
      }}
    ></View>
  );
};

export default Bird;

const styles = StyleSheet.create({});
