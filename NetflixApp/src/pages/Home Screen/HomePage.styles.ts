import {StyleSheet} from 'react-native';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  movieContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  posterImage: {
    width: 100,
    height: 150,
    marginBottom: 10,
  },
  titleText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default styles;
