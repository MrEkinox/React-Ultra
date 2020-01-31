class AppIcon {
  async isSupported(): Promise<boolean> {
    return true;
  }
  async setIcon(iconName: string): Promise<boolean> {
    return true;
  }
  async getIconName(): Promise<string> {
    return "";
  }
}

export default new AppIcon();
