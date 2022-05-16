import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, TextInput, Button, Image } from 'react-native';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Signin = ({navigation}: {navigation:any}) =>  {
  const [text, onChangeText] = React.useState("");
  const [number, onChangeNumber] = React.useState("");
  const bodyText = "Welcome Back!";
  const forgot = "Forgot Password!";

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.fullbody}>
      <View style={styles.back}>
        <Image
          source={ require('../assets/back.png' )}
          style={{ width: 30, height: 30 }}
         ></Image>
      </View>
    <View style={styles.view}>
    <Text style={styles.text} numberOfLines={2}>{bodyText}</Text>
    </View>
    <View style={{marginTop:30}}>
     <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder="Email"
        placeholderTextColor='#fff'
      />

      <TextInput
      style={styles.input}
      onChangeText={onChangeNumber}
      value={number}
      placeholder="Password"
      placeholderTextColor='#fff'
      />
      <Text
      style={styles.forgot}
      >
        {forgot}
      </Text>
    </View>
    <Text
        style={styles.button}
        onPress={() => navigation.navigate('Home')}
      >
        Signin
      </Text>
      <View style={styles.footer}>
      <Text style={styles.or}>
        - OR -
      </Text>
      <View style={styles.google}>
        <Image
          source={ require('../assets/instagram.png' )}
          style={styles.icon}
        ></Image>

        <Image
          source={ require('../assets/facebook.png' )}
          style={styles.icon}
        ></Image>

        <Image
          source={ require('../assets/google.png' )}
          style={styles.icon}
        ></Image>

      </View>
      <Text style={{marginTop:45, fontWeight:'bold', color:'#fff'}}>
        You Don't have an account? <Text style={{color:'#FFEC00'}} onPress={()=>{navigation.navigate('signup')}}>Signup</Text>
      </Text>
      </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#242D34',
    width:'100%'
    //alignItems: 'center',
    //justifyContent: 'center',
  },
  fullbody:{
    marginTop:30,
    marginLeft:10
  },
  input: {
    height: 60,
    margin: 12,
    padding: 10,
    color:'#fff',
    borderRadius:11,
    borderWidth:1,
    borderColor:'#FBFF00',
    fontSize:15,
    fontWeight:'bold',
    marginTop:20,
  },
  text:{
    fontSize:40,
    fontWeight:'bold',
    color:'#FFEC00'
  },
  view:{
    width:200,
    marginTop:50,
    marginLeft:10
  },
  back:{
    width:50,
    height:50,
    backgroundColor:'#FFEC00',
    shadowColor: '#FFEC00',
    shadowOffset: {width: -2, height: 8},
    shadowOpacity: 0.2,
    shadowRadius: 10,
    borderRadius: 11,
    marginTop:30,
    marginLeft:10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  forgot:{
    fontSize:15,
    fontWeight:'bold',
    color:'#fff',
    marginLeft:250
  },
  button:{
    color:'#242D34',
    height:60,
    width:360,
    marginLeft:10,
    borderRadius:11,
    marginTop:50,
    backgroundColor:'#FFEC00',
    shadowColor: '#FFEC00',
    shadowOffset: {width: -2, height: 8},
    shadowOpacity: 0.2,
    shadowRadius: 10,
    textAlign:'center',
    fontSize:18,
    fontWeight:'bold',
    paddingTop:15
  },
  or:{
    textAlign:'center',
    marginTop:50,
    fontWeight:'bold',
    color:'#fff'
  },
  google:{
    marginTop:30,
    height:50,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    width:200
  },
  icon:{
    width:40,
    height:40,
    backgroundColor:'#FFEC00',
    borderRadius:11
  },
  footer:{
    alignItems:'center'
  }
});

export default Signin;
