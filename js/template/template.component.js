import React, { Component } from 'react';
import {
  View,
  Text
} from 'react-native';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

var PlatformStyleSheet = require('../shared/PlatformStyleSheet');

import { someAction } from './template.actions';

class Template extends Component {
  render() {
    return (
      <View>
        <Text style={styles.text}>app state: {JSON.stringify(this.props.app)}</Text>
      </View>
    );
  }
}

const styles = PlatformStyleSheet.create({
  text: {
      fontSize: 20
  }
});

function mapStateToProps(state) {
    return {
        app: state.app
    };
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({ someAction }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Template);