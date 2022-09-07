import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  movieItem: {
    width: '90%',
    height: 100,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
    alignSelf: 'center',
  },
  movieImage: {
    width: '20%',
    height: 100,
  },
  movieDetails: {
    width: '75%',
    height: 100,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
});
