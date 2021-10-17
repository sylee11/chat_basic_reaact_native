import {
  ScrollView,
  Text,
  StyleSheet,
  View,
  Image,
  TextInput,
  Button,
  Pressable,
  Alert,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
// import {Icon} from 'react-native-elements';

const Chat = ({route, navigation}) => {
  const {id} = route.params;
  const [newMessage, setNewMessage] = useState('');
  let initDataChat = [
    {
      chatId: 1,
      message: 'Hello guy',
      isFriendSend: false,
      avatar: '',
    },
    {
      chatId: 2,
      message: 'Hello guy',
      isFriendSend: true,
      avatar: '',
    },
    {
      chatId: 3,
      message: 'Hello guy',
      isFriendSend: true,
      avatar: '',
    },
    {
      chatId: 4,
      message: 'Hello guy',
      isFriendSend: true,
      avatar: '',
    },
  ];
  const [dataChat, setDataChat] = useState(initDataChat);
  const addNewMessage = () => {
    let newMes = {
      chatId: 4,
      message: newMessage,
      isFriendSend: false,
      avatar: '',
    };
    setDataChat([...dataChat, newMes]);
    setNewMessage('');
  };
  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/todos')
      .then(res => console.log('res'))
      .catch(error => Alert.alert(error));
  }, []);
  return (
    <View style={{flex: 1}}>
      <ScrollView>
        <View>
          {dataChat.map(item => {
            return item.isFriendSend === false ? (
              <View style={styles.rightMessage}>
                <Text style={styles.textRight}> {item.message} </Text>
              </View>
            ) : (
              <View style={styles.leftMessage}>
                <Image
                  style={styles.avatarFriend}
                  source={{
                    uri: 'https://1.bp.blogspot.com/-GFEx6MCOc5U/YQnlwK9rt7I/AAAAAAAAv2Y/5atxGCDP3f04gnoEcPozTfn04478FFFlQCNcBGAsYHQ/s0/avatar-anime.jpg',
                  }}
                />
                <Text style={styles.textLeft}> {item.message} </Text>
              </View>
            );
          })}
        </View>
      </ScrollView>
      <View style={styles.viewNewChat}>
        <TextInput
          value={newMessage}
          style={styles.textInput}
          onChangeText={text => setNewMessage(text)}
        />
        <Pressable style={styles.buttonSend} onPress={addNewMessage}>
          <Text> > </Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  leftMessage: {
    padding: 5,
    marginTop: 10,
    flexDirection: 'row',
  },
  avatarFriend: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
  textLeft: {
    borderRadius: 10,
    marginLeft: 3,
    paddingLeft: 10,
    paddingTop: 4,
    backgroundColor: '#cacdce',
    color: 'black',
    width: '60%',
  },
  rightMessage: {
    padding: 5,
    marginTop: 10,
    flexDirection: 'row-reverse',
  },
  textRight: {
    borderRadius: 10,
    paddingLeft: 10,
    paddingTop: 4,
    backgroundColor: '#599eda',
    color: 'white',
    width: '60%',
    height: 30,
  },
  viewNewChat: {
    flexDirection: 'row',
    marginRight: 10,
  },
  textInput: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    flex: 3,
    borderRadius: 10,
  },
  buttonSend: {
    marginTop: 12,
    height: 40,
    width: 40,
    borderRadius: 20,
    // flex: 1,
    backgroundColor: 'red',
  },
});
export default Chat;
