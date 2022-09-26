import { MessageI } from '../interfaces/message-i';
import { Channel } from './channel';

export class Message implements MessageI {
  id!: number;
  user!: string;
  content!: string;
  timestamp!: Date;
  channel!: Channel; //faire le lien avec channel?
  constructor(obj?: Partial<Message>) {
    if (obj) {
      Object.assign(this, obj);
    }
  }
}
