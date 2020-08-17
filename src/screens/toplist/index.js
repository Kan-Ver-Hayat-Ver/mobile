const React = require('react');
const {View, StyleSheet, Switch, Text, FlatList} = require('react-native');
import TopListElement from './TopListElement';
import TopListElementDonate from './TopListElementDonators';
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
  state = {
    donators: false,
  };

  toggleSwitch = () => {
    this.setState({
      donators: !this.state.donators,
    });
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.SwitchContainer}>
          <Text style={styles.SwitchText}>Kan Verenler</Text>
          <Switch
            trackColor={{false: '#767577', true: '#767577'}}
            thumbColor={'white'}
            ios_backgroundColor="white"
            onValueChange={this.toggleSwitch}
            value={this.state.donators}
          />
          <Text style={styles.SwitchText}>Bağış Yapanlar</Text>
        </View>
        {this.state.donators ? (
          <FlatList
            data={DATA}
            showsVerticalScrollIndicator={false}
            horizontal={false}
            renderItem={({item}) => <TopListElement />}
            keyExtractor={(item) => item.id}
          />
        ) : (
          <FlatList
            data={DATA}
            showsVerticalScrollIndicator={false}
            horizontal={false}
            renderItem={({item}) => <TopListElementDonate />}
            keyExtractor={(item) => item.id}
          />
        )}
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
  SwitchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
    justifyContent: 'center',
  },
  SwitchText: {
    marginLeft: 5,
    marginRight: 5,
    color: '#FF2744',
    fontWeight: 'bold',
  },
  listStyle: {
    flex: 1,
    width: '100%',
  },
});
