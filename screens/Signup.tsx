import * as React from 'react';
import { SafeAreaView, StyleSheet, Text, View, TextInput, Button, Image } from 'react-native';

const Signup = ({navigation}: {navigation:any}) =>  {
    const [text, onChangeText] = React.useState("");
    const [number, onChangeNumber] = React.useState("");
    const bodyText = "Welcome ";
  
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.fullbody}>
        <View style={styles.header}>
        <View style={styles.back}>
          <Image
            source={ require('../assets/back.png' )}
            style={{ width: 30, height: 30 }}
           ></Image>
        </View>
      <View style={styles.view}>
      <Text style={styles.text} numberOfLines={2}>{bodyText}</Text>
      </View>
      </View>
      <View style={{marginTop:30}}>
      <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          placeholder="FirstName"
          placeholderTextColor='#fff'
        />

        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          placeholder="LastName"
          placeholderTextColor='#fff'
        />

       <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          placeholder="Email"
          placeholderTextColor='#fff'
        />
  
        <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={number}
        placeholder="Password"
        placeholderTextColor='#fff'
        />
      </View>
      <Text
          style={styles.button}
          onPress={() => navigation.navigate('Home')}
        >
          Signup
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
        <Text style={{marginTop:35, fontWeight:'bold', color:'#fff'}}>
          You Already have an account? <Text style={{color:'#FFEC00'}} onPress={()=>{navigation.navigate('Signin')}}>Signin</Text>
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
      //alignItems: 'center',
      //justifyContent: 'center',
    },
    fullbody:{
      marginTop:30,
      backgroundColor: '#242D34',
    },
    input: {
      height: 60,
      margin: 12,
      padding: 10,
      borderRadius:11,
      borderWidth:1,
      borderColor:'#FFEC00',
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
    button:{
      color:'#242D34',
      height:60,
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
      fontWeight:'bold',
      marginTop:10,
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
      alignItems:'center',
      height:100,
      marginTop:20
    },
    header:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
    }
  });

export default Signup;