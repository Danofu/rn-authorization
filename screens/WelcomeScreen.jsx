import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { StyleSheet, Text, View } from 'react-native';

import { AuthContext } from 'auth-context';

function WelcomeScreen() {
  const [fetchedMessage, setFetchedMessage] = useState('');
  const { token } = useContext(AuthContext);

  useEffect(() => {
    (async () => {
      const { data: message } = await axios.get(
        `https://react-native-course-6f73f-default-rtdb.europe-west1.firebasedatabase.app/message.json?auth=${token}`
      );
      setFetchedMessage(message);
    })();
  }, [token]);

  return (
    <View style={styles.rootContainer}>
      <Text style={styles.title}>Welcome!</Text>
      <Text>You authenticated successfully!</Text>
      <Text>{fetchedMessage}</Text>
    </View>
  );
}

export default WelcomeScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 32,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
});
