import {StyleSheet, Platform} from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  textInput: {
    fontSize: 15,
    ...Platform.select({
      ios: {
        height: 28,
      },
      android: {
        height: 35,
        paddingBottom: 0,
      },
    }),
    width: '90%',
  },
  inputWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: 'brown',
  },
});

export default styles;
