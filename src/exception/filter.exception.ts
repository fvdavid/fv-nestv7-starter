import { ExceptionFilter, Catch, HttpException, ArgumentsHost, HttpStatus } from "@nestjs/common";
import { Request, Response } from 'express';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
    
    catch(exception: unknown, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const res = ctx.getResponse<Response>();
        const req = ctx.getRequest<Request>();
        
        const status = exception instanceof HttpException
            ? exception.getStatus()
            : HttpStatus.INTERNAL_SERVER_ERROR;

        res
            .status(status)
            .json({
                statusCode: status,
                timestamp: new Date().toISOString(),
                path: req.url,
            });
    }

}