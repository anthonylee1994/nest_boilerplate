import { BaseController } from '../../shared/controllers/BaseController';
import { Get, Controller } from '@nestjs/common';

@Controller()
export class AppController extends BaseController {

    constructor() {
        super(AppController.name);
    }

    @Get()
    root(): string {
        return 'Hello World!';
    }
}
