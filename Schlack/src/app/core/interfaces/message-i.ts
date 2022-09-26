import { ChannelI } from './channel-i';

export interface MessageI {
  id: number;
  user: string;
  content: string;
  timestamp: Date;
  channel: ChannelI; //faire le lien avec channel?
}
