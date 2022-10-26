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

const Email = ({navigation}) => {
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
        <View style={[styling.marginTop]} />
        <Text style={styling.textPasswordRecovery}>
          {labels.passwordRecovery}
        </Text>

        <ScrollView>
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
          <View style={[styling.marginTop]} />
          <View style={styling.textSignup}>
            <Buton title={labels.continue} />
          </View>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('SignUpLogin');
            }}
            style={styling.touch}>
            <Text style={styling.textBackToLogin}>{labels.backToLogin}</Text>
          </TouchableOpacity>
          <View style={[styling.marginTop]} />
        </ScrollView>
      </View>
    </View>
  );
};

export default Email;
