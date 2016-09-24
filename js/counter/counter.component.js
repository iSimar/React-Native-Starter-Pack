import React, { Component } from 'react';
import {
  View,
  Text
} from 'react-native';
import { Button } from 'native-base';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import { onUpdateCounter } from './counter.actions';

var PlatformStyleSheet = require('../shared/PlatformStyleSheet');

class Counter extends Component {
  render() {
    return (
      <View>
        <Text style={styles.counterText}>{this.props.counter}</Text>
        <Button onPress={() => this.props.onUpdateCounter(this.props.counter+1)}> +1 </Button>
      </View>
    );
  }
}

const styles = PlatformStyleSheet.create({
  counterText: {
      fontSize: 20
  }
});

function mapStateToProps(state) {
    return {
        counter: state.counter
    };
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({ onUpdateCounter }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Counter);