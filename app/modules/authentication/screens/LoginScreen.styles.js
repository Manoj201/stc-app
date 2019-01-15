import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  containerWrapper: {
    flex: 1,
    backgroundColor: '#3399ff',
    flexDirection: 'column',
  },
  chestContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  inputContainer: {
    flex: 2,
  },
  chest: {
    height: 150,
    width: 150,
  },

  inputFieldContainer: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderBottomColor: 'brown',
    borderBottomWidth: 3,
    marginHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
