import { StyleSheet} from "react-native"
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"black",
        
    },
    scrollStyle:{
        alignItems: 'center',
        justifyContent: 'center',
        bottom:'25%',
        right: '8%'
    },
    bannerImage:{
        alignSelf:"center",
        top:'8%'

    },
    menuContainer:{
        alignItems: 'center',
        justifyContent: 'center',
        top:'8%'
    },
    headerText: {
        color:"white",
        fontSize: 30,
        fontWeight: '900',
        top:'15%',
        
      },
      normalText: {
        fontSize: 16,
        margin:20,
        textAlign: 'center',
        color:"white",
        top:'15%',
        width: '70%'
      },
      signInButton:{
        alignSelf:"center",
        backgroundColor:"red",
        width:'90%',
        height:'8%'

      },
      signInText:{
        alignSelf:"center",
        top:'25%',
        color:"white",
        fontWeight: '900',
        fontSize: scale(15),
      }
})

export default styles;