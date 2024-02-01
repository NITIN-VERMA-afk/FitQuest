class ApiError extends Error {
    statusCode: number;
    data: any;
    success: boolean;
    error: any[];
  
    constructor(
      statusCode: number,
      message: string = "something went wrong",
      errors: any[] = [],
      stack: string = ""
    ) {
      super(message);
  
      this.statusCode = statusCode;
      this.data = null;
      this.message = message;
      this.success = false;
      this.error = errors;
  
      if (stack) {
        this.stack = stack;
      } else {
        Error.captureStackTrace(this, this.constructor);
      }
    }
  }
  
  export { ApiError };
  