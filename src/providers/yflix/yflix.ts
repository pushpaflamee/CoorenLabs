import { yflix } from "../origins";
import { fetcher } from "./lib/fetcher";

export class yFlix {
  static async home() {
    const url = yflix + "/home";
    fetcher(url);
  }

  static async search(_query: string) {
    return "GARBAGE";
  }
}
