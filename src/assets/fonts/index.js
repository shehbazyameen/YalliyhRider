import {Platform} from 'react-native';

const fonts = {
  DongleBold: Platform.OS === 'ios' ? 'Dongle-Bold' : 'Dongle-Bold',
  DongleLight: Platform.OS === 'ios' ? 'Dongle-Light' : 'Dongle-Light',
  DongleRegular: Platform.OS === 'ios' ? 'Dongle-Regular' : 'Dongle-Regular',
};

export default fonts;
