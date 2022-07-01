import { FavoriteWorkout } from "./FavoriteWorkout";

export class Running implements FavoriteWorkout {
  public begin(): void {
    console.log("Go running on the park.");
  }
}
