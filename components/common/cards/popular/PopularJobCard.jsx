import React from 'react';
import { View, Text } from 'react-native';

import styles from './popularjobcard.style';
import { TouchableOpacity } from 'react-native';

const PopularJobCard = ({ item, selectedJob, handleCardPress }) => {
  return (
    <TouchableOpacity
      style={styles.container(selectedJob, item)}
      onPress={() => handleCardPress(item)}
    ></TouchableOpacity>
  );
};

export default PopularJobCard;
