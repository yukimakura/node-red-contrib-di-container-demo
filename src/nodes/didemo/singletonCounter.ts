import { injectable, singleton } from "tsyringe";

@singleton()
export class SingletonCounter {
  private value: number = 0;
  public CountUpThenValueReturn() {
    this.value++;
    return this.value;
  }
}