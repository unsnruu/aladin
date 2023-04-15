import { HttpHandler } from "@/interface/HttpHandler";

export class HttpService {
  handler: HttpHandler;

  constructor(handler: HttpHandler) {
    this.handler = handler;
  }

  async get<T>(url: string) {
    return await this.handler.get<T>(url);
  }
}
