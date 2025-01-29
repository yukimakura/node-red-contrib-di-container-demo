import { Lifecycle, injectable, scoped } from "tsyringe";

@injectable()//デフォはtransient
export class TransientCounter {
  private value: number = 0;
  public CountUpThenValueReturn() {
    this.value++;
    return this.value;
  }
}