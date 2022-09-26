import { ChannelType } from '../enums/channel-type';
import { ChannelI } from '../interfaces/channel-i';
import { Message } from './message';

export class Channel implements ChannelI {
  id!: number;
  name!: string;
  listMessage!: Message[]; //faire le lien avec message?
  channelType!: ChannelType;
  constructor(obj?: Partial<Channel>) {
    if (obj) {
      Object.assign(this, obj);
    }
  }
}
