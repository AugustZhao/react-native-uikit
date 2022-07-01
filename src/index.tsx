function multiply(a: number, b: number): Promise<number> {
  return Promise.resolve(a * b);
}

import { sendEvent, useRegisterEvent } from './eventBus';

export default {
  sendEvent,
  useRegisterEvent,
  multiply,
};
