import { log } from "./log";
import { message } from "antd";

export class CustomError extends Error {
  constructor(message, errorKey, errorName) {
    super(message);
    this.errorName = errorName;
    this.errorKey = errorKey;
  }
  getErrorName() {
    return this.errorName;
  }

  getErrorKey() {
    return this.errorKey;
  }
}
export function handleError(e) {
  if (e instanceof CustomError) {
    message.error(log[e.errorKey][e.errorName]);
  } else {
    message.error("Lỗi. Vui lòng thử lại!");
  }
}
