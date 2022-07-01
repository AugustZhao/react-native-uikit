# react-native-uikits

uikit

## Installation

```sh
npm install react-native-uikits
```

## Usage

```js
import { multiply } from 'react-native-uikits';

// ...

const result = await multiply(3, 7);
```

```js
import { sendEvent, useRegisterEvent } from 'react-native-uikits';

// ...

const Demo = () => {
  sendEvent('eventType', { xxx: 'xxx' });

  useRegisterEvent<{ xxx: string }>('eventType', (data) => {
    data.xxx;
  });
  return <></>;
};
```

```js
import { useAppState, useKeyboardHeight } from 'react-native-uikits';

// ...

const Demo = () => {

  useAppState(appState => {
    console.log(appState)
  })

  const keyboardHeight = useKeyboardHeight();

  return <></>;
};
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT
