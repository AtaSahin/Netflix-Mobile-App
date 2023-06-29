import {StyleSheet} from 'react-native';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  filmContainer: {},
  movieContainer: {
    alignItems: 'center',
    marginHorizontal: scale(10),
  },
  posterImage: {
    width: scale(100),
    height: scale(150),
    marginBottom: 10,
  },
  PreviewposterImage: {
    width: scale(100),
    height: scale(100),
    borderRadius: scale(100),
    marginBottom: 10,
  },
  titleText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },

  rowContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },

  rowSeparator: {
    height: 1,
    backgroundColor: 'gray',
  },
  searchBar: {
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    color: 'white',
    // Add other search bar styles if needed
  },
});

export default styles;
