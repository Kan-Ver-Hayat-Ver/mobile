const React = require('react');
const {View, StyleSheet, Text} = require('react-native');
export default class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>ASD</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
  },
});
