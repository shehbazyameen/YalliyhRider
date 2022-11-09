import {StyleSheet} from 'react-native';
import fonts from '../../assets/fonts';
import {colors} from '../../config/Colors';
import {normalize} from '../../config/FontsNormalize';
import {vh, vw} from '../../config/Unit';

export default StyleSheet.create({
  viewMain: {
    position: 'absolute',
    width: '100%',
    bottom: 0,
    backgroundColor: '#AFB1B340',
    borderRadius: 68,
  },
  hw32: {
    height: 32,
    width: 32,
  },
  Container: {
    flex: 1,
    backgroundColor: colors.colorWhite,
  },
  padding22: {
    paddingHorizontal: 16,
    backgroundColor: 'red',
    flex: 1,
  },

  //Modal

  textViewDetails: {
    fontSize: normalize(16),
    fontFamily: fonts.DongleRegular,
    color: colors.textColorLogin,
    textDecorationLine: 'underline',
  },
});
