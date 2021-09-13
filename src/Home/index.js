import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useWebSocketContext } from "../../src/context/websocket"

const Home = () => {

  const { socket } = useWebSocketContext()
  
  const eventSubmit = () => {
    socket.emit("event", "teste")
  }

  return (
    <View style={styles.container}>
      <Text>Open up App.js By Heuder Rodrigues!</Text>
      <Button title="EVENT" onPress={eventSubmit} />
    </View>
  )
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


export default Home;