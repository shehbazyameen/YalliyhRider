import React, {useState} from 'react';
import {
  View,
  Image,
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

const {width, height} = Dimensions.get('window');

const EditProfile = ({navigation}) => {
  const [profile, setprofile] = useState('');
  const [fullName, setfullName] = useState('');
  const [lastName, setlastName] = useState('');
  const [phoneNumber, setphoneNumber] = useState('');
  return (
    <View style={styling.mainContainer}>
      <CustomHeader
        barStyle="light-content"
        statusBarProps={{backgroundColor: 'transparent', translucent: true}}
        backgroundImage={Assets.HeaderBack2}
        leftIcon={Assets.arrowLeftShort}
        leftRoute={() => {
          navigation.goBack();
        }}
        centerTitle={labels.editProfile}
        rightIcon1Onpress={() => {}}
      />
      <View style={styling.viewBorder} />
      <View style={[styling.paddingHorizontal45]}>
        <ImageBackground
          source={Assets.backImageProfile}
          style={{
            height: height,
            // padding: 22,
          }}
          resizeMode="contain">
          <View style={{alignSelf: 'center'}}>
            <Image
              style={styling.imageProfile}
              resizeMode="contain"
              source={Assets.profileDumy}
              borderRadius={100}
            />

            <TouchableOpacity style={styling.touchCamera}>
              <Image
                style={styling.alignSelfCenter}
                resizeMode="contain"
                source={Assets.camera}
              />
            </TouchableOpacity>
          </View>
          <View style={[styling.marginTop]} />
          <View style={[styling.marginTop]} />
          <View style={[styling.marginTop]} />
          {/* <View style={[styling.marginTop]} /> */}
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styling.viewFlexDirection}>
              <View style={styling.width48Perc}>
                <InputFeild
                  // refValueCurrent={refenterpassword}
                  // disabled={false}
                  onFocusBorderColor={false}
                  textLabels={labels.FullName + labels.staric}
                  returnKeyType={'next'}
                  paddingHorizontal={0}
                  placeholder={'Enter First Name'}
                  leftIcon={Assets.user}
                  value={fullName}
                  onChange={e => setfullName(e)}
                />
              </View>
              <View style={styling.width48Perc}>
                <InputFeild
                  // refValueCurrent={refenterpassword}
                  onFocusBorderColor={false}
                  textLabels={labels.LastName + labels.staric}
                  returnKeyType={'next'}
                  paddingHorizontal={0}
                  placeholder={'Enter Last Name'}
                  leftIcon={Assets.user}
                  value={lastName}
                  onChange={e => setlastName(e)}
                />
              </View>
            </View>

            <View style={[styling.marginTop]} />

            <View style={styling.viewFlexDirection}>
              <View style={styling.width48Perc}>
                <View>
                  <Text style={styling.textName}>{labels.Email}</Text>
                  <Text style={styling.textPlaceHolderEdit}>
                    {'shehbazyameen43@gmail.com'}
                  </Text>
                </View>
              </View>

              <View style={styling.width48Perc}>
                <InputFeild
                  // refValueCurrent={refenterpassword}
                  onFocusBorderColor={false}
                  textLabels={labels.PhoneNumber + labels.staric}
                  returnKeyType={'next'}
                  keyboardType={'numeric'}
                  paddingHorizontal={0}
                  // placeholder={'+92 3060609000'}
                  leftIcon={Assets.phoneCall}
                  value={phoneNumber}
                  onChange={e => setphoneNumber(e)}
                />
              </View>
            </View>

            <View style={[styling.marginTop]} />
            <View style={[styling.marginTop]} />
            <View style={styling.textSignup}>
              <Buton
                title={labels.update}
                onPress={() => {
                  navigation.goBack();
                }}
              />
            </View>
          </ScrollView>
        </ImageBackground>
      </View>
    </View>
  );
};

export default EditProfile;
