import React from 'react';
import {StyleSheet, Image, TouchableOpacity, View, Text} from 'react-native';
import {colors} from '../config/Colors';
import {Input} from '@rneui/themed';
import fonts from '../assets/fonts';
import {normalize} from '../config/FontsNormalize';

export const InputFeild = ({
  onChange = () => {},
  onBlur = () => {},
  onFocus = () => {},
  rightIconOnPress = () => {},
  value = '',
  placeholder = '',
  secure = false,
  editable = true,
  returnKeyType = '',
  refValueCurrent,
  valueRef,
  bg = 'white',
  leftIcon = false,
  rightIcon = false,
  height = 47,
  keyboardType = 'default',
  maxLength = 100,
  autoFocus = false,
  autoCapitalize = 'none',
  placeholderTextColor = colors.placeHolderTextColor,
  disabled,
  paddingHorizontal = 22,
  paddingHorizontalRight = 0,
  textLabels = textLabels,
  onFocusBorderColor = false,
}) => {
  return (
    <View>
      <Text
        style={{
          // fontSize: 18,
          fontSize: normalize(16),
          color: colors.textColorInputAbove,
          fontFamily: fonts.DongleRegular,
        }}>
        {textLabels}
      </Text>

      <Input
        editable={disabled}
        style={{fontSize: normalize(10)}}
        accessibilityViewIsModal={true}
        blurOnSubmit={false}
        placeholderTextColor={placeholderTextColor}
        autoCapitalize={autoCapitalize}
        autoFocus={autoFocus}
        leftIcon={
          <>
            <Image
              style={[
                {
                  height: 12,
                  width: 12,
                  marginLeft: 12,
                },
              ]}
              source={leftIcon}
              resizeMode={'contain'}
            />
          </>
        }
        rightIcon={
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => rightIconOnPress()}>
            <Image
              style={{
                paddingHorizontal: paddingHorizontalRight,
                height: 12,
                width: 12,
              }}
              source={rightIcon}
              resizeMode={'contain'}
            />
          </TouchableOpacity>
        }
        inputContainerStyle={[
          {
            backgroundColor: bg,
            height: height,
            borderRadius: 14,
          },
          onFocusBorderColor
            ? {
                borderWidth: 1,
                borderColor: colors.borderInputField,
              }
            : {
                borderWidth: 1,
                borderColor: colors.bordergray,
              },
        ]}
        value={value}
        placeholder={placeholder}
        secureTextEntry={secure}
        onBlur={onBlur}
        onFocus={onFocus}
        onChangeText={onChange}
        keyboardType={keyboardType}
        maxLength={maxLength}
        containerStyle={[
          onFocusBorderColor && styles.borderWidth,
          styles.inputFeildStyle,
          {
            height: height,
            backgroundColor: bg,
            paddingHorizontal: paddingHorizontal,
          },
        ]}
        inputStyle={[styles.textInput, {marginLeft: 4, color: 'black'}]}
        onSubmitEditing={() =>
          refValueCurrent ? refValueCurrent.current.focus() : ''
        }
        returnKeyType={returnKeyType}
        ref={valueRef}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    fontFamily: fonts.PoppinsLight,
    // fontSize: 14,
    fontSize: normalize(12),
  },
  inputFeildStyle: {
    alignItems: 'center',
    borderRadius: 14,
  },
  borderBottomWidth: {
    borderBottomWidth: 0,
    borderColor: colors.borderInputField,
  },
});
