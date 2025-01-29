import "reflect-metadata";
import { NodeAPI, Node, NodeDef } from 'node-red';
import { container } from "tsyringe";
import { TransientCounter } from "./transientCounter";


module.exports = function (RED: NodeAPI) {
  function TransientdemoNode(this: Node, props: NodeDef) {

    RED.nodes.createNode(this, props);
    const node = this;
    node.on('input', async (msg) => {
      try {
        const instance = container.resolve(TransientCounter);
        msg.payload = instance.CountUpThenValueReturn();
        node.send(msg);
      } catch (e) {
        node.send({ payload: e });
      }
    });
  }
  RED.nodes.registerType("transientdemo", TransientdemoNode);
}