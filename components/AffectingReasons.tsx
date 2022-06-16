
import { Button, StyleSheet, Text, View, TextInput } from 'react-native';
import React from 'react';
import { TEXT } from '../styles/styles';
import { useState, useEffect } from 'react';
import axios from 'axios';

export function AffectingReasons({ currentCollection, chosenDefiningTraits, allAffectingReasonsMapped }) {

  
  //Form Data Collection Holders
  const [affectingReasons, setAffectingReasons] = useState(Array())
  const [ currentDefiningTrait, setDefiningTrait] = useState(String)
  const [ mappedAffectingReason, setMappedAffectingReasons] = useState(Object)
  setDefiningTrait(chosenDefiningTraits[0])

const handleAffectingReasonsInput = (affectingReason) => {

        let currentAffectingReasons =  affectingReasons
        currentAffectingReasons.push(affectingReason)
        setAffectingReasons(currentAffectingReasons)
    }

   const getNextDefiningTrait = () => {
    let currentIndex = chosenDefiningTraits.indexof(currentDefiningTrait)
    if (currentIndex == chosenDefiningTraits.length - 1){
        mappedAffectingReason[currentDefiningTrait] = affectingReasons
        setMappedAffectingReasons(mappedAffectingReason)
        allAffectingReasonsMapped(mappedAffectingReason)
        return "Done"
    }
    else { 
        mappedAffectingReason[currentDefiningTrait] = affectingReasons
        setMappedAffectingReasons(mappedAffectingReason)
        return chosenDefiningTraits[currentIndex+1]
    }

   }


  return (
    
    <View style={styles.container}>
          <Text >
     Why was { currentDefiningTrait } affected? Up to 2 reasons  
    </Text>
      <View style={styles.formInputs}>
        <TextInput
          style={styles.inputFieldText}
          keyboardType="text"
          autoFocus={true}
          placeholder="Affecting Reason 2"
          placeholderTextColor="#fff"
          onChange={handleAffectingReasonsInput} />

           <TextInput
          style={styles.inputFieldText}
          keyboardType="text"
          autoFocus={true}
          placeholder="Affecting Reason 2"
          placeholderTextColor="#fff"
          onChange={handleAffectingReasonsInput} />

       <Button onPress={ getNextDefiningTrait }  title="Next Trait"/>       
      </View>
    
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
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: "center",
    maxWidth:450,
    flexWrap: "wrap",
    alignSelf:"center",

  },
  inputFieldText: {
    height: 50,
    paddingHorizontal: 30,
    fontSize: 18,
    color: "#fff",
    backgroundColor: "transparent",
    textAlign: "center",
    textAlignVertical: "center",
    flex: 1,
    borderColor: "#fff",
    borderWidth: 2,
    marginBottom:10,
    marginRight:10,
    maxWidth:300
  },
  inputFieldNumeric: {
    height: 50,
    paddingHorizontal: 15,
    fontSize: 16,
    color: "#fff",
    backgroundColor: "transparent",
    textAlign: "center",
    textAlignVertical: "center",
    flex: 1,
    borderColor: "#fff",
    borderWidth: 2,
    maxWidth:150  },

  buttonSend: {
    height: 40,
    backgroundColor: "#8d015a",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginTop: 15,
    ...TEXT,
    maxWidth: 150,
    marginBottom:15
  },
  content: {
    flex: 1,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  definingtraitRow: {
    flexDirection: 'row',
    flexWrap: "wrap",
    justifyContent: 'space-evenly'
  },
  definingtraitBox: {
    
   
    borderColor: '#51caef',
    borderWidth: 1
  }

});