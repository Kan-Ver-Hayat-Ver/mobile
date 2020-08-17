const React = require('react');
const {View, StyleSheet, Text, FlatList} = require('react-native');
import HomeListElement from './HomeListElement';
import {TouchableOpacity} from 'react-native-gesture-handler';
const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => {
            this.props.navigation.navigate('Add');
          }}
          style={styles.topContainer}>
          <Text style={styles.topTitle}>Create Donation Need</Text>
        </TouchableOpacity>
        <FlatList
          data={DATA}
          showsVerticalScrollIndicator={false}
          horizontal={false}
          renderItem={({item}) => <HomeListElement />}
          keyExtractor={(item) => item.id}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  topContainer: {
    marginTop: 10,
  },
  topTitle: {
    fontWeight: 'bold',
    color: '#FF2744',
    fontSize: 20,
  },
  listStyle: {
    flex: 1,
    width: '100%',
  },
});
