import io, { Socket } from 'socket.io-client';

// To enhance further, set up react-native-config for different environment setups
export const socket: Socket = io('http://localhost:3000');
