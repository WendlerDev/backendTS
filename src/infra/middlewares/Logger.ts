import { NextFunction, Request, Response } from "express";

export default class Logger {
    public static init(request: Request, response: Response, next: NextFunction) {
        const dateTime = new Date().toUTCString();
        console.log(`Date: ${dateTime}, Method usage: ${request.method}, and URL is: ${request.url}`);
        next();
    }
}