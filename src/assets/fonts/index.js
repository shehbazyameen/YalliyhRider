import {Platform} from 'react-native';

const fonts = {
  DongleBold: Platform.OS === 'ios' ? 'Dongle-Bold' : 'Dongle-Bold',
  DongleLight: Platform.OS === 'ios' ? 'Dongle-Light' : 'Dongle-Light',
  DongleRegular: Platform.OS === 'ios' ? 'Dongle-Regular' : 'Dongle-Regular',

  ///Poppins
  PoppinsLight: Platform.OS === 'ios' ? 'Poppins-Light' : 'Poppins-Light',
};

export default fonts;
