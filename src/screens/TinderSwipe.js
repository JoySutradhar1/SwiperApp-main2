import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  Animated,
  PanResponder,
  Dimensions,
  Modal,
} from 'react-native';
import React, {useCallback, useEffect, useRef, useState} from 'react';
import TinderCard from './TinderCard';
const {height, width} = Dimensions.get('window');
const TinderSwipe = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    if (!data.length) {
      setData([
        {image: require('../images/hulk.webp'), id: 1, title: 'Hulk'},
        {image: require('../images/ironman.webp'), id: 2, title: 'Ironman'},
        {image: require('../images/thor.jpeg'), id: 3, title: 'Thor'},
        {image: require('../images/superman.webp'), id: 4, title: 'Superman'},
        {image: require('../images/groot.webp'), id: 5, title: 'Groot'},
        {
          image: require('../images/blackpanther.webp'),
          id: 6,
          title: 'Black Panther',
        },
        {
          image: require('../images/drstrange.jpeg'),
          id: 7,
          title: 'Dr Strange',
        },
        {
          image: require('../images/blackwidow.jpeg'),
          id: 8,
          title: 'Black Widow',
        },
      ]);
    }
  }, [data.length]);
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };
  const swipe = useRef(new Animated.ValueXY()).current;
  const panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: () => true,
    onPanResponderMove: (_, {dx, dy}) => {
      swipe.setValue({x: dx, y: dy});
      console.log('Y:' + dy);
    },
    onPanResponderRelease: (_, {dx, dy}) => {
      const direction = Math.sign(dx);
      const directionY = Math.sign(dy);
      const isActionActiove = Math.abs(dx) > 200;
      const isActionActiove2 = dy < -200;
      if (isActionActiove) {
        Animated.timing(swipe, {
          toValue: {x: direction * 500, y: dy},
          useNativeDriver: true,
          duration: 500,
        }).start(removeCard);
      }
      if (isActionActiove2) {
        Animated.timing(swipe, {
          toValue: {y: directionY * 500},
          useNativeDriver: true,
          duration: 200,
        }).start(openModal);
      } else {
        Animated.spring(swipe, {
          toValue: {x: 0, y: 0},
          useNativeDriver: true,
          friction: 200,
        }).start();
      }
    },
  });
  const removeCard = useCallback(() => {
    setData(prevState => prevState.slice(1));
    swipe.setValue({x: 0, y: 0});
  }, [swipe]);

  const handleChoiceButtons = useCallback(
    direction => {
      Animated.timing(swipe.x, {
        toValue: direction * width,
        duration: 500,
        useNativeDriver: true,
      }).start(removeCard);
    },
    [removeCard, swipe.x],
  );
  return (
    <View style={{flex: 1}}>
      <FullScreenModal visible={modalVisible} onClose={closeModal}>
        <Text>This is the content of the modal</Text>
      </FullScreenModal>
      {data
        .map((item, index) => {
          const isFirst = index === 0;
          const dragHandlers = isFirst ? panResponder.panHandlers : {};
          return (
            <TinderCard
              key={item.id}
              swipe={swipe}
              index={index}
              item={item}
              isFirst={isFirst}
              {...dragHandlers}
            />
          );
        })
        .reverse()}
      {/* <View
        style={{
          position: 'absolute',
          flexDirection: 'row',
          width: '100%',
          justifyContent: 'space-evenly',
          alignItems: 'center',
          bottom: 30,
          zIndex: -1,
        }}>
        <TouchableOpacity
          style={{
            width: 70,
            height: 70,
            borderRadius: 35,
            backgroundColor: '#fff',
            elevation: 5,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => {
            handleChoiceButtons(-1);
          }}>
          <Image
            source={require('../images/cancel.png')}
            style={{width: 34, height: 34, tintColor: '#FF0060'}}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: 70,
            height: 70,
            borderRadius: 35,
            backgroundColor: '#fff',
            elevation: 5,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => {
            handleChoiceButtons(1);
          }}>
          <Image
            source={require('../images/heart.png')}
            style={{width: 40, height: 40, tintColor: '#00eda6'}}
          />
        </TouchableOpacity>
      </View> */}
    </View>
  );
};

export default TinderSwipe;

export const FullScreenModal = ({visible, onClose, children}) => {
  const panY = useRef(new Animated.Value(0)).current;
  const screenHeight = Dimensions.get('screen').height;

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event([null, {dy: panY}], {
        useNativeDriver: false,
      }),
      onPanResponderRelease: (_, gestureState) => {
        if (gestureState.dy > screenHeight * 0.2) {
          onClose();
        } else {
          Animated.spring(panY, {
            toValue: 0,
            useNativeDriver: false,
          }).start();
        }
      },
    }),
  ).current;

  const translateY = panY.interpolate({
    inputRange: [0, screenHeight],
    outputRange: [0, screenHeight],
    extrapolate: 'clamp',
  });

  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onClose}>
      <View style={{flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.5)'}}>
        <Animated.View
          style={{
            flex: 1,
            // justifyContent: 'flex-end',
            transform: [{translateY}],
          }}
          {...panResponder.panHandlers}>
          <View
            style={{
              backgroundColor: 'white',
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
              padding: 20,
              flex: 1,
            }}>
            {children}
          </View>
        </Animated.View>
      </View>
    </Modal>
  );
};
