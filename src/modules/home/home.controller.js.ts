import { Handler } from '@common/types/handler.types';

export const welcome: Handler = (req, res) => {
  return res.send('Welcome to app!');
};
