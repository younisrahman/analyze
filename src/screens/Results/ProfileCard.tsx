import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';
import { Colors, hp, wp } from '../../utils';
import Chip from './Chip';

type ProfileUrl = {
  url: string;
  name: string;
  id: string;
  status: string;
};
const ProfileCard = ({
  url = 'https://chaldal.tech/assignment-assets/gabriel-silverio-u3WmDyKGsrY-unsplash.jpg',
  name = 'Cynthia',
  id = '1234567',
  status = 'Active',
}: ProfileUrl) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.ImageStyle}
        resizeMode={'contain'}
        source={{
          uri: url,
          cache: 'force-cache',
        }}
      />
      <Text style={styles.nameTxt}>{name}</Text>
      <Text style={styles.nameTxt}>{id}</Text>
      <Chip title={status} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    height: hp(27),
    width: wp(40),
    backgroundColor: Colors.light,
    marginTop: hp(2),
    justifyContent: 'flex-start',

    shadowColor: Colors.dark,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  ImageStyle: {
    width: '100%',
    height: hp(20),
  },
  nameTxt: {
    color: Colors.gray,
    marginLeft: wp(2),
    fontSize: 13,
  },
});
export default ProfileCard;
