import axios from 'axios';
import * as React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

// https://avo-v3fp.onrender.com/add_entries
export default function ViewLife() {
  const syncData = () => {
    axios.post('http://tehilapelled16.pythonanywhere.com/add_entries').catch(function (error: { message: string; }) {
      console.log(error.message + " NOT ABLE TO SYNC ENTRIES");
    });
  };
  return (
    <View style={styles.container}>
 <TouchableOpacity style={styles.buttonSend}>
        <Button title="Sync with arango" onPress={syncData} color="transparent" />
      </TouchableOpacity>     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  buttonSend: {
    height: 40,
    borderRadius: 25,
    backgroundColor: "#8d015a",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginTop: 15,
    width: 200
  },
});
