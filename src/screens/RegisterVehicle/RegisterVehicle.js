import React, {useState} from 'react';
import {View, Text, Image} from 'react-native';
import styling from './Styling';
import {Assets} from '../../assets';
import {InputFeild} from '../../components/InputField';
import {ScrollView} from 'react-native';
import Buton from '../../components/Buton';
import {labels} from '../../config/Labels';
import CustomHeader from '../../components/CustomHeader';
import {colors} from '../../config/Colors';
import DropDownPicker from 'react-native-dropdown-picker';
import fonts from '../../assets/fonts';
import {normalize} from '../../config/FontsNormalize';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {Alert} from 'react-native';

const RegisterVehicle = ({navigation}) => {
  const [brandName, setbrandName] = useState('');
  const [vehicleName, setvehicleName] = useState('');
  const [vehicleColor, setvehicleColor] = useState('');
  const [licensePlateNumber, setlicensePlateNumber] = useState('');
  const [LicensePlateImage, setLicensePlateImage] = useState('');
  const [CarVehicleImage, setCarVehicleImage] = useState([]);

  ///
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Mini', value: 'Mini'},
    {label: 'Mini Plus', value: 'Mini Plus'},
    {label: 'Business', value: 'Business'},
  ]);
  //

  const ShowMessage = type => {
    Alert.alert('Upload image', 'Choose a option', [
      {
        text: 'Close',
        onPress: () => {},
      },
      {
        text: 'Camera',
        onPress: () => LaunchCamera(type),
      },
      {
        text: 'Gallery',
        onPress: () => ChoosePhoto(type),
      },
    ]);
  };

  const LaunchCamera = type => {
    // alert(type);
    let options = {
      storageOptions: {
        mediaType: 'photo',
        includeBase64: false,
        maxHeight: 200,
        maxWidth: 200,
      },
    };
    launchCamera(options, response => {
      console.log('Response =============> ', response);
      if (response.didCancel) {
        // setLoader(false);
        console.log('ImagePicker Error: ', response.error);
      } else if (response.error) {
        // setLoader(false);
        console.log('ImagePicker Error: ', response.error);
      } else {
        console.log(response.assets[0]);
        // setAvatar(response.assets[0].uri);
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
        // setAvatar(response.assets[0].uri);
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
        centerTitle={labels.registerVehicle}
        rightIcon1Onpress={() => {}}
      />
      <View style={styling.viewBorder} />
      <View style={[styling.paddingHorizontal45]}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styling.textVehicleType}>
            {labels.vehicleType + labels.staric}
          </Text>

          <View>
            <DropDownPicker
              selectedItemLabelStyle={{
                color: colors.primaryOrangeColor,
              }}
              ArrowUpIconComponent={() => (
                <Image source={Assets.arrowDownFill} resizeMode="contain" />
              )}
              ArrowDownIconComponent={() => (
                <Image source={Assets.arrowDownFill} resizeMode="contain" />
              )}
              placeholder={labels.select}
              placeholderStyle={{
                color: colors.placeHolderTextColor,
                fontSize: normalize(10),
              }}
              open={open}
              value={value}
              items={items}
              setOpen={setOpen}
              setValue={setValue}
              setItems={setItems}
              style={{
                borderWidth: 1,
                borderColor: colors.bordergray,
                borderRadius: 14,
              }}
              dropDownContainerStyle={{
                borderColor: colors.bordergray,
              }}
              textStyle={{
                fontFamily: fonts.PoppinsLight,
                fontSize: normalize(12),
                color: colors.placeHolderTextColor,
                paddingHorizontal: 26,
              }}
            />
            <Image
              style={styling.imageiconType}
              source={Assets.user}
              resizeMode={'contain'}
            />
          </View>

          <View style={[styling.marginTop]} />
          <InputFeild
            // refValueCurrent={refenterpassword}
            // onFocusBorderColor={true}
            textLabels={labels.brandName + labels.staric}
            returnKeyType={'next'}
            paddingHorizontal={0}
            paddingHorizontalRight={22}
            placeholder={labels.enter + labels.brandName}
            leftIcon={Assets.user}
            value={brandName}
            onChange={e => setbrandName(e)}
          />
          <View style={[styling.marginTop]} />
          <InputFeild
            // refValueCurrent={refenterpassword}
            // onFocusBorderColor={true}
            textLabels={labels.vehicleName + labels.staric}
            returnKeyType={'next'}
            paddingHorizontal={0}
            paddingHorizontalRight={22}
            placeholder={labels.enter + labels.vehicleName}
            leftIcon={Assets.carSport}
            value={vehicleName}
            onChange={e => setvehicleName(e)}
          />

          <View style={[styling.marginTop]} />
          <InputFeild
            // refValueCurrent={refenterpassword}
            // onFocusBorderColor={true}
            textLabels={labels.vehicleColor + labels.staric}
            returnKeyType={'next'}
            paddingHorizontal={0}
            paddingHorizontalRight={22}
            placeholder={labels.enter + labels.vehicleColor}
            leftIcon={Assets.colorVehicle}
            value={vehicleColor}
            onChange={e => setvehicleColor(e)}
          />

          <View style={[styling.marginTop]} />
          <InputFeild
            // refValueCurrent={refenterpassword}
            // onFocusBorderColor={true}
            textLabels={labels.licensePlateNumber + labels.staric}
            returnKeyType={'next'}
            paddingHorizontal={0}
            paddingHorizontalRight={22}
            placeholder={labels.enter + labels.licensePlateNumber}
            leftIcon={Assets.licenseLine}
            value={licensePlateNumber}
            onChange={e => setlicensePlateNumber(e)}
          />

          <View style={[styling.marginTop]} />
          <Text style={styling.txtTitle}>
            {labels.licensePlateImage + labels.staric}
          </Text>

          <TouchableOpacity
            onPress={() => {
              ShowMessage('LicensePlateImage');
            }}
            activeOpacity={0.7}
            style={styling.touchImageAdd}>
            <Text style={styling.txtAddImage}>{labels.addImage}</Text>
            <Image
              style={styling.hw80}
              source={Assets.dummyImageSquare}
              resizeMode="contain"
            />
          </TouchableOpacity>

          <View style={[styling.marginTop]} />
          <Text style={styling.txtTitle}>
            {labels.carVehicleImage + labels.staric}
          </Text>

          <TouchableOpacity
            onPress={() => {
              ShowMessage('CarVehicleImage');
            }}
            activeOpacity={0.7}
            style={styling.touchImageAdd}>
            <Text style={styling.txtAddImage}>{labels.addImage}</Text>
            <Image
              style={styling.hw80}
              source={Assets.dummyImageSquare}
              resizeMode="contain"
            />
          </TouchableOpacity>

          <View style={[styling.marginTop]} />
          <View style={[styling.marginTop]} />
          <View style={styling.textSignup}>
            <Buton
              title={labels.save}
              onPress={() => {
                // navigation.navigate('Verification');
              }}
            />
          </View>
          <View style={[styling.marginTop]} />
        </ScrollView>
      </View>
    </View>
  );
};

export default RegisterVehicle;
