import { StyleSheet, Text, View } from 'react-native';

import * as ExpoWebdavServer from 'expo-webdav-server';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>{ExpoWebdavServer.hello()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
