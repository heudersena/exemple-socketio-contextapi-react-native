import React from 'react';
import AppProvaider from "./src/context/index"
import Home from './src/Home';
if (__DEV__) {
  import("./ReactotronConfig").then(() => console.log("Reactotron Configured"));
}


export default function App() {

  return (
    <AppProvaider>
      <Home />
    </AppProvaider>
  );
}