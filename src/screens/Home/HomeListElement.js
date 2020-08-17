const React = require('react');
const {
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  View,
} = require('react-native');
const {width} = Dimensions.get('window');

const HomeListElement = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.elementContainer}>
          <View style={styles.elementor}>
            <Text style={styles.descriptionText}>Name</Text>
            <Text style={styles.expText}>Arif Dogan</Text>
          </View>
          <View style={styles.elementor}>
            <Text style={styles.descriptionText}>Location</Text>
            <Text style={styles.expText}>Istanbul, Besiktas</Text>
          </View>
          <View style={styles.elementor}>
            <Text style={styles.descriptionText}>Blood Type</Text>
            <Text style={styles.expText}>A RH+</Text>
          </View>
          <TouchableOpacity
            onPress={() => {
              alert();
            }}
            style={styles.donateButtonContainer}>
            <Text style={styles.donateText}>DONATE</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 320,
    width: width - 10,
  },
  innerContainer: {
    height: 280,
    backgroundColor: 'white',
    width: width - 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 2.62,
    elevation: 4,
  },
  donateButtonContainer: {
    alignSelf: 'flex-end',
  },
  donateText: {
    color: '#FF2744',
    fontWeight: '900',
  },
  elementContainer: {
    padding: 20,
    flex: 1,
  },
  elementor: {
    marginBottom: 30,
  },
  descriptionText: {
    color: '#BCC5D0',
    fontWeight: 'bold',
  },
  expText: {
    fontWeight: 'bold',
    marginTop: 10,
  },
});

export default HomeListElement;
