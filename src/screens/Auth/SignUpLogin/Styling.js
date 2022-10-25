import {StyleSheet} from 'react-native';
import {colors} from '../../../config/Colors';

export default StyleSheet.create({
  Container: {
    flex: 1,
  },
  splashView: {
    flex: 0.3,
    backgroundColor: colors.primaryColor85,
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewImage: {
    backgroundColor: colors.primaryColor85,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0.9,
  },
  viewInputField: {
    flex: 1,
    backgroundColor: colors.colorWhite,
    borderTopEndRadius: 24,
    borderTopLeftRadius: 24,
    marginTop: -22,
    padding: 22,
  },
  marginTop: {marginTop: 16},
});
