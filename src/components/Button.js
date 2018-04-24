import React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  Text
} from 'react-native';


const Button = (props) => {
  return (
    <TouchableOpacity style={styles.button} onPress={props.onPress}>
      <Text style={styles.text}> {props.children} </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    color: '#007aff',
    fontSize: 16,
    fontWeight: '600',
  },
  button: {
    padding: 10,
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007aff',
    marginLeft: 5,
    marginRight: 5,
  },
});

export default Button;
