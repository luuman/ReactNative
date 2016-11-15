'use strict';
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  PixelRatio,
  Navigator,
  Image,
  View,
  ScrollView,
} from 'react-native';

import Xinlang from './app/page/xinlang';

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  _pressButton(){
    const {navigator} = this.props;
    //为什么这里可以取得 props.navigator?请看上文:
    //<Component {...route.params} navigator={navigator} />
    //这里传递了navigator作为props
    if(navigator){
      navigator.push({
        name: 'Xinlang',
        component: Xinlang,
      })
    }
  }
  render(){
    return(
      <ScrollView style={styles.flex}>
        <Text style={styles.listItem} onPress={this._pressButton.bind(this)}>这些Android技术会很火</Text>
        <Text style={styles.listItem} onPress={this._pressButton.bind(this)}>为什么整个互联网行业都缺前端工程师？</Text>
        <Text style={styles.listItem} onPress={this._pressButton.bind(this)}>一个神奇的控件</Text>
      </ScrollView>
    );
  }
}
class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  _pressButton(){
    const {navigator} = this.props;
    if(navigator){
      //很熟悉吧，入栈出栈~ 把当前的页面pop掉，这里就返回到了上一个页面:List了
      navigator.pop();
    }
  }
  render(){
    return(
      <ScrollView style={styles.flex}>
        <Text style={styles.listItem} onPress={this._pressButton.bind(this)}>name</Text>
      </ScrollView>
    );
  }
}
class luumans extends Component {
  render(){
    let defaultName = 'List';
    let defaultComponent = List;
    return (
      <Navigator
        initialRoute = {{name: defaultName, component: defaultComponent}}
        //配置场景
        configureScene = {
          (route) => {
            //这个是页面之间跳转时候的动画，具体有哪些？可以看这个目录下，有源代码的: node_modules/react-native/Libraries/CustomComponents/Navigator/NavigatorSceneConfigs.js
            return Navigator.SceneConfigs.PushFromRight;
          }
        }
        renderScene = {
          (route,navigator) => {
            let Component = route.component;
            return <Component {...route.params} navigator = {navigator} />
          }
        }
      />
    );
  }
}

const styles = StyleSheet.create({
  flexs:{
    flex: 1,
  },
  listItem:{
    height: 40,
    marginLeft: 10,
    marginRight: 10,
    borderBottomWidth: 3/PixelRatio.get(),
    borderBottomColor: '#DDD',
    justifyContent: 'center',
    lineHeight: 30,
    fontSize: 16,
  },
});

AppRegistry.registerComponent('luumans', () => luumans);