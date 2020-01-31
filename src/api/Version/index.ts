import { VersionStoreOptions } from "./interfaces";
class Version {
  async getPackageName(): Promise<string> {
    return "";
  }
  async getBuildNumber(): Promise<string> {
    return "";
  }
  async getNumber(): Promise<string> {
    return "";
  }
  async getStoreUrl(options: VersionStoreOptions): Promise<string> {
    return "";
  }
  async getLasted(storeUrl: string): Promise<string> {
    return "";
  }
}

export default new Version();
