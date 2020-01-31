import { ContactData } from "./interfaces";

class Contacts {
  async isSupported(): Promise<boolean> {
      return true;
  }

  async getAll(
    searchedText?: string,
    withPhotos?: boolean
  ): Promise<ContactData[]> {
    return [];
  }
  async getById(contactId: string): Promise<ContactData> {
    return {};
  }
  async getByPhoneNumber(phoneNumber: string): Promise<ContactData> {
    return {};
  }
  async getByEmailAddress(email: string): Promise<ContactData> {
    return {};
  }
  async getCount(): Promise<number> {
    return 0;
  }
  async getPhotoForId(contactId: string): Promise<string> {
    return "";
  }
  async add(contactData: ContactData): Promise<boolean> {
    return false;
  }
  async openForm(contact: ContactData): Promise<boolean> {
    return false;
  }
  async openExisting(contactId: string): Promise<boolean> {
    return false;
  }
  async update(contactId: string, contactData: ContactData): Promise<boolean> {
    return false;
  }
  async delete(contactId: string): Promise<boolean> {
    return false;
  }
}

export default new Contacts();
