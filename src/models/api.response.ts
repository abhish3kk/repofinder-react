export interface ResponseObject {
  success: boolean;
  message: string;
  responseObject: string | object | boolean;
  statusCode: number;
}
