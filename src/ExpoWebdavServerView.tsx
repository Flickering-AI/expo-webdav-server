import { requireNativeViewManager } from 'expo-modules-core';
import * as React from 'react';

import { ExpoWebdavServerViewProps } from './ExpoWebdavServer.types';

const NativeView: React.ComponentType<ExpoWebdavServerViewProps> =
  requireNativeViewManager('ExpoWebdavServer');

export default function ExpoWebdavServerView(props: ExpoWebdavServerViewProps) {
  return <NativeView {...props} />;
}
