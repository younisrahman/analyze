import { StyleSheet, Text, Modal, TouchableOpacity, View } from 'react-native';
import React, { Dispatch, SetStateAction } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Colors, hp, wp } from '../../utils';
import { FilterCard } from '../../components';
type FiltarModalProps = {
  show?: boolean;
  setShow: Dispatch<SetStateAction<boolean>>;
};
const FilterModal = ({ show, setShow }: FiltarModalProps) => {
  return (
    <Modal animationType={'slide'} visible={show}>
      <View style={styles.headerContainer}>
        <Text style={styles.titleTxt}>Edit Filter</Text>

        <TouchableOpacity onPress={() => setShow(false)}>
          <Ionicons name='close-sharp' size={32} color={Colors.primaryDark} />
        </TouchableOpacity>
      </View>
      <View style={styles.body}>
        <FilterCard onPress={() => setShow(false)} />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  titleTxt: {
    fontSize: 22,
    fontWeight: '500',
    color: Colors.primaryDark,
  },
  headerContainer: {
    height: hp(10),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: wp(5),
  },
  body: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: hp(5),
  },
});

export default FilterModal;
