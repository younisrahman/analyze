import { View, Text, StyleSheet } from 'react-native';
import React, { Dispatch, SetStateAction } from 'react';
import Checkbox from 'expo-checkbox';
import { Colors, hp, wp } from '../../utils';

type checkboxProps = {
  isCheckedActive: boolean;
  setCheckedActive: Dispatch<SetStateAction<boolean>>;
  title: string;
};

const CheckBox = ({
  isCheckedActive,
  setCheckedActive,
  title = 'title',
}: checkboxProps) => {
  return (
    <View style={styles.checkboxContainer}>
      <Checkbox
        style={styles.checkbox}
        value={isCheckedActive}
        onValueChange={setCheckedActive}
        color={isCheckedActive ? Colors.primaryMain : Colors.dark}
      />
      <Text style={styles.checkboxTxt}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkboxTxt: {
    fontSize: 15,
    color: Colors.gray,
  },
  checkbox: {
    marginVertical: hp(0.5),
    marginHorizontal: wp(2),
  },
});

export default CheckBox;
