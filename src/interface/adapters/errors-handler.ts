import { ErrorContract } from '.././../domain/contracts/error-contracts';
import ErrorHandler from '../../utils/error-handler';
import { HttpStatusCode } from '../../utils/status-code';

class ErrorsHandler implements ErrorContract {
  errorBadRequest(message: string) {
    return new ErrorHandler(HttpStatusCode.BAD_REQUEST, message);
  }
}

export default ErrorsHandler;
