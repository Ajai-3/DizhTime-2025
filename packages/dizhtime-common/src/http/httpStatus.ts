//=================================================================================================================
// HTTP STATUS CODES
//=================================================================================================================
// This file contains the HTTP status codes and their corresponding messages.
//=================================================================================================================
export enum HttpStatusCode {
  // 1xx Informational
  CONTINUE = 100,
  SWITCHING_PROTOCOLS = 101,
  PROCESSING = 102,

  // 2xx Success
  OK = 200,
  CREATED = 201,
  ACCEPTED = 202,
  NON_AUTHORITATIVE_INFORMATION = 203,
  NO_CONTENT = 204,
  RESET_CONTENT = 205,
  PARTIAL_CONTENT = 206,

  // 3xx Redirection
  MULTIPLE_CHOICES = 300,
  MOVED_PERMANENTLY = 301,
  FOUND = 302,
  SEE_OTHER = 303,
  NOT_MODIFIED = 304,
  USE_PROXY = 305,
  TEMPORARY_REDIRECT = 307,
  PERMANENT_REDIRECT = 308,

  // 4xx Client Errors
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  PAYMENT_REQUIRED = 402,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  METHOD_NOT_ALLOWED = 405,
  NOT_ACCEPTABLE = 406,
  PROXY_AUTHENTICATION_REQUIRED = 407,
  REQUEST_TIMEOUT = 408,
  CONFLICT = 409,
  GONE = 410,
  LENGTH_REQUIRED = 411,
  PRECONDITION_FAILED = 412,
  PAYLOAD_TOO_LARGE = 413,
  URI_TOO_LONG = 414,
  UNSUPPORTED_MEDIA_TYPE = 415,
  RANGE_NOT_SATISFIABLE = 416,
  EXPECTATION_FAILED = 417,
  UNPROCESSABLE_ENTITY = 422,
  TOO_MANY_REQUESTS = 429,

  // 5xx Server Errors
  INTERNAL_SERVER_ERROR = 500,
  NOT_IMPLEMENTED = 501,
  BAD_GATEWAY = 502,
  SERVICE_UNAVAILABLE = 503,
  GATEWAY_TIMEOUT = 504,
  HTTP_VERSION_NOT_SUPPORTED = 505,
}

//=================================================================================================================
// STATUS CODES ALIAS
//=================================================================================================================
// Alternative export for easier importing: import { StatusCodes } from '@dizhtime/common'
//=================================================================================================================
export const StatusCodes = HttpStatusCode;

//=================================================================================================================
// STATUS MESSAGES
//=================================================================================================================
// This file contains the HTTP status codes and their corresponding messages.
//=================================================================================================================
export const StatusMessages = {
  [HttpStatusCode.OK]: "Success",
  [HttpStatusCode.CREATED]: "Resource created successfully",
  [HttpStatusCode.BAD_REQUEST]: "Bad request",
  [HttpStatusCode.UNAUTHORIZED]: "Unauthorized access",
  [HttpStatusCode.FORBIDDEN]: "Access forbidden",
  [HttpStatusCode.NOT_FOUND]: "Resource not found",
  [HttpStatusCode.CONFLICT]: "Resource conflict",
  [HttpStatusCode.UNPROCESSABLE_ENTITY]: "Unprocessable entity",
  [HttpStatusCode.INTERNAL_SERVER_ERROR]: "Internal server error",
  [HttpStatusCode.SERVICE_UNAVAILABLE]: "Service unavailable",
} as const;

//=================================================================================================================
// API RESPONSE
//=================================================================================================================
// This file contains the HTTP status codes and their corresponding messages.
//=================================================================================================================
export interface ApiResponse<T = any> {
  success: boolean;
  statusCode: HttpStatusCode;
  message: string;
  data?: T;
  error?: string;
}

//=================================================================================================================
// RESPONSE HANDLER
//=================================================================================================================
// This file contains the HTTP status codes and their corresponding messages.
//=================================================================================================================
export class ResponseHandler {
  static success<T>(
    data?: T,
    message: string = StatusMessages[HttpStatusCode.OK]
  ): ApiResponse<T> {
    return {
      success: true,
      statusCode: HttpStatusCode.OK,
      message,
      data,
    };
  }

  static created<T>(
    data?: T,
    message: string = StatusMessages[HttpStatusCode.CREATED]
  ): ApiResponse<T> {
    return {
      success: true,
      statusCode: HttpStatusCode.CREATED,
      message,
      data,
    };
  }

  static error(
    statusCode: HttpStatusCode = HttpStatusCode.INTERNAL_SERVER_ERROR,
    message: string = StatusMessages[HttpStatusCode.INTERNAL_SERVER_ERROR],
    error?: string
  ): ApiResponse {
    return {
      success: false,
      statusCode,
      message,
      error,
    };
  }
}
