
import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  FlatList
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

//import console = require('console');
const  list_data = [
  {name: 'Jagtar',key: '1',},
  {name: 'Pranav',key: '2',},
  {name: 'abc',key: '3',},
  {name: 'def',key: '4',}
]
const colors = ['#DFBBB1', '#C08552'];

class App extends Component{
  constructor(){
    super();
  }
  
render(){
  var fields = [];
  for(var index = 0; index < 100; index++) {
    fields.push( <Text style={[styles.numberStyle,{backgroundColor: colors[index % colors.length]}]}>{index+1}</Text>)
  }
  return (
 
        
    //flexDirection, alignItems, and justifyContent
    //row, column, row-reverse, column-reverse
    <View style={{
      alignItems: 'flex-start',
      alignContent: "flex-start",
      flexWrap: 'wrap',
      width:'100%',
      height: 100,
      flex: 1,
      flexDirection: "row",
      backgroundColor: "#DFBBB1"
      }}>

        {fields}
        {/* <Text style={styles.numberStyle}>1</Text>
        <Text style={styles.numberStyle}>1</Text>
        <Text style={styles.numberStyle}>1</Text>
        <Text style={styles.numberStyle}>1</Text>
        <Text style={styles.numberStyle}>1</Text>
        <Text style={styles.numberStyle}>1</Text>
        <Text style={styles.numberStyle}>1</Text>
        <Text style={styles.numberStyle}>1</Text>
        <Text style={styles.numberStyle}>1</Text>
        <Text style={styles.numberStyle}>1</Text>
        <Text style={styles.numberStyle}>1</Text>
        <Text style={styles.numberStyle}>1</Text>
        <Text style={styles.numberStyle}>1</Text>
        <Text style={styles.numberStyle}>1</Text>
        <Text style={styles.numberStyle}>1</Text>
        <Text style={styles.numberStyle}>1</Text>
        <Text style={styles.numberStyle}>1</Text>
        <Text style={styles.numberStyle}>1</Text> */}
        
 

      {/* <FlatList 
      data = {list_data}
      keyExtractor={(item, index) => index}

      renderItem = {({item,index}) =>(
        <View style={{ backgroundColor: colors[index % colors.length] }}>
       <Text 
        style= {styles.listStyle}>{item.name}
       </Text>
      </View>)}
      /> */}
    </View>

    // <View style={{
    //   flex: 1, 
    //   flexDirection: "column",
    //   justifyContent: "flex-start",
    //   alignItems: "flex-end"
    //   }}>
    //   <View style={{alignSelf:"flex-start",width: 50, height:50, backgroundColor: '#ff6040'}} />
    //     <View style={{backgroundColor:'#ff4040',width: 50, height: 50}} />
    //     <View style={{alignSelf:"flex-start"  ,backgroundColor: '#008080',width: 50, height: 50}} />
    //   </View>
  );
    }
};

const styles = StyleSheet.create({
  numberStyle: {
    backgroundColor: 'blue',
    color: 'white',
    textAlign: 'center',
    width: '20%',
   // flex: 1
    
  },
 listStyle: {
 // backgroundColor: "#ff6040",
  justifyContent: "flex-start",
  fontSize: 25,
  textTransform: "uppercase",
  textAlign: "center",
  color: 'white',
  padding: 10,
  borderBottomWidth: 2,
  borderBottomColor: 'white',
  opacity: 0.9
 }
});

export default App;
