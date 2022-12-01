import React from 'react';
import {
  View,
  TextInput,
  ActivityIndicator,
  StyleSheet,
  ViewStyle,
  TextInputProps,
  TouchableOpacity,
  StyleProp,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors, hp, wp } from '../../utils';

type TextinputWithIconsProps = {
  ref?: React.ForwardedRef<null>;
  containerStyle?: StyleProp<ViewStyle>;
  textContainer?: StyleProp<ViewStyle>;
  iconLeft?: boolean;
  placeholder?: string;
  setText?: (text: string) => void;
  dataText?: string;
  isEditable?: boolean;
  inputSearchStyle?: TextInputProps;
};

const TextinputWithIcons = ({
  containerStyle,
  textContainer,
  iconLeft = false,
  placeholder = 'Your text',
  ref,
  dataText,
  setText,
  isEditable = true,
  inputSearchStyle,
  ...Props
}: TextinputWithIconsProps) => {
  return (
    <View style={[styles.searchSection, containerStyle]}>
      {iconLeft && <Ionicons name='ios-search-sharp' size={20} color='black' />}

      <View
        style={[
          {
            height: hp(5),
            width: iconLeft ? '84%' : '100%',
            justifyContent: 'center',
          },
          textContainer,
        ]}
      >
        <TextInput
          editable={isEditable}
          ref={ref}
          style={[styles.inputText, inputSearchStyle]}
          onChangeText={setText}
          value={dataText}
          {...Props}
          placeholder={placeholder}
          placeholderTextColor={Colors.dark}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  searchSection: {
    width: '100%',
    height: hp(6),
    backgroundColor: Colors.light,
    paddingHorizontal: hp(1),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.primaryDark,
  },
  searchIcon: {
    padding: 10,
  },
  inputText: {
    flex: 1,
    paddingVertical: hp(1),
    color: Colors.dark,
    paddingLeft: wp(1),
  },
  iconAttachment: {
    marginRight: 5,
  },
});

export default TextinputWithIcons;
