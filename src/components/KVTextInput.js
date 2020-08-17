const React = require('react');
const {TextInput, StyleSheet} = require('react-native');

const KVTextInput = (props) => {
  const container = props.height
    ? {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#FF2744',
        height: props.height,
        width: 300,
      }
    : {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#FF2744',
        height: 40,
        width: 300,
      };

  const textStyle = props.isDescription
    ? {}
    : {
        textAlign: 'center',
      };
  return (
    <TextInput
      placeholderTextColor={'gray'}
      placeholder={props.placeholder}
      multiline={props.isDescription ? true : false}
      style={[container, textStyle]}
    />
  );
};

export default KVTextInput;
