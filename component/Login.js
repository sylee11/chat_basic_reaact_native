/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  Alert,
  Button,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import axios from 'axios';

const Login = ({navigation}) => {
  const [username, setUserName] = useState('admin');
  const [password, setPassword] = useState('admin');

  const handleLogin = () => {
    const data = {
      username: username,
      password: password,
    };
    if (username === 'admin' && password === 'admin') {
      navigation.navigate('Contact');
    } else {
      Alert.alert('user name is not correct');
    }
    // axios
    //   .post('http://192.168.1.70:8000/login', data)
    //   .then(res => {
    //     console.log(res, '2222');
    //     // if (res.status === 200) {
    //     //   navigation.navigate('Chat');
    //     // }
    //   })
    //   .catch(function (error) {
    //     Alert.alert('Have error', error);
    //   });
  };

  return (
    <View>
      <Image
        style={styles.image}
        source={{
          uri: 'https://cdn.vietnambiz.vn/2020/2/17/livechat-la-gi-1581912689909263689200.png',
        }}
      />
      <View>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.text_label}>User</Text>
          <TextInput
            style={styles.input}
            value={username}
            onChangeText={text => setUserName(text)}
          />
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.text_label}>Password</Text>
          <TextInput
            secureTextEntry={true}
            style={styles.input}
            value={password}
            onChangeText={text => setPassword(text)}
          />
        </View>
        <View style={styles.button}>
          <Button title={'Login'} onPress={handleLogin} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  image: {
    marginTop: 100,
    marginLeft: 120,
    width: 100,
    height: 100,
    borderRadius: 20,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    flex: 3,
    borderRadius: 10,
  },
  text_label: {
    flex: 1,
    padding: 20,
  },
  button: {
    marginTop: 50,
    width: '50%',
    marginLeft: '25%',
    justifyContent: 'center',
  },
});

export default Login;
