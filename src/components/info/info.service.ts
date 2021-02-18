import { Injectable } from '@nestjs/common';
import * as pckg from '../../../package.json';

const appStartedTime = new Date();

@Injectable()
export class InfoService {
  app () {
    return {
      version: pckg.version,
      appStartedTime,
      currentMachineTime: new Date()
    }
  }
}
