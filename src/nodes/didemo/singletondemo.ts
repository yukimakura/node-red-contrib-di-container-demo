import "reflect-metadata";
import { NodeAPI, Node, NodeDef } from 'node-red';
import { container } from "tsyringe";
import { SingletonCounter } from "./singletonCounter";


module.exports = function (RED: NodeAPI) {
  function SingletondemoNode(this: Node, props: NodeDef) {

    RED.nodes.createNode(this, props);
    const node = this;
    node.on('input', async (msg) => {
      try {
        const instance = container.resolve(SingletonCounter);
        msg.payload = instance.CountUpThenValueReturn();
        node.send(msg);
      } catch (e) {
        node.send({ payload: e });
      }
    });
  }
  RED.nodes.registerType("singletondemo", SingletondemoNode);
}