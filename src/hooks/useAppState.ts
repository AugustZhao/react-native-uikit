import type { AppStateStatus } from 'react-native';
import { AppState } from 'react-native';
import React from 'react';

//传入一个监听函数，appState变化的时候执行
export default function useAppState(
  listener: (appState: AppStateStatus) => void
) {
  const [appState, setAppState] = React.useState(AppState.currentState);
  React.useEffect(() => {
    const currentAppState = AppState.currentState;
    if (currentAppState !== appState) {
      setAppState(currentAppState);
      listener(currentAppState);
    }
    const appStateSubscription = AppState.addEventListener(
      'change',
      (nextAppState) => {
        if (nextAppState !== appState) {
          setAppState(nextAppState);
          listener(nextAppState);
        }
      }
    );
    return () => {
      appStateSubscription.remove();
    };
  }, [listener, appState]);
}
