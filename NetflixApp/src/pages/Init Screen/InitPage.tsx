import React from 'react';
import { ScrollView, Text, Touchable, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './Initpage.styles';
import InitImage from '../../assets/InitBg';
import { useNavigation } from '@react-navigation/native';

function InitPage(props) {
const navigation=useNavigation();



    return (
   <SafeAreaView style={styles.container}>
    <ScrollView horizontal contentContainerStyle={styles.scrollStyle}>
        
    <View style={styles.menuContainer}>
<InitImage style={styles.bannerImage}/>
<Text style={styles.headerText}>Watch on any Device</Text>
    <Text style={styles.normalText}>Stream on your phone,tablet, laptop and TV without paying more</Text>

    </View>
    </ScrollView>
  <TouchableOpacity style={styles.signInButton} onPress={()=> navigation.navigate("SignInPage")}>
<Text style={styles.signInText}>SIGN IN</Text>
  </TouchableOpacity>
   </SafeAreaView>
    );
}

export default InitPage;