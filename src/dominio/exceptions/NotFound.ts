import CustomError from "./CustomError";

class NotFound extends CustomError{
    constructor(message: string = 'Not found') {
        super(message, 404);
    }
}

export default NotFound;