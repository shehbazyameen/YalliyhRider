import {StyleSheet} from 'react-native';
import fonts from '../../assets/fonts';
import {colors} from '../../config/Colors';

export default StyleSheet.create({
  Container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    // padding: 20,
  },

  //Modal
  textTitle: {
    fontSize: 10,
    fontFamily: fonts.PoppinsLight,
    color: colors.lightGray,
    // marginBottom: -10,
    paddingBottom: 28,
  },

  textTime: {
    fontSize: 10,
    fontFamily: fonts.PoppinsLight,
    color: colors.lightGray,
    // marginBottom: -10,
  },
  textHours: {
    fontSize: 12,
    fontFamily: fonts.PoppinsRegular,
    color: colors.black,
  },
});
