import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { GameEngine } from "react-native-game-engine";
import Matter from "matter-js";
import { Component } from "react";
import Bird from "./Bird";
import Vars from "./Vars";
import Physics from "./Physics";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.gameEngine = null;
    this.entities = this.myMap();
  }
  myMap = () => {
    let engine = Matter.Engine.create({ enableSleeping: false });
    let world = engine.world;
    let bird = Matter.Bodies.rectangle(Vars.WIDTH / 3, Vars.HEIGHT / 2, 50, 50);
    Matter.World.add(world, [bird]);
    return {
      physics: { engine: engine, world, world },
      bird: { body: bird, renderer: Bird },
    };
  };
  render() {
    return (
      <View style={styles.container}>
        <GameEngine
          ref={(ref) => {
            this.gameEngine = ref;
          }}
          entities={this.entities}
          systems={[Physics]}
        ></GameEngine>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
