import React, {useEffect} from 'react';
import {View, Text, TouchableOpacity, ImageBackground} from 'react-native';
import styling from './Styling';
import {Assets} from '../../../assets';
import {Image} from 'react-native';
import {StatusBar} from 'react-native';
import {colors} from '../../../config/Colors';
import {InputFeild} from '../../../components/InputField';
import {ScrollView} from 'react-native';
import Buton from '../../../components/Buton';

const SignUpLogin = ({navigation}) => {
  return (
    <View style={[styling.Container]}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={'transparent'}
        translucent={true}
      />
      <ImageBackground source={Assets.imageSignup} style={{height: 190}}>
        <View style={styling.viewImage}>
          <Image source={Assets.ApplicationLogo} />
        </View>
      </ImageBackground>
      <View style={styling.viewInputField}>
        <ScrollView>
          <View
            style={{
              backgroundColor: 'yellow',
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: 200,
            }}>
            <TouchableOpacity
              style={{
                height: 100,
                width: 100,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: colors.primaryOrangeColor,
              }}>
              <Text> SignUp</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                height: 100,
                width: 100,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: colors.primaryOrangeColor,
              }}>
              <Text> SignUp</Text>
            </TouchableOpacity>
          </View>
          <InputFeild
            // refValueCurrent={refenterpassword}
            // onFocusBorderColor={true}
            textLabels={'Full Name*'}
            returnKeyType={'next'}
            paddingHorizontal={0}
            paddingHorizontalRight={22}
            // imageInputField
            placeholder={'abc'}
            leftIcon={Assets.user}
            // rightIcon={Assets.user}
            // value={firstName}
            // onChange={e => setFirstName(e)}
          />
          <View style={[styling.marginTop]} />
          <InputFeild
            // refValueCurrent={refenterpassword}
            onFocusBorderColor={true}
            textLabels={'Last Name*'}
            returnKeyType={'xyz'}
            paddingHorizontal={0}
            paddingHorizontalRight={22}
            // imageInputField
            placeholder={'Abc'}
            leftIcon={Assets.user}
            // rightIcon={Assets.user}
            // value={firstName}
            // onChange={e => setFirstName(e)}
          />
          <View style={[styling.marginTop]} />
          <InputFeild
            // refValueCurrent={refenterpassword}
            onFocusBorderColor={true}
            textLabels={'Phone Number*'}
            returnKeyType={'next'}
            paddingHorizontal={0}
            paddingHorizontalRight={22}
            // imageInputField
            placeholder={'+1234567890'}
            leftIcon={Assets.phoneCall}
            // rightIcon={Assets.phoneCall}
            // value={firstName}
            // onChange={e => setFirstName(e)}
          />
          <View style={[styling.marginTop]} />
          <InputFeild
            // refValueCurrent={refenterpassword}
            onFocusBorderColor={true}
            textLabels={'Email*'}
            returnKeyType={'next'}
            paddingHorizontal={0}
            paddingHorizontalRight={22}
            // imageInputField
            placeholder={'abc@example.com'}
            leftIcon={Assets.email}
            // value={firstName}
            // onChange={e => setFirstName(e)}
          />
          <View style={[styling.marginTop]} />

          <InputFeild
            // refValueCurrent={refenterpassword}
            onFocusBorderColor={true}
            textLabels={'Password*'}
            returnKeyType={'next'}
            paddingHorizontal={0}
            paddingHorizontalRight={22}
            // imageInputField
            placeholder={'*************'}
            leftIcon={Assets.lock}
            rightIcon={Assets.eyeSlash}
            // value={firstName}
            // onChange={e => setFirstName(e)}
          />
          <View style={[styling.marginTop]} />

          <InputFeild
            // refValueCurrent={refenterpassword}
            onFocusBorderColor={true}
            textLabels={'Confirm Password*'}
            returnKeyType={'next'}
            paddingHorizontal={0}
            paddingHorizontalRight={22}
            // imageInputField
            placeholder={'*************'}
            leftIcon={Assets.lock}
            rightIcon={Assets.eyeSlash}
            // value={firstName}
            // onChange={e => setFirstName(e)}
          />
          <View style={{alignSelf: 'center', padding: 22}}>
            <Buton title="Sign Up" />
          </View>

          <View style={[styling.marginTop]} />
        </ScrollView>
      </View>
    </View>
  );
};

export default SignUpLogin;
