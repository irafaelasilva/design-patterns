import { FavoriteWorkout } from "./FavoriteWorkout";

export class Soccer implements FavoriteWorkout {
  public begin(): void {
    console.log("Play soccer with friends.");
  }
}
