import {StyleSheet} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

export default StyleSheet.create({
  card: {
    backgroundColor: Colors.lighter,
    marginHorizontal: 25,
    marginVertical: 10,
    borderColor: 'lightgrey',
    borderWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 20,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
  },
});
