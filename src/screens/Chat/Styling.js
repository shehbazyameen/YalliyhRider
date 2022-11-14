import {StyleSheet} from 'react-native';
import fonts from '../../assets/fonts';
import {colors} from '../../config/Colors';
import {normalize} from '../../config/FontsNormalize';

export default StyleSheet.create({
  Container: {
    flex: 1,
  },
  marginTop: {
    padding: 22,
  },

  viewContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: colors.colorWhite,
  },

  textTitle: {
    fontSize: normalize(12),
    fontFamily: fonts.PoppinsRegular,
    color: colors.textChat,
  },

  textDate: {
    fontSize: normalize(10),
    fontFamily: fonts.PoppinsRegular,
    color: colors.textChat,
  },

  flexDirectionRow: {flexDirection: 'row'},
  hw40: {height: 40, width: 40},
  viewMainChatBox: {
    backgroundColor: '#F4F5FA',
    width: '80%',
    padding: 8,
    paddingHorizontal: 18,
    marginHorizontal: 8,
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  flex08: {
    flex: 0.8,
  },
  viewDate: {
    flex: 0.2,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  viewMainInput: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    padding: 22,
  },
});
