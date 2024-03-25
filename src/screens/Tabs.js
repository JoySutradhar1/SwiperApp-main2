import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
} from 'react-native';
import React, {useState} from 'react';

const listTab = [
  {
    id: 1,
    status: 'Experience',
  },
  {
    id: 2,
    status: 'Education',
  },
  {
    id: 3,
    status: 'Certifications',
  },
];
const Tabs = () => {
  const [status, setStatus] = useState('Experience');
  const setStatusFilter = status => {
    setStatus(status);
  };

  return (
    <View style={{flex: 1}}>
      <View
        style={{
          backgroundColor: '#fff',

          flexDirection: 'row',
        }}>
        {listTab.map(item => (
          <TouchableOpacity
            key={item.id}
            style={[
              {
                width: Dimensions.get('window').width / 3.1,
                flexDirection: 'row',
                padding: 10,
                justifyContent: 'center',
              },
              status === item.status && {
                borderBottomWidth: 2,
                borderBottomColor: 'green',
              },
            ]}
            onPress={() => setStatusFilter(item.status)}>
            <Text
              style={[
                styles.tabLabelStyle,
                status === item.status && styles.focusLabelStyle,
              ]}>
              {item.status}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <View
        style={{
          flex: 1,
          padding: 20,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        {status === 'Experience' && (
          <Text style={{color: 'black'}}>Experience</Text>
        )}
        {status === 'Education' && (
          <Text style={{color: 'black'}}>Education</Text>
        )}
        {status === 'Certifications' && (
          <Text style={{color: 'black'}}>Certifications</Text>
        )}
      </View>
    </View>
  );
};

export default Tabs;

const styles = StyleSheet.create({
  tabLabelStyle: {color: '#010A0399', fontWeight: 600, fontSize: 11},
  focusLabelStyle: {color: '#020202'},
});
