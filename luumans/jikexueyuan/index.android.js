/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
  Image,
  ListView,
} from 'react-native';
var {} = React;

var DATA = [
	{
		"id": "1",
		"name": "『微信小程序』从基础到实战",
		"img": "http://jiuye-res.jikexueyuan.com/zhiye/showcase/attach-/20161013/2a7bf0a0-d94d-40d4-a244-20e5a5e359e6.jpg",
		"teacher": "勾股",
		"add_time": "2013-07-11",
		"url": "http://www.jikexueyuan.com/zhiye/course/34.html?type=8"
	},
	{
		"id": "2",
		"name": "基于Go语言的短链接服务实战",
		"img": "http://jiuye-res.jikexueyuan.com/zhiye/showcase/attach-59b4a27d-e431-4f49-aa25-6b94cccd8229.jpg",
		"teacher": "小鱼",
		"add_time": "2013-07-11",
		"url": "http://www.jikexueyuan.com/zhiye/course/34.html?type=8"
	},
	{
		"id": "3",
		"name": "基于 Python 的静态爬虫实战",
		"img": "http://jiuye-res.jikexueyuan.com/zhiye/showcase/attach-0da69660-4fcc-45d1-9b84-88271851f57f.jpg",
		"teacher": "飞雪",
		"add_time": "2013-07-11",
		"url": "http://www.jikexueyuan.com/zhiye/course/34.html?type=8"
	},
]

var luumans = 

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  rightContainer: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    marginBottom: 8,
    textAlign: 'center',
  },
  year: {
    textAlign: 'center',
  },
  thumbnail: {
    width: 53,
    height: 81,
  },
  listView: {
    paddingTop: 20,
    backgroundColor: '#F5FCFF',
  },
});

AppRegistry.registerComponent('luumans', () => luumans);
