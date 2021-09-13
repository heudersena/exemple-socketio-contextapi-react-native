import React, { createContext, useContext, useMemo, useEffect } from 'react';
import socketio from 'socket.io-client';

const WebSocketContext = createContext({});

const WebSocketProvaider = ({ children }) => {

  const token = 'ExponentPushToken[iju5MENXlajUrKFCR6wrIE]';
  const session_id = 'e756af60d6f08820599c928bf1855e89';

  // Conexão com o WebSockt
  const socket = useMemo(() => socketio("http://192.168.1.101:3322", {}))

  useEffect(() => {
    socket.emit("/login:zabbix", { session_id, token });
  }, [])


  return (
    <WebSocketContext.Provider
      value={{ socket }}>
      {children}
    </WebSocketContext.Provider >
  );
}


function useWebSocketContext() {
  const context = useContext(WebSocketContext);
  if (!context) {
    throw new Error('o useWebSocketContext não foi iniciado/usado');
  }
  return context;
}

export { WebSocketProvaider, useWebSocketContext };