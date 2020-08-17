const React = require('react');
const {
  View,
  StyleSheet,
  Text,
  Keyboard,
  KeyboardAvoidingView,
  TouchableOpacity,
} = require('react-native');
import KVTextInput from '../../components/KVTextInput';
import KVButton from '../../components/KVButton';
export default class AddDonation extends React.Component {
  render() {
    return (
      <TouchableOpacity
        activeOpacity={1}
        onPress={Keyboard.dismiss}
        style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.descriptionText}>Name Surname</Text>
          <KVTextInput />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.descriptionText}>Hospital</Text>
          <KVTextInput />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.descriptionText}>Blood Type</Text>
          <KVTextInput />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.descriptionText}>Description</Text>
          <KVTextInput height={100} isDescription={true} />
        </View>
        <View style={styles.buttonContainer}>
          <KVButton height={40} width={150} text={'Send'} />
          <View style={{width: 30}} />
          <KVButton
            height={40}
            width={150}
            text={'Cancel'}
            onPress={() => {
              this.props.navigation.pop();
            }}
          />
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  descriptionText: {
    marginBottom: 5,
    color: 'gray',
    fontWeight: '600',
  },
  textContainer: {
    margin: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 30
    // justifyContent: 'space-between'
  },
});
