import React from 'react';
import { View, Text } from 'react-native';

import styles from './screenheader.style';
import { TouchableOpacity, Image } from 'react-native';

const ScreenHeaderBtn = ({ iconUrl, dimension, handlePress }) => {
  return (
    <TouchableOpacity style={styles.btnContainer} onPress={handlePress}>
      <Image
        source={iconUrl}
        style={styles.btnImg(dimension)}
        resizeMode='cover'
      />
    </TouchableOpacity>
  );
};

export default ScreenHeaderBtn;
