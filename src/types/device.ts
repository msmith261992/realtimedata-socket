import { Movement } from './movement';

export type Device = {
  deviceId: string;
  temperature: number;
  movement: Movement;
  status: 'Online' | 'Offline';
  video: string | null;
  active: boolean;
};
