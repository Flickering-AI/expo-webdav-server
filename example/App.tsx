import { Button, StyleSheet, Text, View } from "react-native";

import * as ExpoWebdavServer from "expo-webdav-server";
import * as FileSystem from "expo-file-system";
import { useSyncExternalStore } from "react";
import * as Network from "expo-network";

let nextId = 0;
let ipAddress: string;
let listeners = [];

export const appStore = {
  async getIp() {
    ipAddress = (await Network.getIpAddressAsync()) + ":8080";
    emitChange();
  },
  subscribe(listener) {
    console.log("listener", listener);
    listeners = [...listeners, listener];
    return () => {
      listeners = listeners.filter((l) => l !== listener);
    };
  },
  getSnapshot() {
    return ipAddress;
  },
};

function emitChange() {
  for (let listener of listeners) {
    listener();
  }
}

export default function App() {
  const address = useSyncExternalStore(appStore.subscribe, appStore.getSnapshot);
  return (
    <View style={styles.container}>
      <Text>{ExpoWebdavServer.hello()}</Text>
      <Button
        title="Start a webdav server"
        onPress={() => {
          appStore.getIp();
          ExpoWebdavServer.webdav(FileSystem.documentDirectory!.replace("file://", "").replace("/files/", ""));
        }}
      />
      <Text>webdav server listen on: {address}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
