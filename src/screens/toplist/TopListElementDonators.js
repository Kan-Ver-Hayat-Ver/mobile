const React = require('react');
const {
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  View,
  Image,
} = require('react-native');
const {width} = Dimensions.get('window');

const TopListElement = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.elementContainer}>
          <View style={styles.profileContainer}>
            <Image
              source={require('../../assets/img/profile.jpg')}
              style={{
                resizeMode: 'cover',
                height: 40,
                width: 40,
                backgroundColor: 'red',
                margin: 5,
                marginRight: 10,
                borderRadius: 20,
              }}
            />
            <View style={styles.elementor}>
              <Text style={styles.descriptionText}>Donator Name</Text>
              <Text style={styles.expText}>Arif Dogan</Text>
            </View>
          </View>
          <View style={styles.elementor}>
            <Text style={styles.descriptionText}>Location / Hospital</Text>
            <Text style={styles.expText}>Istanbul, Besiktas</Text>
          </View>
          <View style={styles.elementor}>
            <Text style={styles.descriptionText}>Blood Type</Text>
            <Text style={styles.expText}>A RH+</Text>
          </View>
          <View
            onPress={() => {
              alert();
            }}
            style={styles.donationCount}>
            <Text style={styles.donateText}>20 Donate!</Text>
          </View>
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
  donationCount: {
    alignSelf: 'flex-end',
    position: 'absolute',
    right: 20,
    top: 20,
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
  profileContainer: {
    flexDirection: 'row',
  },
});

export default TopListElement;
