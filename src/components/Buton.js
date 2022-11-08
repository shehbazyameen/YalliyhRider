import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import fonts from '../assets/fonts';
import {colors} from '../config/Colors';
import {normalize} from '../config/FontsNormalize';
const Buton = ({
  onPress = () => {},
  title = '',
  backgroundColor = colors.primaryOrangeColor,
  color = colors.colorWhite,
  borderWidth,
}) => {
  return (
    <>
      <TouchableOpacity
        activeOpacity={0.9}
        style={[
          styles.main,
          {backgroundColor: backgroundColor, borderWidth: borderWidth},
        ]}
        onPress={onPress}>
        <Text style={[styles.text, {color: color}]}>{title}</Text>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  main: {
    backgroundColor: colors.primaryOrangeColor,
    height: 40,
    // width: 121,
    paddingHorizontal: 22,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontFamily: fonts.PoppinsRegular,
    // fontSize: 14,
    fontSize: normalize(13),
    color: colors.colorWhite,
  },
});

export default Buton;
