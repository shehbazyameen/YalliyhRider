import {StyleSheet, Dimensions} from 'react-native';
import fonts from '../../../assets/fonts';
import {colors} from '../../../config/Colors';
import {normalize} from '../../../config/FontsNormalize';

const {height, width} = Dimensions.get('window');

export default StyleSheet.create({
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

  textSignup: {
    alignSelf: 'center',
    padding: 4,
  },

  Container: {
    flex: 1,
  },
  height190: {
    height: 190,
  },
  touch: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  textPasswordRecovery: {
    // fontSize: 40,
    fontSize: normalize(38),
    fontFamily: fonts.DongleBold,
    color: colors.textColorLogin,
  },

  //
  textBackToLogin: {
    // fontSize: 24,
    fontSize: normalize(22),
    fontFamily: fonts.DongleRegular,
    color: colors.textColorLogin,
    textDecorationLine: 'underline',
  },
  viewInputField: {
    flex: 1,
    backgroundColor: colors.colorWhite,
    borderTopEndRadius: 24,
    borderTopLeftRadius: 24,
    marginTop: -22,
    padding: 22,
    paddingHorizontal: 45,
  },
  textVerificationCode: {
    // fontSize: 18,
    fontSize: normalize(16),
    fontFamily: fonts.DongleRegular,
    color: colors.textColorInputAbove,
    marginVertical: 12,
  },

  marginTop: {
    marginTop: 16,
  },
  textInputField: {
    // fontSize: 20,
    fontSize: normalize(18),
    fontFamily: fonts.PoppinsBold,
    color: '#374550',
    textAlign: 'center',
  },

  cell: {
    margin: 5,
    width: 60,
    height: 60,
    borderRadius: 20,
    // fontSize: 15,
    fontSize: normalize(14),
    fontFamily: fonts.PoppinsBold,
    backgroundColor: '#F4F5FA',
    overflow: 'hidden',
    textAlign: 'center',
    paddingTop: 14,
  },
  shadowCodeField: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  focusCell: {
    backgroundColor: colors.primaryColor85,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.primaryColor85,
    width: 60,
    height: 60,
    borderRadius: 20,
    color: 'white',
  },
  textResend: {
    // fontSize: 20,
    fontSize: normalize(18),
    fontFamily: fonts.DongleRegular,
    color: colors.timerColor,
  },
  didReceived: {
    // fontSize: 20,
    fontSize: normalize(18),
    fontFamily: fonts.DongleRegular,
    color: colors.primaryColor85,
  },
});
