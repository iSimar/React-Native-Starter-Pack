import React, { Component } from 'react';
import {
  Text
} from 'react-native';
import { Container, Header, Title, Content } from 'native-base';

var PlatformStyleSheet = require('../shared/PlatformStyleSheet');

import Counter from '../counter/counter.component';


class Layout extends Component {
  render() {
    return (
      <Container> 
          <Header>
              <Title>Header Title</Title>
          </Header>

          <Content style={styles.content}>
              <Counter />
          </Content>
      </Container>
    );
  }
}

const styles = PlatformStyleSheet.create({
  content: {
    flex: 1,
    padding: 20
  }
});
export default Layout;
