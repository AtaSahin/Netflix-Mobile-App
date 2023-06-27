import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      paddingHorizontal: 16,
      backgroundColor:"#342F2F"
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 16,
      color:"white"
    },
    input: {
      height: 40,
      borderColor: 'white',
      borderWidth: 1,
      marginBottom: 16,
      paddingHorizontal: 8,
    },
    recoverPassword: {
      marginTop: 16,
      textAlign: 'center',
      textDecorationLine: 'underline',
      color: 'white',
    },
  });
  export default styles;