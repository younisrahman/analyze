import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { Colors, hp, wp } from '../../utils';

const Chip = ({ title = 'Active' }: { title: string }) => {
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor:
            title === 'Bored' ? Colors.orangeDark : Colors.primaryMain,
          width: title === 'SuperActive' ? wp(20) : wp(13),
        },
      ]}
    >
      <Text style={styles.titleTxt}>{title}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    height: hp(2.7),
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    right: wp(2),
    top: hp(1.5),
  },
  titleTxt: { color: Colors.light, fontSize: 12 },
});
export default Chip;
