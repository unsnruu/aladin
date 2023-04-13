export interface HttpHandler {
  get<T>(url: string): Promise<T>;
}
