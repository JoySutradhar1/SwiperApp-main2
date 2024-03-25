import * as React from 'react';
import {Text, View, useWindowDimensions} from 'react-native';
import {SceneMap, TabBar, TabView} from 'react-native-tab-view';
// import {TabView, SceneMap, TabBar} from 'react-native-tab-view';

const FirstRoute = () => <View style={{flex: 1, backgroundColor: '#ff4081'}} />;

const SecondRoute = () => (
  <View style={{flex: 1, backgroundColor: '#673ab7'}} />
);
const ThirdRoute = () => <View style={{flex: 1, backgroundColor: 'green'}} />;

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
  third: ThirdRoute,
});

export default function TabViewExample() {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'Experience'},
    {key: 'second', title: 'Education'},
    {key: 'third', title: 'Certifications'},
  ]);

  const renderTabBar = props => (
    <TabBar
      {...props}
      indicatorStyle={{backgroundColor: '#00D42ACC'}}
      style={{backgroundColor: 'white'}}
      labelStyle={{fontSize: 12, color: 'gray'}}
      getLabelText={({route, focused}) => (
        <Text style={{textTransform: 'capitalize'}}> {route.title}</Text>
      )}
    />
  );

  return (
    <TabView
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{width: layout.width}}
      renderTabBar={renderTabBar}
    />
  );
}
