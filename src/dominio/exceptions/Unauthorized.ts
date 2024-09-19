import CustomError from "./CustomError";

class Unauthorized extends CustomError{
    constructor(message: string = 'Not authorized') {
        super(message, 401);
    }
}

export default Unauthorized;