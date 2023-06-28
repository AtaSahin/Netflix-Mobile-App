import React from 'react';
import {SafeAreaView} from 'react-native';
import styles from './CustomSafeAreaView.styles';

function CustomSafeAreaView(props) {
  return <SafeAreaView style={styles.container}></SafeAreaView>;
}

export default CustomSafeAreaView;
