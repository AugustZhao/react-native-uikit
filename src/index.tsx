function multiply(a: number, b: number): Promise<number> {
  return Promise.resolve(a * b);
}

import { sendEvent, useRegisterEvent } from './eventBus';
import useAppState from './hooks/useAppState';
import useKeyboardHeight from './hooks/useKeyboardHeight';

export default {
  multiply,
  sendEvent,
  useRegisterEvent,
  useAppState,
  useKeyboardHeight,
};
