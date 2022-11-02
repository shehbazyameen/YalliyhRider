import {StyleSheet, Dimensions} from 'react-native';
import fonts from '../../assets/fonts';
import {colors} from '../../config/Colors';

const {height, width} = Dimensions.get('window');

export default StyleSheet.create({
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
    fontSize: 18,
    fontFamily: fonts.DongleRegular,
    color: colors.lightGray,
  },
  textAlreadyLogin: {
    fontSize: 18,
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
    fontSize: 24,
    fontFamily: fonts.DongleRegular,
    color: colors.black,
    textDecorationLine: 'underline',
    paddingTop: 12,
    textAlign: 'center',
  },
  textBackToLogin: {
    fontSize: 24,
    fontFamily: fonts.DongleRegular,
    color: colors.textColorLogin,
    textDecorationLine: 'underline',
  },
  textPasswordRecovery: {
    fontSize: 40,
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
    fontSize: 11,
  },
  textName: {
    fontSize: 20,
    color: colors.textColorInputAbove,
    fontFamily: fonts.DongleRegular,
  },
  textPlaceHolderEdit: {
    fontSize: 10,
    color: colors.placeHolderTextColor,
    fontFamily: fonts.PoppinsLight,
    marginTop: 4,
  },
  imageProfile: {
    height: 60,
    width: 60,
    alignSelf: 'center',
  },
  width48Perc: {
    width: '48%',
  },
  viewFlexDirection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  touchCamera: {
    height: 20,
    width: 20,
    position: 'absolute',
    bottom: 0,
    right: -2,
    padding: 6,
    margin: 2,
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: colors.colorWhite,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: colors.borderInputField,
  },
  alignSelfCenter: {
    alignSelf: 'center',
  },
});
