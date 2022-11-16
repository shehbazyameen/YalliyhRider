import {StyleSheet, Dimensions} from 'react-native';
import fonts from '../../assets/fonts';
import {colors} from '../../config/Colors';
import {normalize} from '../../config/FontsNormalize';

const {height, width} = Dimensions.get('window');

export default StyleSheet.create({
  paddingHorizontal45: {
    // paddingHorizontal: 45,
    flex: 1,
  },

  mainContainer: {
    backgroundColor: colors.colorWhite,
    flex: 1,
  },

  marginTop: {
    marginTop: 16,
  },

  textNoRider: {
    fontSize: normalize(18),
    fontFamily: fonts.PoppinsRegular,
    color: colors.textNoRider,
    textAlign: 'center',
  },
  viewBorder: {
    backgroundColor: colors.colorWhite,
    height: 32,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    marginTop: -12,
  },
  viewLine: {
    height: 1,
    width: '95%',
    marginTop: 12,
    backgroundColor: colors.bordergray,
    alignSelf: 'flex-end',
  },
  view: {
    flex: 1,
    padding: 22,
    alignItems: 'center',
    // backgroundColor:'red'
  },
});
