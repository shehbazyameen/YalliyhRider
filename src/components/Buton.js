import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import fonts from '../assets/fonts';
import {colors} from '../config/Colors';
const {width, height} = Dimensions.get('window');

const Buton = ({title = '', backgroundColor, onPress = () => {}}) => {
  return (
    <>
      <TouchableOpacity style={[styles.main]} onPress={onPress}>
        <Text style={[styles.text]}>{title}</Text>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  main: {
    backgroundColor: colors.primaryOrangeColor,
    height: 47,
    width: 121,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontFamily: fonts.PoppinsRegular,
    fontSize: 14,
    color: colors.colorWhite,
  },
});

export default Buton;
