import { SpotlightItem } from "./interfaces";

class Spotlight {
  async isSupported(): Promise<boolean> {
    return true;
  }
  async set(items: SpotlightItem[]): Promise<boolean> {
    return true;
  }
  async deleteAll(): Promise<boolean> {
    return true;
  }
  async deleteByDomains(domain: string): Promise<boolean> {
    return true;
  }
  async deleteById(id: string): Promise<boolean> {
    return true;
  }
}

export default new Spotlight();
