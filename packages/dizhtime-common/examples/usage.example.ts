// ===============================================================================
// USAGE.EXAMPLE.TS
// ===============================================================================
// This file contains usage examples for the @dizhtime/common package.
// ===============================================================================
import { HttpStatusCode, ResponseHandler, ApiResponse } from "../src/index";

// Example 1: Basic controller usage
export class UserController {
  async getUser(userId: string): Promise<ApiResponse<any>> {
    try {
      // Your business logic here
      const user = { id: userId, name: "John Doe" };

      // Return success response using shared utility
      return ResponseHandler.success(user, "User retrieved successfully");
    } catch (error) {
      // Return error response using shared utility
      return ResponseHandler.error(
        HttpStatusCode.INTERNAL_SERVER_ERROR,
        "Failed to retrieve user",
        error instanceof Error ? error.message : "Unknown error"
      );
    }
  }

  async createUser(userData: any): Promise<ApiResponse<any>> {
    try {
      // Your business logic here
      const newUser = { id: "123", ...userData };

      // Return created response
      return ResponseHandler.created(newUser, "User created successfully");
    } catch (error) {
      return ResponseHandler.error(
        HttpStatusCode.BAD_REQUEST,
        "Failed to create user",
        error instanceof Error ? error.message : "Invalid data"
      );
    }
  }
}

// Example 2: Express.js route handler
export const userRoutes = {
  getUser: async (req: any, res: any) => {
    const response = await new UserController().getUser(req.params.id);

    // Use the status code from the response
    res.status(response.statusCode).json(response);
  },

  createUser: async (req: any, res: any) => {
    const response = await new UserController().createUser(req.body);

    // Use the status code from the response
    res.status(response.statusCode).json(response);
  },
};

// Example 3: Error handling middleware
export const errorHandler = (error: any, req: any, res: any, next: any) => {
  const errorResponse = ResponseHandler.error(
    HttpStatusCode.INTERNAL_SERVER_ERROR,
    "Something went wrong",
    error.message
  );

  res.status(errorResponse.statusCode).json(errorResponse);
};
