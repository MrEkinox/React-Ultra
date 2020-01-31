class Sender {
  async isSupported(): Promise<boolean> {
    return false;
  }
}

export default new Sender();
