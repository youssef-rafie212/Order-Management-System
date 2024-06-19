import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpStatus,
} from '@nestjs/common';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';

@Catch(PrismaClientKnownRequestError)
export class DatabaseExceptionFilter implements ExceptionFilter {
  catch(exception: PrismaClientKnownRequestError, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    let status = HttpStatus.INTERNAL_SERVER_ERROR;
    let message = 'Internal Server Error';

    switch (exception.code) {
      case 'P2002': // Unique constraint violation
        status = HttpStatus.CONFLICT;
        message = 'Duplicate entry';
        break;
      case 'P2003': // For handling ID fields that doesn't exist
        status = HttpStatus.NOT_FOUND;
        message = 'Provided ID does not match any documents';
        break;
      case 'P2025': // Related record not found
        status = HttpStatus.NOT_FOUND;
        message = 'Related record not found';
        break;
      case 'P2027': // Record to update or delete does not exist
        status = HttpStatus.NOT_FOUND;
        message = 'Record to update or delete does not exist';
        break;
      case 'P2010': // Invalid foreign key constraint
        status = HttpStatus.BAD_REQUEST;
        message = 'Invalid foreign key constraint';
        break;

      default:
        // Fallback
        message = exception.message || message;
        break;
    }

    response.status(status).json({
      statusCode: status,
      message,
    });
  }
}
