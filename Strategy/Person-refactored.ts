import { FavoriteWorkout } from "./FavoriteWorkout";
import { Soccer } from "./Soccer";

class Person {
  public name: string;
  public favoriteWorkout: FavoriteWorkout;

  constructor(name: string, favoriteWorkout: FavoriteWorkout) {
    this.name = name;
    this.favoriteWorkout = favoriteWorkout;
  }

  workout(): void {
    console.log(`${this.name} decided to:`);
    this.favoriteWorkout.begin();
  }
}

const Josh = new Person("Josh", new Soccer());
Josh.workout(); // Josh decided to: Play soccer with friends.
