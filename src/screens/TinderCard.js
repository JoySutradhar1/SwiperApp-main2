import {View, Text, Dimensions, Image, Animated} from 'react-native';
import React, {useCallback, useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import TinderLike from './TinderLike';
import TabViewExample from './TabViewExample';
import Tabs from './Tabs';

const {height, width} = Dimensions.get('window');
const TinderCard = ({item, index, isFirst, swipe, ...rest}) => {
  const rotate = swipe.x.interpolate({
    inputRange: [-100, 0, 100],
    outputRange: ['-8deg', '0deg', '8deg'],
  });
  const likeOpacity = swipe.x.interpolate({
    inputRange: [10, 100],
    outputRange: [0, 1],
    extrapolate: 'clamp',
  });
  const rejectOpacity = swipe.x.interpolate({
    inputRange: [-100, -10],
    outputRange: [1, 0],
    extrapolate: 'clamp',
  });

  const renderChoice = useCallback(() => {
    return (
      <>
        <Animated.View
          style={[
            {position: 'absolute', top: 20, left: 20, zIndex: 50},
            {opacity: likeOpacity},
          ]}>
          <TinderLike type={'Like'} />
        </Animated.View>
        <Animated.View
          style={[
            {position: 'absolute', top: 25, right: 20, zIndex: 50},
            {opacity: rejectOpacity},
          ]}>
          <TinderLike type={'Nope'} />
        </Animated.View>
      </>
    );
  }, []);
  return (
    <Animated.View
      style={[
        {
          backgroundColor: 'white',
          width: width - 20 - index * 6,
          height: height - 200,
          position: 'absolute',
          top: 50 - 4 * index,
          borderWidth: 0.5,
          borderColor: '#92E6B5',
          borderRadius: 10,
          alignSelf: 'center',
          shadowColor: 'green',
          shadowOffset: {width: 0, height: 2},
          shadowOpacity: 0.3,
          shadowRadius: 2,
          elevation: 4,
          overflow: 'hidden',
        },
        isFirst && {
          transform: [...swipe.getTranslateTransform(), {rotate: rotate}],
        },
      ]}
      {...rest}>
      {isFirst && renderChoice()}
      <View style={{padding: 15, gap: 15}}>
        <View style={{display: 'flex', flexDirection: 'row', gap: 10}}>
          <View
            style={{
              borderRadius: '50%',
              backgroundColor: '#92E6B5',
              height: 75,
              width: 75,
              borderRadius: 50,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <View
              style={{
                height: 57,
                width: 57,
                borderRadius: 30,
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Ionicons name="person-sharp" size={60} color={'#006D41'} />
            </View>
          </View>
          <View>
            <Text style={{fontSize: 15, fontWeight: 700, color: '#010A03CC'}}>
              Kashem Khan Pro
            </Text>
            <Text style={{fontSize: 12, fontWeight: 400, color: '#010A03CC'}}>
              Electrical Engineer
            </Text>
            <Text style={{fontSize: 11, fontWeight: 400, color: '#010A03CC'}}>
              Gono Solutions Ltd.
            </Text>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                gap: 2,
              }}>
              <Ionicons name="location-sharp" size={14} color={'#010A03CC'} />
              <Text style={{fontSize: 11, fontWeight: 400, color: '#010A03CC'}}>
                Dhaka, Bangladesh
              </Text>
            </View>
          </View>
        </View>
        <View style={{flexDirection: 'row', gap: 8}}>
          <Text
            style={{
              fontSize: 11,
              fontWeight: 700,
              backgroundColor: '#DADDDFB8',
              padding: 4,
              borderRadius: 4,
              color: '#010A03CC',
            }}>
            BSc.
          </Text>
          <Text
            style={{
              fontSize: 11,
              fontWeight: 700,
              backgroundColor: '#DADDDFB8',
              padding: 4,
              borderRadius: 4,
              color: '#010A03CC',
            }}>
            3 years+ experience
          </Text>
        </View>
      </View>
      {/* <TabViewExample /> */}
      <Tabs />
    </Animated.View>
  );
};

export default TinderCard;
