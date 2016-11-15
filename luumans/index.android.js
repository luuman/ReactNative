import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput
} from 'react-native';
class luumans extends Component {
  render() {
  return (
    <View style={styles.container}>
    <View style={styles.top_half_view}>
      <View style={styles.title_view}>
       <Text style={styles.title_text}>
         邮箱登录
      </Text>
      </View>
     
      <TextInput 
        style={styles.textinput}
        placeholder='邮箱'
        numberOfLines={1}
        autoFocus={true}
        underlineColorAndroid={'#e1e1e1'}
      />
       <TextInput 
        style={styles.textinput}
        placeholder='密码'
        numberOfLines={1}
        secureTextEntry={true}
        underlineColorAndroid={'#e1e1e1'}
      />
      <View style={{backgroundColor:'#ffffff',flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
       <View style={styles.style_view_register}>
        <Text style={{color:'#5ac4ef'}}>
        注册
        </Text>
       </View>
       
       <View style={styles.style_view_login}>
        <Text style={{color:'white'}}>
        登录
        </Text>
       </View>
      </View>
      <Text style={styles.bottom_text}>
      忘了密码?点此找回
      </Text>
    </View>
    <View style={styles.bottom_half_view}>
    </View>
    </View>
  );
  }
}
const styles = StyleSheet.create({
  container: {
  flex: 1,
  backgroundColor: 'white',
  },
  title_view:{
  flexDirection:'row',
  height:50,
  alignItems: 'center',
  backgroundColor:'#27b5ee',
  },
  title_text:{
  color:'white',
  fontSize:22,
  marginLeft:20,
  textAlign:'center'
  },
  top_half_view:{
  flex: 1.3,
  backgroundColor: 'white',
  },
  bottom_half_view:{
  flex: 1,
  backgroundColor: '#eeeeee',
  },
  textinput: {
  backgroundColor:'#fff',
  marginTop:5,
  marginLeft:20,
  marginRight:20,
  textAlign:'left',
  },
  style_view_login:{  
    flex:1,
    marginTop:20,
    marginLeft:20,
    marginRight:20,
    backgroundColor:'#27b5ee',
    height:35,
    borderRadius:5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  style_view_register:{  
    flex:1,
    marginTop:20,
    marginLeft:20,
    marginRight:20,
    borderColor:'#5ac4ef',
    borderWidth: 1,
    height:35,
    borderRadius:5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottom_text:{
  color:'#27b5ee',
  fontSize:14,
  marginTop:10,
  marginLeft:20,
  textAlign:'left',
  fontWeight:'bold'
  },
});
AppRegistry.registerComponent('luumans', () => luumans);