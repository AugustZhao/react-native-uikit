import React from 'react';
import type { EmitterSubscription } from 'react-native';
import { Keyboard, Platform } from 'react-native';

//获取键盘高度
export default function useKeyboardHeight() {
  const [height, setHeight] = React.useState(0);

  React.useEffect(() => {
    let subscriptions: EmitterSubscription[];

    if (Platform.OS === 'ios') {
      subscriptions = [
        Keyboard.addListener('keyboardWillShow', (event) => {
          setHeight(event.endCoordinates.height);
        }),
        Keyboard.addListener('keyboardWillHide', () => {
          setHeight(0);
        }),
      ];
    } else {
      subscriptions = [
        Keyboard.addListener('keyboardDidShow', (event) => {
          setHeight(event.endCoordinates.height);
        }),
        Keyboard.addListener('keyboardDidHide', () => {
          setHeight(0);
        }),
      ];
    }

    return () => {
      subscriptions.forEach((s) => s.remove());
    };
  }, []);

  return height;
}
