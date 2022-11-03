import {StyleSheet} from 'react-native';
import fonts from '../../assets/fonts';
import {colors} from '../../config/Colors';

export default StyleSheet.create({
  Container: {
    flex: 1,
  },
  viewBorder: {
    backgroundColor: colors.colorWhite,
    height: 32,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    marginTop: -12,
  },
  padding22: {
    padding: 22,
  },
  viewLine: {
    height: 1,
    width: '95%',
    marginTop: 12,
    backgroundColor: colors.bordergray,
    alignSelf: 'flex-end',
  },
});
