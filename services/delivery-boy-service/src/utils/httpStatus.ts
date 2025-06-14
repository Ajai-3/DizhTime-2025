// HTTP Status Codes
export enum HttpStatusCode {
    OK = 200,
    CREATED = 201,
    BAD_REQUEST = 400,
    UNAUTHORIZED = 401,
    FORBIDDEN = 403,
    NOT_FOUND = 404,
    CONFLICT = 409,
    INTERNAL_SERVER_ERROR = 500
}

// Response Handler
export class ResponseHandler {
    static success(data: any, message: string = 'Success') {
        return {
            success: true,
            statusCode: HttpStatusCode.OK,
            message,
            data
        };
    }

    static error(statusCode: HttpStatusCode, message: string, error?: any) {
        return {
            success: false,
            statusCode,
            message,
            error
        };
    }
} 