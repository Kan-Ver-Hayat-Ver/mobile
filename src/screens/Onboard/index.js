const React = require('react');
const {View, StyleSheet, Text, Image} = require('react-native');
import KVButton from '../../components/KVButton';
import KVPadder from '../../components/KVPadder';

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.imageStyle}
          source={require('../../assets/img/icon.png')}
        />
        <KVPadder height={30} />
        <Text style={styles.descriptionStyle}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lobortis
          velit a sollicitudin mattis. Donec sapien nibh, gravida cursus
          interdum eu, elementum eu leo.
        </Text>
        <KVPadder height={30} />
        <KVButton
          onPress={() => {
            this.props.navigation.navigate('Controller');
          }}
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
  imageStyle: {
    height: 200,
    width: 200,
  },
  descriptionStyle: {
    margin: 20,
    textAlign: 'center',
    color: 'gray',
  },
});
