import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  SafeAreaView,
  Text,
  View,
  Button,
} from 'react-native';
import {request, check, PERMISSIONS} from 'react-native-permissions';
import HoundifyComponent from 'houndify-react-native';

const checkPermission = () => {
  console.log('Checking permissions');
  check(PERMISSIONS.IOS.MICROPHONE).then(response => {
    if (response === 'denied') {
      request(
        Platform.OS === 'ios'
          ? PERMISSIONS.IOS.MICROPHONE
          : PERMISSIONS.ANDROID.MICROPHONE,
      ).then(result => {
        if (result === 'granted') {
          console.log('Microphone permission granted');
        }
        console.log(result);
      });
    }
    console.log(response);
  });
};

export default class App extends Component {
  render() {
    checkPermission();
    return (
      <SafeAreaView>
        <Text>Hello World!</Text>
        <HoundifyComponent
          host="ws://localhost:3000"
          onStart={() => {
            // Your Code
            console.log('starting');
          }}
          onResponse={response => {
            // Your Code
            console.log('response', response);
          }}
          onError={error => {
            console.log('error', error);
            // Your Code
          }}>
          {({transcription, writtenResponse, isRecording, start, abort}) => (
            <>
              <Text>{transcription}</Text>
              <Text>{writtenResponse}</Text>
              {isRecording ? (
                <Button onPress={abort} title="Stop" />
              ) : (
                <Button onPress={start} title="Start" />
              )}
            </>
          )}
        </HoundifyComponent>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({});
