class PlainPizza implements PizzaInterface {
  getDescription(): string {
    return "Thin dough";
  }
  getCost(): number {
    return 4;
  }
}
