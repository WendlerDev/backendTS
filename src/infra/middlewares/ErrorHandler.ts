import { NextFunction, Request, Response } from "express";
import CustomError from "./CustomError";

class ErrorHandler {
    public handleError(
        error: Error,
        request: Request,
        response: Response,
        next: NextFunction
    ) {
        let status = 500;
        const message = error.message;
        console.log(`[Erro] status: ${status}, Message: ${message}`);

        if (error instanceof CustomError) {
            status = error.statusCode;
            response.status(status).json({
                status: error.statusCode,
                message
            });
            return;
        }

        response.status(status).json({
            status,
            message,
        });
    }

    public static init(): (error: Error, request: Request, response: Response, next: NextFunction) => void {
        const errorHandler = new ErrorHandler();
        return errorHandler.handleError.bind(errorHandler);
    }
}

export default ErrorHandler;