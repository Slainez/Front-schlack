import { ChannelType } from '../enums/channel-type';
import { Message } from '../models/message';

export interface ChannelI {
  id: number;
  name: string;
  listMessage: Message[]; //faire le lien avec message?
  channelType: ChannelType;
}
