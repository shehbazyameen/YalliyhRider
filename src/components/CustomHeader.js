import React from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import {Header} from '@rneui/base';
import fonts from '../assets/fonts';
import {colors} from '../config/Colors';
import {normalize} from '../config/FontsNormalize';
const {width, height} = Dimensions.get('window');

const CustomHeader = ({
  leftRoute = () => {},
  rightIcon1Onpress = () => {},
  barStyle,
  statusBarProps,
  rightIcon1,
  centerTitle = false,
  leftIcon = false,
  backgroundColor = '#00002485',
  backgroundImage = backgroundImage,
}) => {
  return (
    <Header
      barStyle={barStyle}
      statusBarProps={statusBarProps}
      leftContainerStyle={styles.viewHeader}
      rightContainerStyle={styles.viewHeader}
      centerContainerStyle={styles.viewHeader}
      backgroundImage={backgroundImage}
      containerStyle={[
        styles.headerContainer,
        {backgroundColor: backgroundColor},
      ]}
      leftComponent={
        <TouchableOpacity onPress={() => leftRoute()} style={{}}>
          <Image
            source={leftIcon}
            style={styles.imageHW}
            resizeMode="contain"
          />
        </TouchableOpacity>
      }
      centerComponent={
        <View>
          <Text numberOfLines={1} style={styles.centerText}>
            {centerTitle}
          </Text>
        </View>
      }
      rightComponent={
        <TouchableOpacity onPress={() => rightIcon1Onpress()}>
          <Image
            source={rightIcon1}
            style={styles.imageHW}
            resizeMode="contain"
          />
        </TouchableOpacity>
      }
    />
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    ...Platform.select({
      ios: {
        marginTop: 0,
        height: 100,
      },
      android: {
        marginTop: 0,
        height: 100,
      },
    }),
  },
  viewHeader: {
    justifyContent: 'center',
    height: 30,
    marginTop: -22,
  },
  centerText: {
    fontFamily: fonts.DongleBold,
    color: colors.colorWhite,
    // fontSize: 26,
    fontSize: normalize(24),
    height: 26,
  },
  imageHW: {height: 20, width: 20},
});

export default CustomHeader;
