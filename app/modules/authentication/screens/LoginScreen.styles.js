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
    paddingVertical: 20,
  },
  inputContainer: {
    flex: 2,
  },
  chest: {
    height: 150,
    width: 150,
  },
  textWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputFieldContainer: {
    flexDirection: 'row',
    borderBottomColor: '#802000',
    borderBottomWidth: 2,
    marginHorizontal: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 30,
    color: '#802000',
    fontFamily: 'DINOT-CondBold',
  },
  subTitleText: {
    fontSize: 20,
    color: '#802000',
    fontFamily: 'DINOT-CondBold',
  }
});

export default styles;
