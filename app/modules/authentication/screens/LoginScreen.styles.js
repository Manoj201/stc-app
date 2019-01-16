import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  containerWrapper: {
    flex: 1,
    backgroundColor: '#0099ff',
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
    borderBottomColor: '#802000',
    borderBottomWidth: 2,
    marginHorizontal: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
