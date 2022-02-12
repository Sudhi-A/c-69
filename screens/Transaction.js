import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity} from "react-native";
import * as Permissions from "expo-permissions";
import {BarCodeScanner} from "expo-barcode-scanner";



export default class TransactionScreen extends Component {
constructor(props){
  super(props);
  this.state = {
    domState : "normal",
    hasCameraPermissions : "null",
    Scanned : false,
    ScannedData : ""
  };
}
getCameraPermissions =async domState =>{
  const {status} =await Permissions.Askasync(Permissions.CAMERA);
  this.setState({
    hasCameraPermissions:status ==="granted",
    domState:domState,
    Scanned:false
  });
};


  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Transaction Screen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#5653D4"
  },
  text: {
    color: "#ffff",
    fontSize: 30
  }
});
