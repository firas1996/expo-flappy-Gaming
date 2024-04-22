import Matter from "matter-js";
import Vars from "./Vars";
const Physics = (entities, { touches, time }) => {
  let engine = entities.physics.engine;
  let world = entities.physics.world;
  let bird = entities.bird.body;
  touches
    .filter((p) => p.type === "press")
    .forEach((c) => {
      Matter.Body.applyForce(bird, bird.position, { x: 0, y: -0.1 });
    });
  Matter.Engine.update(engine, time.delta);
  return entities;
};
export default Physics;
