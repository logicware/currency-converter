import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FlatList, StatusBar, View } from 'react-native';
import { connect } from 'react-redux';

import currencies from '../data/currencies';
import { ListItem, Separator } from '../components/List';

import { changeBaseCurrency, changeQuoteCurrency } from '../actions/currencies';

class CurrencyList extends Component {
  static propTypes = {
    navigation: PropTypes.object,
    dispatch: PropTypes.func,
    primaryColor: PropTypes.string,
  };

  handlePress = (currency) => {
    const { type } = this.props.navigation.state.params;
    if (type === 'base') {
      this.props.dispatch(changeBaseCurrency(currency));
    } else if (type === 'quote') {
      this.props.dispatch(changeQuoteCurrency(currency));
    }

    this.props.navigation.goBack(null);
  };

  render() {
    const { currentCurrency } = this.props.navigation.state.params;
    return (
      <View style={{ flex: 1 }}>
        <StatusBar translucent={false} barStyle="default" />
        <FlatList
          data={currencies}
          renderItem={
            ({ item }) => (
              <ListItem
                text={item}
                onPress={() => this.handlePress(item)}
                selected={item === currentCurrency}
                iconBackground={this.props.primaryColor}
              />
            )}
          keyExtractor={item => item}
          ItemSeparatorComponent={Separator}
        />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  primaryColor: state.themes.primaryColor,
});

export default connect(mapStateToProps)(CurrencyList);
