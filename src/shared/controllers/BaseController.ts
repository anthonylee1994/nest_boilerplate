import { Get, Controller } from '@nestjs/common';
import { LoggerService } from '../services/LoggerService';

export class BaseController {

    protected readonly logger: LoggerService;

    constructor(name: string) {
        this.logger = new LoggerService(name);
    }
}
