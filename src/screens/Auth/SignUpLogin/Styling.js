import {StyleSheet, Dimensions} from 'react-native';
import fonts from '../../../assets/fonts';
import {colors} from '../../../config/Colors';
import {normalize} from '../../../config/FontsNormalize';

const {height, width} = Dimensions.get('window');

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
  viewTaber: {
    paddingHorizontal: 7,
    paddingVertical: 6,
    backgroundColor: '#E0E0E066',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 10,
    width: width / 2,
  },
  viewMainTab: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  touch: {
    flexDirection: 'row',
    marginTop: 5,
    alignSelf: 'center',
  },
  textAlready: {
    // fontSize: 18,
    fontSize: normalize(16),
    fontFamily: fonts.DongleRegular,
    color: colors.lightGray,
  },
  textAlreadyLogin: {
    // fontSize: 18,
    fontSize: normalize(16),
    fontFamily: fonts.DongleRegular,
    color: colors.textColorLogin,
    textDecorationLine: 'underline',
  },
  height190: {height: 190},
  textSignupTab: {
    paddingHorizontal: 25,
    paddingVertical: 9,
  },
  textSignup: {
    alignSelf: 'center',
    padding: 22,
  },
  textForgotPassword: {
    // fontSize: 18,
    fontSize: normalize(16),
    fontFamily: fonts.DongleRegular,
    color: colors.lightGray,
    textDecorationLine: 'underline',
  },
  touchforgot: {
    alignSelf: 'flex-end',
    paddingVertical: 4,
  },
});
