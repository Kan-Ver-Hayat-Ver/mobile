const React = require('react');
const {Text, TouchableOpacity, StyleSheet} = require('react-native');

const KVButton = (props) => {
  return (
    <TouchableOpacity {...props} style={styles.container}>
      <Text style={styles.descriptionText}>Giriş Yap</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#FF2744',
    height: 50,
    width: 200,
  },
  descriptionText: {
    color: '#FF2744',
    fontWeight: 'bold',
  },
});

export default KVButton;
