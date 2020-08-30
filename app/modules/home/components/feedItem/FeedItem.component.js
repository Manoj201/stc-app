import React from 'react';
import {Image, Text, View} from 'react-native';

import styles from './FeedItem.styles';

const crest = require('../../../../theme/crest.png');

class FeedItem extends React.PureComponent<any, any> {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.chestContainer}>
          <Image
            source={crest}
            style={styles.chest}
          />
        </View>
        <View style={styles.detailContainer}>
          <View style={styles.nameWrapper}>
            <Text>Manoj Gamachchige</Text>
            <Text>(GMP)</Text>
          </View>
          <View >
            <Text>Senior Software Engineer</Text>
          </View>
          <View>
            <Text>Calcey Technologies</Text>
          </View>
        </View>
      </View>
    );
  }
}

export default FeedItem;
