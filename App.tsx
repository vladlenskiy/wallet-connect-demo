import {useWalletConnect} from "@walletconnect/react-native-dapp";
import React from 'react';
import {Button, View} from 'react-native';

export default function App(): JSX.Element {
  const connector = useWalletConnect();

  if (!connector.connected) {
    return(
      <View style={{flex: 1, justifyContent: 'center'}}>
        <Button title="Connect" onPress={() => connector.connect()}  />
     </View>
    );
  }
  return <Button title="Kill Session" onPress={() => connector.killSession()} />;
}
