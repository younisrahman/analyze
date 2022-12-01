import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Platform,
  Alert,
} from 'react-native';
import React, { useState } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';

import CheckBox from '../CheckBox';
import Button from '../Button';
import { Colors, hp, wp } from '../../utils';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../../types';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import moment from 'moment';

const FilterCard = ({ onPress }: { onPress: () => void }) => {
  let time = moment().unix();
  let sourceMoment = moment.unix(time);
  const sourceDateTo = sourceMoment.local().toDate();
  sourceMoment = sourceMoment.subtract(1, 'months');
  const sourceDateFrom = sourceMoment.local().toDate();

  const [dateFrom, setDateFrom] = useState(sourceDateFrom);
  const [showFrom, setShowFrom] = useState(false);
  const [dateTo, setDateTo] = useState(sourceDateTo);
  const [showTo, setShowTo] = useState(false);
  const [isCheckedActive, setCheckedActive] = useState(false);
  const [isCheckedSuperActive, setCheckedSuperActive] = useState(false);
  const [isCheckedBored, setCheckedBored] = useState(false);

  const onChangeFrom = (event, selectedDate) => {
    if (Platform.OS === 'android') {
      setShowFrom(false);
    }
    if (event.type === 'dismissed') {
      Alert.alert(
        'picker was dismissed',
        undefined,
        [
          {
            text: 'great',
          },
        ],
        { cancelable: true }
      );
      return;
    }

    if (event.type === 'neutralButtonPressed') {
      setDateFrom(new Date(0));
    } else {
      setDateFrom(selectedDate);
    }
  };
  const onChangeTo = (event, selectedDate) => {
    if (Platform.OS === 'android') {
      setShowTo(false);
    }
    if (event.type === 'dismissed') {
      Alert.alert(
        'picker was dismissed',
        undefined,
        [
          {
            text: 'great',
          },
        ],
        { cancelable: true }
      );
      return;
    }

    if (event.type === 'neutralButtonPressed') {
      setDateTo(new Date(0));
    } else {
      setDateTo(selectedDate);
    }
  };
  return (
    <View style={styles.body}>
      <Text style={styles.dividerTitleTxt}>Date</Text>
      <View style={styles.horizontalLine} />

      <View style={styles.dateContainer}>
        <Text style={styles.dateTitle}>From</Text>
        {Platform.OS === 'android' ? (
          <TouchableOpacity
            style={styles.dateButton}
            onPress={() => setShowFrom(true)}
          >
            <Text style={styles.dateTxt}>{dateFrom.toDateString()}</Text>
          </TouchableOpacity>
        ) : (
          <DateTimePicker
            testID='dateTimePicker'
            value={dateFrom}
            onChange={onChangeFrom}
            style={styles.datePickerIOS}
            firstDayOfWeek={2}
            dateFormat={'longdate'}
            placeholderText='select date'
          />
        )}
      </View>
      <View style={styles.dateContainer}>
        <Text style={styles.dateTitle}>To</Text>
        {Platform.OS === 'android' ? (
          <TouchableOpacity
            style={styles.dateButton}
            onPress={() => setShowFrom(true)}
          >
            <Text style={styles.dateTxt}>{dateTo.toDateString()}</Text>
          </TouchableOpacity>
        ) : (
          <DateTimePicker
            testID='dateTimePicker'
            value={dateTo}
            onChange={onChangeTo}
            style={styles.datePickerIOS}
            firstDayOfWeek={2}
            dateFormat={'longdate'}
            placeholderText='select date'
          />
        )}
      </View>
      <Text style={[styles.dividerTitleTxt, { marginTop: hp(2) }]}>Status</Text>
      <View style={[styles.horizontalLine, { marginBottom: hp(1) }]} />
      <CheckBox
        isCheckedActive={isCheckedActive}
        setCheckedActive={setCheckedActive}
        title={'Active'}
      />
      <CheckBox
        isCheckedActive={isCheckedSuperActive}
        setCheckedActive={setCheckedSuperActive}
        title={'Super Active'}
      />
      <CheckBox
        isCheckedActive={isCheckedBored}
        setCheckedActive={setCheckedBored}
        title={'Bored'}
      />

      <Button
        title='Generate'
        buttonStyle={styles.buttonStyle}
        onPress={onPress}
      />
      {showFrom && (
        <DateTimePicker
          testID='dateTimePicker'
          value={dateFrom}
          onChange={onChangeFrom}
          style={styles.windowsPicker}
          firstDayOfWeek={2}
          dateFormat={'longdate'}
          placeholderText='select date'
        />
      )}
      {showTo && (
        <DateTimePicker
          testID='dateTimePicker'
          value={dateTo}
          onChange={onChangeTo}
          style={styles.windowsPicker}
          firstDayOfWeek={2}
          dateFormat={'longdate'}
          placeholderText='select date'
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    height: hp(48),
    width: wp(90),
    borderColor: Colors.primaryMain,
    borderWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  dividerTitleTxt: {
    fontSize: 20,
    fontWeight: '400',
    color: Colors.primaryDark,
    marginLeft: wp(2),
  },
  horizontalLine: {
    backgroundColor: Colors.gray1,
    height: 1,
    width: '100%',
    marginVertical: hp(0.6),
  },
  dateContainer: {
    flexDirection: 'row',
    height: hp(6),
    width: '100%',
    marginVertical: hp(0.2),
    paddingHorizontal: wp(2),
    paddingVertical: hp(0.5),
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  dateTitle: {
    fontSize: 18,
    color: Colors.primaryMain,
  },
  dateButton: {
    // backgroundColor: 'red',
    height: hp(4.2),
    width: '83%',
    borderWidth: 1,
    borderColor: Colors.primaryDark,
    justifyContent: 'center',
    paddingHorizontal: wp(3),
  },
  dateTxt: {
    color: Colors.gray,
    fontSize: 15,
    fontWeight: '500',
  },
  buttonStyle: {
    position: 'absolute',
    bottom: hp(3),
    left: '35%',
  },
  windowsPicker: {
    flex: 1,
    paddingTop: 10,
    width: 350,
  },
  datePickerIOS: {
    paddingTop: 10,
    width: wp(40),
    justifyContent: 'flex-start',
    position: 'absolute',
    left: wp(10),
  },
});
export default FilterCard;
