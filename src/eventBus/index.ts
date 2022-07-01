import { DeviceEventEmitter } from 'react-native';
import { useEffect } from 'react';

export const sendEvent = (event: string, value: any) => {
  DeviceEventEmitter.emit(event, value);
};

export const useRegisterEvent = <T>(
  event: string,
  callback: (data: T) => void
) => {
  useEffect(() => {
    const emitter = DeviceEventEmitter.addListener(event, callback);
    return () => {
      emitter.remove();
    };
  });
};
