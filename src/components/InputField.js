import React from 'react';
import {
  StyleSheet,
  Image,
  TouchableOpacity,
  View,
  Text,
  Dimensions,
} from 'react-native';
import {colors} from '../config/Colors';
import {Input} from '@rneui/themed';
import fonts from '../assets/fonts';
const {width, height} = Dimensions.get('window');

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
  placeholderTextColor = colors.primaryBlue70,
  disabled,
  paddingHorizontal = 22,
  paddingHorizontalRight = 0,
  textLabels = textLabels,
}) => {
  return (
    <View>
      <Text
        style={{
          fontSize: 18,
          color: colors.textColorInputAbove,
          fontFamily: fonts.DongleRegular,
        }}>
        {textLabels}
      </Text>

      <Input
        accessibilityViewIsModal={true}
        disabled={disabled}
        blurOnSubmit={false}
        placeholderTextColor={placeholderTextColor}
        autoCapitalize={autoCapitalize}
        autoFocus={autoFocus}
        leftIcon={
          <>
            <Image
              style={styles.searchIconInInputField}
              source={leftIcon}
              resizeMode="contain"
            />
          </>
        }
        rightIcon={
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => rightIconOnPress()}>
            <Image
              // style={[styles.height_width(22, 22)]}
              style={{paddingHorizontal: paddingHorizontalRight}}
              source={rightIcon}
              resizeMode={'contain'}
            />
          </TouchableOpacity>
        }
        inputContainerStyle={[
          styles.borderBottomWidth,
          {backgroundColor: bg, height: height, borderRadius: 14},
        ]}
        value={value}
        placeholder={placeholder}
        secureTextEntry={secure}
        onBlur={onBlur}
        onFocus={onFocus}
        onChangeText={onChange}
        editable={editable}
        keyboardType={keyboardType}
        maxLength={maxLength}
        containerStyle={[
          styles.inputFeildStyle,
          {
            height: height,
            backgroundColor: bg,
            paddingHorizontal: paddingHorizontal,
          },
        ]}
        inputStyle={[
          styles.textInput,
          // leftIcon && styles.mL(22),
          {marginLeft: 12, color: 'black'},
        ]}
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
  searchIconInInputField: {
    position: 'absolute',
    borderRadius: 14,
    // right: 18,
  },
  textInput: {
    fontFamily: fonts.PoppinsLight,
    fontSize: 14,
    // color: 'red',
  },
  inputFeildStyle: {
    alignItems: 'center',
    borderRadius: 14,
    backgroundColor: 'red',
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  borderBottomWidth: {
    borderBottomWidth: 0,
    alignSelf: 'center',
    backgroundColor: 'red',
  },
});
