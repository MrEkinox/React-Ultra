import { SnackOptions } from "./interfaces";

class Snack {
  async show(options: SnackOptions): Promise<string> {
    return "SnackId";
  }
  async close(snackId: string): Promise<boolean> {
    return true;
  }
}

export default new Snack();
