import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FilterCard } from '../../components';
import { Colors, hp, wp } from '../../utils';
function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.headerShadow}>
        <View style={styles.header} />
      </View>
      <Text style={styles.titleTxt}>User Analyzer</Text>
      <Text style={styles.detailsTxt}>Select filters to generate report</Text>

      <FilterCard screen={'home'} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light,
    alignItems: 'center',
  },
  header: {
    backgroundColor: Colors.primaryMain,
    height: hp(7.25),
  },
  headerShadow: {
    height: hp(8),
    width: wp(100),
    shadowColor: Colors.dark,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  titleTxt: {
    fontSize: 22,
    fontWeight: '500',
    color: Colors.primaryDark,
    marginTop: hp(3),
    marginBottom: hp(1),
  },
  detailsTxt: {
    fontSize: 16,
    fontWeight: '500',
    color: Colors.gray,
    marginBottom: hp(1),
  },
});
export default HomeScreen;
