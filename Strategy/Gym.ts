import { FavoriteWorkout } from "./FavoriteWorkout";

export class Gym implements FavoriteWorkout {
  public begin(): void {
    console.log("Go to the gym.");
  }
}
