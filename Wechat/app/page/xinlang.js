'use strict';
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  PixelRatio,
  View,
  ScrollView,
} from 'react-native';

// const Header = require('./header');
import Header from './header';

class List extends Component {
  render(){
    return(
      <View style={styles.listItem}>
        <Text style={styles.listItemFont}>{this.props.title}</Text>
      </View>
    );
  }
}

class ImportantNews extends Component {
  show(title){
    alert(title);
    console.log(title);
  }
  render(){
    var news = [];
    for(var i in this.props.news){
      var text=(
        <Text
          onPress={this.show.bind(this,this.props.news[i])}
          numberOfLines={1}
          style={styles.newsItem}
          key={i}
        >{this.props.news[i]}</Text>
      );
      news.push(text);
    }
    return(
      <View style={styles.flexs}>
        <Text style={styles.newsTitle}>今日要闻</Text>
        {news}
      </View>
    );
  }
}

class Xinlang extends Component {
  render(){
    return(
      <ScrollView style={styles.flexs}>
        <Header></Header>
        <List title='这些Android技术会很火'></List>
        <List title='为什么整个互联网行业都缺前端工程师？'></List>
        <List title='Android 开发中的日常积累'></List>
        <List title='一个神奇的控件'></List>
        <ImportantNews
          news={[
            '找到问题了 注解框架没有获取到控件id :sweat:',
            '我之前也遇到过，可能是一个bug吧，不知道怎么解决',
            '非常喜欢。准备看着你的打一遍，能看懂，但是自己就敲不出来了，谢谢分享',
            '不知道怎么上的首页',
            '找到问题了 注解框架没有获取到控件id :sweat:',
            '我之前也遇到过，可能是一个bug吧，不知道怎么解决',
            '非常喜欢。准备看着你的打一遍，能看懂，但是自己就敲不出来了，谢谢分享',
            '不知道怎么上的首页',
            '找到问题了 注解框架没有获取到控件id :sweat:',
            '我之前也遇到过，可能是一个bug吧，不知道怎么解决',
            '非常喜欢。准备看着你的打一遍，能看懂，但是自己就敲不出来了，谢谢分享',
            '不知道怎么上的首页',
            '找到问题了 注解框架没有获取到控件id :sweat:',
            '我之前也遇到过，可能是一个bug吧，不知道怎么解决',
            '非常喜欢。准备看着你的打一遍，能看懂，但是自己就敲不出来了，谢谢分享',
            '不知道怎么上的首页',
          ]}>
        </ImportantNews>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  flexs:{
    flex: 1,
    backgroundColor: '#FFF',
  },
  listItem:{
    height: 40,
    marginLeft: 10,
    marginRight: 10,
    borderBottomWidth: 3/PixelRatio.get(),
    borderBottomColor: '#DDD',
    justifyContent: 'center',
  },
  listItemFont:{
    fontSize: 16,
  },
  newsTitle:{
    fontSize: 20,
    fontWeight: 'bold',
    color: '#CD1D1C',
    marginLeft: 10,
    marginTop: 10,
  },
  newsItem:{
    fontSize: 15,
    lineHeight: 40,
    marginLeft: 10,
    marginRight: 10,
  },
});

module.exports = Xinlang;