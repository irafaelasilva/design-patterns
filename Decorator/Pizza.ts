class Pizza {
  public description: string;
  public cost: number;

  constructor(description: string, cost: number) {
    this.description = description;
    this.cost = cost;
  }

  getDescription(): string {
    return this.description;
  }

  getCost(): number {
    return this.cost;
  }
}
