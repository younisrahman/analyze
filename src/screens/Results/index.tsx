import * as React from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Ionicons, Entypo } from '@expo/vector-icons';

import { RootStackParamList } from '../../../types';
import { Colors, hp, wp } from '../../utils';
import { TextinputWithIcon } from '../../components';
import ProfileCard from './ProfileCard';
import FilterModal from './FiltarModal';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
type DetailsProps = NativeStackScreenProps<RootStackParamList, 'Results'>;
function DetailsScreen({ navigation }: DetailsProps) {
  const { filterUser } = useSelector((state: RootState) => state.FilteredUser);
  const [show, setshow] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.headerShadow}>
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <Ionicons name='arrow-back-outline' size={24} color='black' />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.body}>
        <TouchableOpacity
          style={styles.editFilterContainer}
          onPress={() => setshow(true)}
        >
          <Text style={styles.editFilterTxt}>Edit Filter</Text>
          <Entypo
            style={styles.filterIcon}
            name='sound-mix'
            size={20}
            color={Colors.primaryDark}
          />
        </TouchableOpacity>

        <TextinputWithIcon
          iconLeft
          containerStyle={styles.searchContainer}
          textContainer={styles.textContainer}
        />

        <FlatList
          data={Object.keys(filterUser)}
          contentContainerStyle={{ paddingBottom: hp(30) }}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          renderItem={({ item, index }) => (
            <ProfileCard
              name={filterUser[item].profile.name}
              id={item}
              url={filterUser[item].profile.pictureUrl}
              status={filterUser[item].status}
              index={index}
            />
          )}
        />
      </View>
      <FilterModal show={show} setShow={setshow} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light,
  },
  header: {
    backgroundColor: Colors.primaryMain,
    height: hp(8.25),
    justifyContent: 'center',
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

  backButton: {
    height: hp(4),
    width: wp(10),
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginTop: hp(3),
  },
  body: {
    paddingHorizontal: wp(4),
  },
  filterIcon: {
    width: 26,
    transform: [{ rotate: '90deg' }],
  },
  editFilterContainer: {
    flexDirection: 'row',
    height: hp(5),
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginVertical: hp(1),
  },
  editFilterTxt: {
    color: Colors.primaryDark,
    marginRight: wp(1),
    marginBottom: hp(1),
    fontWeight: '500',
  },
  searchContainer: {
    width: '100%',
    height: hp(5),
    alignSelf: 'center',
    justifyContent: 'space-around',
  },
  textContainer: {},
});
export default DetailsScreen;
