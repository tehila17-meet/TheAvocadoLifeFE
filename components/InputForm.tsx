
import axios from 'axios';
import * as React from 'react';
import { useEffect, useState } from 'react';
import { Button, DevSettings, RefreshControl, ScrollView, StyleSheet, TextInput, TouchableHighlight, TouchableOpacity, View } from 'react-native';
import { TEXT } from '../styles/styles';

import RNRestart from 'react-native-restart';

import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp
} from 'react-native-responsive-screen';
export function DataInputForm({ currentCollection }) {

  //Get Defining Characteristic List
  const [definingtraitOptions, setDefiningCharectaristicOptions] = useState([])
  useEffect(() => {
    axios.get("http://tehilapelled16.pythonanywhere.com/get_document_names/Defining-Traits")
      .then((response) => setDefiningCharectaristicOptions(response.data.result))
  }, []);

  //Form Data Collection Holders
  const [title, setTitle] = useState("")
  const [impactRating, setImpactRating] = useState("")
  const [definingtraits, setDefiningCharectaristics] = useState(Array())

  //Form Data Collection Functions
  // const handleTitleChange = (e) => {
  //   console.log(e.target.value)

  //   setTitle(e.target.value);
  // };
  // const handleImpactRatingChange = (e) => {
  //   setImpactRating(e.target.value);
  // };
  const handleDefiningCharectaristicAddition = (definingTraitName: any) => {
    console.log(definingTraitName)

    // let definingtraitName = e.target.innerText
    if (!definingtraits.includes(definingTraitName)) {
      definingtraits.push(definingTraitName)
      // e.target.style.backgroundColor = '#51caef'
      setDefiningCharectaristics(definingtraits);
    }
    else if (definingtraits.includes(definingTraitName) && definingtraits.length > 0) {
      definingtraits.pop(definingTraitName)
      // e.target.style.backgroundColor = 'transparent'
      setDefiningCharectaristics(definingtraits)
    }
  };

  // const startReload = ()=> RNRestart.Restart();

  //Form Data Sender
  const sendEntryData = () => {
    console.log(currentCollection + " " + title + " " + definingtraits)
    axios.post('http://tehilapelled16.pythonanywhere.com/save_entries_locally', {
      affecting_collection: currentCollection,
      title: title,
      impact_rating: impactRating,
      defining_traits: definingtraits
    }).then(response => {

      if (response.status == 200) {
        console.log("Sent to local")

      }
      // startReload()
      RNRestart.Restart();

    }).catch(function (error) {
      console.log(error.message + " NOT ABLE TO SEND ENTRIES :(");
    });
  };



  return (

    <View style={styles.content}>
      <View style={styles.formInputs}>
        <TextInput
          style={styles.inputFieldText}
          keyboardType="text"
          autoFocus={true}
          placeholder="Title"
          value={title}
          placeholderTextColor="#fff"
          onChangeText={setTitle} />

        <TextInput
          style={styles.inputFieldNumeric}
          keyboardType="numeric"
          autoFocus={true}
          placeholder="Impact Rating"
          value={impactRating}
          placeholderTextColor="#fff"
          onChangeText={setImpactRating}
        />
      </View>
      <View style={styles.definingtraitRow}>
        {definingtraitOptions.map(definingtrait => (
          <View style={styles.definingtraitBox}>
            <TouchableHighlight
              activeOpacity={0.6}>
              <Button title={definingtrait} onPress={() => handleDefiningCharectaristicAddition(definingtrait)} color="transparent" />
            </TouchableHighlight>
          </View>
        ))}
      </View>
      <TouchableOpacity style={styles.buttonSend}>
        <Button title="Add Entry" onPress={sendEntryData} color="transparent" />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#1d2236"

  },
  formInputs: {
    marginBottom: 30,
    flexDirection: 'row',
    justifyContent: "space-between",

  },
  inputFieldText: {
    borderRadius: 30,
    paddingHorizontal: 30,
    fontSize: 18,
    color: "#fff",
    backgroundColor: "transparent",
    textAlign: "center",
    marginRight: 6,
    textAlignVertical: "center",
    width: wp('50%'),
    height: hp('7%'),
    borderColor: "#fff",
    borderWidth: 3
  },
  inputFieldNumeric: {
    borderRadius: 30,
    paddingHorizontal: 15,
    fontSize: 16,
    color: "#fff",
    backgroundColor: "transparent",
    textAlign: "center",
    textAlignVertical: "center",
    width: wp('40%'),
    height: hp('7%'),
    borderColor: "#fff",
    borderWidth: 3
  },
  buttonSend: {
    height: 40,
    borderRadius: 25,
    backgroundColor: "#8d015a",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginTop: 15,
    ...TEXT,
    width: 200
  },
  content: {
    flex: 1,
    paddingHorizontal: 15,
    paddingVertical: 10,
    width: wp('100%'),

  },
  definingtraitRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',

    justifyContent: 'space-between'
  },
  definingtraitBox: {
    marginRight: 1,
    marginTop: 2,
    borderColor: '#51caef',
    borderWidth: 1
  }

});