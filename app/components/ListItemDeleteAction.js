import React from 'react';
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Alert,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

function ListItemDeleteAction({ onPress }) {
  const handleBlock = () => {
    Alert.alert(
      'Block',
      'Are you sure you want to block this user? This user will not be able to send any message/picture to you anymore',
      [
        {
          text: 'Yes',
          onPress: () => {
            userBlocked();
          },
        },
        { text: 'No' },
      ]
    );
  };

  const handleReport = () => {
    Alert.alert(
      'Report',
      'I want to report this user with objectionable content',
      [
        {
          text: 'Yes',
          onPress: () => {
            requestSent();
          },
        },
        { text: 'No' },
      ]
    );
  };

  const userBlocked = () => {
    Alert.alert('User Blocked', 'This user is blocked', [
      { text: 'OK', onPress: () => {} },
    ]);
  };

  const requestSent = () => {
    Alert.alert(
      'Objectionable Content Report Sent',
      'Your report request has been sent, we will take action within 24 hours',
      [{ text: 'OK', onPress: () => {} }]
    );
  };

  return (
    // <TouchableWithoutFeedback>
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={handleBlock}>
        <View>
          <MaterialCommunityIcons
            name='block-helper'
            color='red'
            size={30}
            style={{ right: 5 }}
          />
        </View>
      </TouchableWithoutFeedback>

      <View>
        <TouchableWithoutFeedback onPress={handleReport}>
          <MaterialIcons name='report-problem' color='#EEAC0C' size={35} />
        </TouchableWithoutFeedback>
      </View>
    </View>
    // </TouchableWithoutFeedback>
  );
}
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default ListItemDeleteAction;
