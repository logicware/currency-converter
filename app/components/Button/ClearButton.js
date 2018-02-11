import React from "react";
import PropTypes from "prop-types";

import {View, TouchableOpacity, Image, Text} from 'react-native';

import styles from './styles';

export default class ClearButton extends React.Component {
  render() {
    return (
      <TouchableOpacity style={styles.container} onPress={this.props.onPress}>
        <View style={styles.wrapper}>
          <Image resizeMode="contain" style={styles.icon} source={require('./images/icon.png')}/>
          <Text style={styles.text}>{this.props.text}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

ClearButton.propTypes = {
  text: PropTypes.string,
  onPress: PropTypes.func
};