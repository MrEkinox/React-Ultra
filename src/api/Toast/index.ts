import { ToastOptions } from "./interfaces";

class Toast {
  async show(options: ToastOptions): Promise<string> {
    return "ToastId";
  }
  async close(toastId: string): Promise<boolean> {
    return true;
  }
}

export default new Toast();
