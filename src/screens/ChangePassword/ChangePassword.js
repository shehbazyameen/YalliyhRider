import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
} from 'react-native';
import styling from './Styling';
import {Assets} from '../../assets';
import {InputFeild} from '../../components/InputField';
import {ScrollView} from 'react-native';
import Buton from '../../components/Buton';
import {labels} from '../../config/Labels';
import CustomHeader from '../../components/CustomHeader';
import {colors} from '../../config/Colors';

const {width, height} = Dimensions.get('window');

const ChangePassword = ({navigation}) => {
  const [showeye, setshoweye] = useState(false);
  const [showeyeconfirm, setShoweyeConfirm] = useState(false);
  const [newShoweyeConfirm, setNewShoweyeConfirm] = useState(false);
  const [password, setPassword] = useState('');
  return (
    <View>
      <CustomHeader
        barStyle="light-content"
        statusBarProps={{backgroundColor: 'transparent', translucent: true}}
        backgroundImage={Assets.HeaderBack2}
        leftIcon={Assets.arrowLeftShort}
        leftRoute={() => {
          navigation.goBack();
        }}
        centerTitle={labels.changePassword}
        // rightIcon1={Assets.bell}
        rightIcon1Onpress={() => {}}
      />

      <ImageBackground
        source={Assets.changePasswordImageBack}
        style={{
          height: height,
        }}
        resizeMode="contain">
        <View
          style={{
            backgroundColor: colors.colorWhite,
            height: 32,
            borderTopLeftRadius: 16,
            borderTopRightRadius: 16,
            marginTop: -12,
          }}
        />
        <View style={styling.viewInputField}>
          {/* <View style={[styling.marginTop]} /> */}
          <ScrollView>
            <InputFeild
              // refValueCurrent={refenterpassword}
              onFocusBorderColor={true}
              textLabels={labels.currentPassword + labels.staric}
              returnKeyType={'next'}
              paddingHorizontal={0}
              paddingHorizontalRight={22}
              // imageInputField
              placeholder={'Enter Current Password'}
              leftIcon={Assets.lock}
              rightIcon={
                showeye ? Assets.iconAwesomeEyeVisible : Assets.eyeSlash
              }
              rightIconOnPress={() => setshoweye(!showeye)}
              secure={showeye}
              value={password}
              onChange={e => setPassword(e)}
            />

            <View style={[styling.marginTop]} />
            <InputFeild
              // refValueCurrent={refenterpassword}
              onFocusBorderColor={true}
              textLabels={labels.newPassword + labels.staric}
              returnKeyType={'next'}
              paddingHorizontal={0}
              paddingHorizontalRight={22}
              // imageInputField
              placeholder={'Enter New Password'}
              leftIcon={Assets.lock}
              rightIcon={
                showeyeconfirm ? Assets.iconAwesomeEyeVisible : Assets.eyeSlash
              }
              rightIconOnPress={() => setShoweyeConfirm(!showeyeconfirm)}
              secure={showeyeconfirm}
              // value={firstName}
              // onChange={e => setFirstName(e)}
            />

            <View style={[styling.marginTop]} />
            <InputFeild
              // refValueCurrent={refenterpassword}
              onFocusBorderColor={true}
              textLabels={labels.confirmPassword + labels.staric}
              returnKeyType={'next'}
              paddingHorizontal={0}
              paddingHorizontalRight={22}
              // imageInputField
              placeholder={'Enter Confirm Password'}
              leftIcon={Assets.lock}
              rightIcon={
                newShoweyeConfirm
                  ? Assets.iconAwesomeEyeVisible
                  : Assets.eyeSlash
              }
              rightIconOnPress={() => setNewShoweyeConfirm(!newShoweyeConfirm)}
              secure={newShoweyeConfirm}
              // value={firstName}
              // onChange={e => setFirstName(e)}
            />

            <View style={[styling.marginTop]} />
            <View style={[styling.marginTop]} />
            <View style={styling.textSignup}>
              <Buton
                title={labels.update}
                onPress={() => {
                  // navigation.navigate('Verification');
                }}
              />
            </View>
          </ScrollView>
        </View>
      </ImageBackground>
    </View>
  );
};

export default ChangePassword;
