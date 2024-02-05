import * as React from 'react';

import { ExpoWebdavServerViewProps } from './ExpoWebdavServer.types';

export default function ExpoWebdavServerView(props: ExpoWebdavServerViewProps) {
  return (
    <div>
      <span>{props.name}</span>
    </div>
  );
}
