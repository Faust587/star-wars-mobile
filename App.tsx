import React from 'react';
import {PaperProvider} from 'react-native-paper';
import {Provider as ReduxProvider} from 'react-redux';
import {store} from './src/redux';
import {RootNavigation} from './src/navigations/RootNavigation.tsx';

function App(): React.JSX.Element {
  return (
    <ReduxProvider store={store}>
      <PaperProvider>
        <RootNavigation />
      </PaperProvider>
    </ReduxProvider>
  );
}

export default App;
