import React, {useEffect} from 'react';
import {SafeAreaView, View} from 'react-native';
import styles from './SplashPage.styles';
import SplashImage from '../../assets/SplashBg';
import {useNavigation} from '@react-navigation/native';

function SplashPage() {
  const navigation = useNavigation();
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('InitPage');
    }, 3000);
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <View style={styles.logoImage}>
          <SplashImage></SplashImage>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default SplashPage;
