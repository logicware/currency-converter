import React from 'react';
import PropTypes from 'prop-types';
import { View, TouchableWithoutFeedback, Keyboard } from 'react-native';

import styles from './styles';

export default class Container extends React.Component {
  render() {
    const containerStyles = [styles.container];
    if (this.props.backgroundColor) {
      containerStyles.push({ backgroundColor: this.props.backgroundColor });
    }

    return (
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={containerStyles}>
          {this.props.children}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

Container.propTypes = {
  backgroundColor: PropTypes.string,
  children: PropTypes.any,
};
