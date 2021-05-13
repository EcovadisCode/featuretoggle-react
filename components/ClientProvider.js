import { Anakin } from './clients/Anakin';
import { MockClient } from './clients/MockClient';

const clients = {
  Anakin,
  MockClient,
};

export const ClientProvider = provider => clients[provider];
