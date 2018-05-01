import { serverConfig } from '../../config/serverConfig';
import { LoggerService } from '../services/LoggerService';
import { Component } from '@nestjs/common';
import * as schedule from 'node-schedule-tz';

export class BaseJob {

    protected scheduler: schedule.Job;
    protected logger: LoggerService;

    constructor(private name: string, private cronExpression: string | any) {
        this.logger = new LoggerService(name);
        this.execute = this.execute.bind(this);
        this.scheduler = schedule.scheduleJob(this.cronExpression, serverConfig.timezone, this.execute);
    }

    public execute() {
        this.logger.info('Hello, Cron Job');
    }
}