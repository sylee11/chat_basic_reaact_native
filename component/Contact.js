import React, {useEffect, useState} from 'react';
import {
  Text,
  StyleSheet,
  FlatList,
  Image,
  View,
  TouchableHighlight,
  Alert,
} from 'react-native';
import app from '../firebase';
import {getFirestore, collection, getDocs} from 'firebase/firestore/lite';

const Contact = ({navigation}) => {
  // const chatContact = db.collation('chats');
  const db = getFirestore(app);
  useEffect(() => {
    console.log('----------------', getFirestore(app));
    // const citiesCol = collection(db, 'cities');  const citySnapshot = await getDocs(citiesCol);
    // const citySnapshot = getDocs(citiesCol);
    // const cityList = citySnapshot.docs.map(doc => doc.data());
    // return cityList;
    // console.log('222222222222222', cityList);
  }, [db]);
  let data = [
    {
      id: 1,
      name: ' Hoang Vu Sam Son',
      last_message: 'Hoang Vu Sam Son ',
      date: '11/11/2020',
      is_read: true,
      avatar:
        'https://i.insider.com/5e20dbc124306a68824f2ee4?width=750&format=jpeg&auto=webp',
    },
    {
      id: 2,
      name: 'dvasd',
      last_message: 'ssss',
      date: '11/11/2020',
      is_read: true,
      avatar:
        'https://i.insider.com/5e20dbc124306a68824f2ee4?width=750&format=jpeg&auto=webp',
    },
    {
      id: 3,
      name: 'abasdasdasdc',
      last_message: 'ssss',
      date: '11/11/2020',
      is_read: true,
      avatar:
        'https://i.insider.com/5e20dbc124306a68824f2ee4?width=750&format=jpeg&auto=webp',
    },
  ];
  const [listChat, setListChat] = useState(data);
  const _onNavigate = item => {
    navigation.navigate('Chat', {
      id: item?.id || 1,
    });
  };
  const renderItem = item => {
    return (
      <TouchableHighlight
        onPress={item_id => _onNavigate(item)}
        underlayColor={'white'}>
        <View style={styles.contact}>
          <View style={{flexDirection: 'row'}}>
            <Image
              style={styles.Image}
              source={{
                uri: item.avatar,
              }}
            />
            <View style={styles.contact__content}>
              <Text style={{fontWeight: 'bold'}}>{item.name}</Text>
              <Text>{item.last_message}</Text>
            </View>
          </View>
          <View style={styles.contact__date}>
            <Text style={{justifyContent: 'flex-end'}}>{item.date}</Text>
          </View>
        </View>
      </TouchableHighlight>
    );
  };
  return <FlatList data={data} renderItem={({item}) => renderItem(item)} />;
};

const styles = StyleSheet.create({
  contact: {
    margin: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  contact__content: {
    marginLeft: 10,
  },
  contact__date: {
    flexDirection: 'row-reverse',
    marginTop: 15,
  },
  Image: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
});

export default Contact;
