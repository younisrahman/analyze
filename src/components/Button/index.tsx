import {
  Text,
  TouchableOpacity,
  StyleSheet,
  StyleProp,
  ViewStyle,
} from 'react-native';
import React from 'react';
import { Colors, hp, wp } from '../../utils';
type buttonProps = {
  title: string;
  buttonStyle?: StyleProp<ViewStyle>;
  onPress?: () => void;
};
const Button = ({ buttonStyle, title = 'title', onPress }: buttonProps) => {
  return (
    <TouchableOpacity style={[styles.container, buttonStyle]} onPress={onPress}>
      <Text style={styles.buttonTxt}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primaryMain,
    height: hp(5),
    width: wp(30),
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: Colors.dark,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderRadius: 5,
  },
  buttonTxt: {
    color: Colors.light,
    fontSize: 19,
  },
});
export default Button;
