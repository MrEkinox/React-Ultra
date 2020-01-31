class Sender {
  async isSupported(): Promise<boolean> {
    return false;
  }
  sendSMS(phoneNumber: string, message: string) {}
  sendEmail(
    to: string,
    subject: string,
    body: string,
    cc: string,
    bcc: string
  ) {}
  sendPhoneCall(phoneNumber: string) {}
  sendPhoneDial(phoneNumber: string) {}
}

export default new Sender();
