import {StyleSheet} from 'react-native';
import fonts from '../../assets/fonts';
import {colors} from '../../config/Colors';

export default StyleSheet.create({
  padding12:{paddingTop: 12},
  view1: {
    padding: 32,
    flex: 1,
  },
  viewRating: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  Container: {
    flex: 1,
    backgroundColor: colors.colorWhite,
    // justifyContent: 'center',
    // alignItems: 'center',
    // padding: 20,
    // alignItems:'center'
  },

  //Modal
  textPercentage: {
    fontSize: 12,
    fontFamily: fonts.PoppinsBold,
    color: colors.grayLight,
  },
  textView: {
    fontSize: 12,
    fontFamily: fonts.PoppinsLight,
    color: colors.grayLight,
    textAlign: 'center',
    padding: 18,
  },

  textTime: {
    fontSize: 10,
    fontFamily: fonts.PoppinsBold,
    color: colors.black,
    // marginBottom: -10,
  },
  textHours: {
    fontSize: 12,
    fontFamily: fonts.PoppinsRegular,
    color: colors.black,
  },
  viewBorder: {
    backgroundColor: colors.colorWhite,
    height: 32,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    marginTop: -12,
  },
  marginTop: {marginTop: 16},
  textPasswordRecovery: {
    fontSize: 40,
    fontFamily: fonts.DongleBold,
    color: colors.textColorLogin,
    textAlign: 'center',
  },
});
