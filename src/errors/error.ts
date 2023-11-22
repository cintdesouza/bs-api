class AppError extends Error {
  statusCode: number = 400;
  constructor(message: string, statusCode: number = 400) {
    super(message);
    this.statusCode = statusCode;
  }
}

export { AppError };
