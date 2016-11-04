/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

var React = require('react-native');
var {
	AppRegistry,
	StyleSheet,
	Text,
	View,
	Image,
	ListView,
} = React;

// var DATA = [
// 	{
// 		"id": "1",
// 		"name": "『微信小程序』从基础到实战",
// 		"img": "http://jiuye-res.jikexueyuan.com/zhiye/showcase/attach-/20161013/2a7bf0a0-d94d-40d4-a244-20e5a5e359e6.jpg",
// 		"teacher": "勾股",
// 		"add_time": "2013-07-11",
// 		"url": "http://www.jikexueyuan.com/zhiye/course/34.html?type=8"
// 	},
// 	{
// 		"id": "2",
// 		"name": "基于Go语言的短链接服务实战",
// 		"img": "http://jiuye-res.jikexueyuan.com/zhiye/showcase/attach-59b4a27d-e431-4f49-aa25-6b94cccd8229.jpg",
// 		"teacher": "小鱼",
// 		"add_time": "2013-07-11",
// 		"url": "http://www.jikexueyuan.com/zhiye/course/34.html?type=8"
// 	},
// 	{
// 		"id": "3",
// 		"name": "基于 Python 的静态爬虫实战",
// 		"img": "http://jiuye-res.jikexueyuan.com/zhiye/showcase/attach-0da69660-4fcc-45d1-9b84-88271851f57f.jpg",
// 		"teacher": "飞雪",
// 		"add_time": "2013-07-11",
// 		"url": "http://www.jikexueyuan.com/zhiye/course/34.html?type=8"
// 	},
// ];

var DATA_URL = 'http://api.daguye.com/?m=course&c=index';

var luumans = React.createClass({
	getInitalState: function(){
		// var ds = new ListView.DataSource({rowHasChanged:(r1,r2) => r1!==r2});
		return{
			// dataSource:ds.cloneWithRows(DATA),
			dataSource: ListView.DataSource({rowHasChanged:(r1,r2) => r1!==r2}),
		};
	},
	compoentDidMount: function(){
		this.loadData();
	},
	loadData: function(){
		fetch(DATA_URL)
		.then((response) => response.json())
		.then((responseData) => {
			this.setSate({
				dataSource:this.state.dataSource.cloneWithRows(responseData),
			});
		})
	},
	render: function(){
		return (
			<ListView 
				dataSource = {}
				renderRow = {this.item}
			/>
		);
	},
	item: function(course){
		return (
			<View style={styles.container}>
			  <Image
			    source={{uri: course.img}}
			    style={styles.images}
			  />
			  <Text style={styles.title}>{course.name}</Text>
			  <Text style={styles.teacher}>{course.teacher}</Text>
			  <Text style={styles.time}>{course.add_time}</Text>
			</View>
		);
	},
	// render: function(){
	// 	return (
	// 		<View style={styles.container}>
	// 		  <Image
	// 		    source={{uri: DATA.img}}
	// 		    style={styles.images}
	// 		  />
	// 		  <Text style={styles.title}>{DATA.name}</Text>
	// 		  <Text style={styles.teacher}>{DATA.teacher}</Text>
	// 		  <Text style={styles.time}>{DATA.add_time}</Text>
	// 		</View>
	// 	);
	// }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F2',
    margin: 5,
    borderWidth: 1,
    borderColor: '#d2d2d2',
  },
  title: {
    fontSize: 15,
    marginLeft: 10,
    color: '#333333',
    textAlign: 'left',
  },
  images: {
    height: 300,
    margin: 10,
  },
  teacher: {
    fontSize: 13,
    marginLeft: 10,
    color: '#525252',
    textAlign: 'left',
  },
  time: {
    fontSize: 13,
    marginLeft: 10,
    color: '#2d854a',
    textAlign: 'left',
  },
});

AppRegistry.registerComponent('luumans', () => luumans);
