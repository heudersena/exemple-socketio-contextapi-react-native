import React from 'react';

import { WebSocketProvaider } from './websocket';

const AppProvaider = ({ children }) => {
  return <WebSocketProvaider>{children}</WebSocketProvaider>;
};

export default AppProvaider;