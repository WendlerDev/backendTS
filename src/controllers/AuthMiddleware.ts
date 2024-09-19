import { NextFunction, Request, Response } from "express";

export default class Auth {
  private authToken(request: Request, response: Response, next: NextFunction) {
    const apiKey = request.headers["api-key"];
    if (apiKey) {
      if (apiKey === "secret_key") {
        next();
        return;
      }
    }
    return response.status(401).json("User not authorized");
  }

  public static protect() {
    const authService = new Auth()
    return authService.authToken;
  }
}
