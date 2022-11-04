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

const EditVehicles = ({navigation}) => {
  const [brandName, setbrandName] = useState('');
  const [vehicleName, setvehicleName] = useState('');
  const [vehicleColor, setvehicleColor] = useState('');
  const [licensePlateNumber, setlicensePlateNumber] = useState('');

  ///
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'SPORTS CAR', value: 'SPORTS CAR'},
    {label: 'STATION WAGON', value: 'STATION WAGON'},
  ]);

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
        centerTitle={labels.editVehicle}
        // rightIcon1={Assets.bell}
        rightIcon1Onpress={() => {}}
      />
      <View style={styling.viewBorder} />

      <View style={[styling.paddingHorizontal45]}>
        {/* <View style={[styling.marginTop]} /> */}
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text
            style={{
              fontSize: 18,
              color: colors.textColorInputAbove,
              fontFamily: fonts.DongleRegular,
            }}>
            {'Vehicle Type' + labels.staric}
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
              placeholder="Select"
              placeholderStyle={{
                color: colors.placeHolderTextColor,
                fontSize: 12,
              }}
              open={open}
              value={value}
              items={items}
              setOpen={setOpen}
              setValue={setValue}
              setItems={setItems}
              style={{
                // backgroundColor: 'red',
                borderWidth: 1,
                borderColor: colors.bordergray,
                borderRadius: 14,
              }}
              dropDownContainerStyle={{
                borderColor: colors.bordergray,
              }}
              textStyle={{
                fontFamily: fonts.PoppinsLight,
                fontSize: 12,
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
            textLabels={'Brand Name' + labels.staric}
            returnKeyType={'next'}
            paddingHorizontal={0}
            paddingHorizontalRight={22}
            placeholder={'Enter Brand Name'}
            leftIcon={Assets.user}
            value={brandName}
            onChange={e => setbrandName(e)}
          />
          <View style={[styling.marginTop]} />
          <InputFeild
            // refValueCurrent={refenterpassword}
            // onFocusBorderColor={true}
            textLabels={'Vehicle Name' + labels.staric}
            returnKeyType={'next'}
            paddingHorizontal={0}
            paddingHorizontalRight={22}
            placeholder={'Enter Vehicle Name'}
            leftIcon={Assets.carSport}
            value={vehicleName}
            onChange={e => setvehicleName(e)}
          />

          <View style={[styling.marginTop]} />
          <InputFeild
            // refValueCurrent={refenterpassword}
            // onFocusBorderColor={true}
            textLabels={'Vehicle Color' + labels.staric}
            returnKeyType={'next'}
            paddingHorizontal={0}
            paddingHorizontalRight={22}
            placeholder={'Enter Vehicle Color'}
            leftIcon={Assets.colorVehicle}
            value={vehicleColor}
            onChange={e => setvehicleColor(e)}
          />

          <View style={[styling.marginTop]} />
          <InputFeild
            // refValueCurrent={refenterpassword}
            // onFocusBorderColor={true}
            textLabels={'License Plate Number' + labels.staric}
            returnKeyType={'next'}
            paddingHorizontal={0}
            paddingHorizontalRight={22}
            placeholder={'Enter License Plate Number'}
            leftIcon={Assets.licenseLine}
            value={licensePlateNumber}
            onChange={e => setlicensePlateNumber(e)}
          />

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
        </ScrollView>
      </View>
    </View>
  );
};

export default EditVehicles;
