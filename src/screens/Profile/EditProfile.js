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
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

const {width, height} = Dimensions.get('window');

const EditProfile = ({navigation}) => {
  const [fullName, setfullName] = useState('');
  const [lastName, setlastName] = useState('');
  const [phoneNumber, setphoneNumber] = useState('');
  const [avatar, setAvatar] = useState('');

  //choosePhoto
  const ChoosePhoto = type => {
    // alert(type);
    // setLoader(true);
    const options = {
      mediaType: 'photo',
      maxWidth: 550,
      maxHeight: 550,
      quality: 0.8,
      includeBase64: true,
    };
    launchImageLibrary(options, response => {
      console.log('Response =============> ', response);
      if (response.didCancel) {
        // setLoader(false);
        console.log('ImagePicker Error: ', response.error);
      } else if (response.error) {
        // setLoader(false);
        console.log('ImagePicker Error: ', response.error);
      } else {
        console.log(response.assets[0]);
        setAvatar(response.assets[0].uri);
        const formData = new FormData();
        formData.append('avatar', {
          uri: response.assets[0].uri,
          type: 'image/png',
          name: 'photo',
        });
        // api to get url
        // dispatch(
        //   ImageUrlAction(
        //     formData,
        //     sucess => {
        //       setLoader(false);
        //       setAvatar(sucess);
        //       setAvatarEdit(sucess);
        //     },
        //     () => {
        //       setLoader(false);
        //     },
        //   ),
        // );
      }
    });
  };
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
              source={avatar ? {uri: avatar} : Assets.profileDumy}
              borderRadius={100}
            />

            <TouchableOpacity
              activeOpacity={0.7}
              style={styling.touchCamera}
              onPress={() => {
                // navigation.navigate('ChoosePhoto');
                ChoosePhoto();
              }}>
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
