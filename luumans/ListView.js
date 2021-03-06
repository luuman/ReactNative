import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  ListView,
  Image,
  TouchableHighlight,
  View
} from 'react-native';

class luumans extends Component {
  constructor(props) {
  super(props);
  const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
  this.state = {
    dataSource: ds.cloneWithRows(this._genRows(-1))
  };
  }
  _genRows(flag){
    const dataBlob = [];
    for(let i = 0 ; i< 88 ; i ++ ){
      if(i == flag){
      dataBlob.push("非著名程序员+我被打了"+i);
      }else{
       dataBlob.push("非著名程序员"+i);
      }
    }
    return dataBlob;
  }
  render() {
  return (
    <ListView
      dataSource={this.state.dataSource}
      renderRow={this._renderRow.bind(this)}
    />
  );
  }
  _renderRow (rowData,sectionID, rowID) {
  return (
    <TouchableHighlight onPress={() => {
      this._pressRow(rowData,rowID);
    }}
    underlayColor='red'
    >
      <View>
      <View style={styles.row}>
        <Image style={{width:40,height:40}} source={require('./app/img/head.jpg')}/>
        <Text style={{flex:1,fontSize:20,marginLeft:20}}>
        {rowData}
        </Text>
      </View>
      </View>
    </TouchableHighlight>
  );
   }
  _pressRow(rowData,rowID){
    alert(rowData);
    this.setState({dataSource: this.state.dataSource.cloneWithRows(
    this._genRows(rowID)
  )});
  }
}

const styles = StyleSheet.create({
  container: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#F5FCFF',
  },
  row: {
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems:'center',
  padding: 10,
  },
});

AppRegistry.registerComponent('luumans', () => luumans);