import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';

import { Groups } from '@screens/Groups';
import { NewGroup } from '@screens/NewGroup';
import { Loading } from '@components/Loading';
import theme from '@theme/index';

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar 
        style='light'
        translucent
        backgroundColor='transparent'
      />
      { fontsLoaded ? <NewGroup /> : <Loading /> }
    </ThemeProvider>
  );
}

