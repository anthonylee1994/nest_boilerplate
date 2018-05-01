import { Get, Controller } from '@nestjs/common';
import { LoggerService } from './LoggerService';

export class BaseService {

    protected readonly logger: LoggerService;

    constructor(name: string) {
        this.logger = new LoggerService(name);
    }
}
