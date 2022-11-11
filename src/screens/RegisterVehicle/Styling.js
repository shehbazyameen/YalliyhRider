import {StyleSheet, Dimensions} from 'react-native';
import fonts from '../../assets/fonts';
import {colors} from '../../config/Colors';
import {normalize} from '../../config/FontsNormalize';

const {height, width} = Dimensions.get('window');

export default StyleSheet.create({
  hw80: {
    height: 80,
    width: 80,
  },
  txtAddImage: {
    fontSize: normalize(16),
    color: colors.lightGray,
    fontFamily: fonts.DongleRegular,
    position: 'absolute',
    zIndex: 1111,
  },
  touchImageAdd: {
    height: 80,
    width: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtTitle: {
    fontSize: normalize(16),
    color: colors.textColorInputAbove,
    fontFamily: fonts.DongleRegular,
  },
  textVehicleType: {
    // fontSize: 18,
    fontSize: normalize(16),
    color: colors.textColorInputAbove,
    fontFamily: fonts.DongleRegular,
  },
  imageiconType: {
    height: 12,
    width: 12,
    position: 'absolute',
    left: 12,
    top: 18,
    zIndex: 11111,
  },
  mainContainer: {
    backgroundColor: colors.colorWhite,
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
    // backgroundColor: colors.colorWhite,
    // borderTopEndRadius: 24,
    // borderTopLeftRadius: 24,
    // marginTop: -22,
    // padding: 22,
    paddingHorizontal: 45,
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
    alignSelf: 'center',
  },
  textAlready: {
    fontSize: normalize(16),
    fontFamily: fonts.DongleRegular,
    color: colors.lightGray,
  },
  textAlreadyLogin: {
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
    padding: 4,
  },
  textForgotPassword: {
    fontSize: normalize(16),
    fontFamily: fonts.DongleRegular,
    color: colors.lightGray,
    textDecorationLine: 'underline',
  },
  textBackToLogin: {
    fontSize: normalize(22),
    fontFamily: fonts.DongleRegular,
    color: colors.textColorLogin,
    textDecorationLine: 'underline',
  },
  textPasswordRecovery: {
    fontSize: normalize(38),
    fontFamily: fonts.DongleBold,
    color: colors.textColorLogin,
  },
  viewBorder: {
    backgroundColor: colors.colorWhite,
    height: 32,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    marginTop: -12,
  },
  paddingHorizontal45: {
    paddingHorizontal: 45,
    flex: 1,
  },
  inputFeildStyleLargeReason: {
    borderRadius: 10,
    padding: 14,
    height: 120,
    backgroundColor: colors.inputFieldBackColor,
    textAlignVertical: 'top',
    width: '100%',
    borderColor: colors.borderInputField,
    borderWidth: 1,
  },
  textInput: {
    fontFamily: fonts.PoppinsLight,
    // fontSize: 11,
    fontSize: normalize(10),
  },

  //Modal
  view1: {
    backgroundColor: colors.colorWhite,
    padding: 22,
    marginTop: 16,
    borderTopLeftRadius: 38,
    borderTopRightRadius: 38,
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewMain: {
    position: 'absolute',
    width: '100%',
    bottom: 0,
    backgroundColor: '#AFB1B340',
    borderRadius: 68,
  },
  textOffline: {
    fontSize: normalize(14),
    fontFamily: fonts.PoppinsRegular,
    color: colors.black,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  viewLine: {
    height: 2,
    backgroundColor: colors.lightGray,
    width: 70,
  },
  viewFlex: {
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 22,
  },
});
