import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, ImageBackground} from 'react-native';
import styling from './Styling';
import {Assets} from '../../../assets';
import {Image} from 'react-native';
import {StatusBar} from 'react-native';
import {colors} from '../../../config/Colors';
import {InputFeild} from '../../../components/InputField';
import {ScrollView} from 'react-native';
import Buton from '../../../components/Buton';
import {labels} from '../../../config/Labels';

const SignUpLogin = ({navigation}) => {
  const [tab, setTab] = useState(false);
  const [showeye, setshoweye] = useState(false);
  const [showeyeconfirm, setShoweyeConfirm] = useState(false);

  ///
  const [password, setPassword] = useState('');
  return (
    <View style={[styling.Container]}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={'transparent'}
        translucent={true}
      />
      <ImageBackground source={Assets.imageSignup} style={styling.height190}>
        <View style={styling.viewImage}>
          <Image source={Assets.ApplicationLogo} />
        </View>
      </ImageBackground>
      <View style={styling.viewInputField}>
        <View style={[styling.marginTop]} />
        <View style={styling.viewMainTab}>
          <View style={styling.viewTaber}>
            <TouchableOpacity
              style={{
                backgroundColor: tab ? '#E78901' : 'transparent',
                borderRadius: 10,
              }}
              onPress={() => {
                setTab(true);
              }}>
              <Text
                style={[
                  styling.textSignupTab,
                  {
                    color: tab ? '#ffffff' : 'black',
                  },
                ]}>
                {labels.SignUp}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: !tab ? '#E78901' : 'transparent',
                borderRadius: 10,
              }}
              onPress={() => {
                setTab(false);
              }}>
              <Text
                style={{
                  color: !tab ? '#ffffff' : 'black',
                  paddingHorizontal: 25,
                  paddingVertical: 9,
                }}>
                {labels.Login}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={[styling.marginTop]} />
        <ScrollView>
          <InputFeild
            // refValueCurrent={refenterpassword}
            // onFocusBorderColor={true}
            textLabels={labels.FullName + labels.staric}
            returnKeyType={'next'}
            paddingHorizontal={0}
            paddingHorizontalRight={22}
            // imageInputField
            // placeholder={'abc'}
            leftIcon={Assets.user}
            // rightIcon={Assets.user}
            // value={firstName}
            // onChange={e => setFirstName(e)}
          />
          <View style={[styling.marginTop]} />
          <InputFeild
            // refValueCurrent={refenterpassword}
            onFocusBorderColor={true}
            textLabels={labels.LastName + labels.staric}
            returnKeyType={'xyz'}
            paddingHorizontal={0}
            paddingHorizontalRight={22}
            // imageInputField
            // placeholder={'Abc'}
            leftIcon={Assets.user}
            // rightIcon={Assets.user}
            // value={firstName}
            // onChange={e => setFirstName(e)}
          />
          <View style={[styling.marginTop]} />
          <InputFeild
            // refValueCurrent={refenterpassword}
            onFocusBorderColor={true}
            textLabels={labels.PhoneNumber + labels.staric}
            returnKeyType={'next'}
            paddingHorizontal={0}
            paddingHorizontalRight={22}
            // imageInputField
            // placeholder={'+1234567890'}
            leftIcon={Assets.phoneCall}
            // rightIcon={Assets.phoneCall}
            // value={firstName}
            // onChange={e => setFirstName(e)}
          />
          <View style={[styling.marginTop]} />
          <InputFeild
            // refValueCurrent={refenterpassword}
            onFocusBorderColor={true}
            textLabels={labels.Email + labels.staric}
            returnKeyType={'next'}
            paddingHorizontal={0}
            paddingHorizontalRight={22}
            // imageInputField
            // placeholder={'abc@example.com'}
            leftIcon={Assets.email}
            // value={firstName}
            // onChange={e => setFirstName(e)}
          />
          <View style={[styling.marginTop]} />

          <InputFeild
            // refValueCurrent={refenterpassword}
            onFocusBorderColor={true}
            textLabels={labels.Email + labels.staric}
            returnKeyType={'next'}
            paddingHorizontal={0}
            paddingHorizontalRight={22}
            // imageInputField
            // placeholder={'*************'}
            leftIcon={Assets.lock}
            rightIcon={Assets.eyeSlash}
            rightIconOnPress={() => setshoweye(!showeye)}
            secure={showeye}
            value={password}
            onChange={e => setPassword(e)}
          />
          <View style={[styling.marginTop]} />

          <InputFeild
            // refValueCurrent={refenterpassword}
            onFocusBorderColor={true}
            textLabels={labels.ConfirmPassword + labels.staric}
            returnKeyType={'next'}
            paddingHorizontal={0}
            paddingHorizontalRight={22}
            // imageInputField
            // placeholder={'*************'}
            leftIcon={Assets.lock}
            rightIcon={Assets.eyeSlash}
            rightIconOnPress={() => setShoweyeConfirm(!showeyeconfirm)}
            secure={showeyeconfirm}
            // value={firstName}
            // onChange={e => setFirstName(e)}
          />
          <View style={styling.textSignup}>
            <Buton title={labels.SignUp} />
          </View>
          <TouchableOpacity onPress={() => {}} style={styling.touch}>
            <Text style={[styling.textAlready]}>
              {labels.alreadyHaveAccount}
            </Text>
            <Text style={styling.textAlreadyLogin}>{labels.Login}</Text>
          </TouchableOpacity>

          <View style={[styling.marginTop]} />
        </ScrollView>
      </View>
    </View>
  );
};

export default SignUpLogin;
