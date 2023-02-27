import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet} from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import Routes from './src/Routes/Routes';

export default function App() {

  return (
    <PaperProvider>
        <Routes />
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
});
