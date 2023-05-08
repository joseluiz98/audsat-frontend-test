import { LogType } from '../enums/log-type';
import { LogBody } from './log-body';

export class Log {
  constructor(
    public type: LogType,
    public body: LogBody,
    public timestamp: string = new Date().toISOString()
  ) {}
}
