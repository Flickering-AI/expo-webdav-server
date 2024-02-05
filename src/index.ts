import { NativeModulesProxy, EventEmitter, Subscription } from 'expo-modules-core';

// Import the native module. On web, it will be resolved to ExpoWebdavServer.web.ts
// and on native platforms to ExpoWebdavServer.ts
import ExpoWebdavServerModule from './ExpoWebdavServerModule';
import ExpoWebdavServerView from './ExpoWebdavServerView';
import { ChangeEventPayload, ExpoWebdavServerViewProps } from './ExpoWebdavServer.types';

// Get the native constant value.
export const PI = ExpoWebdavServerModule.PI;

export function hello(): string {
  return ExpoWebdavServerModule.hello();
}

export async function setValueAsync(value: string) {
  return await ExpoWebdavServerModule.setValueAsync(value);
}

const emitter = new EventEmitter(ExpoWebdavServerModule ?? NativeModulesProxy.ExpoWebdavServer);

export function addChangeListener(listener: (event: ChangeEventPayload) => void): Subscription {
  return emitter.addListener<ChangeEventPayload>('onChange', listener);
}

export { ExpoWebdavServerView, ExpoWebdavServerViewProps, ChangeEventPayload };
