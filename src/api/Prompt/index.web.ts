import { PromptOptions } from "./interfaces";

export default class Prompt {
  async open(options: PromptOptions): Promise<String> {
    return "promptID";
  }
  async close(promptID) {}
}
