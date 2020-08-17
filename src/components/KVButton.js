const React = require('react');
const {Text, TouchableOpacity, StyleSheet} = require('react-native');

const KVButton = (props) => {
  const container = !props.height
    ? {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        borderWidth: 2,
        borderColor: '#FF2744',
        height: 50,
        width: 200,
      }
    : {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        borderWidth: 2,
        borderColor: '#FF2744',
        height: props.height,
        width: props.width,
      };

  const titleGenerator = () => {
    if (props.text) {
      return props.text;
    } else {
      return 'Giris Yap';
    }
  };

  return (
    <TouchableOpacity {...props} style={container}>
      <Text style={styles.descriptionText}>{titleGenerator()}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  descriptionText: {
    color: '#FF2744',
    fontWeight: 'bold',
  },
});

export default KVButton;
