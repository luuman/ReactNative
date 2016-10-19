import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default class luumans extends Component {
  render() {
    return (
      <View style={styles.flexContainer}>
          <Text style={styles.welcome}>布局1</Text>
          <Text style={styles.welcome}>布局2</Text>
          <Text style={styles.welcome}>布局3</Text>
          <Text style={styles.welcome}>布局3</Text>
          <Text style={styles.welcome}>布局3</Text>
          <Text style={styles.welcome}>布局3</Text>
          <Text style={styles.welcome}>布局3</Text>
          <Text style={styles.welcome}>布局3</Text>
          <Text style={styles.welcome}>布局3</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  flexContainer: {
    flexDirection: 'row',
    // alignItems: 'center',
    backgroundColor: '#aaaaaa',
    height: 50,
  },
  
  welcome: {
    fontSize: 14,
    textAlign: 'center',
    width: 80,
    margin: 10,
    // height: 30,
    lineHeight: 30,
    color: '#FFF',
    backgroundColor: '#000',
  },
});

AppRegistry.registerComponent('luumans', () => luumans);

// import React, { Component } from 'react';
// import {
//   AppRegistry,
//   StyleSheet,
//   Text,View,
//   ScrollView,
//   Image,
// } from 'react-native';

// export default class luumans extends Component {
//   render() {

//     return (
//       <ScrollView style={styles.container}>
      

//         <Text style={[styles.text, styles.header]}>
//             嵌套的网格
//           </Text>
//           <View style={{flexDirection: 'row', height: 200, backgroundColor:"#fefefe", padding: 20}}>
//             <View style={{flex: 1, flexDirection:'column', padding: 15, backgroundColor:"#eeeeee"}}>  
//                 <View style={{flex: 1, backgroundColor:"#bbaaaa"}}>  
//                 </View>
//                 <View style={{flex: 1, backgroundColor:"#aabbaa"}}>
//                 </View>
//             </View>
//             <View style={{flex: 1, padding: 15, flexDirection:'row', backgroundColor:"#eeeeee"}}>
//                 <View style={{flex: 1, backgroundColor:"#aaaabb"}}>  
//                     <View style={{flex: 1, flexDirection:'row', backgroundColor:"#eeaaaa"}}> 
//                        <View style={{flex: 1, backgroundColor:"#eebbaa"}}>  
//                       </View>
//                       <View style={{flex: 1, backgroundColor:"#bbccee"}}>
//                       </View> 
//                     </View>
//                     <View style={{flex: 1, backgroundColor:"#eebbdd"}}>
//                     </View>
//                 </View>
//                 <View style={{flex: 1, backgroundColor:"#aaccaa"}}>
//                   <ScrollView style={{flex: 1, backgroundColor:"#bbccdd", padding: 5}}>
//                         <View style={{flexDirection: 'row', height: 50, backgroundColor:"#fefefe"}}>
//                           <View style={{flex: 1, flexDirection:'column', backgroundColor:"#eeeeee"}}>  
//                               <View style={{flex: 1, backgroundColor:"#bbaaaa"}}>  
//                               </View>
//                               <View style={{flex: 1, backgroundColor:"#aabbaa"}}>
//                               </View>
//                           </View>
//                           <View style={{flex: 1, flexDirection:'row', backgroundColor:"#eeeeee"}}>
//                               <View style={{flex: 1, backgroundColor:"#aaaabb"}}>  
//                                   <View style={{flex: 1, flexDirection:'row', backgroundColor:"#eeaaaa"}}> 
//                                      <View style={{flex: 1, backgroundColor:"#eebbaa"}}>  
//                                     </View>
//                                     <View style={{flex: 1, backgroundColor:"#bbccee"}}>
//                                     </View> 
//                                   </View>
//                                   <View style={{flex: 1, backgroundColor:"#eebbdd"}}>
//                                   </View>
//                               </View>
//                               <View style={{flex: 1, backgroundColor:"#aaccaa"}}>
//                               </View>
//                           </View>
//                         </View>
//                         <Text style={[styles.text, styles.header, {color: '#ffffff', fontSize: 12}]}>
//                           {(function(){
//                             var str = '';
//                             var n = 100;
//                             while(n--) {
//                               str += '嵌套的网格' + '\n';
//                             }
//                             return str;
//                           })()}
//                         </Text>
//                   </ScrollView> 
//                 </View>
//             </View>
//           </View>
//         <View style={styles.flexContainer}>
//           <View style={styles.cell}>
//             <Text style={styles.welcome}>
//               cell1
//             </Text>
//           </View>
//           <View style={styles.cell}>
//             <Text style={styles.welcome}>
//               cell2
//             </Text>
//           </View>
//           <View style={styles.cell}>
//             <Text style={styles.welcome}>
//               cell3
//             </Text>
//           </View>
//         </View>
//         <Text style={[styles.text, styles.header]}>
//                 水平居中
//             </Text>

//             <View style={{height: 100, backgroundColor: '#333333', alignItems: 'center'}}>
//               <View style={{backgroundColor: '#fefefe', width: 30, height: 30, borderRadius: 15}}/>
//             </View>

//              <Text style={[styles.text, styles.header]}>
//                 垂直居中
//             </Text>
//             <View style={{height: 100, backgroundColor: '#333333', justifyContent: 'center'}}>
//               <View style={{backgroundColor: '#fefefe', width: 30, height: 30, borderRadius: 15}}/>
//             </View>

//             <Text style={[styles.text, styles.header]}>
//                 水平垂直居中
//             </Text>
//             <View style={{height: 100, backgroundColor: '#333333', alignItems: 'center', justifyContent: 'center'}}>
//               <View style={{backgroundColor: '#fefefe', width: 30, height: 30, borderRadius: 15}}/>
//             </View>
//         <Text style={[styles.text, styles.header]}>
//               根节点上放一个元素，不设置宽度
//           </Text>        

//           <View style={{height: 20, backgroundColor: '#333333'}} />

//           <Text style={[styles.text, styles.header]}>
//               固定宽度的元素上放一个View，不设置宽度
//           </Text> 

//           <View style={{width: 100}}>
//             <View style={{height: 20, backgroundColor: '#333333'}} />
//           </View>

//           <Text style={[styles.text, styles.header]}>
//               flex的元素上放一个View，不设置宽度
//           </Text> 

//           <View style={{flexDirection: 'row'}}>
//             <View style={{flex: 1}}>
//               <View style={{height: 20, backgroundColor: '#333333'}} />
//             </View>
//             <View style={{flex: 1}}/>
//             <View style={{flex: 1}}/>
//           </View>
//         <Image
//           source={{uri: 'http://jiuye-res.jikexueyuan.com/zhiye/showcase/attach-/20161013/2a7bf0a0-d94d-40d4-a244-20e5a5e359e6.jpg'}}
//           style={styles.images}
//         />
//         <Text style={styles.title}>『微信小程序』从基础到实战</Text>
//         <Text style={styles.teacher}>勾股</Text>
//         <Text style={styles.time}>2013-07-11</Text>
//         <Image
//           source={{uri: 'http://jiuye-res.jikexueyuan.com/zhiye/showcase/attach-59b4a27d-e431-4f49-aa25-6b94cccd8229.jpg'}}
//           style={styles.images}
//         />
//         <Text style={styles.title}>基于Go语言的短链接服务实战</Text>
//         <Text style={styles.teacher}>小鱼</Text>
//         <Text style={styles.time}>2013-07-11</Text>
//         <Image
//           source={{uri: 'http://jiuye-res.jikexueyuan.com/zhiye/showcase/attach-0da69660-4fcc-45d1-9b84-88271851f57f.jpg'}}
//           style={styles.images}
//         />
//         <Text style={styles.title}>基于Python的静态爬虫实战</Text>
//         <Text style={styles.teacher}>飞雪</Text>
//         <Text style={styles.time}>2013-07-11</Text>
//       </ScrollView>
//     );
//   }
// }

// var styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#F2F2F2',
//     margin: 5,
//     borderWidth: 1,
//     borderColor: '#d2d2d2',
//   },
//   title: {
//     fontSize: 15,
//     marginLeft: 10,
//     color: '#333333',
//     textAlign: 'left',
//   },
//   images: {
//     height: 200,
//     margin: 10,
//   },
//   teacher: {
//     fontSize: 13,
//     marginLeft: 10,
//     color: '#525252',
//     textAlign: 'left',
//   },
//   time: {
//     fontSize: 13,
//     marginLeft: 10,
//     color: '#2d854a',
//     textAlign: 'left',
//   },
//   flexContainer: {
//       // 容器需要添加direction才能变成让子元素flex
//       flexDirection: 'row'
//   },
//   cell: {
//       flex: 1,
//       height: 50,
//       backgroundColor: '#aaaaaa'
//   },
//   welcome: {
//       fontSize: 20,
//       textAlign: 'center',
//       margin: 10
//   },
// });

// AppRegistry.registerComponent('luumans', () => luumans);
