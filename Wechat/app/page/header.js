'use strict';
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  PixelRatio,
  Text,
  View,
} from 'react-native';

class Header extends Component {
  render(){
    return (
      <View style={styles.flexs}>
        <Text style={styles.title}>
          <Text style={styles.wangyi}>网易</Text>
          <Text style={styles.xinwen}>新闻</Text>
          <Text>有态度"</Text>
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  flexs:{
    marginTop: 25,
    height: 50,
    borderBottomWidth: 3/PixelRatio.get(),
    borderBottomColor: '#EF2D36',
    alignItems: 'center',
  },
  title:{
    fontSize: 25,
    fontWeight: 'bold',
    alignItems: 'center',
  },
  wangyi:{
    color: '#CD1D1C',
  },
  xinwen:{
    color: '#FFF',
    backgroundColor: '#CD1D1C',
  },
});

module.exports = Header;