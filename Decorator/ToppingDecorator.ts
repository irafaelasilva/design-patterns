abstract class ToppingDecorator implements PizzaInterface {
  getDescription(): string {
    throw new Error("Method not implemented.");
  }
  getCost(): number {
    throw new Error("Method not implemented.");
  }
}
